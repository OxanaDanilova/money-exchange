// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // create object
    let coins = {

    }

if (currency===0){
    return {};
}    

if (currency>10000){
    return {error: 'You are rich, my friend! We don\'t have so much coins for exchange'};
} 

if (currency<0){
    return {};
}   

console.log(Math.trunc(currency/50));

if (Math.trunc(currency/50)>0) {
    coins.H=Math.trunc(currency/50);
    currency=currency-coins.H*50;
}

if (Math.trunc(currency/25)>0) {
   coins.Q=Math.trunc(currency/25);
    currency=currency-coins.Q*25;
}

if (Math.trunc(currency/10)>0) {
    coins.D=Math.trunc(currency/10);
    currency=currency-coins.D*10;
}
if (Math.trunc(currency/5)>0) {
    coins.N=Math.trunc(currency/5);
    currency=currency-coins.N*5;
}
if (currency!==0) {
    coins.P=currency;}

console.log(coins);

return coins;



}
