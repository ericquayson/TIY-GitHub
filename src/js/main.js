//Profile information
/*
$(document).ready(function) {
  $.getJSON('../../apis/github/users/ericquayson.json', function (eq) {
    $('#name').html('<li> Name: ' + eq.name + '<li>');
    $('#login').html('<li> Login:' + eq.login + '<li>');
    $('#org').html('<li> Org: ' + eq.org + '<li>');
    $('#hometown').html('<li> Hometown: ' + eq.hometown + '<li>');
    $('#email').html('<li> Email: ' + eq.email + '<li>');
  });
};

*/

;(function () {
  angular.module('TIY-Github', [])
// Grabbing profile data from the ericquayson.json
  .run(function($http, $rootScope) {
    $http.get('/apis/github/users/ericquayson.json')
    .then(function(response) {
    /* Baby steps young grasshopper
      $rootScope.avatar_url = response.data.avatar_url;
      $rootScope.name = response.data.name;
      $rootScope.login = response.data.login;
      $rootScope.company = response.data.company;
      $rootScope.location = response.data.location;
      $rootScope.email = response.data.email;
      $rootScope.blog = response.data.blog;
      $rootScope.created_at = response.data.created_at;
      $rootScope.followers = response.data.followers;
      $rootScope.starred = response.data.starred;
      $rootScope.following = response.data.following;
    */
      $rootScope.eric = response.data;
    })
  });
})();

/*
Attempting to retrive my repos
;(function () {
  angular.module('TIY-Github', [])
    .run(function($http, $rootScope) {
      $http.get('/apis/github/users/ericquayson/respositories.json')
        .then(function(response) {
          $rootScope.repos_url = response.data.repos_url;
        })
    });

})();
*/
