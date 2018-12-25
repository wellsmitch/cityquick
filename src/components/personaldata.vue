<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold">个人资料</div>
    </header>
    <!--头像-->
    <div class="main" style="margin-top: .2rem">
      <div style="padding: .4rem .3rem .53rem;overflow: hidden;line-height: 1;">
        <span style="float: left;display: block;width: .88rem;height: 1rem;line-height: 1rem;">头像</span>
        <b class="iconfont icon-gengduo1" style="float: right;display: block;height: 1rem;line-height: 1rem;"></b>
        <img src="static/default.png" style="float: right;width: 1rem;height: 1rem;margin-right: .3rem"
             alt="">

      </div>
      <!--昵称-->
      <div style="height: .3rem;padding: 0 .3rem .3rem;">
        <span style="float: left;display: block;width: .88rem;height: .3rem;line-height: .3rem;">昵称</span>

        <b class="iconfont icon-gengduo1" style="float: right;display: block;height: .3rem;line-height: .3rem;"></b>
        <p style="float: right;width: auto;height: .3rem;margin-right: .3rem;line-height: .3rem;">这是我的名字</p>
      </div>

      <!--修改密码-->
      <div style="height: .3rem;padding: .3rem;">
        <span style="float: left;display: block;width: auto;height: .3rem;line-height: .3rem;">修改密码</span>

        <b class="iconfont icon-gengduo1" style="float: right;display: block;height: .3rem;line-height: .3rem;"></b>
      </div>
    </div>
  </div>
</template>

<script>

  import $ from 'jquery';
  import {Navbar, TabItem} from 'mint-ui';

  export default {
    name: 'personaldata',
    data() {
      return {}
    },
    methods: {},
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="scoped">
  .hello {
    background: #f0f0f0;
  }

  input {
    font-size: .3rem;
    padding: .35rem .3rem;
  }
header,.main{
  background: #fff;
}
  /*头部*/
  header {
    height: .35rem;
    padding: .27rem 0.3rem .26rem;
    position: relative;
    div {
      float: left;
      font-weight: bolder;
    }
    div:nth-child(2) {
      font-size: 0.35rem;
      line-height: 1;
      width: 1.43rem;
      height: .35rem;
      font-family: PingFang-SC-Bold;
      font-weight: normal;
      color: #333333;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  .main{
    font-family: PingFang-SC-Medium;
    font-size: .3rem;
    color: #333;
  }

  /*返回箭头*/
  icon-fanhui2 {
    font-size: .35rem;

  }


</style>
