const socket = io();
let name;
let name2;
const sendMessage = function (event) {
    event.preventDefault();
    const message = $("#message").val();
    $("#message").val("");
    $.post("/messages", { message: message })
        .then(function (res) {
            socket.emit("new-message", { message: message , user1: name, user2: name2});
            getMessages();
        })
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

socket.on("emit-users", function(data){
    if(name){
        const $select = $("<select>");
        $select.append("<option>Select User</option>");
        console.log(data);
        // $("#name").val("");
        data.forEach(element => $select.append(`<option>${element}</option>`));
        $("#select-container").empty();
        $("#select-container").append($select);
    }
})

socket.on("emit-message", function (data) {
    console.log(data);
})

window.onload = function () {
    getMessages();
}
$("#send-msg").on("click", sendMessage);
$("#send-name").on("click", sendName);


function startChat (event) {
    event.preventDefault();
    //empty chat area
    name2 = $("select").find(":selected").text();
}
$("#select-container").on("change", "select", startChat);