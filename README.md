# `React Konami Hook` 👾
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> React hook for adding the Konami code to your app

> **Note:** This is using the new
> [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html) which is
> subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.2`

## Install

```sh
yarn add react-konami-hook
```

or

```sh
npm install --save react-konami-hook
```

## Usage

Just put a callback function into the hook for when the Konami Code is entered.
Simple as that!

```js
import useKonami from "react-konami-hook";

function App() {
  useKonami(() => alert("Nice Job!"));
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1 style={{ fontFamily: "sans-serif" }}>Use the Konami Code</h1>
    </div>
  );
}
```

Then `⬆️⬆️⬇️⬇️⬅➡⬅️➡️BA`

## Example

In the project folder:

```sh
yarn
yarn example
```

or

```sh
npm install
npm run example
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/6558157?v=4" width="100px;"/><br /><sub><b>Alex</b></sub>](https://ralexanderson.com)<br />[💻](https://github.com/alexanderson1993/react-konami-hook/commits?author=alexanderson1993 "Code") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!