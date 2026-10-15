---
templateKey: blog-post
title: 'Nextcloud : the anti-GAFAM Cloud solution, easy to use and to host !!'
date: 2019-12-26T19:00:09.875Z
updated: 2026-10-15T08:00:00.000Z
description: >-
  Data is the gold of the 21st century, so better keep it in a safe, at home
  if possible. Nextcloud is a free and open source, European cloud platform
  for files, calendars, contacts, video calls and office documents that you
  can host yourself or with a sovereign provider, out of reach of the US
  CLOUD Act.
featuredpost: true
featuredimage: /img/nextcloud-petit-logo.jpg
tags:
  - Nextcloud
  - sovereign cloud
  - CLOUD Act
  - self-hosting
  - open source
  - privacy
---
![Nextcloud login page](/img/nextcloud_608314_full.jpeg "Nextcloud login page")

Have you heard about the **CLOUD Act**? Do you care about your personal data? Your business data, maybe? Individuals, companies and governments should all consider that keeping their data secure is both a right and a duty. **Nextcloud** makes that duty much easier.

## What is Nextcloud?

[Nextcloud](https://nextcloud.com/) is a free and open source collaboration platform, developed by Nextcloud GmbH in Stuttgart, Germany. It was created in 2016 by Frank Karlitschek as a fork of ownCloud, the project he had founded in 2010. The code is licensed under the **AGPL** and developed in the open with a large community.

Nextcloud Hub brings together, on a server you control:

- **Files**: sync and share, like Dropbox or Google Drive, with desktop and mobile apps;
- **Office**: collaborative editing of documents, spreadsheets and presentations (Nextcloud Office, based on Collabora Online, or ONLYOFFICE);
- **Talk**: chat, audio and video calls, webinars;
- **Groupware**: mail, calendar and contacts (CalDAV/CardDAV, compatible with every phone);
- **Nextcloud Assistant**: AI features (summaries, translation, text generation, image generation) that can run **locally with open source models**, so your data never leaves your server;
- hundreds of apps: forms, notes, kanban boards, password manager, photos...

It is used by individuals on a Raspberry Pi, by small businesses, and by large organisations, including several European governments and ministries.

## Why the CLOUD Act matters

The US **CLOUD Act** (Clarifying Lawful Overseas Use of Data Act), adopted in 2018, allows US authorities to require American cloud providers to hand over data they control, **even when that data is stored in Europe**. This creates a direct conflict with the European **GDPR**.

In practice, if your files are hosted by Microsoft, Google or Amazon, choosing a "Europe" region is not enough to guarantee that your data is protected from foreign access. For a lawyer, a doctor, an engineering company or a public administration, that is a real risk.

The answer is **sovereign cloud**: infrastructure operated by European companies, under European law, ideally with open source software that you can audit and move elsewhere. Nextcloud is one of the cornerstones of this approach.

## Three ways to use Nextcloud

1. **Self-hosting at home.** Install it on a Raspberry Pi or a small server with [Nextcloud All-in-One](https://github.com/nextcloud/all-in-one), a Docker-based installer that sets up everything (database, HTTPS, backups, Office, Talk) in a few clicks. Perfect for a family.
2. **Your own server in a datacenter.** Rent a VPS or dedicated server from a European host (OVHcloud, Scaleway, Hetzner, Infomaniak, Ionos...) and install Nextcloud. You control the software; the host only provides the machine.
3. **Managed hosting.** Many providers offer ready-to-use Nextcloud accounts, often hosted in Europe, if you don't want to administer a server.

## Installing Nextcloud quickly with Docker

On a Linux server with Docker installed, the recommended way is Nextcloud All-in-One:

```bash
sudo docker run --init --sig-proxy=false --name nextcloud-aio-mastercontainer \
  --restart always --publish 8080:8080 \
  --volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config \
  --volume /var/run/docker.sock:/var/run/docker.sock:ro \
  nextcloud/all-in-one:latest
```

Then open `https://<your-server-ip>:8080`, follow the wizard, point your domain name to the server, and choose the optional components you want. Always check the [official documentation](https://github.com/nextcloud/all-in-one#how-to-use-this) for the latest command.

## Good practices

- **Backups**: enable the built-in BorgBackup in All-in-One and keep a copy off-site.
- **Updates**: Nextcloud releases a major version roughly every few months; keep it up to date.
- **Security**: use HTTPS, two-factor authentication and the [Nextcloud security scan](https://scan.nextcloud.com/).
- **Encryption**: server-side encryption is available, and end-to-end encryption for sensitive folders.

## Why it matters

Using Nextcloud is not just about saving money on cloud subscriptions. It is about **digital sovereignty**: knowing where your data is, who can access it, and being free to leave. Combined with free software and European hosting, it gives individuals, companies and public bodies a credible alternative to the GAFAM.

## Resources

- [Nextcloud](https://nextcloud.com/)
- [Nextcloud All-in-One](https://github.com/nextcloud/all-in-one)
- [Nextcloud documentation](https://docs.nextcloud.com/)

Go further with our guide on [sovereign cloud and the CLOUD Act](/blog/2026-10-15-sovereign-cloud-cloud-act-europe-open-source/), and read about [decentralised social networks](/blog/2019-11-17-decentralized-social-media-platforms-this-is-what-we-need/).
