//Profile information

$(document).ready(function) {
  $.getJSON('../../apis/github/users/ericquayson.json', function (eq) {
    $('#name').html('<li> Name: ' + eq.name + '<li>');
    $('#login').html('<li> Login:' + eq.login + '<li>');
    $('#org').html('<li> Org: ' + eq.org + '<li>');
    $('#hometown').html('<li> Hometown: ' + eq.hometown + '<li>');
    $('#email').html('<li> Email: ' + eq.email + '<li>');
  });
};


//Repos
$(document).ready(function) {
  $.getJSON('../../apis/github/users/ericquayson.json', function (eqq) {
    $('#contributions').html('<div> contributions ' + eqq.contributions + '<div>');
    $('#repos').html('<div> repositories ' + eqq.repositories + '<div>');
    $('#public').html('<div> public_activity ' + eqq.public_activity + '<div>');
  });
};
