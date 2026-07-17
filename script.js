import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getDatabase, ref, onValue } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyBtprb5fOBIYrI4mWQT_maIdNvYhXBh-rQ",
  authDomain: "ldr-essaie.firebaseapp.com",
  databaseURL: "https://ldr-essaie-default-rtdb.firebaseio.com",
  projectId: "ldr-essaie",
  storageBucket: "ldr-essaie.firebasestorage.app",
  messagingSenderId: "431410120335",
  appId: "1:431410120335:web:949597aae7bb84f09352fa"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const ldr = ref(database, "LDR");


onValue(ldr, (snapshot) => {

    let valeur = snapshot.val();

    document.getElementById("ldr").innerHTML = valeur;


    if (valeur < 1000) {
        document.getElementById("etat").innerHTML = "🌙 Obscurité";
    }

    else if (valeur < 3000) {
        document.getElementById("etat").innerHTML = "☀️ Lumière moyenne";
    }

    else {
        document.getElementById("etat").innerHTML = "🌞 Forte lumière";
    }

});