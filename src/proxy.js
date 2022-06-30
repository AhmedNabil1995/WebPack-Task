export default function(){
    console.log('===================== Proxy =======================');


let obj = {
    name: "ahmed Nabil",
    address: 'Cairo,Egypt',
    age: 26
}

let handler = {

    get(target,prop){
        value = prop == 'name' ? target.name : prop == "address" ? target.address : prop == 'age' ? target.age : '';
        if(value==''){
            throw prop+ ' is not property';
        }

        return value;
    },

    set(target,prop,value){
        if(prop=='name' && typeof value =='string' && value.length>=7){
            target[prop] = value;
        }else
        if(prop=='address' && typeof value == 'string'){
            target[prop] = value;
        }else
        if(prop=='age' && typeof value == 'number' && value>24 && value<70){
            target[prop] = value;
        }else
        {
            throw 'error ';
        }
    }

}

let proxyObj = new Proxy(obj,handler);
proxyObj.name = 'sayed ali';
console.log(proxyObj.name);

proxyObj.age = 30;
console.log(proxyObj.age);

proxyObj.address = 'Alex';
console.log(proxyObj.address);

}