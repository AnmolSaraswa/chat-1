
// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDzN4V-yMC8s3GsN6nJzZqnEzYbW_xZrno",
    authDomain: "chat-project-bcd72.firebaseapp.com",
    projectId: "chat-project-bcd72",
    storageBucket: "chat-project-bcd72.appspot.com",
    messagingSenderId: "222249797747",
    appId: "1:222249797747:web:37a4c74fca58b261f98206",
    measurementId: "G-S46XJ0ZTFF"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}


