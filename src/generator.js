console.log('===================== generator =======================');

function* generator(n){
    var num1 =0;
    var num2 =1
    var sum ;
    yield num1;
    yield num2;

    for(var i=0;i<n-2;i++){
        sum = num1+num2;
        num1 =num2;
        num2 = sum;
        yield sum;
    }

}


let it = generator(5);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log('========================================');

function* generator2(n){
    var num1 =0;
    var num2 =1
    var sum=0;
    yield num1;
    yield num2;

    while(sum<n){
        
        yield sum;

        num1 =num2;
        num2 = sum;
        sum = num1+num2;
        
    }

}

it = generator2(10);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

