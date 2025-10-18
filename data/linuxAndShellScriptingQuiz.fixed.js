export const linuxAndShellScriptingQuiz = {
  title: "Linux & Shell Scripting Quiz",
  questions: {
    beginner: [
      { question: "Which command lists files in the current directory?", options: ["ls", "dir", "list", "show"], answer: "ls" },
      { question: "Which command changes the current directory?", options: ["cd", "chgdir", "mvdir", "c"], answer: "cd" },
      { question: "What does the 'pwd' command do?", options: ["Prints the working directory", "Lists files", "Changes password", "Creates directory"], answer: "Prints the working directory" },
      { question: "Which command creates a new directory?", options: ["mkdir", "newdir", "makedir", "crdir"], answer: "mkdir" },
      { question: "Which command removes files?", options: ["rm", "del", "erase", "remove"], answer: "rm" },
      { question: "How to view a text file in terminal?", options: ["cat", "open", "view", "display"], answer: "cat" },
      { question: "What is a shell?", options: ["Command-line interpreter", "Kernel", "GUI", "Hardware"], answer: "Command-line interpreter" },
      { question: "What is the shebang line?", options: ["#!/bin/bash", "#!/bin/sh", "//bin/bash", "#bash"], answer: "#!/bin/bash" },
      { question: "How to create a variable in bash?", options: ["name=value", "var name=value", "let name=value", "set name=value"], answer: "name=value" },
      { question: "What is Linux?", options: ["Open-source OS", "Programming language", "Database", "Web server"], answer: "Open-source OS" }
    ],
    intermediate: [
      { question: "What does '>' vs '>>' do?", options: ["> overwrites, >> appends", "> appends, >> overwrites", "Both overwrite", "Both append"], answer: "> overwrites, >> appends" },
      { question: "What does a pipe '|' do?", options: ["Connects output to input", "Runs two commands at once", "Compares files", "Creates directory"], answer: "Connects output to input" },
      { question: "What does 'grep' do?", options: ["Searches for patterns", "Sorts files", "Counts lines", "Replaces text"], answer: "Searches for patterns" },
      { question: "Make script executable", options: ["chmod +x script.sh", "exec script.sh", "run script.sh", "make script.sh"], answer: "chmod +x script.sh" },
      { question: "What does 'find' do?", options: ["Search files by criteria", "Find a line in file", "Find dir size", "Find file owner"], answer: "Search files by criteria" },
      { question: "What is a shell function?", options: ["Reusable block of code", "Built-in command", "Variable", "Loop"], answer: "Reusable block of code" },
      { question: "Read user input", options: ["read name", "input name", "get name", "prompt name"], answer: "read name" },
      { question: "What does 'sed' do?", options: ["Stream text editor", "Search files", "Create user", "Schedule job"], answer: "Stream text editor" },
      { question: "What is a cron job?", options: ["Scheduled job", "Background job", "One-time only", "Interactive job"], answer: "Scheduled job" },
      { question: "Default shell on most distros?", options: ["Bash", "Zsh", "Fish", "Ksh"], answer: "Bash" }
    ],
    advanced: [
      { question: "Purpose of awk?", options: ["Pattern scanning & text processing", "Create archives", "Manage users", "Monitor performance"], answer: "Pattern scanning & text processing" },
      { question: "What is a trap?", options: ["Command executed on signal", "Error handler", "Loop", "Debugger"], answer: "Command executed on signal" },
      { question: "What is a heredoc?", options: ["Inline input for commands", "Script doc", "Special comment", "Temp file"], answer: "Inline input for commands" },
      { question: "Process substitution does what?", options: ["Treats command output as file", "Substitute processes", "Kill process", "Monitor process"], answer: "Treats command output as file" },
      { question: "Purpose of xargs?", options: ["Build/execute commands from stdin", "Execute for each file", "Pass args to function", "Create new process"], answer: "Build/execute commands from stdin" },
      { question: "What is a subshell?", options: ["Child shell process", "Debug shell", "Remote shell", "GUI shell"], answer: "Child shell process" },
      { question: "source vs execute script?", options: ["source runs in current shell", "Execute is faster", "No difference", "source for functions only"], answer: "source runs in current shell" },
      { question: "File descriptors are?", options: ["Integers for open files", "File content desc", "File name", "File permissions"], answer: "Integers for open files" },
      { question: "Purpose of lsof?", options: ["List open files", "List all files", "Find file location", "Change owner"], answer: "List open files" },
      { question: "Zombie process?", options: ["Finished but entry remains", "Cannot be killed", "Running in background", "Waiting for input"], answer: "Finished but entry remains" }
    ]
  }
};
