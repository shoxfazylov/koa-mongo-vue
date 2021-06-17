const Koa = require('koa');
const Router = require('koa-router');
const Monk = require('monk');
const KoaBody = require('koa-body');

const app = new Koa();
const router = new Router();
const koaBody = new KoaBody();
const db = new Monk('localhost/local');
const list = db.get('donations');

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

router.get('/getList', async (ctx) => {
  let logContent = await list.find();
  ctx.response.type = 'application/json';
  ctx.body = logContent;
});

router.delete('/removeItem/:id', async (ctx) => {
  let id = parseInt(ctx.params.id);
  let operation = await list.remove({id}, function (err) {
    return !err
  });
  ctx.response.type = 'application/json';
  ctx.body = {
    success: true,
    operation
  };
});

router.post('/donate', koaBody, async (ctx) => {
  let operation = await list.insert(ctx.request.body);
  ctx.response.type = 'application/json';
  ctx.body = {
    success: true,
    operation
  };
});


app.use(router.routes());

app.listen(3000);