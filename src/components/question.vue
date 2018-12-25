<template>
  <div class="hello">

<header>
  <div class="iconfont icon-fanhui2"></div>
  <div style="font-family: PingFang-SC-Bold">常见问题</div>
</header>

<div style="margin-top: .2rem">

<!--如何获取商机-->
  <div style="height: .3rem;padding: .3rem;">
    <span style="float: left;display: block;width: auto;height: .3rem;line-height: .3rem;">如何获取商机？</span>
    <router-link to="" class="iconfont icon-gengduo1" style="width:auto;float: right;display: block;height: .3rem;line-height: .3rem;"></router-link>
  </div>

  <!--如何注册登录-->
  <div style="height: .3rem;padding: .3rem;">
    <span style="float: left;display: block;width: auto;height: .3rem;line-height: .3rem;">如何注册登录？</span>

    <router-link to="" class="iconfont icon-gengduo1" style="float: right;display: block;height: .3rem;line-height: .3rem;"></router-link>
  </div>
</div>
  </div>
</template>

<script>

  import $ from 'jquery';
  import { Navbar, TabItem } from 'mint-ui';

export default {
  name: 'question',
  data () {
    return {

    }
  },
  methods:{

  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="scoped">
  $placeholder: #999999;
  .flt{
    float: left;
  }
  .frt{
    float: right;
  }

  .hello{
    height: 100vh;
    background:#f0f0f0;
  }

    input{
      font-size: .3rem;
      padding: .35rem .3rem;
    }

  /*头部*/
  header{
    height: .35rem;
    padding:.27rem 0.3rem .26rem;
    position: relative;
    div{
      float: left;
      font-weight: bolder;
    }
    div:nth-child(2){
      font-size: 0.35rem;
      line-height: 1;
      width: 1.43rem;
      height:.35rem;
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
  /*返回箭头*/
  icon-fanhui2{
    font-size: .35rem;

  }




</style>
