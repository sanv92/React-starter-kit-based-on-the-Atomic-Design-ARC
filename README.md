# React starter kit based on the Atomic Design (ARC)

## Project
### Before start install development environment:
- Install Node.js: https://nodejs.org/en/download/package-manager/
- Install NVM: https://github.com/creationix/nvm
- npm i -g @storybook/cli

### Project Install:
- cd ~/{PROJECT_PATH}
- nvm use
- npm install

### Project Run:
- nvm use
- npm run start

### Project Build:
- nvm use
- npm run build


## Storybook
### Storybook Run
```
npm run dev:storybook
```
### Storybook Build:
- npm install
- npm run build:storybook

### How to create readme for "story component"
Example:
```js
import { withReadme } from 'storybook-readme'
import Readme from './sidebar.readme.md'


stories
  .addDecorator(withReadme(Readme))
  .addWithJSX('Default', () => <Sidebar/>)
```


## WebStorm
- eslint: https://www.jetbrains.com/help/webstorm/eslint.html
- flow: https://blog.jetbrains.com/webstorm/2016/11/using-flow-in-webstorm/
