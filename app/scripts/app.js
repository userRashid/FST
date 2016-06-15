'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
      'oc.lazyLoad',
      'ui.router',
      'ui.bootstrap',
      'angular-loading-bar',
      'ngTagsInput'
      ,'jkuri.datepicker'
      ,'ngMaterial'
      ,'smart-table'
      ,'ngAnimate'
      ,'ui.bootstrap.datetimepicker'
      ,'daterangepicker'
      //,'ngCookies'
      //,'ngResource'
      //,'toggle-switch'
      //,'chart.js'
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home',{
        url:'/home',
        templateUrl: 'views/dashboard/main.html'
    }).state('home.content',{
        url:'/content',
        controller: 'contentCtrl',
        templateUrl:'views/content/content.html'
    }).state('home.coupon',{
        templateUrl:'views/coupon/coupon.html',
        url:'/coupon',
        controller:'couponCtrl'
    }).state('home.match',{
        templateUrl:'views/match/match.html',
        url:'/match',
        controller:'matchCtrl'
    }).state('home.partner',{
        templateUrl:'views/partner/partner.html',
        controller:'partnerCtrl',
        url:'/partner'
    }).state('home.question',{
        templateUrl:'views/question/question.html',
        url:'/question',
        controller : 'questionCtrl'
    }).state('home.quiz',{
        templateUrl:'views/quiz/quiz.html',
        controller: 'quizCtrl',
        url:'/quiz'
    }).state('home.tournament',{
        templateUrl:'views/tournament/tournament.html',
        controller: 'tournamentCtrl',
        url:'/tournament'
    })
  }]);

    
