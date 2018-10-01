var app = angular.module("myApp", []);

app.controller("employeesCtrl", function($scope) {
  var contentfulClient = contentful.createClient({
    accessToken: '68a1ec190f43a8f09a7fd9f903248d3e43fa09c26ef9e6f56208433fb5d60439',
    space: 'z9qvmaz4vs0f'
  })
  $scope.employees = [];

  var PRODUCT_CONTENT_TYPE_ID = 'employee'

  contentfulClient.getEntries({
      content_type: PRODUCT_CONTENT_TYPE_ID
    })
    .then(function(employees) {
      $scope.$apply(function () {
        $scope.employees = employees.items;
      });
    });
});