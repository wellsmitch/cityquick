<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold;font-weight: bolder;">系统设置</div>
    </header>

    <div style="margin-top: .3rem">
      <div style="width: 100vw;overflow: hidden;">
        <div class="flt" style="height: .3rem;padding: .3rem 0 .3rem;margin: 0 .3rem;color: #333;">版本更新
        </div>
        <router-link to="/version" class="iconfont icon-xiangyou"
                     style="float: right;display: block;height: 1rem;line-height: 1rem;margin-right: .3rem"></router-link>
      </div>
      <div style="width: 100vw;overflow: hidden;">
        <div class="flt" style="height: .3rem;padding: .3rem 0 .3rem;margin: 0 .3rem;color: #333;">常见问题
        </div>
        <router-link to="/normalquestion" class="iconfont icon-xiangyou"
                     style="float: right;display: block;height: 1rem;line-height: 1rem;margin-right: .3rem"></router-link>
      </div>
      <div style="height: .2rem;background: #f0f0f0"></div>

      <div @click="tap()" class="loginout">退出登录</div>


    </div>
  </div>
</template>

<script>

  import $ from 'jquery';
  import {Navbar, TabItem} from 'mint-ui';

  export default {
    name: 'version',
    data() {
      return {}
    },
    methods: {
      tap(){
        this.$router.push('/cityquick')
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped="scoped">
  $placeholder: #999999;
  .flt {
    float: left;
  }

  .frt {
    float: right;
  }
div{
  background: #fff;
}
  .hello {
    height: 100vh;
    background: #f0f0f0;
    .loginout{
      font-weight: bolder;
      font-family: PingFang-SC-Bold;
      text-align: center;
      font-size: .3rem;
      height: .9rem;
      line-height: .9rem;
      color: #1269d3;
    }
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
    background: #fff;
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
