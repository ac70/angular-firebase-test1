// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9XOwSr3ypajvZxk1fadpxlZFuJVOBNMw",
  authDomain: "ng-fb-tutorial.firebaseapp.com",
  databaseURL: "https://ng-fb-tutorial.firebaseio.com",
  storageBucket: "ng-fb-tutorial.appspot.com",
  messagingSenderId: "767622510603"
};

firebase.initializeApp(config);

// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebaseObject) {

  // connect to firebase
  // var ref = new Firebase("https://ng-fb-tutorial.firebaseio.com/days");
  // Initialize Firebase


  var daysDB = firebase.database().ref('days');

  // var fb = $firebase(ref);

  // sync as object
  // var syncObject = fb.$asObject();
  var syncObject = $firebaseObject(daysDB);
  // $scope.days = $firebaseObject(fb);

  // three way data binding
  syncObject.$bindTo($scope, 'days');

  // function to set the default data

  $scope.reset = function() {
  // WRITING TO FIREBASE DB
    daysDB.set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      }

    });

  };

});
