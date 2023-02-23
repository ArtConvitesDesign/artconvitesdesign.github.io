import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getDocs, collection,updateDoc,doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEnVpiY6BEXXJx1vkzOBhTg-NLfRIoslA",
    authDomain: "artconvites-ea0df.firebaseapp.com",
    projectId: "artconvites-ea0df",
    storageBucket: "artconvites-ea0df.appspot.com",
    messagingSenderId: "272391705641",
    appId: "1:272391705641:web:02a3e2dcda8d2cbe6ab838",
    measurementId: "G-RTT5FPTPMJ"
  };

const app = initializeApp(firebaseConfig);
const idBd = 'Lq39VHKNmCeAlWIcv1f6';

const BuscarTodos = async () => 
{   
    const db = getFirestore(app);
    const q = collection(db, 'Convites');
    const docs = await getDocs(q);
    const res = docs.docs.map(doc => doc.data());
    return res[0].convites;
}  

const Adicionar = async (data) => {
    var array = await BuscarTodos();
    data.id = array.length + 1;
    const db = getFirestore(app);
    array.push(data);
    await updateDoc(doc(db,'Convites',idBd), {convites: array});
}

export {BuscarTodos,Adicionar};