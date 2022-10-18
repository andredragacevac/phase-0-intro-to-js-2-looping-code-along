// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names) {
    const messages = [];
    
      for  (let i=0; i< names.length; i++) {
    
      const message = (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
      messages.push(message);
      }
      return messages;
    }
    console.log(writeCards(['Guadalupe','Ollie','Aki']));

function countDown(){
    let countDown = 10;
    while (countDown>=0){
    console.log(countDown--);
    }
}
