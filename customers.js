var app = angular.module("myApp", []);

app.controller("customersCtrl", function($scope) {
  var contentfulClient = contentful.createClient({
    accessToken: '68a1ec190f43a8f09a7fd9f903248d3e43fa09c26ef9e6f56208433fb5d60439',
    space: 'z9qvmaz4vs0f'
  })
  $scope.customers = [];

  var PRODUCT_CONTENT_TYPE_ID = 'customer'

  contentfulClient.getEntries({
      content_type: PRODUCT_CONTENT_TYPE_ID
    })
    .then(function(customers) {
      $scope.$apply(function () {
        $scope.customers = customers.items;
      });
    });
});