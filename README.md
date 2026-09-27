# 🛡️ AegisAI — Enterprise AI Governance Agent

> **Intelligent. Auditable. Trustworthy.**
> An enterprise-grade AI governance framework for responsible deployment, monitoring, and compliance of AI systems — built for 2026 and beyond.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?logo=python&logoColor=white)](https://python.org)
[![AWS](https://img.shields.io/badge/AWS-Powered-FF9900?logo=amazonaws&logoColor=white)](https://aws.amazon.com)
[![Azure](https://img.shields.io/badge/Azure-AI%20Foundry-0078D4?logo=microsoftazure&logoColor=white)](https://azure.microsoft.com)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)](https://github.com/Vaibhavsable451/AegisAI-Enterprise-AI-Governance-Agent)

---

## 🌐 Overview

**AegisAI** is a comprehensive, cloud-native AI governance platform designed to help enterprises govern, audit, and align their AI deployments with global regulatory standards. AegisAI provides real-time risk assessment, policy enforcement, explainability dashboards, and automated compliance reporting — all powered by cutting-edge LLM agents and multi-cloud infrastructure.

In 2026, AI governance is no longer optional. AegisAI is the shield your enterprise AI strategy needs.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔍 **AI Risk Assessment** | Automated scanning and scoring of AI models for bias, fairness, and regulatory risk |
| 📋 **Policy Engine** | Define, version, and enforce organizational AI usage policies with fine-grained controls |
| 🧠 **LLM Governance Agent** | Intelligent agent that monitors, explains, and corrects AI decisions in real time |
| 📊 **Compliance Dashboard** | Visual reporting for EU AI Act, ISO 42001, NIST AI RMF, and internal standards |
| 🔐 **Audit Trail** | Immutable, tamper-proof logs of every AI inference, decision, and policy event |
| 🚨 **Anomaly Detection** | Real-time alerting for model drift, hallucinations, and policy violations |
| 🌍 **Multi-Cloud Support** | Seamlessly integrates with AWS, Azure, and GCP AI services |
| 🤝 **Human-in-the-Loop** | Escalation workflows and human approval gates for high-stakes decisions |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    AegisAI Platform                          │
│                                                               │
│   ┌─────────────┐   ┌──────────────┐   ┌───────────────┐    │
│   │  Governance  │   │  Policy      │   │  Compliance   │    │
│   │  Agent (LLM) │──▶│  Engine      │──▶│  Reporter     │    │
│   └─────────────┘   └──────────────┘   └───────────────┘    │
│          │                  │                   │            │
│   ┌─────────────┐   ┌──────────────┐   ┌───────────────┐    │
│   │  Risk        │   │  Audit       │   │  Dashboard    │    │
│   │  Scanner     │   │  Trail (S3)  │   │  (React+TS)   │    │
│   └─────────────┘   └──────────────┘   └───────────────┘    │
│                                                               │
│   Cloud: AWS · Azure AI Foundry · GCP Vertex AI              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.10+
- Node.js 20+ (for the frontend dashboard)
- AWS Account or Azure Subscription
- Docker & Docker Compose (optional, for local stack)

### Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/Vaibhavsable451/AegisAI-Enterprise-AI-Governance-Agent.git
   cd AegisAI-Enterprise-AI-Governance-Agent
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your cloud credentials and API keys
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   npm install --prefix frontend
   ```

4. **Run locally with Docker:**
   ```bash
   docker-compose up --build
   ```

### Quickstart

```python
from aegisai import GovernanceAgent

agent = GovernanceAgent(
    policy_config="policies/enterprise_defaults.yaml",
    cloud="aws"  # or "azure", "gcp"
)

# Evaluate an AI model decision
result = agent.evaluate(
    model_id="my-llm-v2",
    input_prompt="...",
    output="...",
)

print(result.risk_score)      # 0-100 risk rating
print(result.policy_status)   # PASS / WARN / BLOCK
print(result.explanation)     # Human-readable explanation
```

---

## 📦 Project Structure

```
AegisAI-Enterprise-AI-Governance-Agent/
├── aegisai/                  # Core Python package
│   ├── agent/                # LLM Governance Agent logic
│   ├── policy/               # Policy engine and rule definitions
│   ├── risk/                 # Risk scanner and bias detection
│   ├── audit/                # Audit trail (S3 / Azure Blob)
│   └── compliance/           # Report generators (EU AI Act, NIST, ISO)
├── frontend/                 # React + TypeScript dashboard
├── infra/                    # IaC (AWS CDK / Bicep / Terraform)
├── policies/                 # Sample policy YAML configurations
├── skills/                   # Agent skills for IDE integrations
├── voice-live-universal-assistant/  # Voice interface for governance workflows
├── tests/                    # Unit, integration & E2E tests
├── docker-compose.yml
├── requirements.txt
└── README.md
```

---

## 🌐 Multi-Language Voice Interface

AegisAI includes a **Voice Live Universal Assistant** — a full-stack voice interface for interacting with governance workflows hands-free:

- **Frontend**: React + Vite + TypeScript with Fluent design system (light/dark/system themes)
- **Python Backend**: FastAPI + WebSocket proxy
- **Java Backend**: Spring Boot + WebSocket proxy
- **JavaScript Backend**: Node.js + Express
- **C# Backend**: ASP.NET Core
- **Azure Voice Live**: Real-time AI voice interactions powered by Azure AI Speech Service
- **Deployment**: Full `azd up` support with Bicep IaC — Container Apps, ACR, RBAC

---

## 📊 Compliance Standards Supported

- 🇪🇺 **EU AI Act (2024–2026)** — Risk classification, transparency, and conformity assessment
- 🇺🇸 **NIST AI RMF** — Govern, Map, Measure, Manage framework
- 🌍 **ISO/IEC 42001:2023** — AI Management Systems standard
- 🏢 **Custom Enterprise Policies** — Define your own YAML-based governance rules

---

## 🧩 Agent Skills

AegisAI ships with IDE-integrated **Agent Skills** for developers:

### 🛡️ [AI Governance Skill](./skills/ai-governance/README.md)
Helps agents plan, implement, and validate AI governance controls:
- **Policy Authoring**: Generate policy YAML from plain-English descriptions
- **Risk Review**: Automated pre-deployment risk reports
- **Audit Queries**: Natural language queries over audit logs
- **Compliance Checks**: Validate configurations against regulatory frameworks

### 🎙️ [Azure Avatar Integration](./skills/azure-avatar-integrate/README.md)
Voice-enabled governance interactions:
- **Real-time Speech SDK**: Live talking avatar for governance reviews
- **Batch Synthesis**: Generate compliance briefing videos
- **Troubleshooting**: Diagnose authentication, WebRTC, and session issues

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **AI / LLM** | Azure AI Foundry, AWS Bedrock, OpenAI GPT-4.1 |
| **Backend** | Python (FastAPI), Java (Spring Boot), Node.js, C# (.NET 9) |
| **Frontend** | React 19, TypeScript, Vite, Fluent UI |
| **Infrastructure** | AWS CDK, Azure Bicep, Docker, Kubernetes |
| **Storage / Audit** | AWS S3, Azure Blob Storage, PostgreSQL |
| **Observability** | OpenTelemetry, Azure Monitor, AWS CloudWatch |
| **Voice** | Azure AI Speech Service — Voice Live |

---

## 🤝 Contributing

We welcome contributions from the community! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes with clear messages
4. Open a Pull Request with a description of your changes

Please read our [Contributing Guidelines](CONTRIBUTING.md) and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📚 Documentation & Resources

- 📖 [Full Documentation](https://github.com/Vaibhavsable451/AegisAI-Enterprise-AI-Governance-Agent/wiki)
- 🔒 [Security Policy](SECURITY.md)
- 🆘 [Support & Issues](https://github.com/Vaibhavsable451/AegisAI-Enterprise-AI-Governance-Agent/issues)
- 🌐 [Azure AI Speech Service — Voice Live](https://learn.microsoft.com/azure/ai-services/speech-service/voice-live)
- 📜 [EU AI Act Overview](https://artificialintelligenceact.eu)
- 🧭 [NIST AI RMF](https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgements

Built with ❤️ by **Vaibhav Sable** and contributors.
Powered by **Azure AI Foundry**, **AWS**, and the open-source community.

---

> © 2026 AegisAI Project. All rights reserved.
