<h1 align="center">eslint-plugin-cta-example</h1>

<p align="center">
	Example ESLint plugin built with create-typescript-app.
	🔌
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 2" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-2-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/bingo-examples/eslint-plugin-cta-example/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/bingo-examples/eslint-plugin-cta-example" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/bingo-examples/eslint-plugin-cta-example?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/bingo-examples/eslint-plugin-cta-example/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
	<a href="http://npmjs.com/package/eslint-plugin-cta-example" target="_blank"><img alt="📦 npm version" src="https://img.shields.io/npm/v/eslint-plugin-cta-example?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

Add this plugin to the list of plugins in your [ESLint configuration file](https://eslint.org/docs/latest/use/configure/configuration-files):

```shell
npm i eslint-plugin-cta-example -D
```

```ts
import CtaExample from "eslint-plugin-cta-example";

export default [
	// (other plugins)
	CtaExample.configs.recommended, // 👈
];
```

### Rules

These are all set to `"error"` in the recommended config:

<!-- begin auto-generated rules list -->

| Name                         | Description                     |
| :--------------------------- | :------------------------------ |
| [enums](docs/rules/enums.md) | Avoid using TypeScript's enums. |

<!-- end auto-generated rules list -->

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 🔌

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://create.bingo/"><img src="https://avatars.githubusercontent.com/u/202026437?v=4?s=100" width="100px;" alt="Bingo 💝"/><br /><sub><b>Bingo 💝</b></sub></a><br /><a href="https://github.com/bingo-examples/eslint-plugin-cta-example/commits?author=bingo-examples" title="Code">💻</a> <a href="#content-bingo-examples" title="Content">🖋</a> <a href="https://github.com/bingo-examples/eslint-plugin-cta-example/commits?author=bingo-examples" title="Documentation">📖</a> <a href="#ideas-bingo-examples" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-bingo-examples" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-bingo-examples" title="Maintenance">🚧</a> <a href="#projectManagement-bingo-examples" title="Project Management">📆</a> <a href="#tool-bingo-examples" title="Tools">🔧</a></td>
      <td align="center"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/bingo-examples/eslint-plugin-cta-example/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/bingo-examples/eslint-plugin-cta-example/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo engine](https://create.bingo).
