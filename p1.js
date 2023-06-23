io.socket.on("connection", function(socket) {

  socket.on("newUser", function(name) {
    console.log(name + " 님이 접속하였습니다.");

    socket.name = name;

    io.socket.emit("update", {type:"connect", name:"SERVER", message:name + "님이 접속하였습니다."});
  
  })

  socket.on("message", function(data) {
    data.name = socket.name;
    console.log(data)
    socket.broadcast.emit("updata", data);
  })

  socket.on("disconnet", function() {
    console.log(socket.name + "님이 나가셨습니다.");

    socket.broadcast.emit("update", {type:"connect", name:"SERVER", message:socket.name + "님이 나가셨습니다."});
  })
})
