const javaQuestions = {
  beginner: [
    {
      question: "Which of the following is the correct way to declare a variable in Java?",
      options: ["int x;", "x int;", "declare int x;", "variable int x;"],
      answer: "int x;",
    },
    {
      question: "What is the correct file extension for Java source files?",
      options: [".java", ".class", ".jar", ".jv"],
      answer: ".java",
    },
    {
      question: "Which method is the entry point of a Java application?",
      options: ["start()", "main()", "begin()", "run()"],
      answer: "main()",
    },
    {
      question: "What is the correct signature for the main method?",
      options: ["public static void main(String[] args)", "public void main(String[] args)", "static void main(String[] args)", "public main(String[] args)"],
      answer: "public static void main(String[] args)",
    },
    {
      question: "Which of the following is NOT a primitive data type in Java?",
      options: ["int", "double", "String", "boolean"],
      answer: "String",
    },
    {
      question: "How do you create a single-line comment in Java?",
      options: ["// This is a comment", "<!-- This is a comment -->", "# This is a comment", "' This is a comment"],
      answer: "// This is a comment",
    },
    {
      question: "Which keyword is used to create a class in Java?",
      options: ["class", "Class", "define", "create"],
      answer: "class",
    },
    {
      question: "What is the default value of an int variable in Java?",
      options: ["0", "1", "null", "undefined"],
      answer: "0",
    },
    {
      question: "Which operator is used for string concatenation in Java?",
      options: ["+", "&", ".", "concat"],
      answer: "+",
    },
    {
      question: "How do you declare a constant in Java?",
      options: ["final int x = 5;", "const int x = 5;", "constant int x = 5;", "static int x = 5;"],
      answer: "final int x = 5;",
    }
  ],
  intermediate: [
    {
      question: "What is the difference between '==' and '.equals()' in Java?",
      options: [
        "'==' compares object references, '.equals()' compares object content",
        "'.equals()' compares object references, '==' compares object content",
        "They are identical",
        "'==' is for primitives, '.equals()' is for objects"
      ],
      answer: "'==' compares object references, '.equals()' compares object content",
    },
    {
      question: "What is method overloading?",
      options: [
        "Multiple methods with the same name but different parameters",
        "A method that calls itself recursively",
        "A method that overrides a parent class method",
        "A method that handles multiple data types"
      ],
      answer: "Multiple methods with the same name but different parameters",
    },
    {
      question: "What is the purpose of the 'static' keyword?",
      options: [
        "To create class-level members that belong to the class rather than instances",
        "To make variables constant",
        "To prevent inheritance",
        "To make methods private"
      ],
      answer: "To create class-level members that belong to the class rather than instances",
    },
    {
      question: "What is inheritance in Java?",
      options: [
        "A mechanism where a child class acquires properties and methods of a parent class",
        "A way to create multiple objects",
        "A method to handle exceptions",
        "A technique to optimize memory usage"
      ],
      answer: "A mechanism where a child class acquires properties and methods of a parent class",
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: ["extends", "inherits", "implements", "super"],
      answer: "extends",
    },
    {
      question: "What is encapsulation?",
      options: [
        "Wrapping data and methods together and restricting access through access modifiers",
        "Creating multiple classes",
        "Using inheritance",
        "Handling exceptions"
      ],
      answer: "Wrapping data and methods together and restricting access through access modifiers",
    },
    {
      question: "What is the difference between ArrayList and Array?",
      options: [
        "ArrayList is dynamic and can grow/shrink, Arrays have fixed size",
        "Arrays are dynamic, ArrayList has fixed size",
        "There is no difference",
        "ArrayList is only for strings"
      ],
      answer: "ArrayList is dynamic and can grow/shrink, Arrays have fixed size",
    },
    {
      question: "What is a constructor in Java?",
      options: [
        "A special method used to initialize objects",
        "A method to destroy objects",
        "A way to create classes",
        "A type of variable"
      ],
      answer: "A special method used to initialize objects",
    },
    {
      question: "What happens if you don't provide a constructor in a class?",
      options: [
        "Java provides a default no-argument constructor",
        "The class cannot be instantiated",
        "Compilation error occurs",
        "The class becomes abstract"
      ],
      answer: "Java provides a default no-argument constructor",
    },
    {
      question: "What is the 'super' keyword used for?",
      options: [
        "To refer to the immediate parent class object",
        "To create a new object",
        "To make a method static",
        "To handle exceptions"
      ],
      answer: "To refer to the immediate parent class object",
    }
  ],
  advanced: [
    {
      question: "What is polymorphism in Java?",
      options: [
        "The ability of an object to take on many forms, allowing different classes to be treated as instances of the same class through inheritance",
        "The ability to create multiple constructors",
        "The ability to override methods",
        "The ability to create abstract classes"
      ],
      answer: "The ability of an object to take on many forms, allowing different classes to be treated as instances of the same class through inheritance",
    },
    {
      question: "What is the difference between abstract classes and interfaces?",
      options: [
        "Abstract classes can have concrete methods and constructors, interfaces cannot (before Java 8)",
        "Interfaces can have concrete methods, abstract classes cannot",
        "There is no difference",
        "Abstract classes are deprecated"
      ],
      answer: "Abstract classes can have concrete methods and constructors, interfaces cannot (before Java 8)",
    },
    {
      question: "What is the Java Memory Model?",
      options: [
        "A specification that defines how threads interact through memory and what behaviors are allowed in concurrent execution",
        "A way to allocate memory for objects",
        "A garbage collection algorithm",
        "A method to optimize code"
      ],
      answer: "A specification that defines how threads interact through memory and what behaviors are allowed in concurrent execution",
    },
    {
      question: "What is the difference between checked and unchecked exceptions?",
      options: [
        "Checked exceptions must be handled at compile time, unchecked exceptions are runtime exceptions",
        "Unchecked exceptions must be handled at compile time, checked exceptions are runtime exceptions",
        "There is no difference",
        "Checked exceptions are deprecated"
      ],
      answer: "Checked exceptions must be handled at compile time, unchecked exceptions are runtime exceptions",
    },
    {
      question: "What are Java Generics?",
      options: [
        "A feature that allows type parameterization, providing compile-time type safety",
        "A way to create generic methods",
        "A collection framework feature",
        "A way to handle multiple inheritance"
      ],
      answer: "A feature that allows type parameterization, providing compile-time type safety",
    },
    {
      question: "What is the difference between Heap and Stack memory?",
      options: [
        "Heap stores objects and instance variables, Stack stores method calls and local variables",
        "Stack stores objects, Heap stores method calls",
        "They are the same",
        "Heap is faster than Stack"
      ],
      answer: "Heap stores objects and instance variables, Stack stores method calls and local variables",
    },
    {
      question: "What is a lambda expression in Java 8?",
      options: [
        "A concise way to represent anonymous functions",
        "A new type of loop",
        "A way to handle exceptions",
        "A method to create threads"
      ],
      answer: "A concise way to represent anonymous functions",
    },
    {
      question: "What is the Stream API?",
      options: [
        "A feature for processing collections of objects in a functional programming style",
        "A way to handle file input/output",
        "A networking library",
        "A database connectivity feature"
      ],
      answer: "A feature for processing collections of objects in a functional programming style",
    },
    {
      question: "What is the purpose of the 'volatile' keyword?",
      options: [
        "To ensure that changes to a variable are immediately visible to all threads",
        "To make variables constant",
        "To optimize memory usage",
        "To prevent inheritance"
      ],
      answer: "To ensure that changes to a variable are immediately visible to all threads",
    },
    {
      question: "What is reflection in Java?",
      options: [
        "The ability to inspect and modify classes, interfaces, fields, and methods at runtime",
        "A way to create mirrors of objects",
        "A debugging technique",
        "A way to optimize code performance"
      ],
      answer: "The ability to inspect and modify classes, interfaces, fields, and methods at runtime",
    }
  ],
};

export default javaQuestions;