---
templateKey: blog-post
title: 'Self-hosting your AI tools: Ollama, open source software and the hardware you need'
date: 2026-11-18T12:21:00.000+01:00
description: >-
  How to self-host your AI tools for coding and everyday tasks: which open
  source software to use (Ollama, llama.cpp, vLLM, Open WebUI, Continue, Aider),
  which open-weight models to run, and which hardware to buy, with three
  budgets compared: entry-level, mid-range and high-end GPU, RAM and SSD.
featuredpost: true
featuredimage: /img/ollama.png
tags:
  - AI
  - self-hosting
  - Ollama
  - open source
  - LLM
  - digital sovereignty
---
![Ollama, run large language models locally](/img/ollama.png "Ollama")

Cloud AI assistants such as Claude, ChatGPT, Mistral or Gemini are remarkable, but every prompt you send leaves your network. For source code under NDA, medical or legal documents, or simply for peace of mind, **running the models on your own machine** has become a realistic option. Open-weight models now handle coding, summarising, translation and document search very well, and a single modern GPU is enough to get started.

In this article we explain **which software to install** (open source first), **which models to run**, and **which hardware to buy**, with three budgets compared side by side.

## Why self-host your AI?

- **Confidentiality**: prompts, code and documents never leave your office or your server. Useful for GDPR, client NDAs and the US CLOUD Act question (see our article on sovereign cloud).
- **Predictable cost**: no per-token billing. Once the hardware is paid for, a team can run thousands of requests a day for the price of electricity.
- **Availability and control**: no rate limits, no model removed overnight, works offline.
- **Customisation**: choose the model, its size, its context length, and plug it into your own tools.

The trade-off: the best frontier models (Claude Opus, GPT, Gemini Pro) are still ahead on hard reasoning and large refactors, and you become responsible for updates and security. That is why we usually recommend a **hybrid setup**, described at the end.

## The software stack (open source)

### 1. Model runtime: Ollama, llama.cpp or vLLM

- **Ollama** (MIT licence): the easiest way to start. One installer for Linux, macOS and Windows, then `ollama run qwen3` and you are chatting. It downloads quantised models, manages the GPU for you and exposes an **OpenAI-compatible API** on port 11434, so most tools can use it as a drop-in replacement.
- **llama.cpp** (MIT): the engine Ollama is built on. Use it directly when you want fine control over quantisation, context size or CPU/GPU split, or to run on unusual hardware.
- **vLLM** (Apache 2.0): the choice for a **shared server** with several users at the same time. It is much faster under concurrent load, but needs NVIDIA (or AMD) GPUs with enough memory to hold the full model.

*LM Studio* is a nice desktop app for trying models, but note that it is free, not open source.

### 2. Chat interface: Open WebUI

**Open WebUI** gives your team a ChatGPT-like interface in the browser: user accounts, conversation history, document upload and search (RAG), web search, voice, and tools. It connects to Ollama or to any OpenAI-compatible API, so the same interface can also reach Claude or Mistral through their APIs when needed. *AnythingLLM* (MIT) is a good alternative focused on document workspaces.

### 3. Coding assistants

- **Continue** (Apache 2.0): an extension for VS Code and JetBrains, with chat, inline edits and autocompletion, pointed at your Ollama models.
- **Aider** (Apache 2.0): pair programming in the terminal. It edits files in your git repository and commits each change.
- **Cline** and **OpenCode** (Apache 2.0 / MIT): agent-style assistants that read the project, run commands and propose multi-file changes.

Tip: use a **small, fast model for autocompletion** (1.5B to 7B parameters) and a **larger model for chat and agents** (14B to 32B or more).

### 4. Agents and automation

- **MCP (Model Context Protocol)**: the open standard to connect a model to tools and data (files, Git, databases, Nextcloud...). Open WebUI and most coding assistants support MCP servers.
- **n8n** (fair-code licence) or **Node-RED** (Apache 2.0) to chain AI steps into workflows: sort emails, summarise tickets, enrich a CRM.
- **whisper.cpp** (MIT) for speech-to-text, **Piper** for text-to-speech, **ComfyUI** (GPL-3.0) for image generation.

### 5. Models to try

Open-weight model families evolve every few months; good starting points today:

| Use | Model families | Typical size |
|---|---|---|
| General assistant | Qwen3, Llama, Mistral Small, Gemma, gpt-oss | 8B to 32B |
| Coding | Qwen-Coder, Devstral, DeepSeek-Coder | 7B to 32B |
| Autocompletion | Qwen-Coder small variants | 1.5B to 7B |
| Embeddings (document search) | nomic-embed-text, bge-m3 | < 1B |
| Large, high quality | Llama 70B, Qwen 72B, gpt-oss-120b, large MoE models | 70B+ |

Always **check the licence**: Apache 2.0 and MIT models can be used freely, while some "open" models (Llama, Gemma) come with their own usage terms.

## The hardware you need

The key figure is **memory**: the whole model (plus its context) should fit in the **GPU memory (VRAM)**, or in the **unified memory** of an Apple Silicon Mac. A simple rule of thumb for 4-bit quantised models:

> **Memory needed ≈ number of parameters (in billions) × 0.6 GB**, plus 1 to 4 GB for the context.

So an 8B model needs about 6 GB, a 32B model about 20 GB, and a 70B model about 42 GB. When the model does not fit, it spills onto system RAM and the CPU, and speed drops by a factor of 5 to 10.

### Three budgets compared

| | Entry-level | Mid-range | High-end |
|---|---|---|---|
| **GPU** | RTX 3060 12 GB or RTX 4060 Ti 16 GB | RTX 3090 / 4090 24 GB or RTX 5090 32 GB | 2 × RTX 5090, RTX PRO 6000 96 GB, or Mac Studio with 192 GB+ unified memory |
| **System RAM** | 32 GB | 64 GB | 128 to 256 GB |
| **SSD (NVMe)** | 1 TB | 2 TB | 4 TB or more |
| **Models that fit well** | 7B to 14B | up to 32B (70B partly offloaded) | 70B to 120B+, large MoE models |
| **Indicative speed** | 8B: about 40 to 60 tokens/s | 32B: about 25 to 40 tokens/s | 70B: about 20 to 35 tokens/s |
| **Good for** | one developer: autocompletion, chat, summaries | a small team: coding agents, document search | a company server: many users, large models, long contexts |
| **Indicative budget (GPU or machine)** | €300 to €500 for the card | €800 (used 3090) to €2,500+ | €6,000 to €12,000+ |

*Speeds are indicative orders of magnitude for 4-bit models with Ollama or llama.cpp and a short context; they vary with the model, the quantisation, the context length and the drivers. As a reference, comfortable reading speed is around 10 tokens per second.*

### RAM and SSD: don't overlook them

- **RAM**: plan at least as much system RAM as GPU memory, ideally double. It is used to load models, to run the vector database for your documents, and as an overflow when a model does not fit in VRAM.
- **SSD**: models are big files (5 GB for an 8B model, 40 GB+ for a 70B model) and you will keep several. A fast **NVMe SSD** loads a model into memory in seconds instead of a minute. 1 TB fills up quickly once you start comparing models.
- **Power and noise**: a high-end GPU can draw 450 to 600 W under load. Size the power supply accordingly and think about where the machine will sit.

### What about Apple Silicon and CPU-only?

- **Mac with Apple Silicon** (M-series Pro, Max or Ultra): the unified memory is shared between CPU and GPU, so a Mac with 64 to 192 GB can load models that would need several NVIDIA cards. It is slower per token than a top NVIDIA GPU, but silent, power-efficient and very simple to set up with Ollama.
- **CPU only**: possible for small models (up to about 8B) with fast RAM, at a few tokens per second. Fine for tests and batch jobs, frustrating for interactive coding.

## Security: a few essential rules

- **Never expose the Ollama port (11434) directly to the internet**: it has no authentication. Put Open WebUI or a reverse proxy with authentication in front, or reach the server through a VPN such as **WireGuard** or **Tailscale**.
- Keep Ollama, Open WebUI and the GPU drivers up to date.
- Download models from trusted sources (official Ollama library, the publisher's Hugging Face page).
- Give agents the **minimum permissions**: a coding agent that can run shell commands should work in a container or a dedicated user account.

## Our recommendation: a hybrid setup

For most teams, the best result comes from combining both worlds:

1. A **local server** (mid-range GPU) with Ollama and Open WebUI for everyday tasks and all **confidential data**: summaries, translations, internal document search, autocompletion.
2. A **frontier model through an API** (for example Anthropic Claude) for the hardest tasks: large refactors, complex reasoning, long agentic sessions on non-sensitive code.
3. The same tools on top of both (Open WebUI, Continue, MCP), so users simply pick the model that fits the task.

## Need help?

AD Ventures can help you choose the hardware, install and secure the stack (Ollama, Open WebUI, coding assistants, MCP connectors), connect it to your **Nextcloud** and your documents, and train your team. [Tell us about your project](/contact/).
