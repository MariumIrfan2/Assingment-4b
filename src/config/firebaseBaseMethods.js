import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebaseConfig";
import { getDatabase, onValue, ref, set, push } from "firebase/database";


const auth = getAuth(app);
const db = getDatabase(app);

let SignUpUser = (obj) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                obj.id = res.user.uid;
                const refrence = ref(db, `users/${obj.id}`)
                set(refrence, obj)
                    .then(() => {
                        resolve("Data send in database and user created successfully")
                    })
                    .catch((err) => {
                        reject(err.message)
                    });

            })
            .catch((err) => {
                reject(err.message)
            })
    });

}


let loginUser = (obj) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                const refrence = ref(db, `users/${res.user.uid}`);
                onValue(refrence, (data) => {
                    if (data.exists()) {
                        resolve(data.val())
                    } else {
                        reject("data Not Found")
                    }
                })
            }).catch((err) => {
                reject(err.message)
            })
    });
};

let postFBData = (nodeName, obj) => {
    return new Promise((resolve, reject) => {
        let keyRef = ref(db, `${nodeName}/`)
        obj.id = push(keyRef).key;

        let postRef = ref(db, `${nodeName}/${obj.id}`)
        set(postRef, obj)
            .then((res) => {
                resolve("data send successfully");
            })
            .catch((err) => {
                reject(err.message)
            });
    });
};

let getFbData = (nodeName, id) => { 
    let refrence = ref(db, `${nodeName}/`)
    onValue(refrence, (dt)=>{
        if(dt.exists){
            resolve()
        }
    })

};

let logoutUser = () => { };

let fbGetById = () => { };
let fbEdit = () => { };


export {
    SignUpUser,
    loginUser,
    logoutUser,
    postFBData,
    getFbData,
    fbGetById,
    fbEdit
};














