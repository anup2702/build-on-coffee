
const containersDockerQuestions = {
  beginner: [
    {
      question: "What is a container?",
      options: [
        "A type of virtual machine",
        "A lightweight, standalone, executable package of software that includes everything needed to run it",
        "A type of cloud storage",
        "A security protocol",
      ],
      answer: "A lightweight, standalone, executable package of software that includes everything needed to run it",
    },
    {
      question: "What is Docker?",
      options: [
        "A programming language",
        "A platform for developing, shipping, and running applications in containers",
        "A type of cloud storage",
        "A security protocol",
      ],
      answer: "A platform for developing, shipping, and running applications in containers",
    },
    {
      question: "What is a Docker image?",
      options: [
        "A running instance of a container",
        "A template for creating a container",
        "A type of cloud storage",
        "A security protocol",
      ],
      answer: "A template for creating a container",
    },
    {
      question: "What is a Dockerfile?",
      options: [
        "A file that contains the source code for an application",
        "A script that contains instructions for building a Docker image",
        "A file that contains the configuration for a Docker container",
        "A file that contains the logs for a Docker container",
      ],
      answer: "A script that contains instructions for building a Docker image",
    },
    {
      question: "What is the command to build a Docker image?",
      options: [
        "docker run",
        "docker build",
        "docker push",
        "docker pull",
      ],
      answer: "docker build",
    },
    {
      question: "What is the command to run a Docker container?",
      options: [
        "docker run",
        "docker build",
        "docker push",
        "docker pull",
      ],
      answer: "docker run",
    },
    {
      question: "What is Docker Hub?",
      options: [
        "A place to store Docker images",
        "A place to store Docker containers",
        "A place to store Dockerfiles",
        "A place to store Docker logs",
      ],
      answer: "A place to store Docker images",
    },
    {
      question: "What is the difference between a Docker image and a Docker container?",
      options: [
        "There is no difference",
        "A Docker image is a running instance of a Docker container",
        "A Docker container is a running instance of a Docker image",
        "A Docker image is a template for creating a Docker container",
      ],
      answer: "A Docker container is a running instance of a Docker image",
    },
    {
      question: "What is the command to list all running Docker containers?",
      options: [
        "docker ps",
        "docker images",
        "docker logs",
        "docker inspect",
      ],
      answer: "docker ps",
    },
    {
      question: "What is the command to stop a Docker container?",
      options: [
        "docker stop",
        "docker kill",
        "docker rm",
        "docker rmi",
      ],
      answer: "docker stop",
    },
  ],
  intermediate: [
    {
      question: "What is a Docker volume?",
      options: [
        "A way to persist data in a Docker container",
        "A way to share data between Docker containers",
        "Both of the above",
        "None of the above",
      ],
      answer: "Both of the above",
    },
    {
      question: "What is a Docker network?",
      options: [
        "A way for Docker containers to communicate with each other",
        "A way for Docker containers to communicate with the outside world",
        "Both of the above",
        "None of the above",
      ],
      answer: "Both of the above",
    },
    {
      question: "What is Docker Compose?",
      options: [
        "A tool for defining and running multi-container Docker applications",
        "A tool for building Docker images",
        "A tool for running Docker containers",
        "A tool for storing Docker images",
      ],
      answer: "A tool for defining and running multi-container Docker applications",
    },
    {
      question: "What is a Docker swarm?",
      options: [
        "A single Docker host",
        "A cluster of Docker hosts",
        "A single Docker container",
        "A cluster of Docker containers",
      ],
      answer: "A cluster of Docker hosts",
    },
    {
      question: "What is the difference between `docker stop` and `docker kill`?",
      options: [
        "`docker stop` sends a SIGTERM signal, while `docker kill` sends a SIGKILL signal",
        "`docker kill` sends a SIGTERM signal, while `docker stop` sends a SIGKILL signal",
        "There is no difference",
        "`docker stop` is for development, while `docker kill` is for production",
      ],
      answer: "`docker stop` sends a SIGTERM signal, while `docker kill` sends a SIGKILL signal",
    },
    {
      question: "What is the purpose of the `.dockerignore` file?",
      options: [
        "To specify which files and directories to ignore when building a Docker image",
        "To specify which files and directories to ignore when running a Docker container",
        "To specify which files and directories to ignore when pushing a Docker image",
        "To specify which files and directories to ignore when pulling a Docker image",
      ],
      answer: "To specify which files and directories to ignore when building a Docker image",
    },
    {
      question: "What is a multi-stage build in a Dockerfile?",
      options: [
        "A way to build multiple Docker images from a single Dockerfile",
        "A way to reduce the size of a Docker image by using multiple build stages",
        "A way to build a Docker image for multiple platforms",
        "A way to build a Docker image for multiple architectures",
      ],
      answer: "A way to reduce the size of a Docker image by using multiple build stages",
    },
    {
      question: "What is the `EXPOSE` instruction in a Dockerfile?",
      options: [
        "To expose a port to the outside world",
        "To expose a port to other Docker containers",
        "To document which ports the container listens on",
        "To map a port from the host to the container",
      ],
      answer: "To document which ports the container listens on",
    },
    {
      question: "What is the difference between `COPY` and `ADD` in a Dockerfile?",
      options: [
        "`COPY` can copy files from a URL, while `ADD` cannot",
        "`ADD` can copy files from a URL, while `COPY` cannot",
        "There is no difference",
        "`COPY` is for development, while `ADD` is for production",
      ],
      answer: "`ADD` can copy files from a URL, while `COPY` cannot",
    },
    {
      question: "What is a Docker registry?",
      options: [
        "A place to store Docker images",
        "A place to store Docker containers",
        "A place to store Dockerfiles",
        "A place to store Docker logs",
      ],
      answer: "A place to store Docker images",
    },
  ],
  advanced: [
    {
      question: "What is a container orchestration engine?",
      options: [
        "A tool for managing and scaling containerized applications",
        "A tool for building container images",
        "A tool for running containers",
        "A tool for storing container images",
      ],
      answer: "A tool for managing and scaling containerized applications",
    },
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
      question: "What is a container runtime?",
      options: [
        "A tool for managing and scaling containerized applications",
        "A tool for building container images",
        "A tool for running containers",
        "A tool for storing container images",
      ],
      answer: "A tool for running containers",
    },
    {
      question: "What is the Open Container Initiative (OCI)?",
      options: [
        "A standard for container image format and runtime",
        "A container orchestration engine",
        "A container runtime",
        "A container registry",
      ],
      answer: "A standard for container image format and runtime",
    },
    {
      question: "What is a sidecar container?",
      options: [
        "A container that runs alongside the main container in a pod",
        "A container that runs before the main container in a pod",
        "A container that runs after the main container in a pod",
        "A container that runs on a different node than the main container",
      ],
      answer: "A container that runs alongside the main container in a pod",
    },
    {
      question: "What is a container security scanner?",
      options: [
        "A tool for scanning container images for vulnerabilities",
        "A tool for scanning running containers for vulnerabilities",
        "Both of the above",
        "None of the above",
      ],
      answer: "Both of the above",
    },
  ],
};

export default containersDockerQuestions;
