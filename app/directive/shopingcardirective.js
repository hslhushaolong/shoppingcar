/**
 * Created by ������ on 2017/10/18.
 */
app.directive("shopCar",function(){
    return {
        restrict:"EA",
        templateUrl:"./app/view/template/shopcar.html",
        controller:"itemcontroller",
        scope:{
            item:"=item",
            index:"@index"
        },
        link:function(scope,ele,attr){

        }
    }
})