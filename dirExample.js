var app = angular.module("dirExample", []);

app.directive("dirExample", function(){
  return {
    restrict: "EA",
    scope: {
      one: "@",
      two: "=",
      three: "&"
    },
    controller: function($scope){
      
    }
    link: function(scope, elem, attrs){
      
    },
    transclude: true,
    templateUrl: "some/pathway.js"
  }
})
