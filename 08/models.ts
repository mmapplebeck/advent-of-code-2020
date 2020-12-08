export type Command = "jmp" | "acc" | "nop";

export interface Instruction {
  command: Command;
  value: number;
}

export interface Execution {
  loopDetected: boolean;
  acc: number;
}
