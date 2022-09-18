import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";

import { EnvState, envState } from "../infra/env";

export const firebaseConfig = {
  apiKey: "AIzaSyBLHTQdMT-V4KeXtsQA54-Lei_l3uoLrZo",
  authDomain: "fanaro-firebase-lab.firebaseapp.com",
  projectId: "fanaro-firebase-lab",
  storageBucket: "fanaro-firebase-lab.appspot.com",
  messagingSenderId: "1007473763258",
  appId: "1:1007473763258:web:0c6add6b423de53169f383",
  measurementId: "G-Q5MSJZNXBW",
};

let authInitialized = false;
export const initAuth = () => {
  try {
    if (!authInitialized) {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

      if (envState === EnvState.dev)
        connectAuthEmulator(auth, "http://localhost:9094", {
          disableWarnings: true,
        });
    }

    authInitialized = true;
  } catch (error) {
    authInitialized = false;
  }
};
