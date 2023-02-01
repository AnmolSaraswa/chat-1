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
  
  
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";
  
  
  function addRoom(){
    v1=document.getElementById("room_name").value ;
    firebase.database().ref("/").child(v1).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }
  
  
  
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
      console.log("Room Name - "+Room_names); 
      rpw="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });
    });
  
  }
  
  getData();
  function redirectToRoomName(name){
  console.lo(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
  }
  function logout()
 {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}
  