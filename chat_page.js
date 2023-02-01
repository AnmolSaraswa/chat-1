//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDzN4V-yMC8s3GsN6nJzZqnEzYbW_xZrno",
    authDomain: "chat-project-bcd72.firebaseapp.com",
    projectId: "chat-project-bcd72",
    storageBucket: "chat-project-bcd72.appspot.com",
    messagingSenderId: "222249797747",
    appId: "1:222249797747:web:37a4c74fca58b261f98206",
    measurementId: "G-S46XJ0ZTFF"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
     name:user_name,
     message : msg,
     like:0    
    });
    document.getElementById("msg").value="";



  }
function getData()
{
     firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();