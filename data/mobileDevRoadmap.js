export const mobileDevSteps = [
  {
    title: "1. Programming Language Fundamentals",
    description:
      "Begin your mobile development journey by mastering a programming language. Kotlin is the preferred choice for native Android development due to its concise syntax and null safety, while Swift is ideal for iOS, offering speed and safety for Apple platforms. JavaScript and Dart are key for cross-platform frameworks like React Native and Flutter, respectively. Additionally, C# is used for .NET MAUI, and C++ is valuable for high-performance apps, such as games. Emerging languages like Mojo (for AI/ML) and Verse (for game development) are gaining traction for specialized use cases.",
    topics: [
      "Variables, Data Types, and Control Flow",
      "Functions and Object-Oriented Programming (OOP)",
      "Memory Management and Concurrency Basics",
      "Error Handling and Debugging",
      "Introduction to Emerging Languages (Mojo, Verse)"
    ],
    resources: [
      { name: "Kotlin Docs", link: "https://kotlinlang.org/docs/home.html" },
      { name: "A Swift Tour", link: "https://www.swift.org/documentation/the-swift-programming-language/a-swift-tour/" },
      { name: "JavaScript.info", link: "https://javascript.info/" },
      { name: "Dart Docs", link: "https://dart.dev/guides" },
      { name: ".NET MAUI Documentation", link: "https://learn.microsoft.com/en-us/dotnet/maui/" },
      { name: "C++ Documentation", link: "https://isocpp.org/" },
      { name: "Mojo Programming Language", link: "https://www.modular.com/mojo" },
      { name: "Verse Programming Language", link: "https://www.unrealengine.com/en-US/verse" }
    ],
    videos: [
      { name: "freeCodeCamp: Kotlin Course", link: "https://www.youtube.com/watch?v=EExSSotojVI" },
      { name: "Code with Chris: Swift for Beginners", link: "https://www.youtube.com/watch?v=comQ1-x2a1Q" },
      { name: ".NET MAUI Introduction", link: "https://youtu.be/Hh279ES_FNQ?si=Xx9GnLnxMP-mFJUX" },
      { name: "C++ for Beginners", link: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" }
    ],
  },
  {
    title: "2. Native App Development",
    description:
      "Master the fundamentals of building apps for a specific platform to leverage its full capabilities. For Android, use Kotlin with Jetpack Compose for modern UI development, Android Studio as the IDE, and Gradle for build automation. For iOS, use Swift with SwiftUI for declarative UI design, Xcode as the IDE, and Swift Package Manager for dependency management. Understanding platform-specific APIs and app lifecycle is crucial for optimizing performance and user experience.",
    topics: [
      "Android (Kotlin): UI with Jetpack Compose, Android Studio, Gradle",
      "iOS (Swift): UI with SwiftUI, Xcode, Swift Package Manager",
      "Platform-specific APIs (Location, Camera, etc.)",
      "App Lifecycle and State Management"
    ],
    resources: [
      { name: "Android Developer Docs", link: "https://developer.android.com/" },
      { name: "Apple Developer Documentation", link: "https://developer.apple.com/documentation/" }
    ],
    videos: [
      { name: "Philipp Lackner: Android Dev", link: "https://www.youtube.com/c/PhilippLackner" },
      { name: "Sean Allen: iOS Dev", link: "https://www.youtube.com/c/SeanAllen" }
    ],
  },
  {
    title: "3. Cross-Platform Development",
    description:
      "Develop apps for both iOS and Android using a single codebase to save time and resources. React Native (using JavaScript/TypeScript) and Flutter (using Dart) are the leading frameworks in 2025, offering near-native performance and improved native feature access. Learn to manage state and optimize performance to overcome limitations compared to native development.",
    topics: [
      "React Native: JavaScript/TypeScript, JSX, Native Modules",
      "Flutter: Dart, Widgets, Hot Reload",
      "State Management Solutions (Redux, BLoC, Riverpod)",
      "Accessing Native Features via Bridges",
      "Performance Optimization for Cross-Platform Apps"
    ],
    resources: [
      { name: "React Native Docs", link: "https://reactnative.dev/docs/getting-started" },
      { name: "Flutter Docs", link: "https://docs.flutter.dev/" },
      { name: "Riverpod Documentation", link: "https://riverpod.dev/docs/getting_started" }
    ],
    videos: [
      { name: "Academind: React Native", link: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
      { name: "Net Ninja: Flutter for Beginners", link: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ" },
      { name: "Riverpod Tutorial", link: "https://youtu.be/7Cp1GlmHTGE?si=lSOu2L-3ky9L6jye" }
    ],
  },
  {
    title: "4. UI/UX Design Principles",
    description:
      "Create intuitive and visually appealing user interfaces by following platform-specific design guidelines. In 2025, trends like Dark Mode, AI-driven personalization, micro-interactions, 3D elements, accessibility, and voice/gesture navigation are shaping user experiences. Tools like Figma help with wireframing and prototyping to ensure responsive designs across devices.",
    topics: [
      "Material Design (Android)",
      "Human Interface Guidelines (iOS)",
      "Wireframing and Prototyping with Figma",
      "Responsive Layouts for Different Screen Sizes",
      "Dark Mode Implementation",
      "AI-Driven Personalization",
      "Micro-interactions for Engagement",
      "3D and AR/VR Integration",
      "Accessibility Best Practices",
      "Voice and Gesture-Based Navigation"
    ],
    resources: [
      { name: "Material Design", link: "https://material.io/" },
      { name: "Human Interface Guidelines", link: "https://developer.apple.com/design/human-interface-guidelines/" },
      { name: "Figma", link: "https://www.figma.com/" },
      { name: "Accessibility Guidelines", link: "https://www.w3.org/WAI/standards-guidelines/mobile/" }
    ],
    videos: [
      { name: "DesignCourse: UI/UX with Figma", link: "https://youtu.be/dYtdv--qd_U?si=ih3LHRAenFtC6D6l" },
      { name: "Dark Mode Design Tips", link: "https://youtu.be/JNhG2T6dGOY?si=C9UcMl3P6jTexyvk" },
      { name: "Micro-interactions in Mobile Apps", link: "https://youtu.be/Wnk83cb04aI?si=8F5IjGFZzjDs6Inq" }
    ],
  },
  {
    title: "5. Networking & Data",
    description:
      "Enable apps to fetch and manage data from the internet and store it locally. Learn to use REST APIs, GraphQL, and modern networking trends like 5G, edge computing, WebSockets, and serverless architecture. Prioritize API security and explore Progressive Web Apps (PWAs) and IoT integration for connected experiences.",
    topics: [
      "REST APIs and JSON",
      "HTTP Libraries (Retrofit for Android, URLSession for iOS)",
      "Local Storage (Room for Android, Core Data for iOS)",
      "GraphQL as an alternative to REST",
      "5G and Edge Computing for Low Latency",
      "Real-Time Communication with WebSockets",
      "Advanced API Security Measures",
      "Serverless Architecture for Scalability",
      "PWA Development for Web-Mobile Hybrid Apps",
      "IoT Integration for Connected Devices"
    ],
    resources: [
      { name: "JSONPlaceholder - Fake Online REST API", link: "https://jsonplaceholder.typicode.com/" },
      { name: "GraphQL Documentation", link: "https://graphql.org/learn/" },
      { name: "WebSockets Documentation", link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
      { name: "Serverless Framework", link: "https://www.serverless.com/framework/docs/" }
    ],
    videos: [
      { name: "Fireship: REST APIs in 100 Seconds", link: "https://youtu.be/-MTSQjw5DrM?si=x3Ah8bxosc1fZqkq" },
      { name: "Introduction to GraphQL", link: "https://youtu.be/eIQh02xuVw4?si=C0keatDQd1VwhWtJ" },
      { name: "WebSockets in Mobile Apps", link: "https://youtu.be/1BfCnjr_Vjg?si=_7nVGco37haHWeir" }
    ],
  },
  {
    title: "6. State Management",
    description:
      "Manage your app's state effectively to build robust and scalable applications. Different frameworks use specific tools, such as ViewModel for Android and ObservableObject for iOS. In Flutter, Riverpod is gaining popularity over Provider, while React Native relies on Redux and MobX. Understanding UI state versus app state is key to efficient development.",
    topics: [
      "ViewModel (Android) & ObservableObject (iOS)",
      "Provider/Riverpod (Flutter)",
      "Redux/MobX (React Native)",
      "Understanding UI State vs. App State",
      "Latest Best Practices in State Management"
    ],
    resources: [
      { name: "Android State Management Guide", link: "https://developer.android.com/jetpack/guide/ui-layer/state-management" },
      { name: "Flutter State Management", link: "https://docs.flutter.dev/data-and-backend/state-mgmt/options" },
      { name: "Riverpod Documentation", link: "https://riverpod.dev/docs/getting_started" }
    ],
    videos: [
      { name: "Flutter State Management", link: "https://youtu.be/J2iFYZUabVM?si=WgMC41lFfpF2qI7f" },
      { name: "Riverpod Tutorial", link: "https://youtu.be/pwflXIA-6YQ?si=iEBW2DLaCJIdhgGf" }
    ],
  },
  {
    title: "7. Version Control with Git & GitHub",
    description:
      "Track code changes and collaborate effectively using Git and GitHub. Learn basic commands and advanced practices like GitOps and GitHub Actions, which are standard in 2025 for automating workflows and managing deployments. Modern branching models like Git Flow and Trunk-Based Development enhance collaboration.",
    topics: [
      "Basic Git commands (add, commit, push, pull)",
      "Branching and Merging strategies",
      "Resolving Merge Conflicts",
      "Using GitHub for collaboration",
      "GitOps for CI/CD",
      "GitHub Actions for Automation",
      "Advanced Branching Models (Git Flow, Trunk-Based Development)"
    ],
    resources: [
      { name: "Pro Git Book", link: "https://git-scm.com/book/en/v2" },
      { name: "Learn Git Branching", link: "https://learngitbranching.js.org/" },
      { name: "GitHub Actions Documentation", link: "https://docs.github.com/en/actions" },
      { name: "GitOps Documentation", link: "https://www.gitops.tech/" }
    ],
    videos: [
      { name: "Git & GitHub Crash Course", link: "https://www.youtube.com/watch?v=SWYqp7iY_Tc" },
      { name: "Introduction to GitHub Actions", link: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
      { name: "GitOps Explained", link: "https://www.youtube.com/watch?v=f5EpcWp0THw" }
    ],
  },
  {
    title: "8. App Deployment",
    description:
      "Deploy your app to app stores and other platforms for global access. Learn the submission processes for Google Play and Apple App Store, and explore modern deployment trends like Continuous Deployment, cloud-based strategies, containerization, serverless architecture, GitOps, and automated testing to ensure scalability and reliability.",
    topics: [
      "Google Play Store Submission",
      "Apple App Store Submission",
      "Automated CI/CD with GitHub Actions or Codemagic",
      "App Signing and Versioning",
      "Continuous Deployment (CD) Practices",
      "Cloud Deployment Strategies (AWS, Azure, Google Cloud)",
      "Containerization with Docker and Kubernetes",
      "Serverless Deployment with AWS Lambda, Google Cloud Functions, etc.",
      "GitOps for Deployment Management",
      "Automated Testing and Monitoring Tools"
    ],
    resources: [
      { name: "Google Play Console", link: "https://play.google.com/console/" },
      { name: "App Store Connect", link: "https://appstoreconnect.apple.com/" },
      { name: "Docker Documentation", link: "https://docs.docker.com/" },
      { name: "Kubernetes Documentation", link: "https://kubernetes.io/docs/" },
      { name: "Serverless Framework", link: "https://www.serverless.com/framework/docs/" }
    ],
    videos: [
      { name: "How to Publish an Android App", link: "https://youtu.be/d8uEdeMgikU?si=Rx2ssvXAHsXhxItd" },
      { name: "How to Publish an iOS App", link: "https://youtu.be/J9HbqeIfy7w?si=1NHemjod0DBMn5f2" },
      { name: "Introduction to Docker", link: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
      { name: "Serverless Architecture Explained", link: "https://youtu.be/vxJobGtqKVM?si=DwVOHxPQczSPnD8X" }
    ],
  },
];