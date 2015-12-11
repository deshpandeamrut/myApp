angular.module('starter.services', [])

.factory('Chats', function() {
    
  // Might use a resource here that returns a JSON array

  // Some fake testing data
//  var chats = [{
//    id: 0,
//    name: 'Ben Sparrow',
//    lastText: 'You on your way?',
//    face: 'img/ben.png'
//  }, {
//    id: 1,
//    name: 'Max Lynx',
//    lastText: 'Hey, it\'s me',
//    face: 'img/max.png'
//  }, {
//    id: 2,
//    name: 'Adam Bradleyson',
//    lastText: 'I should buy a boat',
//    face: 'img/adam.jpg'
//  }, {
//    id: 3,
//    name: 'Perry Governor',
//    lastText: 'Look at my mukluks!',
//    face: 'img/perry.png'
//  }, {
//    id: 4,
//    name: 'Mike Harrington',
//    lastText: 'This is wicked good ice cream.',
//    face: 'img/mike.png'
//  }];
//
//  return {
//    all: function() {
//      return chats;
//    },
//    remove: function(chat) {
//      chats.splice(chats.indexOf(chat), 1);
//    },
//    get: function(chatId) {
//      for (var i = 0; i < chats.length; i++) {
//        if (chats[i].id === parseInt(chatId)) {
//          return chats[i];
//        }
//      }
//      return null;
//    }
//  };
})
  .service('myService',function($http,$q){
  console.log("serv");
              var url ="http://nammabagalkot.in/Angular/process.php";
    return {
        'getTodos': function () {
            var defer = $q.defer();
             $http.post(url, {'action':'get'},{headers: {
            'Content-Type': 'application/x-www-form-urlencoded'}}).success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                console.log(err);
            defer.reject(err);
            });
            return defer.promise;
        },
        'addTodo': function (todo) {
            var defer = $q.defer();
             $http.post(url, {'action':'add','mydata':todo},{headers: {
            'Content-Type': 'application/x-www-form-urlencoded'}}).success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                defer.reject(err);
            });
            return defer.promise;
        },
        'removeTodo': function (todo) {
            var defer = $q.defer();
            $http.post(url,{'action':'delete','mydata':todo.id},{headers: {
            'Content-Type': 'application/x-www-form-urlencoded'}}).success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                defer.reject(err);
            });
            return defer.promise;
        },
        'markTodo': function (todo) {
            var defer = $q.defer();
            $http.post(url,{'action':'markdone','mydata':todo},{headers: {
            'Content-Type': 'application/x-www-form-urlencoded'}}).success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                defer.reject(err);
            });
            return defer.promise;
        }
    }



})
