const socket = io();
let name;
let name2;

//------------------------------------------------------functions-------------------------------------------------------------------

function sendMessage (event) {
    event.preventDefault();
    const message = $("#message").val();
    $("#message").val("");
    $.post("/messages", { sender: name, message: message })
    .then(function (res) {
        socket.emit("new-message", { message: message , user1: name, user2: name2});
        getMessages();
    })
}

function startChat (event) {
    event.preventDefault();
    //empty chat area
    name2 = $("select").find(":selected").text();
}
function sendName (event) {
    event.preventDefault();
    name = $("#name").val().trim();
    socket.emit("new-name", {name:name});
}

function getMessages() {
    $(".chat-box").empty();
    $.get("/messages").then(function (res) {
        res.forEach(element => {
            $('.chat-box').append(
                $("<span>").attr("data-id", `${element._id}`).text(`${element.sender}: ${element.message}`),
                $("<br>")
            )
        })
    })
}
window.onload = function () {
    getMessages();
}

//------------------------------------------------------sockets----------------------------------------------------------------------
socket.on("emit-users", function(data){
    if(name){
        const $select = $("<select>");
        $select.append("<option>Select User</option>");
        data.forEach(element => $select.append(`<option>${element}</option>`));
        $("#select-container").empty();
        $("#select-container").append($select);
    }
})

socket.on("emit-message", function (data) {
    console.log(data);
})

//---------------------------------------------event listeners-------------------------------------------------------------------------

$("#send-msg").on("click", sendMessage);
$("#send-name").on("click", sendName);
$("#select-container").on("change", "select", startChat);