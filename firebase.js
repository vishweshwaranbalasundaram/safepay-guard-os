/* SafePay Guard OS - Firebase backend (real accounts + live shared database)
   Loaded via compat SDK in index.html. Requires (in the Firebase console):
   - Authentication -> Email/Password -> Enabled
   - Firestore Database -> created, with the security rules from FIREBASE_SETUP.md */

const firebaseConfig = {
  apiKey: "AIzaSyCBYmXPg4gh1Nj6GF3LxFQIBQE2LgBJi-0",
  authDomain: "safepay-guard.firebaseapp.com",
  projectId: "safepay-guard",
  storageBucket: "safepay-guard.firebasestorage.app",
  messagingSenderId: "230405982569",
  appId: "1:230405982569:web:b67dcefc891550287695f8"
};

let fbReady = false, auth = null, db = null;
try {
  if (window.firebase) {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    fbReady = true;
    console.log("[SafePay] Firebase connected.");
  }
} catch (e) { console.warn("[SafePay] Firebase init failed:", e); }

async function fbSignUp(email, password, profile) {
  const cred = await auth.createUserWithEmailAndPassword(email, password);
  await db.collection("users").doc(cred.user.uid).set({
    email: email,
    username: (profile && profile.username) || "",
    phone: (profile && profile.phone) || "",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  return cred.user;
}
async function fbSignIn(email, password) {
  const cred = await auth.signInWithEmailAndPassword(email, password);
  return cred.user;
}
function fbLogout() { return auth ? auth.signOut() : Promise.resolve(); }

async function fbReportScam(data) {
  await db.collection("reports").add({
    type: (data && data.type) || "unknown",
    risk: (data && data.risk) || 0,
    message: ((data && data.message) || "").slice(0, 500),
    city: (data && data.city) || "unknown",
    by: (auth && auth.currentUser) ? auth.currentUser.uid : "anon",
    ts: firebase.firestore.FieldValue.serverTimestamp()
  });
}
function fbListenReportCount(cb) { if (db) db.collection("reports").onSnapshot(s => cb(s.size)); }

window.SafePayBackend = {
  ready: () => fbReady,
  signUp: fbSignUp, signIn: fbSignIn, logout: fbLogout,
  reportScam: fbReportScam, listenReportCount: fbListenReportCount
};
