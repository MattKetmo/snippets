```
npm install
```

```
./node_modules/.bin/turbo --version
1.4.3
```

```
./node_modules/.bin/turbo run build
...
web:build: Failed to compile.
web:build:
web:build: ./src/pages/index.tsx
web:build: 1:17  Error: $NEXT_PUBLIC_MY_TOKEN is not listed as a dependency in turbo.json  turbo/no-undeclared-env-vars
web:build:
web:build: info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
web:build: npm ERR! Lifecycle script `build` failed with error:
web:build: npm ERR! Error: command failed
web:build: npm ERR!   in workspace: web@1.0.0
web:build: npm ERR!   at location: /src/github.com/MattKetmo/snippets/apps/web
web:build: ERROR: command finished with error: command (apps/web) npm run build exited (1)
```
