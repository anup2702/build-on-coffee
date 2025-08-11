export const cloudComputingSteps = [
  {
    title: "1. Cloud Fundamentals",
    description:
      "Start your cloud computing journey by understanding the core concepts, deployment models, and service models. In 2025, with the rise of hybrid and multi-cloud strategies, mastering these fundamentals is crucial for leveraging cloud technologies effectively across industries.",
    topics: [
      "Cloud Computing Models (IaaS, PaaS, SaaS)",
      "Deployment Models (Public, Private, Hybrid, Multi-Cloud)",
      "Cloud Benefits and Challenges",
      "Shared Responsibility Model",
      "Emerging Trends (Edge Computing, Serverless, AI in Cloud)"
    ],
    resources: [
      { name: "AWS Cloud Computing Concepts", link: "https://aws.amazon.com/what-is-cloud-computing/" },
      { name: "Microsoft Azure Fundamentals", link: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/" },
      { name: "Google Cloud Basics", link: "https://cloud.google.com/docs/overview" },
      { name: "NIST Definition of Cloud Computing", link: "https://csrc.nist.gov/publications/detail/sp/800-145/final" }
    ],
    videos: [
      { name: "What is Cloud Computing", link: "https://youtu.be/8C_kHJ5YEiA?si=deihsBE1T3M_4AcS" },
      { name: "Simplilearn: Cloud Computing Full Course", link: "https://youtu.be/EN4fEbcFZ_E?si=HVkj18QI5HWVhKn1" }
    ],
  },
  {
    title: "2. Free Tier Setup (AWS, Azure, GCP)",
    description:
      "Explore the free tiers of major cloud providers to gain hands-on experience without upfront costs. Learn to set up accounts, navigate consoles, and deploy basic resources on AWS, Azure, and Google Cloud Platform (GCP) to build a foundation for cloud experimentation.",
    topics: [
      "Creating Accounts and Accessing Free Tiers",
      "Navigating AWS Management Console",
      "Exploring Azure Portal",
      "Using Google Cloud Console",
      "Setting Up Basic Resources (VMs, Storage, Databases)"
    ],
    resources: [
      { name: "AWS Free Tier", link: "https://aws.amazon.com/free/" },
      { name: "Azure Free Account", link: "https://azure.microsoft.com/en-us/free/" },
      { name: "Google Cloud Free Tier", link: "https://cloud.google.com/free" },
      { name: "AWS Getting Started Guide", link: "https://aws.amazon.com/getting-started/" },
      { name: "Azure Quickstart Center", link: "https://learn.microsoft.com/en-us/azure/guides/developer/azure-developer-guide" },
      { name: "GCP Quickstarts", link: "https://cloud.google.com/docs/get-started" }
    ],
    videos: [
      { name: "AWS Free Tier Setup", link: "https://youtu.be/QDymcZ5xYow?si=DtdBV0JWDIjA-D4S" },
      { name: "Microsoft Azure: Getting Started", link: "https://www.youtube.com/watch?v=NPEsD6n9A_I" },
      { name: "Google Cloud Platform Tutorial for Beginners", link: "https://youtu.be/OwF9-K5JFb8?si=JHthpN13-H49_Mw_" }
    ],
  },
  {
    title: "3. Cloud Services (Compute, Storage, Databases)",
    description:
      "Master the core cloud services offered by major providers, including compute, storage, and database solutions. Learn to deploy and manage virtual machines, object storage, and databases to build scalable and reliable cloud-based applications.",
    topics: [
      "Compute Services (AWS EC2, Azure VMs, GCP Compute Engine)",
      "Storage Solutions (S3, Azure Blob Storage, Google Cloud Storage)",
      "Database Services (RDS, Azure SQL Database, Cloud Spanner)",
      "Scaling and Load Balancing",
      "Serverless Computing (AWS Lambda, Azure Functions, Google Cloud Functions)"
    ],
    resources: [
      { name: "AWS EC2 Documentation", link: "https://docs.aws.amazon.com/ec2/" },
      { name: "Azure Virtual Machines", link: "https://learn.microsoft.com/en-us/azure/virtual-machines/" },
      { name: "Google Compute Engine", link: "https://cloud.google.com/compute" },
      { name: "AWS S3 Documentation", link: "https://docs.aws.amazon.com/s3/" },
      { name: "Azure Blob Storage", link: "https://learn.microsoft.com/en-us/azure/storage/blobs/" },
      { name: "Google Cloud Storage", link: "https://cloud.google.com/storage" },
      { name: "AWS RDS Documentation", link: "https://docs.aws.amazon.com/rds/" },
      { name: "Azure SQL Database", link: "https://learn.microsoft.com/en-us/azure/azure-sql/" },
      { name: "Google Cloud Spanner", link: "https://cloud.google.com/spanner" }
    ],
    videos: [
      { name: "AWS EC2 Tutorial", link: "https://youtu.be/Ens8asZLomk?si=pDpnW32gSiJDqw1K" },
      { name: "Azure Blob Storage Tutorial", link: "https://youtu.be/_Qlkvd4ZQuo?si=yP_S-wdUo8jqFH0l" },
      { name: "GCP Compute Engine Basics", link: "https://youtu.be/-zyxje3K1JY?si=v3cFAf8S3rwKmlJw" }
    ],
  },
  {
    title: "4. DevOps Integration",
    description:
      "Integrate DevOps practices into cloud workflows to streamline development and deployment. Learn to automate infrastructure, manage code repositories, and implement monitoring to enhance collaboration and efficiency in cloud environments.",
    topics: [
      "Infrastructure as Code (IaC) with Terraform or CloudFormation",
      "Version Control with Git",
      "Continuous Integration and Continuous Deployment (CI/CD)",
      "Monitoring and Logging (CloudWatch, Azure Monitor, GCP Operations)",
      "Collaboration Tools for DevOps Teams"
    ],
    resources: [
      { name: "Terraform Documentation", link: "https://www.terraform.io/docs" },
      { name: "AWS CloudFormation", link: "https://docs.aws.amazon.com/cloudformation/" },
      { name: "Azure DevOps Documentation", link: "https://learn.microsoft.com/en-us/azure/devops/" },
      { name: "Google Cloud Operations", link: "https://cloud.google.com/products/operations" },
      { name: "Pro Git Book", link: "https://git-scm.com/book/en/v2" }
    ],
    videos: [
      { name: "Fireship: DevOps CI/CD Explained in 100 Seconds", link: "https://youtu.be/scEDHsr3APg?si=go0JpxC9evd5WiQS" },
      { name: "Terraform Tutorial for Beginners", link: "https://www.youtube.com/watch?v=SLB_c_ayRMo" },
      { name: "AWS CloudFormation Tutorial", link: "https://youtu.be/JmjXWKO7hWg?si=amJgO9asRbD2m-1J" }
    ],
  },
  {
    title: "5. CI/CD Pipelines",
    description:
      "Implement Continuous Integration and Continuous Deployment (CI/CD) pipelines to automate software delivery. Use tools like GitHub Actions, Jenkins, or cloud-native solutions to ensure rapid, reliable, and secure deployments.",
    topics: [
      "Setting Up CI/CD Pipelines",
      "Automating Builds and Tests",
      "Deploying to Cloud Environments",
      "Pipeline Security Best Practices",
      "Using Cloud-Native CI/CD Tools (AWS CodePipeline, Azure Pipelines, Google Cloud Build)"
    ],
    resources: [
      { name: "AWS CodePipeline Documentation", link: "https://docs.aws.amazon.com/codepipeline/" },
      { name: "Azure Pipelines", link: "https://learn.microsoft.com/en-us/azure/devops/pipelines/" },
      { name: "Google Cloud Build", link: "https://cloud.google.com/build" },
      { name: "GitHub Actions Documentation", link: "https://docs.github.com/en/actions" },
      { name: "Jenkins Documentation", link: "https://www.jenkins.io/doc/" }
    ],
    videos: [
      { name: "GitHub Actions CI/CD Tutorial", link: "https://youtu.be/R8_veQiYBjI?si=rSqGzq6inECnMj2N" },
      { name: "AWS CodePipeline Tutorial", link: "https://youtu.be/NwzJCSPSPZs?si=AwdwSwsKT5MUVfgT" },
      { name: "Azure Pipelines in 10 Minutes", link: "https://youtu.be/XTjV483nIuQ?si=-DZmQX0Kp6BY9nFJ" }
    ],
  },
  {
    title: "6. Kubernetes",
    description:
      "Learn Kubernetes, the leading container orchestration platform, to manage containerized applications at scale. Understand how to deploy, scale, and manage applications in cloud environments using Kubernetes for resilience and efficiency.",
    topics: [
      "Kubernetes Architecture (Pods, Nodes, Clusters)",
      "Deploying Applications with Kubernetes",
      "Service Discovery and Load Balancing",
      "Scaling and Auto-Scaling",
      "Managing Kubernetes with Helm"
    ],
    resources: [
      { name: "Kubernetes Official Documentation", link: "https://kubernetes.io/docs/" },
      { name: "AWS EKS Documentation", link: "https://docs.aws.amazon.com/eks/" },
      { name: "Azure Kubernetes Service (AKS)", link: "https://learn.microsoft.com/en-us/azure/aks/" },
      { name: "Google Kubernetes Engine (GKE)", link: "https://cloud.google.com/kubernetes-engine" },
      { name: "Helm Documentation", link: "https://helm.sh/docs/" }
    ],
    videos: [
      { name: "Fireship: Kubernetes in 100 Seconds", link: "https://youtu.be/PziYflu8cB8?si=pI6qh8OIA5AfalIL" },
      { name: "Kubernetes Tutorial for Beginners", link: "https://www.youtube.com/watch?v=X48VuDVv0do" },
      { name: "Helm Tutorial", link: "https://youtu.be/w51lDVuRWuk?si=K-KpnX7E9fxELt0g" }
    ],
  },
  {
    title: "7. Certifications and Learning Paths",
    description:
      "Pursue industry-recognized certifications to validate your cloud computing skills. Explore learning paths and hands-on labs offered by AWS, Azure, and GCP to prepare for certifications like AWS Solutions Architect, Azure Administrator, and Google Cloud Professional certifications.",
    topics: [
      "AWS Certified Solutions Architect – Associate",
      "Microsoft Certified: Azure Administrator Associate",
      "Google Cloud Professional Cloud Architect",
      "Preparing for Certification Exams",
      "Hands-On Labs and Practice Environments"
    ],
    resources: [
      { name: "AWS Certification", link: "https://aws.amazon.com/certification/" },
      { name: "Microsoft Azure Certifications", link: "https://learn.microsoft.com/en-us/certifications/browse/?type=role-based&technology=azure" },
      { name: "Google Cloud Certifications", link: "https://cloud.google.com/learn/certification" },
      { name: "ACloudGuru (Pluralsight)", link: "https://www.pluralsight.com/cloud-guru" },
      { name: "Qwiklabs (GCP Hands-On Labs)", link: "https://www.qwiklabs.com/" }
    ],
    videos: [
      { name: "AWS Certified Solutions Architect Guide", link: "https://www.youtube.com/watch?v=Ia-UEYYR44s" },
      { name: "Azure Administrator Certification Prep", link: "https://youtu.be/10PbGbTUSAg?si=fm52GvMzNZN-9n6X" },
      { name: "Google Cloud Architect Certification", link: "https://youtu.be/9vvS47MAFcA?si=JMKEy01CtesUXglj" }
    ],
  },
];