const { taskOne, taskTwo } = require("./tarea");

async function main() {
  try{
    console.time("midiendo el tiempo de espera");
    const value1 = await taskOne();
    const value2 = await taskTwo();
    console.timeEnd("midiendo el tiempo de espera");
  
    console.log(`the values the task one is ${value1}`);
    console.log(`the values the task two is ${value2}`);
  }catch(e){
     throw new Error(e);
  }
}

main();