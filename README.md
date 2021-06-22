# NKVM = Node.js + Koa.js + Vue.js + MongoDB

<sup> This project aims to build a small but structured full-stack application, so it would be relatively clear for a programmer/beginner to understand how to build a website from scratch. </sup>

### Environment:
- Server
    - [Koa](http://koajs.com/)
    - Koa Router, Koa Cors, Koa Body
    - Monk (MongoDB)
    - Node ~~v8.9.4~~ ~~v10.12.0~~ v14.0.0
- Client
    - [Vue](https://vuejs.org/)
    - [Axios](https://github.com/axios/axios) (HTTP Client Library)
    - Webpack
    - WebpackDevServer (Development mode only)
    
    
### Architecture

    ├─Client               # frontend folder
    │  ├─src               # frontend src
    │  │  ├─router
    │  │  ├─components
    │  └─static            # static folder
    |
    |
    └─Server               # server folder
       └─my-koa-app.js     # router
       
### Backend start
```bash
    # Open a new tab
    mongod    # Boost Mongo DB
    # Open a new tab
    cd Server
    npm install
    npm start
```

### Frontend start
```bash
    # Enter the Client directory to install dependencies npm install
    cd Client
    npm install
    npm start
```

