
class cylinder{
    constructor(radius,height){
        this.pi = 3.14
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        this.radius1 = this.radius* this.radius;
        this.eqt = Math.PI*this.radius1*this.height;
        console.log(`The volume of Cylinder for ${this.radius} radius and ${this.height} height : `,this.eqt.toFixed(4));
    }
}

class cone{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        this.radius1 = this.radius*this.radius;
        this.eqt = Math.PI*this.radius1*this.height/3
        console.log(`The volume of Cone for ${this.radius} radius and ${this.height} height : `,this.eqt.toFixed(4));
    }
}

class sphere{
    constructor(radius){
        this.radius = radius;
        

    }
    getVolume(){
        this.radius1 = this.radius*this.radius*this.radius;
        this.eqt = (4/3)*Math.PI*this.radius1
        console.log(`The volume of Sphere for ${this.radius} radius is : `,this.eqt.toFixed(4))
}}


let obj1 = new sphere(8)
let obj2 = new cylinder(10,20)
let obj3 = new cone(20,30)

obj1.getVolume()
obj2.getVolume()
obj3.getVolume()