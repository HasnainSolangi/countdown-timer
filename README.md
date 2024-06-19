# Countdown Timer Tool

A simple command-line countdown timer tool built with Node.js using TypeScript.

## Usage

To use the countdown timer tool, run the following command:

```
npx cli-countdown-timer-tool
```

## Description

This tool prompts the user to enter a countdown duration in seconds and displays a live countdown in the console until the timer completes.

## Features

- Prompts user for countdown duration in seconds.
- Displays formatted time remaining in hours, minutes, and seconds.
- Uses `inquirer` for interactive command-line prompts.
- Utilizes `chalk` for colorized console output.

## Installation

This tool does not require installation. It can be run directly using npx.

## How to Use

1. Open your terminal.
2. Run the command `npx cli-countdown-timer-tool`.
3. Enter the desired countdown duration when prompted.
4. The countdown will start immediately and display in the console.
5. Once the countdown reaches zero, a completion message will be displayed.

## Example

```
$ npx cli-countdown-timer-tool

Welcome to CountDown Timer
Enter countdown duration in seconds: 60
01:00

Timer complete!
```

## Dependencies

- `inquirer`: For interactive command-line prompts.
- `chalk`: For styling console output with colors.


*Happy Coding*