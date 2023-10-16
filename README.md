# Simple Counter with Context API & Hooks

## Project Structure

```bash
├── .husky # pre-commit hooks
│   └── commit-msg # commit message convention
│   └── pre-commit # script to run ESLint, Prettier, Type Check and Jest
├── cypress # end-to-end tests
│   ├── fixtures # mock data
│   ├── integration # test files
│   ├── plugins # plugins
│   └── support # reusable functions
├── public
├── src
│   ├── test # unit tests
│   │   ├── __tests__ # test files
│   │   │   └── app.test.tsx
│   │   └── __mocks__ # mock files
│   │      └── file-mock.ts # mock file imports
│   ├── components # reusable components
│   │   ├── component-a.tsx
│   │   ├── component-b.tsx
│   │   ├── component-c.tsx
│   │   └── HOC
│   │      └── higher-order-component.tsx
│   ├── contexts # context providers
│   │   └── index.tsx
│   ├── App.tsx # main app component
│   ├── main.tsx # entry point
│   ├── vite-env.d.ts # vite types
│   └── setupTests.ts # setup file for Jest
├── .commitlintrc # commit message convention
├── .eslintignore # files to ignore for ESLint
├── .eslintrc # ESLint configuration
├── .gitignore # files to ignore for Git
├── .npmrc # registry configuration
├── .nvmrc # node version
├── .prettierignore # files to ignore for Prettier
├── .prettierrc # Prettier configuration
├── cypress.json # Cypress configuration
├── jest.config.js # Jest configuration
├── package.json # dependencies
├── README.md
├── tsconfig.json # TypeScript configuration
├── tsconfig.node.json # TypeScript configuration for Node
├── vite.config.ts # Vite configuration
└── yarn.lock # dependencies lockfile
```

## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

2. Install dependencies:

```bash
yarn
```

3. Start the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.

### `yarn build`

Builds the app for production to the `dist` folder.

### `yarn serve`

Serves the production build from the `dist` folder.

### `yarn lint`

Lints the code using ESLint.

### `yarn prettier`

Formats the code using Prettier.

### `yarn type-check`

Checks the types using TypeScript.

### `yarn test`

Runs unit tests using Jest.

### `yarn test:watch`

Runs unit tests using Jest in watch mode.

### Architecture Decisions

- [Vite](https://vitejs.dev/) was chosen as the bundler for this project because it is fast and supports React out of the box.
- [TypeScript](https://www.typescriptlang.org/) was chosen as the language for this project because it is a superset of JavaScript that provides static type checking.
- [ESLint](https://eslint.org/) was chosen as the linter for this project because
  is highly configurable and supports modern JavaScript, JSX, and TypeScript, making it a versatile tool for enforcing coding standards. Its large community, real-time feedback, and integrations with build tools make it a popular choice for maintaining code quality and consistency in projects..
- [Prettier](https://prettier.io/) was chosen as the code formatter for this project because is a highly opinionated code formatter that enforces a consistent style across my codebase, ensuring clean and readable code without manual configuration.
- [Husky](https://typicode.github.io/husky/#/) was chosen as the pre-commit hook for this project because it sets up pre-commit and pre-push hooks in my Git repository, allowing me to run tasks like linting, formatting, and testing automatically before making a commit or push.
- [CommitLint](https://commitlint.js.org/#/) was chosen as the commit message convention for this project because it enforces consistent and well-structured commit messages by applying predefined rules, improving codebase readability and facilitating effective collaboration.
- [Jest](https://jestjs.io/) was chosen as the unit testing framework for this project because it is a zero-config, all-in-one testing framework for JavaScript and TypeScript. It's designed for simplicity and speed, providing a seamless environment for writing and executing unit tests.
- [Cypress](https://www.cypress.io/) was chosen as the end-to-end testing framework for this project because it is an end-to-end testing framework that enables me to write and run automated tests for web applications. It provides a rich set of features, including real-time browser preview, debugging, and cross-browser testing capabilities.
- [React](https://reactjs.org/) was chosen as the UI library for this project because it is the most popular JavaScript UI library.
- [React Context](https://reactjs.org/docs/context.html) was chosen as the state management solution for this project because it is built into React.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) were chosen as the way to manage state for this project because they are built into React.

## Learn More About the Technologies Used

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [CommitLint](https://commitlint.js.org/#/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [React](https://reactjs.org/)
- [React Context](https://reactjs.org/docs/context.html)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
