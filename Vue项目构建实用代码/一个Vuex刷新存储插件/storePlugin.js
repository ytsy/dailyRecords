import ls from "./localStore";

function copy(obj){
    //新建一个对象，这个对象以Obj的原型为新对象的原型
    let copy = Object.create(Object.getPrototypeOf(obj));
    let propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function(key){
        let desc = Object.getOwnPropertyDescriptor(obj,key);//获取对象自身的描述
        Object.defineProperty(copy,key,desc);
    });
    return copy;
}

export default store =>{
    const savedState = ls.getItem('vuex');
    if(savedState){
        store.replaceState(savedState);//替换根state
    }
    store.subscribe( (mutation,state) =>{
        let storeClone = copy(state);

        ls.setItem('vuex', storeClone);
    })
};