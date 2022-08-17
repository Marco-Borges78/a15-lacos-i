//Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

//entrada
//const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

//saída
//"1 - Rússia"
//"2 - Canadá"
//"3 - China"
//"4 - EUA"
//"5 - Brasil"

const menosPopulosos =["1° Roraima", "2° Amapá", "3° Acre", "4° Tocantins", "5° Rondônia"];
console.log('Os 5 estados menos populosos são:');

for(let i=0;i<menosPopulosos.length;i++){
    console.log(menosPopulosos[i]);
}
    
 