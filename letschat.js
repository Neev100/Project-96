function addUser() {
    user_name_input = document.getElementById("user_name_input").value;
    localStorage.setItem("user_name", user_name_input);
    window.location = "letschat_room.html";
}