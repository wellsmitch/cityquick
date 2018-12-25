<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold;font-weight: bolder;">常见问题</div>
    </header>
    <div style="height: .2rem;background: #f0f0f0"></div>
    <div style="padding-left: .3rem">
      <div style="width: 100vw;overflow: hidden;font-weight: bolder;font-size: .3rem;padding: .3rem 0;font-family: PingFang-SC-Medium;color: #333;">如何获取商机</div>
      <div class="list" style="width: 100vw;overflow: hidden;">
        <div>1、填写订阅设置</div>
        <div>2、填写基本信息</div>
        <div>3、等待系统推送</div>
      </div>


    </div>
  </div>
</template>

<script>

  import $ from 'jquery';
  import {Navbar, TabItem} from 'mint-ui';

  export default {
    name: 'how',
    data() {
      return {}
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style lang="scss" scoped="scoped">

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
.list{
  font-size: .24rem;
  line-height: .38rem;
  color: #666;
}
  /*返回箭头*/
  icon-fanhui2 {
    font-size: .35rem;

  }

</style>
