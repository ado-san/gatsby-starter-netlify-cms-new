---
templateKey: blog-post
title: 'Sovereign cloud and the CLOUD Act : why Europe needs open source infrastructure'
date: 2026-10-15T08:00:00.000Z
description: >-
  What is a sovereign cloud, why does the US CLOUD Act conflict with the GDPR,
  and how can companies and public bodies regain control of their data with
  European hosting and free software such as Nextcloud, Linux, Kubernetes and
  open-weight AI models? A practical guide.
featuredpost: true
featuredimage: /img/nextcloud_608314_full.jpeg
tags:
  - sovereign cloud
  - CLOUD Act
  - GDPR
  - Nextcloud
  - open source
  - digital sovereignty
---
![Sovereign cloud with Nextcloud](/img/nextcloud_608314_full.jpeg "Sovereign cloud")

Most European organisations store their emails, documents and customer data with American cloud providers. It is convenient, powerful and often cheap at first. But it raises a question that has become strategic: **who really controls that data?** This guide explains the **CLOUD Act**, what a **sovereign cloud** is, and how open source makes digital sovereignty achievable.

## The CLOUD Act in plain words

The **Clarifying Lawful Overseas Use of Data Act** (CLOUD Act) was adopted by the US Congress in March 2018. It allows US authorities, with a warrant, to require a provider subject to US jurisdiction to disclose data in its "possession, custody or control", **regardless of where that data is physically stored**.

In other words, a file stored in a Frankfurt or Paris datacenter operated by a US company, or by a subsidiary of a US company, can be requested by US authorities. The provider may challenge the request in limited cases, but the customer is not necessarily informed.

This is combined with other US laws, such as **Section 702 of FISA**, which allows surveillance of non-US persons' communications.

## The conflict with the GDPR

The European **GDPR** strictly regulates transfers of personal data outside the EU. In 2020, the Court of Justice of the EU invalidated the **Privacy Shield** (the "Schrems II" ruling) because US surveillance laws did not offer equivalent protection. A new **EU-US Data Privacy Framework** was adopted in 2023, but it is still contested and could be invalidated again.

For organisations, this creates legal uncertainty: using a US hyperscaler for sensitive data (health, defence, legal, R&D, public services) can expose them to compliance and confidentiality risks.

## What is a sovereign cloud?

A **sovereign cloud** is cloud infrastructure where data, operations and legal control remain under the jurisdiction of the customer's region. Concretely:

- **Data location**: data is stored and processed in Europe.
- **Operator under EU law**: the provider and its shareholders are not subject to extraterritorial laws like the CLOUD Act.
- **Operational control**: support and administration are done by staff located in the EU.
- **Reversibility**: you can leave with your data and your applications, thanks to open standards.

Public frameworks formalise these criteria: in France, the **SecNumCloud** qualification from ANSSI; at European level, the **EUCS** certification scheme under discussion and the **Gaia-X** initiative for federated data spaces. Several governments now require sovereign clouds for sensitive data; France's "cloud au centre" doctrine is one example.

Beware of "sovereign-washing": a European region of a US provider, or a joint venture, is not always immune to the CLOUD Act. Always check who controls the operator.

## Open source: the foundation of sovereignty

You cannot be sovereign on software you cannot inspect, modify or move. **Free and open source software** is what makes sovereignty real:

- **Transparency**: the code can be audited for backdoors and vulnerabilities.
- **No lock-in**: if your provider changes its prices or its owner, you can move the same software to another host.
- **Local skills**: European companies and integrators can support, extend and host it.
- **Shared investment**: governments can fund common tools instead of paying licences abroad.

A sovereign stack built on open source might look like this:

| Need | Open source building blocks |
| --- | --- |
| Operating system | Linux (Debian, Ubuntu, Rocky Linux, openSUSE) |
| Infrastructure | OpenStack, Proxmox, Kubernetes |
| Files and collaboration | [Nextcloud](/blog/2019-12-26-nextcloud-the-anti-gafam-cloud-solution-easy-to-use-and-to-host/), Collabora Online, ONLYOFFICE |
| Email and chat | Open-Xchange, Matrix / Element, Mattermost |
| Video conferencing | Jitsi, BigBlueButton, Nextcloud Talk |
| Identity | Keycloak |
| Websites | Next.js, React, static hosting on a European CDN |
| Artificial intelligence | Open-weight models (Mistral AI and others) hosted in Europe |

European initiatives such as the German **openDesk** and the French **La Suite numérique** bundle these tools for public administrations.

## Sovereign AI

Generative AI adds a new dimension. When employees paste contracts or source code into a chatbot, that data leaves the company. Options:

- **Enterprise offers** of Claude, ChatGPT or Gemini with contractual guarantees (no training on your data, EU data residency): convenient, but still subject to US law.
- **European providers** such as **Mistral AI** (Paris), whose models are available through its own platform, hosted in Europe, and partly published as **open-weight** models.
- **Self-hosted open models** running on your own GPUs or with a sovereign provider, integrated into tools like the Nextcloud Assistant: maximum control, more operational effort.

Read our [comparison of Claude, ChatGPT, Mistral and Gemini](/blog/2026-10-15-claude-chatgpt-mistral-gemini-ai-assistants-compared/) for more details.

## A pragmatic migration path

Sovereignty is not all-or-nothing. A realistic approach:

1. **Classify your data**: public, internal, confidential, sensitive. Only the last categories need a strict sovereign approach.
2. **Start with collaboration tools**: files, calendars and video conferencing are easy to migrate to Nextcloud and Jitsi.
3. **Choose a European host** with clear ownership and certifications (SecNumCloud, ISO 27001, HDS for health data in France).
4. **Favour open standards**: CalDAV, WebDAV, S3-compatible storage, OpenID Connect, Kubernetes.
5. **Plan reversibility** in your contracts: export formats, timelines, costs.
6. **Train your teams**: sovereignty is also about skills.

## Conclusion

The CLOUD Act is a reminder that infrastructure is never neutral. For Europe, a **sovereign cloud built on open source** is both a legal necessity for sensitive data and an economic opportunity for its tech ecosystem. The tools exist, they are mature, and they are free: what remains is the will to use them.

## Resources

- [CLOUD Act text (US Congress)](https://www.congress.gov/bill/115th-congress/house-bill/4943)
- [ANSSI SecNumCloud](https://cyber.gouv.fr/secnumcloud)
- [Gaia-X](https://gaia-x.eu/)
- [openDesk](https://www.opendesk.eu/)
- [Nextcloud](https://nextcloud.com/)

Need help to design a sovereign, open source infrastructure? [Contact AD Ventures](/contact/).
