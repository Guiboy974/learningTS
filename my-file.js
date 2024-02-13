// function addition(x: number, y: number): number {
//     return x + y;
// }
// const result:number = addition(10, 20);
// console.log(result);
function damage(characterToDamage, _a, amount) {
    var number = _a.life;
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
var result = damage({ life: 100 }, 12);
console.log(result);
// Ne modifiez que le typage TypeScript, ne touchez pas au code JavaScript !
function sayHello(target) {
    return "Hello ".concat(target.firstname, ", you have ").concat(target.money, " on your bank account.");
}
var message = sayHello({ firstname: 'World', money: 123 });
