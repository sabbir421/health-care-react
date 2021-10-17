import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";
const initiAuth=()=>{
    initializeApp(firebaseConfig);
}
export default initiAuth;