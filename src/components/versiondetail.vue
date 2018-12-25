<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold;font-weight: bolder;">版本更新</div>
    </header>
    <div style="height: .2rem;background: #f0f0f0"></div>
    <div>
      <div style="height: .3rem;padding: .3rem;color: #333;">2018-01-08系统更新功能</div>
      <div style="height: auto;padding: 0 .3rem .3rem;color: #333;line-height: 0.5rem;">
        版本号：v2.1.1<br/>
        1、首页新增采购专区入口<br/>
        2、优化官方通知样式<br/>
        3、新增金条支付
      </div>
    </div>
  </div>
</template>

<script>

  import $ from 'jquery';
  import {Navbar, TabItem} from 'mint-ui';

  export default {
    name: 'versiondetail',
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
  $placeholder: #999999;
  .flt {
    float: left;
  }

  .frt {
    float: right;
  }

  .hello {
    height: 100vh;
  }

  input {
    font-size: .3rem;
    padding: .35rem .3rem;
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

  /*返回箭头*/
  icon-fanhui2 {
    font-size: .35rem;

  }


</style>
