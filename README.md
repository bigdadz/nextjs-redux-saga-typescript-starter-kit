## Getting Started
First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Starter Kit
- [Next.js 11](https://nextjs.org/)
- [redux](https://redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)
- [typescript](https://www.typescriptlang.org/)

## File Structure
- Dump(conponents) and Smart(containers) Components
- redux helper(hooks)
- redux, (actionTypes), (actionCreators), rootReducer
- redux-saga, rootSaga, saga middleware(store.ts)
- api services pattern

## Docker
repo: [nextjs-redux-saga-typescript-starter-kit](https://hub.docker.com/r/bigdadz/nextjs-redux-saga-typescript-starter-kit)

How to run
```bash
docker pull bigdadz/nextjs-redux-saga-typescript-starter-kit:latest
docker run -p 3000:3000 bigdadz/nextjs-redux-saga-typescript-starter-kit:latest 
```