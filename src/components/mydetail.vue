<template>
  <div class="mydetail">
    <div class="beijing">
      <header>
        <router-link tag="div" to="/cityquick" class="iconfont icon-guanbi"></router-link>
        <router-link tag="div" to="/systermset" class="iconfont icon-shezhi"></router-link>
      </header>
      <div class="middle">
        <div class="pic1">
          <img src="static/default.png" alt="">
        </div>
        <div>Hi~等你好久了</div>
        <div>
          <router-link tag="button" to="/login">登录</router-link>
          <router-link tag="button" to="/register">注册</router-link>
        </div>
      </div>
    </div>
    <div class="aboutsend">
      <div class="mid">
        <router-link :to="{name: 'mylist',query:{'num':'2'}}" tag="div" class="middiv" style="padding-left: .56rem">
          <div class="daipeisong"></div>
          <div>待配送</div>
        </router-link>
      </div>
      <div class="mid">
        <router-link :to="{name: 'mylist',query:{'num':'3'}}" tag="div" class="middiv"  style="width:100%;box-sizing:border-box;border-left: 1px solid #e5e5e5;border-right: 1px solid #e5e5e5">
          <div class="peisongzhong"></div>
          <div>配送中</div>
        </router-link>
      </div>
      <div class="mid">
        <router-link :to="{name: 'mylist',query:{'num':'4'}}" tag="div" class="middiv">
          <div class="yisongda"></div>
          <div>已送达</div>
        </router-link>
      </div>

    </div>
    <div class="list">
      <div style="height: .28rem;background:#f0f0f0 "></div>
      <div class="bottom">
        <router-link :to="{name: 'mylist',query:{'num':'1'}}" tag='div' class="fe phone">
          <div class="pic"></div>
          <div class="inp">全部订单</div>
          <div class="iconfont icon-xiangyou"></div>
        </router-link>



        <router-link to="/personaldata" class="fe phone">
          <div class="pic pic1"></div>
          <div class="inp">个人资料</div>
          <div class="iconfont icon-xiangyou"></div>
        </router-link>


        <router-link to="/moneystand" class="fe phone">
          <div class="pic pic2"></div>
          <div class="inp">收费标准</div>
          <div class="iconfont icon-xiangyou"></div>
        </router-link>

        <div class="fe phone">
          <div class="pic pic2"></div>
          <div @click="getphone" class="inp">400服务</div>
          <div class="iconfont icon-xiangyou"></div>
        </div>

        <router-link tag="div" to="/freaddress" class="fe phone">
          <div class="pic pic2"></div>
          <div class="inp">常用地址</div>
          <div class="iconfont icon-xiangyou"></div>
        </router-link>
    </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "mydetail",
    methods:{
      getphone(){
        document.addEventListener('plusready',Plusready,false)
        plus.device.dial( "400-060-5287", true );
      }
    },
    mounted() {
      $('header div').css({'fontSize': '.36rem'})
    }
  }
</script>
<style lang="scss" scoped="scoped">

  .beijing {
    background: url("../assets/cutpic/wodebeijing.png") center/cover no-repeat;
    header {
      height: .36rem;
      padding: .34rem .3rem 0;

      line-height: 1;
      div:nth-child(1) {
        color: #fff;
        float: left;
      }
      div:nth-child(2) {
        float: right;
        color: #fff;
      }
    }

    .middle {
      text-align: center;
      padding-bottom: .42rem;
      .pic1 {
        margin: 0 auto;
        width: 1.3rem;
        height: 1.3rem;
        background: #fff;
        padding: .05rem;
        border-radius: 50%;

        img {
          display: block;
          width: 1.3rem;
          height: 1.3rem;

          border-radius: 50%;
        }

      }
      div:nth-of-type(2) {
        margin-top: .24rem;
        color: #fff;
      }
      div:nth-child(3) {
        margin-top: .7rem;
        button:nth-child(1) {
          margin-right: .6rem;
        }
        button {
          height: .6rem;
          width: 1.5rem;
          border-radius: .3rem;
          width: 1.5rem;
          line-height: .6rem;
          border-radius: .3rem;
          background-color: #99ccff;
          font-size: .3rem;
          color: #fff;
        }
      }
    }
  }

  .aboutsend {
    display: flex;
    .mid{
      .middiv{
        padding-left: .54rem;
        .daipeisong{
          background: url("../assets/cutpic/daipeisong.png") center/cover;
        }
        .peisongzhong{
          background: url("../assets/cutpic/peisongzhong.png") center/cover;
        }
        .yisongda{
          background: url("../assets/cutpic/yisongda.png") center/cover;
        }

        div:nth-child(1){
          width:.34rem;
          height: .32rem;
          margin:.3rem .20rem 0 0;
        }
        div:nth-child(2){
          height: .28rem;
          font-size: .28rem;
          margin-top: .3rem;
          line-height: 1;
        }
      }
      div{
        float: left;
      }
    }
    > div {
      height: .88rem;
      flex: 1;
      text-align: center;
    }
    div:nth-child(1) {
      background: #fff;
      /*background-image: url("static/logo.png");*/
    }
    div:nth-child(2) {

    }
    div:nth-child(3) {

    }
  }

  .list{
    box-sizing: border-box;
    font-size: .3rem;
    line-height: .9rem;
    color: #333;
    .fe {
      display: flex;
      height: .9rem;
      padding: 0 .3rem;
    }
    .pic {
      margin-right: .3rem;
      margin-top: .28rem;
      width: .34rem;
      height: .34rem;
    }
    .phone {
      display: flex;
      .pic{
        width: .25rem;
        height: .36rem;
        background: url("../assets/cutpic/shouji.png") center/cover;
        background-position-x: .01rem;
      }
      .pic1{
        width: .34rem;
        height: .34rem;
        background: url("../assets/cutpic/wo.png") center/cover;
        background-position-x: .01rem;
      }
      .pic2{
        width: .33rem;
        height: .36rem;
        background: url("../assets/cutpic/shoufei.png") center/cover;
        background-position-x: .01rem;
      }
      .inp{
        flex: 1;
      }
      .icon-guanbi-copy{
        font-size: .28rem;
        line-height: 1rem;
        float: right;
        color: #999;
      }

    }
  }
</style>
