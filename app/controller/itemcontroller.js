/**
 * Created by ������ on 2017/10/18.
 */
app.controller("itemcontroller",["$scope","baseServer",function($scope,baseServer){
        baseServer.ajax("get",'./content/data/data.json').then(function(val){
                console.log(val)
        })
        //$scope.checkt=function(){
        $scope.$emit("content","55555");
        $scope.itemchecked=function(index){
                $scope.$emit("itemchecked",index)
        }
        $scope.deleteArry=function(index){
                $scope.$emit("deleteArry",index)
        }
        $scope.dianji=function(val){
               if(val==='+'){
                       console.log( $scope.item.num)
                       $scope.item.num+=1;
               }else{
                       if($scope.item.num<=1){
                               return;
                       }
                       $scope.item.num-=1
               }
                $scope.$emit("dianji")
        }
        //}
}])