# eslint-config-mide-base

[![npm version](https://badge.fury.io/js/eslint-config-mide-base.svg)](http://badge.fury.io/js/eslint-config-mide-base)
![NPM downloads](https://img.shields.io/npm/dm/eslint-config-mide-base)
[![MIT License](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/MikhailTSE/eslint-config-mide/blob/main/packages/eslint-config-mide-base/LICENSE)

This package provides [Airbnb's base JS .eslintrc](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) (without React plugins) with my personal preferences as an extensible shared config.

## Usage

Default export contains all of ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-config-airbnb-base` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

```sh
npm info "eslint-config-mide-base@latest" peerDependencies
```

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev eslint-config-mide-base
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly. Otherwise, run `npm info "eslint-config-mide-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

If using **npm < 5**, Linux/OSX users can run

```sh
(
  export PKG=eslint-config-mide-base;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev eslint-config-mide-base eslint@^*.*.* eslint-plugin-import@^*.*.*
```

If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-mide-base
```

The cli will produce and run a command like:

```sh
npm install --save-dev eslint-config-mide-base eslint@^*.*.* eslint-plugin-import@^*.*.*
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```
{
  'extends': [
    'mide-base'
  ]
}
```
