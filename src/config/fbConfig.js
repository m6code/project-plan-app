import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBFdNnDPrb8GbpaxHt_0cW6dd7_ow0gkxo",
    authDomain: "project-planner-reactjs.firebaseapp.com",
    databaseURL: "https://project-planner-reactjs.firebaseio.com",
    projectId: "project-planner-reactjs",
    storageBucket: "project-planner-reactjs.appspot.com",
    messagingSenderId: "485893737253",
    appId: "1:485893737253:web:8692234defbcf78fd7a8cc",
    measurementId: "G-54HFYSH7DJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
