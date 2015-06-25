'use strict';

/* Controllers */

angular.module('Application1.controllers', [])
    .controller('SlideOutCtrl', ['$scope', '$location', 'navigationItems', 'currentViewInfo', 'menu', function ($scope, $location, navigationItems, currentViewInfo, menu) {
        var that = this;

        that.navigationItems = navigationItems;

        that.itemSelected = function (e) {
            $location.path(e.addedItems[0].uri);
        };

        that.itemClick = function () {
            menu.setVisibility(false);
        };

        $scope.$watch(currentViewInfo.getSelectedIndex, function (selectedIndex) {
            that.selectedIndex = selectedIndex;
        });

        $scope.$watch(menu.getVisibility, function (menuVisible) {
            that.menuVisible = menuVisible;
        });
        $scope.$watch(function () {
            return that.menuVisible;
        }, function (menuVisible) {
            menu.setVisibility(menuVisible);
        });
    }])
    .controller('ToolbarCtrl', ['$scope', 'currentViewInfo', 'menu', function ($scope, currentViewInfo, menu) {
        var that = this;

        that.title = currentViewInfo.getTitle();
        $scope.$watch(currentViewInfo.getTitle, function (title) {
            that.title = title;
        });

        that.toggleMenu = menu.toggle;
    }])
    .controller('HomeCtrl', function () {
    })
    .controller('DenverCtrl', function () {
    })
.controller('BoulderCtrl', function () {
})
.controller('EstesCtrl', function () {
})
.controller('RockyCtrl', function () {
})


.controller('denverdatactrl', function ($scope, denverservice) {

    $scope.denver = denverservice.getDenver();

    $scope.plusOne = function (index) {
        $scope.denver[index].likes += 1;
    };
    $scope.minusOne = function (index) {
        $scope.denver[index].dislikes += 1;
    };
})

    .controller('imageshow', function($scope) {
        $scope.denverimage = false;

    })


;



