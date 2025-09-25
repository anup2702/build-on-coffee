
const iacQuestions = {
  beginner: [
    {
      question: "What does IaC stand for?",
      options: [
        "Internet as Code",
        "Infrastructure as Code",
        "Integration as Code",
        "Information as Code",
      ],
      answer: "Infrastructure as Code",
    },
    {
      question: "What is the primary goal of Infrastructure as Code (IaC)?",
      options: [
        "To manually configure infrastructure",
        "To manage and provision infrastructure through code instead of manual processes",
        "To write application code faster",
        "To store data in the cloud",
      ],
      answer: "To manage and provision infrastructure through code instead of manual processes",
    },
    {
      question: "Which of the following is a benefit of using IaC?",
      options: [
        "Increased manual errors",
        "Slower deployment times",
        "Consistency and repeatability",
        "Reduced collaboration",
      ],
      answer: "Consistency and repeatability",
    },
    {
      question: "What type of files are commonly used to define infrastructure in IaC?",
      options: [
        "Word documents",
        "Spreadsheets",
        "Configuration files (e.g., YAML, JSON)",
        "Image files",
      ],
      answer: "Configuration files (e.g., YAML, JSON)",
    },
    {
      question: "Which of these is a popular IaC tool?",
      options: [
        "Microsoft Paint",
        "Terraform",
        "Google Chrome",
        "Spotify",
      ],
      answer: "Terraform",
    },
    {
      question: "What is idempotence in the context of IaC?",
      options: [
        "The ability to run a configuration multiple times and always get the same result",
        "The ability to run a configuration once and get a different result each time",
        "The ability to run a configuration only once",
        "The ability to run a configuration on multiple servers",
      ],
      answer: "The ability to run a configuration multiple times and always get the same result",
    },
    {
      question: "What is a declarative approach to IaC?",
      options: [
        "You tell the system how to achieve a desired state",
        "You describe the desired state of the infrastructure, and the tool figures out how to achieve it",
        "You manually configure the infrastructure",
        "You write scripts to configure the infrastructure",
      ],
      answer: "You describe the desired state of the infrastructure, and the tool figures out how to achieve it",
    },
    {
      question: "What is an imperative approach to IaC?",
      options: [
        "You describe the desired state of the infrastructure",
        "You tell the system how to achieve a desired state step-by-step",
        "You manually configure the infrastructure",
        "You use a graphical user interface to configure the infrastructure",
      ],
      answer: "You tell the system how to achieve a desired state step-by-step",
    },
    {
      question: "Which version control system is commonly used with IaC?",
      options: [
        "SVN",
        "Git",
        "Mercurial",
        "Perforce",
      ],
      answer: "Git",
    },
    {
      question: "What is a 'state file' in IaC tools like Terraform?",
      options: [
        "A file that stores application logs",
        "A file that stores the current state of your managed infrastructure",
        "A file that stores user data",
        "A file that stores configuration for the IaC tool itself",
      ],
      answer: "A file that stores the current state of your managed infrastructure",
    },
  ],
  intermediate: [
    {
      question: "What is the difference between Terraform and Ansible?",
      options: [
        "Terraform is for configuration management, Ansible is for provisioning",
        "Terraform is for provisioning, Ansible is for configuration management",
        "They are both the same",
        "Terraform is open source, Ansible is proprietary",
      ],
      answer: "Terraform is for provisioning, Ansible is for configuration management",
    },
    {
      question: "What is a provider in Terraform?",
      options: [
        "A cloud service provider (e.g., AWS, Azure, GCP)",
        "A plugin that allows Terraform to interact with a specific cloud or on-premise platform",
        "A type of resource in Terraform",
        "A module in Terraform",
      ],
      answer: "A plugin that allows Terraform to interact with a specific cloud or on-premise platform",
    },
    {
      question: "What is a resource in Terraform?",
      options: [
        "A physical server",
        "A logical infrastructure object managed by Terraform (e.g., a virtual machine, a network, a database)",
        "A configuration file",
        "A module",
      ],
      answer: "A logical infrastructure object managed by Terraform (e.g., a virtual machine, a network, a database)",
    },
    {
      question: "What is a module in Terraform?",
      options: [
        "A single Terraform configuration file",
        "A container for multiple resources that are used together",
        "A plugin for Terraform",
        "A state file",
      ],
      answer: "A container for multiple resources that are used together",
    },
    {
      question: "What is the `terraform plan` command used for?",
      options: [
        "To apply the changes to the infrastructure",
        "To destroy the infrastructure",
        "To show what changes will be made to your infrastructure",
        "To initialize a Terraform working directory",
      ],
      answer: "To show what changes will be made to your infrastructure",
    },
    {
      question: "What is the `terraform apply` command used for?",
      options: [
        "To show what changes will be made to your infrastructure",
        "To destroy the infrastructure",
        "To apply the changes to the infrastructure",
        "To initialize a Terraform working directory",
      ],
      answer: "To apply the changes to the infrastructure",
    },
    {
      question: "What is a remote backend in Terraform?",
      options: [
        "A way to store your Terraform configuration files remotely",
        "A way to store your Terraform state file remotely",
        "A way to store your Terraform modules remotely",
        "A way to store your Terraform providers remotely",
      ],
      answer: "A way to store your Terraform state file remotely",
    },
    {
      question: "What is a provisioner in Terraform?",
      options: [
        "A way to execute scripts or commands on a local or remote machine as part of a resource's lifecycle",
        "A way to define resources",
        "A way to define modules",
        "A way to define providers",
      ],
      answer: "A way to execute scripts or commands on a local or remote machine as part of a resource's lifecycle",
    },
    {
      question: "What is a data source in Terraform?",
      options: [
        "A way to fetch information about existing infrastructure resources",
        "A way to create new infrastructure resources",
        "A way to destroy infrastructure resources",
        "A way to modify infrastructure resources",
      ],
      answer: "A way to fetch information about existing infrastructure resources",
    },
    {
      question: "What is a sensitive variable in Terraform?",
      options: [
        "A variable that contains sensitive information (e.g., passwords, API keys) that should not be displayed in logs",
        "A variable that is difficult to change",
        "A variable that is only used in certain environments",
        "A variable that is only used by certain users",
      ],
      answer: "A variable that contains sensitive information (e.g., passwords, API keys) that should not be displayed in logs",
    },
  ],
  advanced: [
    {
      question: "What is drift detection in IaC?",
      options: [
        "The process of identifying differences between the actual infrastructure state and the desired state defined in code",
        "The process of automatically applying changes to the infrastructure",
        "The process of destroying the infrastructure",
        "The process of creating the infrastructure",
      ],
      answer: "The process of identifying differences between the actual infrastructure state and the desired state defined in code",
    },
    {
      question: "What is a custom resource in Kubernetes (CRD) and how does it relate to IaC?",
      options: [
        "A way to extend the Kubernetes API with your own resources, often defined and managed using IaC tools",
        "A way to manage a set of pods",
        "A way to expose an application running on a set of pods as a network service",
        "A way to store data",
      ],
      answer: "A way to extend the Kubernetes API with your own resources, often defined and managed using IaC tools",
    },
    {
      question: "What is a policy as code approach in IaC?",
      options: [
        "Defining and enforcing security, compliance, and operational policies through code",
        "Defining infrastructure through code",
        "Defining application logic through code",
        "Defining user roles through code",
      ],
      answer: "Defining and enforcing security, compliance, and operational policies through code",
    },
    {
      question: "What is the purpose of a 'taint' and 'toleration' in Kubernetes, and how can IaC manage them?",
      options: [
        "Taints prevent pods from being scheduled on certain nodes, and tolerations allow pods to be scheduled on tainted nodes; IaC can define these properties for nodes and pods",
        "Taints allow pods to be scheduled on certain nodes, and tolerations prevent pods from being scheduled on tainted nodes; IaC can define these properties for nodes and pods",
        "They are used for network security",
        "They are used for storage management",
      ],
      answer: "Taints prevent pods from being scheduled on certain nodes, and tolerations allow pods to be scheduled on tainted nodes; IaC can define these properties for nodes and pods",
    },
    {
      question: "How does IaC contribute to immutable infrastructure?",
      options: [
        "IaC allows infrastructure to be modified after deployment",
        "IaC ensures that infrastructure components are never modified after deployment; instead, new versions are deployed",
        "IaC makes infrastructure mutable",
        "IaC has no relation to immutable infrastructure",
      ],
      answer: "IaC ensures that infrastructure components are never modified after deployment; instead, new versions are deployed",
    },
    {
      question: "What is a GitOps workflow in the context of IaC?",
      options: [
        "A workflow where infrastructure changes are applied manually",
        "A workflow where infrastructure changes are managed through Git repositories, with automated deployments triggered by Git events",
        "A workflow where infrastructure changes are managed through a graphical user interface",
        "A workflow where infrastructure changes are managed through a database",
      ],
      answer: "A workflow where infrastructure changes are managed through Git repositories, with automated deployments triggered by Git events",
    },
    {
      question: "What is the role of a secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) in an IaC pipeline?",
      options: [
        "To store application code",
        "To securely store and manage sensitive information (e.g., API keys, database credentials) that IaC tools need to provision resources",
        "To store infrastructure configuration files",
        "To store logs",
      ],
      answer: "To securely store and manage sensitive information (e.g., API keys, database credentials) that IaC tools need to provision resources",
    },
    {
      question: "What is a 'pull request' or 'merge request' workflow for IaC changes?",
      options: [
        "A process where infrastructure changes are directly applied to production without review",
        "A process where proposed infrastructure changes are reviewed, tested, and approved before being merged into the main branch and automatically applied",
        "A process where infrastructure changes are only reviewed after they have been applied",
        "A process where infrastructure changes are only tested after they have been applied",
      ],
      answer: "A process where proposed infrastructure changes are reviewed, tested, and approved before being merged into the main branch and automatically applied",
    },
    {
      question: "What is the concept of 'desired state configuration' in IaC?",
      options: [
        "Manually configuring the infrastructure to a desired state",
        "Defining the target configuration of a system in a declarative way, allowing tools to enforce and maintain that state",
        "Writing scripts to imperatively configure the infrastructure",
        "Using a graphical user interface to configure the infrastructure",
      ],
      answer: "Defining the target configuration of a system in a declarative way, allowing tools to enforce and maintain that state",
    },
    {
      question: "How can IaC help with disaster recovery?",
      options: [
        "By manually rebuilding infrastructure after a disaster",
        "By allowing the rapid and consistent re-provisioning of infrastructure in a new location from code",
        "By preventing disasters from happening",
        "By backing up data",
      ],
      answer: "By allowing the rapid and consistent re-provisioning of infrastructure in a new location from code",
    },
  ],
};

export default iacQuestions;
