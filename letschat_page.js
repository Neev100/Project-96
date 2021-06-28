//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD5eXycvWobKYNOYK_a39obs11qSnxi3cA",
      authDomain: "kwitter-15874.firebaseapp.com",
      databaseURL: "https://kwitter-15874-default-rtdb.firebaseio.com",
      projectId: "kwitter-15874",
      storageBucket: "kwitter-15874.appspot.com",
      messagingSenderId: "894001221615",
      appId: "1:894001221615:web:981058c890998e254df01a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message : msg,
            likes: 0
      });
      document.getElementById("msg").value = " ";
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "letschat.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
