#!/usr/bin/env node

// dependencies
import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.yellow("Welcome to CountDown Timer"));

// function to format time remaining
function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const hoursStr = hours ? `${hours.toString().padStart(2, '0')}h` : '';
  const minutesStr = minutes.toString().padStart(2, '0');
  const secondsStr = remainingSeconds.toString().padStart(2, '0');

  return `${hoursStr}${minutesStr}:${secondsStr}`;
}

// main function
async function main() {
  // prompt user for duration
  const { duration } = await inquirer.prompt<{ duration: string }>({
    type: 'input',
    name: 'duration',
    message: 'Enter countdown duration in seconds:',
    validate: (input: string) => {
      const seconds = parseInt(input);
      if (isNaN(seconds) || seconds <= 0) {
        return 'Please enter a positive number.';
      }
      return true;
    }
  });

  const countdownDuration = parseInt(duration);

  // countdown loop
  let remainingSeconds = countdownDuration;
  const intervalId = setInterval(() => {
    remainingSeconds--;

    console.clear();
    console.log(chalk.green(formatTime(remainingSeconds)));

    if (remainingSeconds === 0) {
      clearInterval(intervalId);
      console.log(chalk.bold(chalk.green('Timer complete!')));
    }
  }, 1000);
}

main().catch((error) => {
  console.error(error);
});
