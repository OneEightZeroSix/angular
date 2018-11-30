function headerCtrl(app) {
    app.controller("headerCtrl", ["$scope", function ($scope) {
        //code 控制器的逻辑
        // Model
        $scope.title = "微信"
    }])
}

export default headerCtrl;