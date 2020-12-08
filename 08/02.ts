import { getInstructions, getExecution } from "./utils";

function findAnswer(): number | null {
  const instructions = getInstructions();

  for (let i = 0; i < instructions.length; i++) {
    let originalCommand = instructions[i].command;

    if (originalCommand === "nop") {
      instructions[i].command = "jmp";
    } else if (originalCommand === "jmp") {
      instructions[i].command = "nop";
    }

    const execution = getExecution(instructions);

    if (!execution.loopDetected) {
      return execution.acc;
    }

    instructions[i].command = originalCommand;
  }

  return null;
}

console.log(findAnswer());
