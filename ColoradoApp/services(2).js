'use strict';

/* Services */

angular.module('Application1.services', [])
    
    .value('navigationItems', [
        {
            title: 'Home',
            text: 'Home',
            uri: '/home'
        },
        {
            title: 'Denver',
            text: 'Denver',
            uri: '/denver'
        },
         {
             title: 'Boulder',
             text: 'Boulder',
             uri: '/boulder'
         },
          {
              title: 'Estes Park',
              text: 'Estes Park',
              uri: '/estespark'
          },
           {
               title: 'Rocky Mountain',
               text: 'Rocky Mountain',
               uri: '/rockymountain'
           },

    ])
    .factory('currentViewInfo', ['$rootScope', 'navigationItems', function ($rootScope, navigationItems) {
        var selectedIndex,
            viewTitle;

        $rootScope.$on('$routeChangeStart', function (event, nextLoc, currentLoc) {
            if (nextLoc.$$route) {
                selectedIndex = $.inArray(nextLoc.$$route.originalPath, $.map(navigationItems, function (item) {
                    return item.uri;
                }));
                if (selectedIndex > -1) {
                    viewTitle = navigationItems[selectedIndex].title;
                } else {
                    viewTitle = undefined;
                }
            }
        });

        return {
            getSelectedIndex: function () {
                return selectedIndex;
            },
            getTitle: function () {
                return viewTitle;
            }
        }
    }])
    .factory('menu', function () {
        var isVisible = false;

        return {
            getVisibility: function () {
                return isVisible;
            },
            setVisibility: function (value) {
                isVisible = value;
            },
            toggle: function () {
                isVisible = !isVisible;
            }
        }
    }
    )
    .service('denverservice', function(){
        return {
            getDenver: function () {
                var denver = [
                    {
                        title: 'Denver Downtown',
                        about: 'You do not want to miss the 16th Street Mall! Enjoy your free mall ride and  numerous restaurants and pubs. ',
                        imageurl: 'images/mall.jpg',
                        likes: 0,
                        dislikes: 0
                    },

                    {
                        title: 'Colorado State Capitol',
                        about: 'Do you want to stand a mile high above sea level and enjoy the scenic view of colorado mountains? Then the steps of this dome is a place for you!',
                        imageurl: 'images/dome.jpg',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        title: 'Cherry Creek Shopping District',
                        about: 'With more than 500 department stores, boutiques, galleries, spas and with the largest concentration of stores between St.Louis and San Francisco, a perfect place for you all shopoholics!',
                        imageurl: 'images/cherry.jpg',
                        likes: 0,
                        dislikes: 0
                    }


                ];
                return denver;
            }
        }
    })

    

    