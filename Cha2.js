Challenge 2
function testNum( a, b, c) {
    if ( a >= b && a >= c){
        return a;
    } else if ( b >= a && b >= c){
        return b;
    
    } else return c;
}
console.log(testNum( 7, 8, 5))
