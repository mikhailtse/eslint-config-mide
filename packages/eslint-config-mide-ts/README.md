# eslint-config-mide-ts

[![npm version](https://badge.fury.io/js/eslint-config-mide-ts.svg)](http://badge.fury.io/js/eslint-config-mide-ts)
![NPM downloads](https://img.shields.io/npm/dm/eslint-config-mide-ts)
[![MIT License](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/MikhailTSE/eslint-config-mide/blob/main/packages/eslint-config-mide-ts/LICENSE)

This package provides [Airbnb's .eslintrc](https://github.com/iamturns/eslint-config-airbnb-typescript) with my personal preferences as an extensible shared config.

## Usage

Default export contains all of ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import`, `typescript`, `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`.

### 1. Install

Install the correct versions of each package, which are listed by the command:

```sh
npm info "eslint-config-mide-ts@latest" peerDependencies
```

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev eslint-config-mide-ts
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly. Otherwise, run `npm info "eslint-config-mide-ts@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

If using **npm < 5**, Linux/OSX users can run

```sh
(
  export PKG=eslint-config-mide-ts;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev eslint-config-mide-ts @typescript-eslint/eslint-plugin@^x.x.x @typescript-eslint/parser@^x.x.x eslint@^x.x.x eslint-plugin-import@^x.x.x typescript@^x.x.x
```

If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-mide-ts
```

The cli will produce and run a command like:

```sh
npm install --save-dev eslint-config-mide-ts @typescript-eslint/eslint-plugin@^x.x.x @typescript-eslint/parser@^x.x.x eslint@^x.x.x eslint-plugin-import@^x.x.x typescript@^x.x.x
```

### 2. Configure ESLint

You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```
{
  'extends': [
    'mide-ts'
  ],
  parserOptions: {
    project: './tsconfig.json',
  }
}
```
