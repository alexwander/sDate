var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;


var app = angular.module('fitness',
    [ 'fit', 'ngRoute','ngAnimate']
)


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'AuthCtrl',
          resolve: {
            user: function($rootScope, $firebase, $firebaseSimpleLogin){
              if(!$rootScope.userID){
                var ref = new Firebase('https://.com');
                var auth = $firebaseSimpleLogin(ref);
                return auth.$getCurrentUser()
              }else{
                return;
              }
            }

          }
        })

        .when('/signin', {
          templateUrl: 'views/home.html',
          controller: 'AuthCtrl',
          resolve: {
            user: function($rootScope, $firebase, $firebaseSimpleLogin){

              if(!$rootScope.userID){
                var ref = new Firebase('https://fitnesskdm.firebaseIO.com');
                var auth = $firebaseSimpleLogin(ref);
                return auth.$getCurrentUser()
              }else{
                return;
              }
            }

          }
        })

        .when('/signup', {
          templateUrl: 'views/home.html',
          controller: 'AuthCtrl',
          resolve: {
            user: function($rootScope, $firebase, $firebaseSimpleLogin){
              if(!$rootScope.userID){
                var ref = new Firebase('https://fitnesskdm.firebaseIO.com');
                var auth = $firebaseSimpleLogin(ref);
                return auth.$getCurrentUser()
              }else{
                return;
              }
            }

          }
        })
        .when('/reset/:temp', {
          templateUrl: 'views/reset.html',
          controller: 'AuthCtrl'
        })

        .when('/groups', {
          templateUrl: 'views/groups.html',
          controller: 'GroupsCtrl',
          resolve: {
            user: function($rootScope, $firebase, $firebaseSimpleLogin){
              if(!$rootScope.userID){
                $rootScope.loading = 1;
                var ref = new Firebase('https://fitnesskdm.firebaseIO.com');
                var auth = $firebaseSimpleLogin(ref);

                return auth.$getCurrentUser()
              }else{
                return;
              }
            }
/////////
          }
        })
        .when('/new-group',{
          templateUrl: 'views/new-group.html',
          controller: 'NewGroupCtrl',
          resolve: {
            user: function($rootScope, $firebase, $firebaseSimpleLogin){
              if(!$rootScope.userID){
                $rootScope.loading = 1;
                var ref = new Firebase('https://.com');
                var auth = $firebaseSimpleLogin(ref);
                return auth.$getCurrentUser()
              }else{
                return;
              }
            }

          }
        })

        .when('/:groupId/edit-group',{
          templateUrl: 'views/edit-group.html',
          controller:'EditGroupCtrl',
          resolve: {
            user: function($rootScope, $firebase, $firebaseSimpleLogin){
              if(!$rootScope.userID){
                $rootScope.loading = 1;
                var ref = new Firebase('https://.com');
                var auth = $firebaseSimpleLogin(ref);
                return auth.$getCurrentUser()
              }else{
                return;
              }
            }

          }
        })

    app.run(['$rootScope', '$route', '$timeout', 'FBURL',
      function($rootScope, $route, $timeout, FBURL){
        $rootScope.userID = null;
        var ref = new Firebase(FBURL);
        var auth = new FirebaseSimpleLogin(ref, function(error,user){
          if(user){
            $rootScope.userID = user.uid;
          }
        })
      } app.run(['$rootScope', '$route', '$timeout', 'FBURL',
        function($rootScope, $route, $timeout, FBURL){
          $rootScope.userID = null;
          var ref = new Firebase(FBURL);
          var auth = new FirebaseSimpleLogin(ref, function(error,user){
            if(user){
              $rootScope.userID = user.uid;
            }
          })
        }]) app.run(['$rootScope', '$route', '$timeout', 'FBURL',
        function($rootScope, $route, $timeout, FBURL){
          $rootScope.userID = null;
          var ref = new Firebase(FBURL);
          var auth = new FirebaseSimpleLogin(ref, function(error,user){
            if(user){
              $rootScope.userID = user.uid;
            }
          })
        }]) app.run(['$rootScope', '$route', '$timeout', 'FBURL',
        function($rootScope, $route, $timeout, FBURL){
          $rootScope.userID = null;
          var ref = new Firebase(FBURL);
          var auth = new FirebaseSimpleLogin(ref, function(error,user){
            if(user){
              $rootScope.userID = user.uid;
            }
          })
        }])

          .when('/:groupId/workout',{

            templateUrl: 'views/workout.html',
            controller: 'WorkoutCtrl',
            resolve: {
              templateUrl: 'views/workout.html',
              controller: 'WorkoutCtrl',
              resolve: {
          }
              user: function($rootScope, $firebase, $firebaseSimpleLogin){
                if(!$rootScope.userID){
                  $rootScope.loading = 1;
                  var ref = new Firebase('https://fitnesskdm.firebaseIO.com');
                  var auth = $firebaseSimpleLogin(ref);
                  return auth.$getCurrentUser()
                }else{
                  return;
                }
              }




      app.run(['$rootScope', '$route', '$timeout', 'FBURL',
        function($rootScope, $route, $timeout, FBURL){
          $rootScope.userID = null;
          var ref = new Firebase(FBURL);
          var auth = new FirebaseSimpleLogin(ref, function(error,user){
            if(user){
              $rootScope.userID = user.uid;
            }
          })
        }])















    app.controller( 'slideController', ['$rootScope', '$scope', '$location', '$route', function($rootScope, $scope, $location, $route) {
      $rootScope.slideView = function (direction, url) {
        $rootScope.slideDir = direction;
        $location.path(url);
      }
    }])

    app.controller( 'mainController',function($rootScope,$scope){
      $scope.clearDelete = function(){
        $rootScope.currentExercise = {};
        $rootScope.currentGroup = {};
      }
    })






