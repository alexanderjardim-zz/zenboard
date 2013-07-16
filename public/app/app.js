'use strict'

angular.module('zenboard', ['zenboard.filters', 'zenboard.services', 'zenboard.directives', 'zenboard.controllers']).
    config(['$routeProvider', function($routerProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/ticketByTimeAndGroup.html', controller: 'TicketByTimeAndGroupCtrl'})
        $routeProvider.otherwise([redirectTo: '/'])
    }])
