//2
import Vue from 'vue';
import VueRouter from 'vue-router';
//引入路由组件
import About from '@/views/About';
import Home from '@/views/Home';
import Message from '@/views/Message';
import News from '@/views/News';
import MessageDetail from '@/views/MessageDetail';
import NewsDetail from '@/views/NewsDetail';
//也可以这样
// const Home = {template:"<div>foo</div>"}//简单创建一个模板
Vue.use(VueRouter);
//3
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home, //注册组件路由
      //配置子路由(二级路由)
      children: [
        {
          path: 'message',
          //路径简写的方式,注意不带/
          component: Message,
          //三级路由
          children: [
            {
              //:msgid是用来接受路径传递过来的params参数
              //匹配的同时把参数解析出来,添加到当前这个路由对象中
              path: 'msgdetail/:msgid',
              component: MessageDetail, //显示的过程中把当前的路由对象扔过去
              //相当于如下
              /*  params: { 
                msgid:1
               },
              query: { 
                content: 'message1'
               }, */
            },
            //三级重定向
            // { path: '', redirect: 'msgdetail' },
          ],
        },
        {
          path: '/home/news',
          //路径全写的方式
          component: News,
          children: [{ path: '/home/news/newsdetail', component: NewsDetail }],
        },
        //二级路由的重定向路由
        {
          path: '/home',
          redirect: 'message',
        },
      ],
    },
    {
      path: '/about',
      component: About,
    },
    //重定向路由
    {
      path: '/',
      redirect: 'home', //redirect后面跟的是路由
    },
  ],
});
