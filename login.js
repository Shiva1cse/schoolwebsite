var app=angular.module('myapp', [])
var names;
    app.controller('mycontroller', function($scope,$http,$window) {
      $scope.names;
      $http.get("http://sonutech.comuv.com/login.php")
       .then(function (response) {
         names=response.data;
         obj =angular.fromJson(names);
       });
        this.register = function($http) {
          for(var i=0;i<obj.result.length;i++)
           if(this.user.username==obj.result[0].username&&this.user.password==obj.result[0].password)
           $window.open('open.html', '_self');
           else {
             console.log("wrong details");
           }
        };
    });
     app.controller("signupcontroller", function($scope, $http){

          this.insertData = function(){
            console.log("sdd");
            console.log(this.user.email)
              console.log(this.user.firstname)
                console.log(this.user.lastname)
                  console.log(this.user.password)
                    console.log(this.user.phonenumber)
               $http.post(
                    "http://sonutech.comuv.com/schoolsignup.php?email="+this.user.email+"&firstname="+this.user.firstname+"&lastname="+this.user.lastname+"&password="+this.user.password+"&phone="+this.user.phonenumber
               ).success(function(data){
                    alert(data);
                    $scope.email=null;
                    $scope.firstname = null;
                    $scope.lastname = null;
                    $scope.password=null;
                    $scope.phonenumber=null;
               });
          }
     });
