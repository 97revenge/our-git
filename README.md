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
>   - [ Running rsc-ai-example](#-running-rsc-ai-example)
>   - [🧪 Tests](#-tests)
> - [ Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)

---

## Overview

This project is the result of 6 months of learning with [VERCEL AI SDK](https://sdk.vercel.ai/docs/ai-sdk-rsc), [Machine Learning](https://pt.wikipedia.org/wiki/Aprendizado_de_m%C3%A1quina) & [Stream](https://nodejs.org/api/stream.html#stream).

The idea of ​​the project is to bring an evaluation page based on the Github user searching for some aspects such as lines of code, programming languages ​​based on fetching with the Github API, thinking about a quality user experience, a brief connection with other developers, personalized and qualified AI results with functional features such as sharing and SEO based on the user entity.

## Features

- #### Complex and well-managed consumption of the Github API

- #### Type validation using typescript and zod frameworks

- #### Dynamic state based on streamlining the user experience

- #### Design Prompt based on positions in the tech area

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

## Modules

<details closed><summary>.</summary>

| File                                                                                             | Summary                                                         |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [postcss.config.mjs](https://github.com/97revenge/rsc-ai-example/blob/master/postcss.config.mjs) | A tool for transforming CSS with JavaScript                     |
| [tailwind.config.ts](https://github.com/97revenge/rsc-ai-example/blob/master/tailwind.config.ts) | added required classes and prefix in shadcn/magic-ui components |
| [components.json](https://github.com/97revenge/rsc-ai-example/blob/master/components.json)       | shadcn-ui configuration json                                    |
| [tsconfig.json](https://github.com/97revenge/rsc-ai-example/blob/master/tsconfig.json)           | typescript configuration                                        |
| [package.json](https://github.com/97revenge/rsc-ai-example/blob/master/package.json)             | all my dependencies and commands                                |
| [next.config.mjs](https://github.com/97revenge/rsc-ai-example/blob/master/next.config.mjs)       | nextjs 14 configuration                                         |
| []()                                                                                             |                                                                 |

</details>

<details closed><summary>actions</summary>

| File                                                                                       | Summary                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [user.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/actions/user.tsx)       | AI test implementation, based on Tool Calling                                                                                                                                                        |
| [mock.ts](https://github.com/97revenge/rsc-ai-example/blob/master/actions/mock.ts)         | mock information for front end development                                                                                                                                                           |
| [actions.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/actions/actions.tsx) | set of functions that are useful throughout development                                                                                                                                              |
| [content.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/actions/content.tsx) | searches a user's GitHub repositories, analyzes their programming languages, generates a prompt and system from the obtained data, and finally uses an AI model to generate text based on this data. |

</details>

<details closed><summary>components</summary>

| File                                                                                                                      | Summary                 |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [EnchancedProfileCard.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/EnchancedProfileCard.tsx)   | lorem ipsum lorem ipsum |
| [SimpleLoader.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/SimpleLoader.tsx)                   | lorem ipsum lorem ipsum |
| [EnchancedCard.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/EnchancedCard.tsx)                 | lorem ipsum lorem ipsum |
| [GitHubProfileExtended.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/GitHubProfileExtended.tsx) | lorem ipsum lorem ipsum |
| [confetti.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/confetti.tsx)                           | lorem ipsum lorem ipsum |
| [ArticleAI.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ArticleAI.tsx)                         | lorem ipsum lorem ipsum |
| [rounded-chart.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/rounded-chart.tsx)                 | lorem ipsum lorem ipsum |
| [minimalist-profile.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/minimalist-profile.tsx)       | lorem ipsum lorem ipsum |
| [minimalistProfile.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/minimalistProfile.tsx)         | lorem ipsum lorem ipsum |
| [landing-container.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/landing-container.tsx)         | lorem ipsum lorem ipsum |
| [article-review.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/article-review.tsx)               | lorem ipsum lorem ipsum |

</details>

<details closed><summary>components.motion-variants</summary>

| File                                                                                                          | Summary                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [fade-up.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/motion-variants/fade-up.tsx) | animation react component |

</details>

<details closed><summary>components.magicui</summary>

| File                                                                                                                                | Summary                 |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [shimmer-button.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/magicui/shimmer-button.tsx)                 | lorem ipsum lorem ipsum |
| [number-ticker.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/magicui/number-ticker.tsx)                   | lorem ipsum lorem ipsum |
| [confetti.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/magicui/confetti.tsx)                             | lorem ipsum lorem ipsum |
| [animated-gradient-text.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/magicui/animated-gradient-text.tsx) | lorem ipsum lorem ipsum |
| [sparkles-text.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/magicui/sparkles-text.tsx)                   | lorem ipsum lorem ipsum |

</details>

<details closed><summary>components.animata</summary>

| File                                                                                                              | Summary                 |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [animated-beam.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/animata/animated-beam.tsx) | lorem ipsum lorem ipsum |

</details>

<details closed><summary>components.ui</summary>

| File                                                                                                         | Summary                 |
| ------------------------------------------------------------------------------------------------------------ | ----------------------- |
| [tabs.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/tabs.tsx)                   | lorem ipsum lorem ipsum |
| [avatar.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/avatar.tsx)               | lorem ipsum lorem ipsum |
| [label.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/label.tsx)                 | lorem ipsum lorem ipsum |
| [chart.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/chart.tsx)                 | lorem ipsum lorem ipsum |
| [dropdown-menu.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/dropdown-menu.tsx) | lorem ipsum lorem ipsum |
| [badge.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/badge.tsx)                 | lorem ipsum lorem ipsum |
| [card.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/card.tsx)                   | lorem ipsum lorem ipsum |
| [scroll-area.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/scroll-area.tsx)     | lorem ipsum lorem ipsum |
| [input.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/input.tsx)                 | lorem ipsum lorem ipsum |
| [button.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/button.tsx)               | lorem ipsum lorem ipsum |
| [form.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/form.tsx)                   | lorem ipsum lorem ipsum |
| [tooltip.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/tooltip.tsx)             | lorem ipsum lorem ipsum |
| [skeleton.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/ui/skeleton.tsx)           | lorem ipsum lorem ipsum |

</details>

<details closed><summary>components.Skeletons</summary>

| File                                                                                                                                  | Summary                 |
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [LandingProfileSkeleton.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/Skeletons/LandingProfileSkeleton.tsx) | lorem ipsum lorem ipsum |
| [BlogPostSkeletton.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/Skeletons/BlogPostSkeletton.tsx)           | lorem ipsum lorem ipsum |
| [ProfileSkeleton.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/components/Skeletons/ProfileSkeleton.tsx)               | lorem ipsum lorem ipsum |

</details>

<details closed><summary>lib</summary>

| File                                                                             | Summary                 |
| -------------------------------------------------------------------------------- | ----------------------- |
| [utils.ts](https://github.com/97revenge/rsc-ai-example/blob/master/lib/utils.ts) | lorem ipsum lorem ipsum |

</details>

<details closed><summary>lib.mock</summary>

| File                                                                                                            | Summary                 |
| --------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [jaredpalmer.ts](https://github.com/97revenge/rsc-ai-example/blob/master/lib/mock/jaredpalmer.ts)               | lorem ipsum lorem ipsum |
| [lucasmontano.ts](https://github.com/97revenge/rsc-ai-example/blob/master/lib/mock/lucasmontano.ts)             | lorem ipsum lorem ipsum |
| [developit.ts](https://github.com/97revenge/rsc-ai-example/blob/master/lib/mock/developit.ts)                   | lorem ipsum lorem ipsum |
| [shadcn.ts](https://github.com/97revenge/rsc-ai-example/blob/master/lib/mock/shadcn.ts)                         | lorem ipsum lorem ipsum |
| [arturbien.ts](https://github.com/97revenge/rsc-ai-example/blob/master/lib/mock/arturbien.ts)                   | lorem ipsum lorem ipsum |
| [swyxdotio.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/lib/mock/swyxdotio.tsx)                 | lorem ipsum lorem ipsum |
| [kadikraman.ts](https://github.com/97revenge/rsc-ai-example/blob/master/lib/mock/kadikraman.ts)                 | lorem ipsum lorem ipsum |
| [shuding.ts](https://github.com/97revenge/rsc-ai-example/blob/master/lib/mock/shuding.ts)                       | lorem ipsum lorem ipsum |
| [iteratetograceness.ts](https://github.com/97revenge/rsc-ai-example/blob/master/lib/mock/iteratetograceness.ts) | lorem ipsum lorem ipsum |

</details>

<details closed><summary>lib.zod</summary>

| File                                                                                 | Summary                 |
| ------------------------------------------------------------------------------------ | ----------------------- |
| [user.ts](https://github.com/97revenge/rsc-ai-example/blob/master/lib/zod/user.ts)   | lorem ipsum lorem ipsum |
| [owner.ts](https://github.com/97revenge/rsc-ai-example/blob/master/lib/zod/owner.ts) | lorem ipsum lorem ipsum |

</details>

<details closed><summary>prisma</summary>

| File                                                                                          | Summary                 |
| --------------------------------------------------------------------------------------------- | ----------------------- |
| [schema.prisma](https://github.com/97revenge/rsc-ai-example/blob/master/prisma/schema.prisma) | lorem ipsum lorem ipsum |

</details>

<details closed><summary>app</summary>

| File                                                                                   | Summary                 |
| -------------------------------------------------------------------------------------- | ----------------------- |
| [globals.css](https://github.com/97revenge/rsc-ai-example/blob/master/app/globals.css) | lorem ipsum lorem ipsum |
| [page.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/app/page.tsx)       | lorem ipsum lorem ipsum |
| [layout.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/app/layout.tsx)   | lorem ipsum lorem ipsum |

</details>

<details closed><summary>app.test</summary>

| File                                                                                  | Summary                 |
| ------------------------------------------------------------------------------------- | ----------------------- |
| [page.tsx](https://github.com/97revenge/rsc-ai-example/blob/master/app/test/page.tsx) | lorem ipsum lorem ipsum |

</details>

---

## Getting Started

### Installation

1. Clone the rsc-ai-example repository:

```sh
git clone https://github.com/97revenge/our-git
```

2. Change to the project directory:

```sh
cd our-git
```

3. Install the dependencies:

```sh
npm install
```

### Running rsc-ai-example

Use the following command to run rsc-ai-example:

```sh
npm run build && node dist/main.js
```

### Tests

To execute tests, run:

```sh
npm test
```

---

## Roadmap

- [x] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/97revenge/rsc-ai-example/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/97revenge/rsc-ai-example/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/97revenge/rsc-ai-example/issues)**: Submit bugs found or log feature requests for Rsc-ai-example.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/97revenge/rsc-ai-example
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.
