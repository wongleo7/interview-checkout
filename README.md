# Leo Wong - Archon Interview

## Setup

To run this project, first install the required npm packages by running `npm install` in this directory

- To execute the code, run `npm start`
- To run lint rules `npm run lint`
- To run tests `npm run test`
- The project is setup so that it can be debugged via vscode, press F5 in vscode and choose the "Launch program" configuration to debug the code in vscode

## What is included and thought process

- Added Jest (just example tests)
- Added Eslint
- An Axios Instance is used to centralize api config; found in /src/api
- P1 was split from P2 and P3 since it had substantially different code; P1 gets errors for 'Buy2Get1FreeTotal doesn't match for for orderId ###'
- Code is meant to be self-commenting; minimal comments were made
- `type` > `Interface`
- Object.key && Object.values works but there should be a better solution
- Were the mistyped models a test? The `string`s were retyped to `number`
