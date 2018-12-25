import Vue from 'vue';
import Router from 'vue-router';
import register from '@/components/register';
import login from '@/components/login';
import mylist from '@/components/mylist';
import personaldata from '@/components/personaldata';
import question from '@/components/question';
import versiondetail from '@/components/versiondetail';
import version from '@/components/version';
import freaddress from '@/components/freaddress';
import search from '@/components/search';
import forgetpw from '@/components/forgetpw';
import cityquick from '@/components/cityquick';
import mydetail from '@/components/mydetail';
import systermset from '@/components/systermset';
import fresendgoods from '@/components/fresendgoods';
import sendgoods from '@/components/sendgoods';
import getgoods from '@/components/getgoods';
import cityfenzhan from '@/components/cityfenzhan';
import moneystand from '@/components/moneystand';
import normalquestion from '@/components/normalquestion';
import how from '@/components/how';
import impaddress from '@/components/impaddress';
import get_send_cite from '@/components/get/get_send_cite';
import get_get_cite from '@/components/get/get_get_cite';
import daifahuo from '@/components/daifahuo';
import querenjiaoche from '@/components/querenjiaoche';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name: 'sendgoods',
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/mylist',
      name: 'mylist',
      component: mylist
    },
    {
      path: '/personaldata',
      name: 'personaldata',
      component: personaldata
    },
    {
      path: '/question',
      name: 'question',
      component: question
    },
    {
      path: '/versiondetail',
      name: 'versiondetail',
      component: versiondetail
    },
    {
      path: '/version',
      name: 'version',
      component: version
    },
    {
      path: '/freaddress',
      name: 'freaddress',
      component: freaddress
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/forgetpw',
      name: 'forgetpw',
      component: forgetpw
    },
    {
      path: '/cityquick',
      name: 'cityquick',
      component: cityquick
    },
    {
      path: '/mydetail',
      name: 'mydetail',
      component: mydetail
    },
    {
      path: '/systermset',
      name: 'systermset',
      component: systermset
    },
    {
      path: '/fresendgoods',
      name: 'fresendgoods',
      component: fresendgoods
    },{
      path: '/sendgoods',
      name: 'sendgoods',
      component: sendgoods
    },
    {
      path: '/getgoods',
      name: 'getgoods',
      component: getgoods
    },
    {
      path: '/cityfenzhan',
      name: 'cityfenzhan',
      component: cityfenzhan
    },
    {
      path: '/moneystand',
      name: 'moneystand',
      component: moneystand
    },
    {
      path: '/normalquestion',
      name: 'normalquestion',
      component: normalquestion
    },
    {
      path: '/how',
      name: 'how',
      component: how
    },
    {
      path: '/impaddress',
      name: 'impaddress',
      component: impaddress
    },
    {
      path: '/get_send_cite',
      name: 'get_send_cite',
      component: get_send_cite
    },
    {
      path: '/get_get_cite',
      name: 'get_get_cite',
      component: get_get_cite
    },
    {
      path: '/daifahuo',
      name: 'daifahuo',
      component: daifahuo
    },
    {
      path: '/querenjiaoche',
      name: 'querenjiaoche',
      component: querenjiaoche
    }
  ]
})
