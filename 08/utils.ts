import { INPUT } from "./consts";
import { Command, Instruction, Execution } from "./models";

export function getInstructions(): Instruction[] {
  return INPUT.split("\n")
    .map((instruction: string) => instruction.split(" "))
    .map(
      ([command, value]: [Command, string]): Instruction => ({
        command,
        value: parseInt(value, 10),
      })
    );
}

export function getExecution(instructions: Instruction[]): Execution {
  const visited: Set<number> = new Set();
  let loopDetected = false;
  let acc = 0;
  let i = 0;

  while (instructions[i]) {
    let next;
    const instruction = instructions[i];
    const command = instruction.command;

    visited.add(i);

    if (command === "nop" || command === "acc") {
      if (command === "acc") {
        acc += instruction.value;
      }
      next = i + 1;
    } else if ((instructions[i].command = "jmp")) {
      next = i + instruction.value;
    }

    if (instructions[next] && visited.has(next)) {
      loopDetected = true;
      break;
    }

    i = next;
  }

  return {
    loopDetected,
    acc,
  };
}
