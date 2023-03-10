import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebaseConfig";
import { getDatabase, onValue, ref, set } from "firebase/database";


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
let logoutUser = () => { };
let fbGet = () => { };
let fbGetById = () => { };
let fbEdit = () => { };
let fbDelete = () => { };

export {
    SignUpUser,
    loginUser,
    logoutUser,
    fbGet,
    fbGetById,
    fbEdit,
    fbDelete,
};
