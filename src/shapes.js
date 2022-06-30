class Shape {
    constructor(w)
    {
        this.width = w;
    }

    toString(){
        console.log(`Area: ${this.area()} perimeter: ${this.perimeter()}`)
    }

    area(){
        return (this.width*this.width);
    }

    perimeter(){
        return (this.width*4);
    }

}


export class Rectangle extends Shape {

    constructor(w,h){
        super(w);
        this.height = h;
    }

    area(){
        return (this.width*this.height);
    }

    perimeter(){
        return (this.width*2)+(this.height*2);
    }
}

export class Square extends Shape {

    constructor(w){
        super(w);
    }

    
}

export class Circle extends Shape {

    constructor(r){
        super(r);
    }

    area(){
        return (Math.PI*this.width*this.width);
    }

    perimeter(){
        return (2*Math.PI*this.width);
    }
}