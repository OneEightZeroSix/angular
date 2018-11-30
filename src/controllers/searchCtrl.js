
function searchCtrl(app){
    app.controller("searchCtrl", ["$scope", function ($scope) {
        // 双向数据绑定
        //code 控制器的逻辑
        // Model data
        $scope.bool = false
        // methods
        $scope.toggle = function () {
            $scope.bool = !$scope.bool
        }
    }])
}


export default searchCtrl