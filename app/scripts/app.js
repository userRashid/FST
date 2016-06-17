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
    
    $urlRouterProvider.otherwise('/question');
    $stateProvider
    .state('question',{
        url:'/question',
        templateUrl: 'views/dashboard/main.html'
    }).state('question.add',{
        url:'/add',
        controller: 'addQuestionCtrl',
        templateUrl:'views/add-question/add-question.html'
    }).state('question.manage',{
        url:'/manage',
        controller: 'questionCtrl',
        templateUrl:'views/question/question.html'
    }).state('tournament',{
        url:'/tournament',
        templateUrl:'views/dashboard/main.html'
    }).state('tournament.add',{
        templateUrl:'views/add-tournament/add-tournament.html',
        controller: 'addTournamentCtrl',
        url:'/add'
    }).state('tournament.manage',{
         templateUrl:'views/tournament/tournament.html',
         controller: 'tournamentCtrl',
         url:'/manage'
    }).state('partner',{
        url:'/partner',
        templateUrl:'views/dashboard/main.html'
    }).state('partner.add',{
        templateUrl:'views/add-partner/add-partner.html',
        controller: 'addPartnerCtrl',
        url:'/add'
    }).state('partner.manage',{
         templateUrl:'views/partner/partner.html',
         controller: 'partnerCtrl',
         url:'/manage'
    }).state('coupon',{
        url:'/coupon',
        templateUrl:'views/dashboard/main.html'
    }).state('coupon.create',{
        templateUrl:'views/create-coupon/create-coupon.html',
        controller: 'createCouponCtrl',
        url:'/create'
    }).state('coupon.view',{
        templateUrl:'views/coupon/coupon.html',
        url:'/view',
        controller:'couponCtrl'
    }).state('match',{
        templateUrl:'views/dashboard/main.html',
        url:'/match'
    }).state('match.add',{
        templateUrl:'views/add-match/add-match.html',
        url:'/add',
        controller:'addMatchCtrl'
    }).state('match.manage',{
        templateUrl:'views/match/match.html',
        url:'/manage',
        controller:'matchCtrl'
    }).state('home.partner',{
        templateUrl:'views/partner/partner.html',
        controller:'partnerCtrl',
        url:'/partner'
    }).state('prediction',{
        templateUrl:'views/dashboard/main.html',
        url:'/prediction',
    }).state('prediction.add',{
        templateUrl:'views/add-prediction/add-prediction.html',
        controller: 'addPredictionCtrl',
        url:'/add'
    }).state('prediction.manage',{
        templateUrl:'views/prediction/prediction.html',
        controller: 'predictionCtrl',
        url:'/manage'
    })
}]);

    
