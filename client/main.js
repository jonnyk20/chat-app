var socket = io();

$('form').on('submit', function(e) {
  var text = $('#message').val();
  socket.emit('message', text);
  $('#message').val('');
  e.preventDefault();
  return false;
});

socket.on('message', function(msg) {
  if (!msg) {
    return;
  }
  $('#history').append([
    $('<p>', { class: 'message' }).text(msg),
    $('<div>', { class: 'clear' })
  ]);
  $('#history').scrollTop($('#history')[0].scrollHeight);
});
