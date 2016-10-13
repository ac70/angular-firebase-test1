// Initialize Firebase

var config = {
  apiKey: "AIzaSyCve-9etwC6r1CKn6MVcelSHAjxRUP81aI",
  authDomain: "ng-fb-test1.firebaseapp.com",
  databaseURL: "https://ng-fb-test1.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "239760577823"
};

firebase.initializeApp(config);

// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebaseObject) {

  var daysDB = firebase.database().ref('days');

  // sync as object
  var syncObject = $firebaseObject(daysDB);

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
