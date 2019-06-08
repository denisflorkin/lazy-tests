This project was bootstrapped with [cjx](https://www.npmjs.com/package/cjx)  
 using [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `yarn run test:watch`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run lint:fix`

Lint the source code using [eslint](https://eslint.org/).   
will auto fix the autofixable issues. Run `yarn run lint` for a side-effect free lint run (only reports, does not fix)

### `yarn run storybook`

Launches [storybook](https://storybook.js.org/) interface in watch mode.  


### `yarn run test:integration`

Run e2e tests using [testcafe](https://github.com/DevExpress/testcafe).  
Depends on a `APP_URL_TESTCAFE` env var, if not provided, will fallback to http://localhost:3000

### `yarn run lighthouse`

Run a [lighthouse](https://developers.google.com/web/tools/lighthouse/) audit.  

Depends on a `APP_URL_TESTCAFE` env var, if not provided, will fallback to http://localhost:3000
