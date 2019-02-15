Challenge 1
function test65(a, b) 
{
  return ((a == 65 || b == 65) || (a + b == 65));
}
console.log(test65(65, 65))
console.log(test65(20, 65))
console.log(test65(20, 20))
console.log(test65(20, 30))

