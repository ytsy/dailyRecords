export default {
    /*time以ms为单位*/
    setItem:(key,value,time)=>{
        let MS = time || 10*1000; //默认30s
        let initDay = new Date();
        let expires = initDay.getTime() + MS;
        localStorage.setItem(key,JSON.stringify({
            value,expires
        }))
    },
    getItem:(key,type)=>{
        let data = JSON.parse(localStorage.getItem(key));
        if(!data||data.expires< Date.now()){
            return null;//返回null时，store将是初始化的值，这时候session为null，显示无效的session，将跳转至登录页
        }else{
            if(type==="object"){
                return JSON.parse(data.value);
            }else{
                return data.value;
            }
        }
    },
    removeItem:(key)=>{
        localStorage.removeItem(key);
    }
}