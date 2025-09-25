const kubernetesQuestions = {
  beginner: [
    {
      question: "What is Kubernetes?",
      options: [
        "A container orchestration engine",
        "A container runtime",
        "A container image format",
        "A container registry",
      ],
      answer: "A container orchestration engine",
    },
    {
      question: "What is a pod in Kubernetes?",
      options: [
        "A single container",
        "A group of one or more containers",
        "A single node",
        "A group of one or more nodes",
      ],
      answer: "A group of one or more containers",
    },
    {
      question: "What is a service in Kubernetes?",
      options: [
        "A way to expose an application running on a set of pods as a network service",
        "A way to manage a set of pods",
        "A way to store data",
        "A way to build images",
      ],
      answer: "A way to expose an application running on a set of pods as a network service",
    },
    {
      question: "What is a deployment in Kubernetes?",
      options: [
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
        "A way to store data",
        "A way to build images",
      ],
      answer: "A way to manage a set of pods",
    },
    {
      question: "What is a namespace in Kubernetes?",
      options: [
        "A way to divide cluster resources between multiple users",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
        "A way to store data",
      ],
      answer: "A way to divide cluster resources between multiple users",
    },
    {
      question: "What is kubectl?",
      options: [
        "A command-line tool for interacting with a Kubernetes cluster",
        "A graphical user interface for interacting with a Kubernetes cluster",
        "A library for interacting with a Kubernetes cluster",
        "A configuration file for a Kubernetes cluster",
      ],
      answer: "A command-line tool for interacting with a Kubernetes cluster",
    },
    {
      question: "What is a node in Kubernetes?",
      options: [
        "A physical or virtual machine that runs pods",
        "A single container",
        "A group of one or more containers",
        "A single pod",
      ],
      answer: "A physical or virtual machine that runs pods",
    },
    {
      question: "What is a cluster in Kubernetes?",
      options: [
        "A set of nodes that run containerized applications",
        "A single node",
        "A single pod",
        "A single container",
      ],
      answer: "A set of nodes that run containerized applications",
    },
    {
      question: "What is a ReplicaSet in Kubernetes?",
      options: [
        "A way to ensure that a specified number of pod replicas are running at any given time",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
        "A way to store data",
      ],
      answer: "A way to ensure that a specified number of pod replicas are running at any given time",
    },
    {
      question: "What is a ConfigMap in Kubernetes?",
      options: [
        "A way to store configuration data as key-value pairs",
        "A way to store secrets",
        "A way to store data",
        "A way to build images",
      ],
      answer: "A way to store configuration data as key-value pairs",
    },
  ],
  intermediate: [
    {
      question: "What is a StatefulSet in Kubernetes?",
      options: [
        "A way to manage stateful applications",
        "A way to manage stateless applications",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
      ],
      answer: "A way to manage stateful applications",
    },
    {
      question: "What is a DaemonSet in Kubernetes?",
      options: [
        "A way to ensure that a copy of a pod runs on all or some nodes in a cluster",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
        "A way to store data",
      ],
      answer: "A way to ensure that a copy of a pod runs on all or some nodes in a cluster",
    },
    {
      question: "What is a Job in Kubernetes?",
      options: [
        "A way to run a pod to completion",
        "A way to run a pod that runs continuously",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
      ],
      answer: "A way to run a pod to completion",
    },
    {
      question: "What is a CronJob in Kubernetes?",
      options: [
        "A way to run a Job on a schedule",
        "A way to run a Job continuously",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
      ],
      answer: "A way to run a Job on a schedule",
    },
    {
      question: "What is a PersistentVolume in Kubernetes?",
      options: [
        "A piece of storage in the cluster that has been provisioned by an administrator",
        "A request for storage by a user",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
      ],
      answer: "A piece of storage in the cluster that has been provisioned by an administrator",
    },
    {
      question: "What is a PersistentVolumeClaim in Kubernetes?",
      options: [
        "A request for storage by a user",
        "A piece of storage in the cluster that has been provisioned by an administrator",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
      ],
      answer: "A request for storage by a user",
    },
    {
      question: "What is a StorageClass in Kubernetes?",
      options: [
        "A way for administrators to describe the \"classes\" of storage they offer",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
        "A way to store data",
      ],
      answer: "A way for administrators to describe the \"classes\" of storage they offer",
    },
    {
      question: "What is an Ingress in Kubernetes?",
      options: [
        "A way to expose HTTP and HTTPS routes from outside the cluster to services within the cluster",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
        "A way to store data",
      ],
      answer: "A way to expose HTTP and HTTPS routes from outside the cluster to services within the cluster",
    },
    {
      question: "What is Helm?",
      options: [
        "A package manager for Kubernetes",
        "A container orchestration engine",
        "A container runtime",
        "A container image format",
      ],
      answer: "A package manager for Kubernetes",
    },
    {
      question: "What is a chart in Helm?",
      options: [
        "A package of pre-configured Kubernetes resources",
        "A single Kubernetes resource",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
      ],
      answer: "A package of pre-configured Kubernetes resources",
    },
  ],
  advanced: [
    {
      question: "What is a Custom Resource Definition (CRD) in Kubernetes?",
      options: [
        "A way to extend the Kubernetes API with your own resources",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
        "A way to store data",
      ],
      answer: "A way to extend the Kubernetes API with your own resources",
    },
    {
      question: "What is an operator in Kubernetes?",
      options: [
        "A method of packaging, deploying, and managing a Kubernetes application",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
        "A way to store data",
      ],
      answer: "A method of packaging, deploying, and managing a Kubernetes application",
    },
    {
      question: "What is a service mesh?",
      options: [
        "A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
        "A way to store data",
      ],
      answer: "A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable",
    },
    {
      question: "What is Istio?",
      options: [
        "An open source service mesh",
        "A container orchestration engine",
        "A container runtime",
        "A container image format",
      ],
      answer: "An open source service mesh",
    },
    {
      question: "What is Prometheus?",
      options: [
        "An open-source monitoring and alerting toolkit",
        "A container orchestration engine",
        "A container runtime",
        "A container image format",
      ],
      answer: "An open-source monitoring and alerting toolkit",
    },
    {
      question: "What is Grafana?",
      options: [
        "An open-source platform for monitoring and observability",
        "A container orchestration engine",
        "A container runtime",
        "A container image format",
      ],
      answer: "An open-source platform for monitoring and observability",
    },
    {
      question: "What is the difference between a rolling update and a blue-green deployment?",
      options: [
        "A rolling update gradually replaces old pods with new ones, while a blue-green deployment creates a new environment with the new version and then switches traffic to it",
        "A blue-green deployment gradually replaces old pods with new ones, while a rolling update creates a new environment with the new version and then switches traffic to it",
        "There is no difference",
        "A rolling update is for stateless applications, while a blue-green deployment is for stateful applications",
      ],
      answer: "A rolling update gradually replaces old pods with new ones, while a blue-green deployment creates a new environment with the new version and then switches traffic to it",
    },
    {
      question: "What is a canary deployment?",
      options: [
        "A way to release a new version of an application to a small subset of users",
        "A way to release a new version of an application to all users at once",
        "A way to release a new version of an application to a specific region",
        "A way to release a new version of an application to a specific platform",
      ],
      answer: "A way to release a new version of an application to a small subset of users",
    },
    {
      question: "What is a liveness probe in Kubernetes?",
      options: [
        "A way to check if a container is still running",
        "A way to check if a container is ready to receive traffic",
        "A way to check if a container has enough resources",
        "A way to check if a container is secure",
      ],
      answer: "A way to check if a container is still running",
    },
    {
      question: "What is a readiness probe in Kubernetes?",
      options: [
        "A way to check if a container is ready to receive traffic",
        "A way to check if a container is still running",
        "A way to check if a container has enough resources",
        "A way to check if a container is secure",
      ],
      answer: "A way to check if a container is ready to receive traffic",
    },
  ],
};

export default kubernetesQuestions;
