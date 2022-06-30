export default function (){
    console.log('===================== Iterator =======================');

let emp = {
    id:1,
    name:'ahmed',
    country:'cairo',
    age:26
}


function iterable(){
    var i =-1;
    var keys = Object.keys(this);
    var that = this;
    return {
        next(){
            i++;
            if(i<keys.length){
                return {
                    value: [that[keys[i]],keys[i]],
                    done: false
                }
            }else{

                return {
                    value: undefined,
                    done: true
                }
            }
            
        }
    }
}
emp[Symbol.iterator] = iterable;

for (const value of emp) {
    console.log(value);
}
}