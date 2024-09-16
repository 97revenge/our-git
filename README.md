<p align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 256 256"><g fill="#770954"><path d="M208 104v8a48 48 0 0 1-48 48h-24a32 32 0 0 1 32 32v40h-64v-40a32 32 0 0 1 32-32h-24a48 48 0 0 1-48-48v-8a49.3 49.3 0 0 1 8.51-27.3A51.92 51.92 0 0 1 76 32a52 52 0 0 1 43.83 24h32.34A52 52 0 0 1 196 32a51.92 51.92 0 0 1 3.49 44.7A49.3 49.3 0 0 1 208 104" opacity=".2"/><path d="M208.3 75.68A59.74 59.74 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58 58 0 0 0-7.7-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.8 43.8 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.8 43.8 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.76 41.76 0 0 1 7 22.52Z"/></g></svg>
</p>
<p align="center">
    <h1 align="center">our-git</h1>
</p>
<p align="center">
    <em><i>Profile link created by AI based on your github username</i></em>
</p>
<p align="center">
	<a href="https://wakatime.com/badge/github/97revenge/our-git"><img src="https://wakatime.com/badge/github/97revenge/our-git.svg" alt="wakatime"></a>
	<img src="https://img.shields.io/github/last-commit/97revenge/rsc-ai-example?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/97revenge/rsc-ai-example?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/97revenge/rsc-ai-example?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em></em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [Overview](#-overview)
> - [ Features](#-features)
> - [Repository Structure](#-repository-structure)
> - [Modules](#-modules)
> - [Getting Started](#-getting-started)
>   - [Installation](#️-installation)
>   - [🤖 Running rsc-ai-example](#-running-rsc-ai-example)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## Overview

This project is the result of 6 months of learning with [VERCEL AI SDK](https://sdk.vercel.ai/docs/ai-sdk-rsc), [Machine Learning](https://pt.wikipedia.org/wiki/Aprendizado_de_m%C3%A1quina) & [Stream](https://nodejs.org/api/stream.html#stream).

The idea of ​​the project is to bring an evaluation page based on the Github user searching for some aspects such as lines of code, programming languages ​​based on fetching with the Github API, thinking about a quality user experience, a brief connection with other developers, personalized and qualified AI results with functional features such as sharing and SEO based on the user entity.

---

## Features

- #### Complex and well-managed consumption of the Github API

- #### Type validation using typescript and zod frameworks

- #### Dynamic state based on streamlining the user experience

- #### Design Prompt based on positions in the tech area

---

## Repository Structure

```sh
└── rsc-ai-example/
    ├── README.md
    ├── actions
    │   ├── actions.tsx
    │   ├── content.tsx
    │   ├── mock.ts
    │   └── user.tsx
    ├── app
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── test
    │       └── page.tsx
    ├── components
    │   ├── ArticleAI.tsx
    │   ├── EnchancedCard.tsx
    │   ├── EnchancedProfileCard.tsx
    │   ├── GitHubProfileExtended.tsx
    │   ├── SimpleLoader.tsx
    │   ├── Skeletons
    │   │   ├── BlogPostSkeletton.tsx
    │   │   ├── LandingProfileSkeleton.tsx
    │   │   └── ProfileSkeleton.tsx
    │   ├── animata
    │   │   └── animated-beam.tsx
    │   ├── article-review.tsx
    │   ├── confetti.tsx
    │   ├── landing-container.tsx
    │   ├── magicui
    │   │   ├── animated-gradient-text.tsx
    │   │   ├── confetti.tsx
    │   │   ├── number-ticker.tsx
    │   │   ├── shimmer-button.tsx
    │   │   └── sparkles-text.tsx
    │   ├── minimalist-profile.tsx
    │   ├── minimalistProfile.tsx
    │   ├── motion-variants
    │   │   └── fade-up.tsx
    │   ├── rounded-chart.tsx
    │   └── ui
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── chart.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── scroll-area.tsx
    │       ├── skeleton.tsx
    │       ├── tabs.tsx
    │       └── tooltip.tsx
    ├── components.json
    ├── lib
    │   ├── mock
    │   │   ├── arturbien.ts
    │   │   ├── developit.ts
    │   │   ├── iteratetograceness.ts
    │   │   ├── jaredpalmer.ts
    │   │   ├── kadikraman.ts
    │   │   ├── lucasmontano.ts
    │   │   ├── shadcn.ts
    │   │   ├── shuding.ts
    │   │   └── swyxdotio.tsx
    │   ├── utils.ts
    │   └── zod
    │       ├── owner.ts
    │       └── user.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── prisma
    │   └── schema.prisma
    ├── public
    │   ├── next.svg
    │   └── vercel.svg
    ├── tailwind.config.ts
    └── tsconfig.json
```

---
