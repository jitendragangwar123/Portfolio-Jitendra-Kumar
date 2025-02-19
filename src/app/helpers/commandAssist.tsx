import { commands } from "../data/command";

const commandSuggestion = (cmd: string) => {
  const temoCmd: string[] = [];
  commands.forEach((command) => {
    if (command.startsWith(cmd)) {
      temoCmd.push(command);
    }
  });

  return temoCmd;
};

export { commandSuggestion };
