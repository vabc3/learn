function ClassA(count)
{
    this.co=count;
     this.increment= function() {
            this.co++;
        };
        
        this.get= function() {
            return this.co;
        };
}

ClassA.prototype={cow:1};

function Counter(start) {
    var count = start;
    var s1=new ClassA(count);  
    console.log("inner:",s1.cow);
    return s1;
}

var foo = Counter(4);
foo.increment();
console.log(foo.get()); // 5
var bar = Counter(29);
bar.increment();
console.log(bar.get());
console.log(foo.get());