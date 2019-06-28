# vuejs-component-loading

Three types of component loading, ASYNC, Repository(Git+Package), and from external source(vue file compiled to js)

Repository component is found here, under repo-component branch, git+https://github.com/ezlo-ionutrusu/vuejs-component-loading.git#repo-component

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### server command vue to js

npx vue-cli-service build --target lib --formats umd-min --no-clean --dest server/components/MyComponent --name "MyComponent.[chunkhash]" server/components/MyComponent/MyComponent.vue

### server init for js compiled files

npm server/index.js
