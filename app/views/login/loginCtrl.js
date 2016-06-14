angular.module('sbAdminApp').controller('Login', function ($scope,Navigation,Authenticate,API,$state,$q,Session) {
    $scope.Login = function(data){
        Authenticate.doLogin('',9,'Rashid');
    };
    $scope.Navigation = Navigation;
    $scope.Authenticate = Authenticate;
});
