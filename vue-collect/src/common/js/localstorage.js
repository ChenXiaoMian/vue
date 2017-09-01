import store from 'store';

export function localLimit (item,callback){
    var temp = store.get(item) ? store.get(item) : '';
    if(temp && temp!=''){
        var len = JSON.parse(temp).data.length;
        if(len>=10){
            callback();
            return false;
        }else{
            return true;
        }
    }else{
        return true;
    }
}