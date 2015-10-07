$(document).ready(function) {
  $.getJSON('../../apis/github/users/ericquayson.json', function (eq) {
    $('#name').html('<li> Name: ' + eq.name + '<li>');
    $('#login').html('<li> Login:' + eq.login + '<li>');
    $('#org').html('<li> Org: ' + eq.org + '<li>');
    $('#hometown').html('<li> Hometown: ' + eq.hometown + '<li>');
    $('#email').html('<li> Email: ' + eq.email + '<li>');
  });
};
