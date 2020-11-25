# eslint-config-mide-react

[![npm version](https://badge.fury.io/js/eslint-config-mide-react.svg)](http://badge.fury.io/js/eslint-config-mide-react)
![NPM downloads](https://img.shields.io/npm/dm/eslint-config-mide-react)
[![MIT License](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/MikhailTSE/eslint-config-mide/blob/main/packages/eslint-config-mide-react/LICENSE)

This package provides [Airbnb's .eslintrc](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with my personal preferences as an extensible shared config.

## Usage

Default export contains all of ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks` and `eslint-plugin-jsx-a11y`.

1. Install the correct versions of each package, which are listed by the command:

```sh
npm info "eslint-config-mide-react@latest" peerDependencies
```

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev eslint-config-mide-react
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly. Otherwise, run `npm info "eslint-config-mide-react@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

If using **npm < 5**, Linux/OSX users can run

```sh
(
  export PKG=eslint-config-mide-react;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev eslint-config-mide-react eslint@^*.*.* eslint-plugin-import@^*.*.* eslint-plugin-react@^*.*.* eslint-plugin-react-hooks@^*.*.* eslint-plugin-jsx-a11y@^*.*.*
```

If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-mide-react
```

The cli will produce and run a command like:

```sh
npm install --save-dev eslint-config-mide-react eslint@^*.*.* eslint-plugin-import@^*.*.* eslint-plugin-react@^*.*.* eslint-plugin-react-hooks@^*.*.* eslint-plugin-jsx-a11y@^*.*.*
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```
{
  'extends': [
    'mide-react'
  ]
}
```
