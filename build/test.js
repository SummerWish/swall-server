(function() {
  var socket;

  socket = io.connect('http://127.0.0.1:3000/');

  $('#test1').click(function() {
    return socket.emit('/subscribe', {
      id: '1'
    });
  });

  $('#test2').click(function() {
    return socket.emit('/unsubscribe', {
      id: '1'
    });
  });

  socket.on('comment', function(data) {
    return console.log(data, data['time'], data['ip'], data['us'], data['msg']);
  });

}).call(this);
