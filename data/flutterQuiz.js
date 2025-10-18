const flutterQuiz = [
  // Beginner Level Questions (1-10)
  {
    question: "What programming language is primarily used to develop Flutter applications?",
    options: ["Java", "Kotlin", "Dart", "Swift"],
    correctAnswer: 2,
    explanation: "Flutter applications are written in Dart, which is Google's programming language optimized for building user interfaces."
  },
  {
    question: "What command is used to create a new Flutter project?",
    options: ["flutter init", "flutter create", "flutter new", "flutter start"],
    correctAnswer: 1,
    explanation: "The 'flutter create' command is used to create a new Flutter project with all necessary files and folders."
  },
  {
    question: "Which widget is used as the basic building block for creating UI in Flutter?",
    options: ["Component", "Element", "Widget", "View"],
    correctAnswer: 2,
    explanation: "In Flutter, everything is a widget. Widgets are the basic building blocks of a Flutter app's user interface."
  },
  {
    question: "What is the entry point of a Flutter application?",
    options: ["start()", "init()", "main()", "begin()"],
    correctAnswer: 2,
    explanation: "The main() function is the entry point of every Flutter application, similar to other Dart programs."
  },
  {
    question: "Which widget is used to display text in Flutter?",
    options: ["Label", "Text", "TextView", "TextWidget"],
    correctAnswer: 1,
    explanation: "The Text widget is used to display a string of text with single style in Flutter applications."
  },
  {
    question: "What does 'Hot Reload' do in Flutter?",
    options: [
      "Restarts the entire application",
      "Recompiles the whole project", 
      "Injects updated source code files into the running Dart VM",
      "Clears the application cache"
    ],
    correctAnswer: 2,
    explanation: "Hot Reload allows you to see changes almost instantly by injecting updated source code into the running Dart VM without losing the current application state."
  },
  {
    question: "Which widget is used to create a scrollable list in Flutter?",
    options: ["ScrollView", "ListView", "ListWidget", "ScrollableList"],
    correctAnswer: 1,
    explanation: "ListView is a scrollable widget that arranges its children in a linear array and can be scrolled vertically or horizontally."
  },
  {
    question: "What is pubspec.yaml used for in Flutter?",
    options: [
      "Configuration file for app settings",
      "Database schema definition",
      "Package dependency management",
      "UI layout definition"
    ],
    correctAnswer: 2,
    explanation: "pubspec.yaml is the configuration file that manages dependencies, assets, and metadata for Flutter projects."
  },
  {
    question: "Which widget provides a material design app structure?",
    options: ["App", "MaterialApp", "FlutterApp", "MainApp"],
    correctAnswer: 1,
    explanation: "MaterialApp is a convenience widget that wraps a number of widgets that are commonly required for material design applications."
  },
  {
    question: "What is the purpose of the Scaffold widget?",
    options: [
      "To create animations",
      "To manage app state",
      "To provide basic material design layout structure",
      "To handle navigation"
    ],
    correctAnswer: 2,
    explanation: "Scaffold provides the basic material design layout structure including app bar, body, floating action button, and drawer."
  },

  // Intermediate Level Questions (11-20)
  {
    question: "What is the difference between StatelessWidget and StatefulWidget?",
    options: [
      "StatelessWidget can change state, StatefulWidget cannot",
      "StatelessWidget is immutable, StatefulWidget can change over time",
      "There is no difference",
      "StatelessWidget is for UI, StatefulWidget is for logic"
    ],
    correctAnswer: 1,
    explanation: "StatelessWidget is immutable and cannot change over time, while StatefulWidget can maintain state that might change during the widget's lifetime."
  },
  {
    question: "Which method is called when a StatefulWidget is inserted into the widget tree?",
    options: ["build()", "initState()", "dispose()", "setState()"],
    correctAnswer: 1,
    explanation: "initState() is called once when the StatefulWidget is inserted into the widget tree and is used for one-time initialization."
  },
  {
    question: "What is the purpose of the setState() method?",
    options: [
      "To initialize widget state",
      "To destroy widget state",
      "To notify the framework that internal state has changed",
      "To create a new widget"
    ],
    correctAnswer: 2,
    explanation: "setState() notifies the Flutter framework that the internal state of the object has changed and triggers a rebuild of the widget."
  },
  {
    question: "Which layout widget arranges children in a row?",
    options: ["Column", "Row", "Stack", "Flex"],
    correctAnswer: 1,
    explanation: "Row widget arranges its children horizontally in a single row, similar to flexbox in web development."
  },
  {
    question: "What is the Navigator used for in Flutter?",
    options: [
      "Managing app state",
      "Handling user input",
      "Managing routes and navigation between screens",
      "Creating animations"
    ],
    correctAnswer: 2,
    explanation: "Navigator manages a stack of Route objects and provides methods for managing the stack, enabling navigation between screens."
  },
  {
    question: "Which widget is used to handle user gestures?",
    options: ["TouchDetector", "GestureDetector", "InputHandler", "TouchWidget"],
    correctAnswer: 1,
    explanation: "GestureDetector is a widget that detects gestures like taps, drags, scales, and provides callbacks for handling these gestures."
  },
  {
    question: "What is the purpose of the FutureBuilder widget?",
    options: [
      "To build UI based on the latest snapshot of interaction with a Future",
      "To create animations",
      "To manage app routing",
      "To handle form validation"
    ],
    correctAnswer: 0,
    explanation: "FutureBuilder is used to build widgets based on the latest snapshot of interaction with a Future, commonly used for async operations."
  },
  {
    question: "Which command is used to run Flutter app on an emulator or device?",
    options: ["flutter start", "flutter launch", "flutter run", "flutter deploy"],
    correctAnswer: 2,
    explanation: "The 'flutter run' command builds and runs your Flutter app on a connected device or emulator."
  },
  {
    question: "What is the purpose of the Key parameter in widgets?",
    options: [
      "To encrypt widget data",
      "To help Flutter identify widgets in the widget tree",
      "To set widget priority",
      "To define widget styling"
    ],
    correctAnswer: 1,
    explanation: "Keys help Flutter identify which widgets have changed when the widget tree is rebuilt, improving performance and maintaining state."
  },
  {
    question: "Which widget is used to display images in Flutter?",
    options: ["Picture", "Image", "ImageView", "Photo"],
    correctAnswer: 1,
    explanation: "The Image widget is used to display images from various sources like assets, network, files, or memory."
  },

  // Advanced Level Questions (21-30)
  {
    question: "What is the Widget tree in Flutter?",
    options: [
      "A database structure for widgets",
      "A hierarchical structure representing the UI",
      "A navigation system",
      "A state management pattern"
    ],
    correctAnswer: 1,
    explanation: "The Widget tree is a hierarchical structure that represents the user interface, where each widget can have child widgets forming a tree structure."
  },
  {
    question: "Which state management solution is officially recommended by the Flutter team for complex apps?",
    options: ["Provider", "Bloc", "Redux", "Riverpod"],
    correctAnswer: 0,
    explanation: "Provider is officially recommended by the Flutter team as a wrapper around InheritedWidget, making it easier to use and more reusable."
  },
  {
    question: "What is the purpose of the dispose() method in StatefulWidget?",
    options: [
      "To initialize the widget",
      "To rebuild the widget",
      "To clean up resources when widget is removed",
      "To handle user input"
    ],
    correctAnswer: 2,
    explanation: "dispose() is called when the widget is permanently removed from the widget tree and is used to clean up resources like controllers and streams."
  },
  {
    question: "Which widget is used to create platform-specific UI elements?",
    options: ["PlatformWidget", "AdaptiveWidget", "Platform.isIOS ? CupertinoWidget : MaterialWidget", "NativeWidget"],
    correctAnswer: 2,
    explanation: "Flutter doesn't have a built-in adaptive widget, so developers typically use Platform.isIOS to conditionally render Cupertino or Material widgets."
  },
  {
    question: "What is the difference between MainAxisAlignment and CrossAxisAlignment?",
    options: [
      "MainAxisAlignment is for Row, CrossAxisAlignment is for Column",
      "MainAxisAlignment aligns along the main axis, CrossAxisAlignment aligns along the cross axis",
      "They are the same thing",
      "MainAxisAlignment is horizontal, CrossAxisAlignment is vertical"
    ],
    correctAnswer: 1,
    explanation: "MainAxisAlignment controls alignment along the main axis (horizontal for Row, vertical for Column), while CrossAxisAlignment controls alignment along the cross axis."
  },
  {
    question: "Which method is used to navigate to a new screen and remove the current screen from the stack?",
    options: ["Navigator.push()", "Navigator.pop()", "Navigator.pushReplacement()", "Navigator.remove()"],
    correctAnswer: 2,
    explanation: "Navigator.pushReplacement() pushes a new route and removes the previous route, effectively replacing the current screen."
  },
  {
    question: "What is the purpose of the StreamBuilder widget?",
    options: [
      "To create animations",
      "To build widgets based on the latest snapshot of interaction with a Stream",
      "To manage app state",
      "To handle navigation"
    ],
    correctAnswer: 1,
    explanation: "StreamBuilder builds widgets based on the latest snapshot of interaction with a Stream, useful for real-time data updates."
  },
  {
    question: "Which widget is used to create custom animations in Flutter?",
    options: ["AnimationWidget", "CustomAnimator", "AnimationController", "Animator"],
    correctAnswer: 2,
    explanation: "AnimationController is used to control animations, providing methods to start, stop, repeat, and reverse animations with precise timing control."
  },
  {
    question: "What is the purpose of the InheritedWidget?",
    options: [
      "To create reusable UI components",
      "To efficiently propagate information down the widget tree",
      "To handle user input",
      "To manage app routing"
    ],
    correctAnswer: 1,
    explanation: "InheritedWidget efficiently propagates information down the widget tree, allowing descendant widgets to access shared data without passing it through constructors."
  },
  {
    question: "Which command is used to generate platform-specific code for iOS and Android?",
    options: ["flutter build", "flutter compile", "flutter generate", "flutter create --platforms"],
    correctAnswer: 0,
    explanation: "The 'flutter build' command (with platform-specific flags like 'flutter build ios' or 'flutter build android') generates platform-specific code and builds the app for deployment."
  }
];

export default flutterQuiz;