// function addition(x: number, y: number): number {
//     return x + y;
// }
// const result:number = addition(10, 20);
// console.log(result);

function damage(characterToDamage { life:number }, amount:number):number {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
const result = damage({ life: 100 }, 12);
console.log(result);    

// Ne modifiez que le typage TypeScript, ne touchez pas au code JavaScript !

function sayHello(target: { firstName: string, money: number }):string {
    return `Hello ${target.firstname}, you have ${target.money} on your bank account.`;
}
const message: string = sayHello({ firstname: 'World', money: 123 });