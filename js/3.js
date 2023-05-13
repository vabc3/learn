var N1 = {
    nation: 'cdn1'
};


function objec(o) {
    function F() { }
    F.prototype = o;
    return new F();
}


var Student = objec(N1);
Student.career = 'student';

// console.log(Student instanceof N1.);

