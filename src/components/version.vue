<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold;font-weight: bolder;">版本更新</div>
    </header>
<div style="height: .2rem;background: #f0f0f0"></div>
    <div style="margin-top: .3rem">
      <div style="width: 100vw;overflow: hidden;">
        <div class="flt" style="height: .3rem;padding: .3rem 0 .3rem;margin: 0 .3rem;color: #333;">2018-01-08系统更新功能
        </div>
        <router-link to="/versiondetail" class="iconfont icon-xiangyou"
                     style="float: right;display: block;height: 1rem;line-height: 1rem;margin-right: .3rem"></router-link>
      </div>
      <div style="width: 100vw;overflow: hidden;">
        <div class="flt" style="height: .3rem;padding: .3rem 0 .3rem;margin: 0 .3rem;color: #333;">2017-12-08系统更新功能
        </div>
        <router-link to="/versiondetail" class="iconfont icon-xiangyou"
                     style="float: right;display: block;height: 1rem;line-height: 1rem;margin-right: .3rem"></router-link>
      </div>


    </div>
  </div>
</template>

<script>

  import $ from 'jquery';
  import {Navbar, TabItem} from 'mint-ui';

  export default {
    name: 'systermset',
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

  /*返回箭头*/
  icon-fanhui2 {
    font-size: .35rem;

  }

</style>
