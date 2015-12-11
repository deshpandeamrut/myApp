angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http,myService) {
            $scope.todos = [{}];
    myService.getTodos().then(function (data) {
        console.log(data);
        if (data.length == 0) {
            console.log(data);
            $scope.todos = data;
            return;
        }
        data.forEach(function (entry) {
//                    console.log(entry);
            if (entry.checked == "false") {
                entry.checked = false;
            } else {
                entry.checked = true;
            }
            console.log(data);
            $scope.todos = data;
        });

    });
    $scope.search = {
            'newtodotext':''
        };
    $scope.addTodo = function () {
        var id = 0;
        $scope.todos.forEach(function (entry) {
            if (entry.id > id) {
                id = entry.id;
            }
        })
        id = id + 1;
        
        var time = new Date().toDateString();
        var todonew = {
            'id': id,
            'title': $scope.search.newtodotext,
            'checked': false,
            'time': time
        };
        $scope.todos.push(todonew);
        $scope.todos.sort(function (a, b) {
            if (b.id < a.id) {
                return -1;
            }
            else if (a.id < b.id) {
                return 1;
            }
            else {
                return equal;
            }
        })
        $scope.search.newtodotext = "";
        myService.addTodo(todonew).then(function (data) {
            console.log(data);
        });
    }
    $scope.markDone = function (todo) {
        myService.markTodo(todo).then(function (data) {

        });

    };
    $scope.removeTodo = function (todo) {
        myService.removeTodo(todo).then(function (data) {
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
//      $scope.todos = $scope.todos.sort();
        });
    }
    $scope.editTodo = function (todo) {
        $scope.newtodotext = todo.title;
    }
            $scope.doRefresh = function(){
        myService.getTodos().then(function (data) {
        console.log(data);
        if (data.length == 0) {
            console.log(data);
            $scope.todos = data;
            return;
        }
        data.forEach(function (entry) {
//                    console.log(entry);
            if (entry.checked == "false") {
                entry.checked = false;
            } else {
                entry.checked = true;
            }
            console.log(data);
            $scope.todos = data;
        });
        $scope.$broadcast('scroll.refreshComplete');
//        $scope.$apply();
    });
    
    }
    $scope.onHold = function(){
        alert("long");
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
