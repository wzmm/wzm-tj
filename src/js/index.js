/**
 * Created by Administrator on 2017/4/25.
 */
var app = angular.module("app",['ui.router'])
app.directive("myFile",function() {
    return {
        restrict: "E",
        template: '<div class="bigimg"><input type="file" id = "{{FileId}}" class = "inp">'
        + '<label class="imgs" for = "{{FileId}}">'
        + '</label></div>',
        scope: {},
        controller: function ($scope) {
            $scope.FileId = $scope.$id
        },
        link: function (scope, ele, attr) {
            var label = ele.find("label")
            var input = ele.find("input")
            input.on("change",function(){
                var reader = new FileReader()
                reader.readAsDataURL(this.files[0])
                reader.onload = function () {
                    label[0].style.background = "url("+this.result+") no-repeat center center"
                }
            })

        }
    }


})


app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("child1")
    $stateProvider
        .state({
            name:"child1",
            url:"/child1",
            templateUrl:"pages/child1.html"
        })
        .state({
            name:"child2",
            url:"/child2",
            templateUrl:"pages/child2.html"
        })
        .state({
            name:"child3",
            url:"/child3",
            templateUrl:"pages/child3.html"
        })
        .state({
            name:"child22",
            url:"/child22",
            templateUrl:"pages/child22.html"
        })

})