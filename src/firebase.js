// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqLc3JlsS4OV9_9PGwzba4mXisss4G-QE",
  authDomain: "acarb-site.firebaseapp.com",
  projectId: "acarb-site",
  storageBucket: "acarb-site.appspot.com",
  messagingSenderId: "798318652622",
  appId: "1:798318652622:web:b9a39a31d282fc59a3b49f",
  measurementId: "G-E1WPD7FH61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

export const FirebaseVue = {
  install: Vue => {
    Vue.prototype.$analytics = this.analytics()
  },

  analytics: getAnalytics(app),
}