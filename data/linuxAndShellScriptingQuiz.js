
export const linuxAndShellScriptingQuiz = {
  title: "Linux & Shell Scripting Quiz",
  questions: {
    beginner: [
      {
        question: "What command is used to list files and directories in the current directory?",
        options: [
          "ls",
          "dir",
          "list",
          "show"
        ],
        answer: "ls"
      },
      {
        question: "Which command is used to change the current directory?",
        options: [
          "cd",
          "chgdir",
          "mvdir",
          "c"
        ],
        answer: "cd"
      },
      {
        question: "What does the `pwd` command do?",
        options: [
          "Prints the working directory",
          "Lists the files in the current directory",
          "Changes the password",
          "Creates a new directory"
        ],
        answer: "Prints the working directory"
      },
      {
        question: "Which command is used to create a new directory?",
        options: [
          "mkdir",
          "newdir",
          "crdir",
          "makedir"
        ],
        answer: "mkdir"
      },
      {
        question: "What is the purpose of the `rm` command?",
        options: [
          "To remove files and directories",
          "To rename files",
          "To move files",
          "To copy files"
        ],
        answer: "To remove files and directories"
      },
      {
        question: "How do you view the contents of a text file in the terminal?",
        options: [
          "cat",
          "view",
          "display",
          "open"
        ],
        answer: "cat"
      },
      {
        question: "What is the shell?",
        options: [
          "A command-line interpreter that provides a user interface for accessing the services of the operating system",
          "The core of the operating system",
          "A graphical user interface",
          "A hardware component"
        ],
        answer: "A command-line interpreter that provides a user interface for accessing the services of the operating system"
      },
      {
        question: "What is the first line of a shell script called?",
        options: [
          "The shebang (#!/bin/bash)",
          "The comment line",
          "The variable declaration",
          "The function definition"
        ],
        answer: "The shebang (#!/bin/bash)"
      },
      {
        question: "How do you create a variable in a shell script?",
        options: [
          "variable_name=value",
          "let variable_name = value",
          "var variable_name = value",
          "set variable_name = value"
        ],
        answer: "variable_name=value"
      },
      {
        question: "What is the purpose of the `echo` command?",
        options: [
          "To print text to the terminal",
          "To read input from the user",
          "To execute a command",
          "To create a new file"
        ],
        answer: "To print text to the terminal"
        question: "What is Linux?",
        options: [
          "An open-source operating system",
          "A programming language",
          "A database system",
          "A web server"
        ],
        answer: "An open-source operating system"
      },
      {
        question: "What is a shell in Linux?",
        options: [
          "A program that interprets and executes commands",
          "A type of database",
          "A text editor",
          "A filesystem"
        ],
        answer: "A program that interprets and executes commands"
      },
      {
        question: "What does the 'ls' command do?",
        options: [
          "Lists files and directories in the current directory",
          "Deletes a file",
          "Creates a new directory",
          "Shows system processes"
        ],
        answer: "Lists files and directories in the current directory"
      },
      {
        question: "What does the 'cd' command do?",
        options: [
          "Changes the current working directory",
          "Copies files",
          "Displays contents of a file",
          "Removes a directory"
        ],
        answer: "Changes the current working directory"
      },
      {
        question: "What is a file permission?",
        options: [
          "Rules that determine who can read, write, or execute a file",
          "The size of a file",
          "The location of a file",
          "The owner of the file only"
        ],
        answer: "Rules that determine who can read, write, or execute a file"
      },
      {
        question: "What does the 'mkdir' command do?",
        options: [
          "Creates a new directory",
          "Deletes a directory",
          "Lists directories",
          "Changes directory permissions"
        ],
        answer: "Creates a new directory"
      },
      {
        question: "What is the command to display the contents of a file?",
        options: [
          "cat",
          "ls",
          "cd",
          "rm"
        ],
        answer: "cat"
      },
      {
        question: "What does the 'rm' command do?",
        options: [
          "Removes files or directories",
          "Renames files",
          "Reads files",
          "Runs a script"
        ],
        answer: "Removes files or directories"
      },
      {
        question: "What is the default shell in most Linux distributions?",
        options: [
          "Bash",
          "Zsh",
          "Fish",
          "Ksh"
        ],
        answer: "Bash"
      },
      {
        question: "What is a process in Linux?",
        options: [
          "An instance of a running program",
          "A file on the filesystem",
          "A network connection",
          "A user account"
        ],
        answer: "An instance of a running program"
      }
    ],
    intermediate: [
      {
        question: "What is the difference between `>` and `>>` redirection operators?",
        options: [
          "`>` overwrites the file, while `>>` appends to the file",
          "`>>` overwrites the file, while `>` appends to the file",
          "There is no difference",
          "`>` is for input, `>>` is for output"
        ],
        answer: "`>` overwrites the file, while `>>` appends to the file"
      },
      {
        question: "What is a pipe (`|`) used for in shell scripting?",
        options: [
          "To redirect the output of one command to the input of another command",
          "To execute two commands simultaneously",
          "To compare two files",
          "To create a new directory"
        ],
        answer: "To redirect the output of one command to the input of another command"
      },
      {
        question: "What is the purpose of the `grep` command?",
        options: [
          "To search for a pattern in a file",
          "To replace a pattern in a file",
          "To sort the contents of a file",
          "To count the number of lines in a file"
        ],
        answer: "To search for a pattern in a file"
      },
      {
        question: "How do you make a shell script executable?",
        options: [
          "chmod +x script.sh",
          "executable script.sh",
          "run script.sh",
          "make script.sh"
        ],
        answer: "chmod +x script.sh"
      },
      {
        question: "What is the purpose of the `find` command?",
        options: [
          "To search for files and directories based on various criteria",
          "To find a specific line in a file",
          "To find the size of a directory",
          "To find the user who owns a file"
        ],
        answer: "To search for files and directories based on various criteria"
      },
      {
        question: "What is a shell function?",
        options: [
          "A block of code that can be reused in a script",
          "A built-in shell command",
          "A variable that holds a command",
          "A special type of loop"
        ],
        answer: "A block of code that can be reused in a script"
      },
      {
        question: "How do you read input from the user in a shell script?",
        options: [
          "read variable_name",
          "input variable_name",
          "get variable_name",
          "prompt variable_name"
        ],
        answer: "read variable_name"
      },
      {
        question: "What is the purpose of the `sed` command?",
        options: [
          "To perform text transformations on an input stream (a file or input from a pipeline)",
          "To search for files",
          "To create a new user",
          "To schedule a job"
        ],
        answer: "To perform text transformations on an input stream (a file or input from a pipeline)"
      },
      {
        question: "What is a `cron` job?",
        options: [
          "A job that is scheduled to run at a specific time or interval",
          "A job that runs in the background",
          "A job that is executed only once",
          "A job that requires user interaction"
        ],
        answer: "A job that is scheduled to run at a specific time or interval"
      },
      {
        question: "What is the difference between single quotes (`'`) and double quotes (`"`) in shell scripting?",
        options: [
          "Single quotes prevent variable expansion, while double quotes allow it",
          "Double quotes prevent variable expansion, while single quotes allow it",
          "There is no difference",
          "Single quotes are for strings, double quotes are for numbers"
        ],
        answer: "Single quotes prevent variable expansion, while double quotes allow it"
        question: "What is the purpose of 'chmod'?",
        options: [
          "Changes file permissions",
          "Changes file ownership",
          "Changes file name",
          "Displays file content"
        ],
        answer: "Changes file permissions"
      },
      {
        question: "What does 'ps' command do?",
        options: [
          "Displays currently running processes",
          "Shows disk usage",
          "Displays network connections",
          "Shows system logs"
        ],
        answer: "Displays currently running processes"
      },
      {
        question: "What is the purpose of 'grep'?",
        options: [
          "Searches for patterns in files or outputs",
          "Edits files",
          "Monitors system performance",
          "Installs software packages"
        ],
        answer: "Searches for patterns in files or outputs"
      },
      {
        question: "What is piping in Linux?",
        options: [
          "Redirecting the output of one command as input to another",
          "Copying files between directories",
          "Running commands in the background",
          "Scheduling commands"
        ],
        answer: "Redirecting the output of one command as input to another"
      },
      {
        question: "What does 'cron' do?",
        options: [
          "Schedules tasks to run at specific times",
          "Monitors system logs",
          "Installs software",
          "Manages user accounts"
        ],
        answer: "Schedules tasks to run at specific times"
      },
      {
        question: "What is the difference between '>' and '>>' in shell?",
        options: [
          "'>' overwrites a file, '>>' appends to a file",
          "'>' appends to a file, '>>' overwrites a file",
          "Both overwrite files",
          "Both append to files"
        ],
        answer: "'>' overwrites a file, '>>' appends to a file"
      },
      {
        question: "What is a symbolic link?",
        options: [
          "A pointer to another file or directory",
          "A copy of a file",
          "A backup of a file",
          "An executable file"
        ],
        answer: "A pointer to another file or directory"
      },
      {
        question: "What is a shell script?",
        options: [
          "A file containing a series of shell commands to automate tasks",
          "A compiled program",
          "A configuration file",
          "A text editor"
        ],
        answer: "A file containing a series of shell commands to automate tasks"
      },
      {
        question: "What does 'top' command do?",
        options: [
          "Displays real-time system processes and resource usage",
          "Displays network configuration",
          "Displays user information",
          "Displays disk usage"
        ],
        answer: "Displays real-time system processes and resource usage"
      },
      {
        question: "What is 'awk' commonly used for?",
        options: [
          "Text processing and data extraction",
          "File compression",
          "System monitoring",
          "Process management"
        ],
        answer: "Text processing and data extraction"
      }
    ],
    advanced: [
      {
        question: "What is `awk` and what is it used for?",
        options: [
          "A powerful text-processing utility for pattern scanning and processing",
          "A command for creating archives",
          "A command for managing users and groups",
          "A command for monitoring system performance"
        ],
        answer: "A powerful text-processing utility for pattern scanning and processing"
      },
      {
        question: "What is a `trap` in shell scripting?",
        options: [
          "A command that is executed when the script receives a signal",
          "A way to handle errors in a script",
          "A type of loop",
          "A way to debug a script"
        ],
        answer: "A command that is executed when the script receives a signal"
      },
      {
        question: "What is a `here document` (heredoc)?",
        options: [
          "A way to provide input to a command from within the script itself",
          "A document that describes the script",
          "A special type of comment",
          "A way to create a temporary file"
        ],
        answer: "A way to provide input to a command from within the script itself"
      },
      {
        question: "What is process substitution?",
        options: [
          "A mechanism that allows the output of a command to be treated as a file",
          "A way to substitute one process with another",
          "A way to kill a process",
          "A way to monitor a process"
        ],
        answer: "A mechanism that allows the output of a command to be treated as a file"
      },
      {
        question: "What is the purpose of the `xargs` command?",
        options: [
          "To build and execute command lines from standard input",
          "To execute a command for each file in a directory",
          "To pass arguments to a function",
          "To create a new process"
        ],
        answer: "To build and execute command lines from standard input"
      },
      {
        question: "What is a `subshell`?",
        options: [
          "A shell that is executed as a child process of the current shell",
          "A shell that is used for debugging",
          "A shell that is used for remote administration",
          "A shell that is used for graphical user interfaces"
        ],
        answer: "A shell that is executed as a child process of the current shell"
      },
      {
        question: "What is the difference between `source` and executing a script directly?",
        options: [
          "`source` executes the script in the current shell, while executing it directly creates a new shell",
          "Executing a script directly is faster than using `source`",
          "There is no difference",
          "`source` can only be used for shell functions"
        ],
        answer: "`source` executes the script in the current shell, while executing it directly creates a new shell"
      },
      {
        question: "What are file descriptors in Linux?",
        options: [
          "An integer that refers to an open file",
          "A description of a file's contents",
          "The name of a file",
          "The permissions of a file"
        ],
        answer: "An integer that refers to an open file"
      },
      {
        question: "What is the purpose of the `lsof` command?",
        options: [
          "To list open files",
          "To list all files on the system",
          "To find the location of a file",
          "To change the owner of a file"
        ],
        answer: "To list open files"
      },
      {
        question: "What is a `zombie` process?",
        options: [
          "A process that has completed execution but still has an entry in the process table",
          "A process that cannot be killed",
          "A process that is running in the background",
          "A process that is waiting for input"
        ],
        answer: "A process that has completed execution but still has an entry in the process table"
      }
    ]
  }
};
        question: "What is the difference between hard links and soft links?",
        options: [
          "Hard links point to the inode, soft links point to the file path",
          "Soft links point to the inode, hard links point to the file path",
          "Hard links are slower than soft links",
          "Soft links cannot be deleted"
        ],
        answer: "Hard links point to the inode, soft links point to the file path"
      },
      {
        question: "What is the purpose of 'strace'?",
        options: [
          "Traces system calls and signals made by a process",
          "Monitors CPU usage",
          "Analyzes memory usage",
          "Monitors network traffic"
        ],
        answer: "Traces system calls and signals made by a process"
      },
      {
        question: "What is a background job in shell?",
        options: [
          "A process that runs independently of the terminal",
          "A process that is paused",
          "A process running on another server",
          "A system service"
        ],
        answer: "A process that runs independently of the terminal"
      },
      {
        question: "What does 'sed' command do?",
        options: [
          "Stream editor for modifying text in files",
          "Displays system processes",
          "Schedules tasks",
          "Changes file permissions"
        ],
        answer: "Stream editor for modifying text in files"
      },
      {
        question: "What is environment variable?",
        options: [
          "A dynamic value that affects the behavior of processes",
          "A file that stores system logs",
          "A script that runs at startup",
          "A pointer to a directory"
        ],
        answer: "A dynamic value that affects the behavior of processes"
      },
      {
        question: "What is the difference between '$' and '#'' in shell prompts?",
        options: [
          "'$' indicates a normal user, '#' indicates the root user",
          "'$' indicates root user, '#' indicates normal user",
          "Both indicate normal users",
          "Both indicate root user"
        ],
        answer: "'$' indicates a normal user, '#' indicates the root user"
      },
      {
        question: "What is the purpose of 'netstat'?",
        options: [
          "Displays network connections and listening ports",
          "Monitors disk usage",
          "Displays running processes",
          "Checks memory usage"
        ],
        answer: "Displays network connections and listening ports"
      },
      {
        question: "What is shell expansion?",
        options: [
          "The process where the shell interprets and replaces variables, wildcards, and commands before execution",
          "Running multiple commands simultaneously",
          "Compiling a shell script",
          "Monitoring system performance"
        ],
        answer: "The process where the shell interprets and replaces variables, wildcards, and commands before execution"
      },
      {
        question: "What is the purpose of 'rsync'?",
        options: [
          "Efficiently synchronizes files and directories between locations",
          "Removes files securely",
          "Displays running processes",
          "Monitors disk usage"
        ],
        answer: "Efficiently synchronizes files and directories between locations"
      },
      {
        question: "What is the difference between 'cron' and 'at'?",
        options: [
          "'cron' schedules recurring tasks, 'at' schedules one-time tasks",
          "'at' schedules recurring tasks, 'cron' schedules one-time tasks",
          "Both schedule recurring tasks",
          "Both schedule one-time tasks"
        ],
        answer: "'cron' schedules recurring tasks, 'at' schedules one-time tasks"
      }
    ]
  }
};
};
};
