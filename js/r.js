function Animal(id)
{   
    this.id=Animal.prototype.idn++;
    //Animal.prototype.idn=Animal.prototype.idn+1;
    this.species = "动物";
}

function Cat(name,color){
//　　　　Animal.apply(this, arguments);
　　　　this.name = name;
　　　　this.color = color;
} 

Animal.prototype.idn=30;
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("大毛","黄色");

console.log(cat2.species);
console.log(cat1.id);
console.log(cat2.id);
console.log(cat1.id===cat2.id);



