export type Experience = {
    company: string;
    role: string;
    period: string;
    location: string;
    employmentType: string;
    highlights: string[];
    tech: string[];
};

export type SkillGroup = {
    category: string;
    items: string[];
};

// TODO: replace the placeholder github URL with your real profile.
export const profile = {
    name: "Vinay Datta Bhaskaruni",
    role: "Software Engineer 1 · Cloud & DevOps",
    headline:
        "AWS · Azure · GCP · CI/CD · Kubernetes · Docker · Terraform · Python",
    tagline:
        "I build, scale and support highly available distributed systems across AWS, Azure and GCP — automating Kubernetes platforms end to end, from provisioning to observability and security.",
    location: "Bengaluru, Karnataka, India",
    workPreference: "Hybrid · Remote · On-site",
    email: "vinaydattabhaskaruni@gmail.com",
    phone: "+91 73864 12992",
    github: "https://github.com/vinaydatta",
    linkedin: "https://www.linkedin.com/in/vinaydatta-bhaskaruni/",
    resumeFile: "/Resume.pdf",
    summary: [
        "I engineer self-service infrastructure platforms that eliminate manual operations at scale. As a Software Engineer at Motorola Solutions, I architected and delivered a multi-cloud Kubernetes provisioning system that reduced cluster deployment time from three weeks to two hours — a 99.6% efficiency gain — while maintaining strict security and governance standards across AWS, Azure and GCP environments.",
        "The platform I built operates as a production-grade service: a Cluster API foundation that provisions self-managed, EKS, AKS and GKE clusters through declarative APIs, backed by cooperating microservices (Core Service, Service Provider, Helm Service) that validate requests, orchestrate workflows and deploy infrastructure. An operator-driven service catalogue extends this foundation, automatically installing 32 platform services — covering observability, security and cluster infrastructure — eliminating the runbooks teams previously relied on and cutting manual deployment effort by 90%.",
        "My technical approach centers on reliability engineering principles: every operation is idempotent and self-correcting, built with Python and Node.js microservices, delivered through GitHub Actions pipelines with automated testing and policy enforcement, and secured with least-privilege IAM and cloud-native secret management designed into the architecture from inception. I own the full lifecycle — from design and implementation through incident response and capacity planning for high-traffic enterprise workloads.",
        "My foundation in distributed systems began with edge computing: designing secure zero-touch device onboarding for a private edge cloud and building a self-healing Podman orchestration controller that brought operator-pattern reliability to resource-constrained hardware. This experience established the engineering principles that guide my work today — assume failure, design for observability, and deliver systems operators can reason about under pressure.",
    ],
} as const;

export const topSkills = [
    "DevOps",
    "Amazon Web Services (AWS)",
    "Terraform",
    "Python",
    "Site Reliability Engineering",
];

export const stats = [
    { value: "4.5+", label: "Years in cloud & DevOps" },
    { value: "99.6%", label: "Cluster provisioning speed-up" },
    { value: "32", label: "Platform services automated" },
    { value: "90%", label: "Deployment time reduction" },
];

export const experience: Experience[] = [
    {
        company: "Motorola Solutions",
        role: "Software Engineer 1",
        period: "Aug 2026 — Present",
        location: "Bengaluru, KA",
        employmentType: "Full-time · Hybrid",
        highlights: [
            "Own the multi-cloud Kubernetes provisioning platform delivering production-grade infrastructure to internal teams as a self-service product across AWS, Azure and GCP environments.",
            "Provision and govern enterprise EKS, AKS and GKE estates using Terraform and Python automation, enforcing RBAC, least-privilege IAM and cloud security baselines consistently across all environments.",
            "Manage CI/CD pipelines deploying 30+ platform services through Helm charts, reducing manual deployment effort by 90% and accelerating release cycles.",
            "Lead incident response and root cause analysis for high-traffic enterprise workloads, translating findings into actionable capacity planning and observability enhancements.",
        ],
        tech: [
            "Terraform",
            "Kubernetes",
            "EKS",
            "AKS",
            "GKE",
            "Helm",
            "Python",
            "GitHub Actions",
            "Grafana",
            "Prometheus",
        ],
    },
    {
        company: "Motorola Solutions",
        role: "Software Engineer",
        period: "Jun 2023 — Jul 2026",
        location: "Bengaluru, KA",
        employmentType: "Full-time · Hybrid",
        highlights: [
            "Led development of Python and Node.js microservices to automate Kubernetes cluster provisioning using Cluster API, supporting self-managed clusters, EKS, AKS and GKE — reducing cluster bring-up time by 99.6% from 3 weeks to 2 hours.",
            "Built idempotent provisioning services for full cluster lifecycle management (create, scale, upgrade, delete) with robust retry logic and health checks ensuring reliable operations.",
            "Created Python CLIs and automation scripts for day-2 operations including node pool management and rolling upgrades, enabling teams to manage infrastructure independently.",
            "Designed operator-driven provisioning platform automating installation of 32 infrastructure, observability and security services on Kubernetes, eliminating manual runbooks.",
            "Architected request flow where Core Service validates and normalizes requests, Service Provider orchestrates workflows, and Helm Service deploys operators and applies custom resources for reliable service installation.",
            "Containerized all provisioning services and implemented CI/CD pipelines through GitHub Actions with enforced linting, testing and policy gates before deployment.",
            "Hardened cloud access implementing least-privilege IAM role assignments and cloud-native secret management, aligning with organizational security baselines.",
            "Optimized cluster cost and reliability through autoscaling policies and standardized machine sets, enabling right-sizing across all environments.",
            "Scaled platform throughput with parallelized installs and reusable Helm templates, reducing duplicate configuration and improving change velocity.",
        ],
        tech: [
            "Kubernetes",
            "Cluster API",
            "EKS",
            "AKS",
            "GKE",
            "Helm",
            "Python",
            "Node.js",
            "GitHub Actions",
            "Terraform",
        ],
    },
    {
        company: "Motorola Solutions",
        role: "Intern",
        period: "Apr 2022 — May 2023",
        location: "Bengaluru, KA",
        employmentType: "Internship · Remote",
        highlights: [
            "Built end-to-end GCP data pipeline ingesting Jira and Azure DevOps data weekly, powering executive Looker Studio dashboards used in Monday business reviews.",
            "Designed secure device onboarding and registration workflow for private edge cloud, enabling zero-touch provisioning, unique device identity and auditable enrollment with PKI/JWT foundation.",
            "Developed operator-style controller orchestrating Podman containers on edge devices with validation, health checks, dependency ordering and self-healing capabilities, streamlining deployments from manual multi-step processes to one-click releases.",
        ],
        tech: [
            "Podman",
            "systemd",
            "Operator pattern",
            "Edge/IoT",
            "Redis",
            "CI/CD",
            "GCP",
            "Looker Studio",
        ],
    },
];

export const skills: SkillGroup[] = [
    {
        category: "Cloud Platforms",
        items: [
            "AWS (EC2, EKS, S3, IAM, VPC, Route 53, Lambda)",
            "Azure (VM, VNet, AKS, Cosmos DB, Service Bus)",
            "GCP (GKE, Firestore, Pub/Sub, Artifact Registry)",
        ],
    },
    {
        category: "Containers & Orchestration",
        items: [
            "Kubernetes",
            "Docker",
            "Podman",
            "EKS",
            "AKS",
            "GKE",
            "Cluster API",
            "Custom Operators",
        ],
    },
    {
        category: "Infrastructure as Code & CI/CD",
        items: [
            "Terraform",
            "Helm",
            "GitHub Actions",
            "GitOps",
            "CloudFormation",
            "kubectl",
        ],
    },
    {
        category: "Programming & Scripting",
        items: ["Python", "Node.js", "Bash", "PowerShell", "Golang", "PL/SQL"],
    },
    {
        category: "Observability & Monitoring",
        items: ["Grafana", "Prometheus", "Kibana", "Looker Studio"],
    },
    {
        category: "Databases",
        items: ["MySQL", "Azure Cosmos DB", "GCP Firestore", "DynamoDB", "Redis"],
    },
    {
        category: "Distributed Systems & Architecture",
        items: [
            "Microservices",
            "REST APIs",
            "High-availability systems",
            "Load balancing",
            "Autoscaling",
        ],
    },
    {
        category: "Development & Collaboration",
        items: [
            "Git",
            "Linux (RHEL, Ubuntu)",
            "Windows",
            "JIRA",
            "Confluence",
            "Agile/Scrum",
        ],
    },
    {
        category: "Site Reliability Engineering",
        items: [
            "Incident Management",
            "Root Cause Analysis",
            "Capacity Planning",
            "Security Best Practices",
            "Documentation",
        ],
    },
];

export const certifications = [
    {
        name: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services (AWS)",
        period: "Issued Aug 2025 · Expires Aug 2028",
        url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/57411535-26b2-4cba-8dcd-cbb2b6b5e14b",
    },
];

export const languages = ["English", "Hindi", "Telugu"];

export const education = [
    {
        school: "KL University (Koneru Lakshmaiah University)",
        degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering",
        period: "2019 — 2023",
        location: "Guntur, AP",
    },
];

export const achievements = [
    {
        title: "Hackolades Award — Palo Alto AI Runtime Security",
        description:
            "Won award at Motorola Solutions Open Innovation Hackathon (Jun 2025), a high-stakes global 48-hour challenge. Built a Resilient AI Orchestrator maintaining AI system operations during cloud outages. Designed live failover mechanism from Gemini Vertex AI to local edge LLM (Ollama), enabling zero-downtime inference on HP Elite Mini edge device for mission-critical public safety use cases.",
    },
];

export const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];
