$(document).ready(function() {

    var socket = io.connect('wss://' + "210.18.140.117" + ':' + "5002" + '/test');
    var received = [];

    var count = [];
    socket.on('message', function(msg) {
        console.log("msg received" + msg.test);

        if (received.length >= 10) {
            received.shift()
        }
        received.push(msg.test);
        str = '';
        for (var i = 0; i < received.length; i++) {
            str = str + '<p>' + received[i].toString() + '</p>';
            count = i;
        }
        $('#log').html(i);
    });

});
