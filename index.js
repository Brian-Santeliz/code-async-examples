const { taskOne, taskTwo } = require("./tarea");

async function main() {
  try {
    console.time("midiendo el tiempo de espera");
    const results = await Promise.all([taskOne(), taskTwo()]);
    console.timeEnd("midiendo el tiempo de espera");

    console.log(`the values the task one is  ${[results[0]]}`);
    console.log(`the val ues the task two is ${[results[1]]}`);
  } catch (e) {
    throw new Error(e);
  }
}

main();
