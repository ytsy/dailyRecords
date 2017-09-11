/*一个去重的解决方案，基于ES5*/
var arr1 = [1,2,2,2,2,3,4,5,5,6,6,7];
var arr2 = [];
searchRepeat(arr1);
//数组查重，返回    //****重复元素***//
function searchRepeat(arr1){
    //obj存放元素重复信息，即每一个元素共在数组中出现过几次，
    //该元素的值为对象的key，key的值为该值在数组中出现的次数
    var obj = {};
    for(var i=0;i<arr1.length;i++){
        if(obj[arr1[i]]){
            obj[arr1[i]]++;
            if(obj[arr1[i]]===2){
                arr2.push(arr1[i]);
            }
        }else{
            obj[arr1[i]] = 1;
        }
    }
    console.log(obj);
    //arr2里面保存的是重复的元素
    console.log(arr2);
    //如果想要返回不重复的元素，你可以通过Object.keys(obj)来获取
}