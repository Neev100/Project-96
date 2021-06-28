
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML = "Welcome - " + user_name + "!";
console.log(user_name);

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "letschat_page.html";
}
function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "letschat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log(Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id);' >#"+Room_names+"</div> <hr>"
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "letschat_page.html";

}
