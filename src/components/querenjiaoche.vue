<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold;font-weight: bolder;">确认叫车</div>
    </header>
    <div style="height:2.73rem">地图</div>
    <div style="height: 4.48rem;">
      <div class="tab" style="height: .88rem;background: #f5f5f5">
        <div style="border-bottom: 2px solid #1269d3" class="car">小型面包</div>
        <div class="car">依维柯</div>
        <div class="car">箱货</div>
      </div>
        <div style="display: block" class="pic pic1">
          <div>适合少量货物、小件  起步价：<span>￥29/5</span>KM</div>
        </div>
        <div class="pic pic2">
          <div>适合少量货物、小件  起步价：<span>￥29/5</span>KM</div>
        </div>
        <div class="pic pic3">
          <div>适合少量货物、小件  起步价：<span>￥29/5</span>KM</div>
        </div>
      <div class="mes">
        <div class="shoufei"></div>
        <div>是否代收货款</div>
        <div>0元</div>
        <div class="iconfont icon-xiangyou"></div>
      </div>
      <div class="mes">
        <div class="dingdan"></div>
        <div>特殊说明</div>
        <div>是否需要司机交代一下</div>
        <div class="iconfont icon-xiangyou"></div>
      </div>
      <div class="for">
        <p>预计</p>
        <p>166.00</p>
        <p>元></p>
      </div>
      <div class="exp">实际费用可能因实际行驶里程/等候时间等因素而异</div>
      <div class="call">马上叫车</div>
    </div>
  </div>
</template>

<script>

  import $ from 'jquery';
  import {Navbar, TabItem} from 'mint-ui';

  export default {
    name: 'querenjiaoche',
    data() {
      return {}
    },
    methods: {},
    mounted() {
      $('.car').click(function () {
        var _this = this;
        $('.car').css({borderBottom: 'none'});
        $(this).css({borderBottom: '2px solid #1269d3'});
        $('.pic').css({'display':'none'}).eq($(_this).index()).css({'display':'block'})
      })

    }
  }
</script>

<style lang="scss" scoped="scoped">
  .call{
    width: 6.90rem;
    height: .80rem;
    background-color: #1269d3;
    border-radius: .05rem;
    color: #fff;
    margin: .3rem auto;
    text-align: center;
    line-height: .8rem;
  }

  .exp{
    margin-top: .3rem;
    font-size: .2rem;
    text-align: center;
    color: #999;
  }
  .for{
    height: .48rem;
    margin-top: .4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    p{
      line-height: 0.48rem;
    }
    p:nth-child(1){
      font-size: .24rem;

    }
    p:nth-child(2){
      font-size: .48rem;

      color: #ff4300;
    }
    p:nth-child(3){
      font-size: .24rem;

      color: #999;
    }
  }
  .shoufei{
    margin:0 .4rem 0 .3rem;
    background: url("../assets/cutpic/shou.png") center/cover no-repeat;
    background-size: .36rem 0.36rem;
  }
  .dingdan{
    background: url("../assets/cutpic/dingwei.png") center/cover no-repeat;
    background-size: .36rem 0.5rem;
    margin:0 .4rem 0 .3rem;
    background-position-x:.02rem ;
  }
  .mes{
    height: 1rem;
    display: flex;
    line-height: 1rem;
    div:nth-child(1){
      width: .4rem;
      height: .86rem;
    }
    div:nth-child(2){
      font-size: .3rem;
      color: #333;
      flex: 1;
    }
    div:nth-child(3){
      width: 3rem;
      font-size: .28rem;
      text-align: right;
      color: #999;
      margin-right: .3rem;
    }
    div:nth-child(4){
      width: .2rem;
      font-size: .3rem;
      margin-right: .3rem;
    }
  }
  .pic {
    height: 3.06rem;
    display: none;
    position: relative;
    div{
      position: absolute;
      bottom: 0;
      left: 0.3rem;
      height: .84rem;
      line-height: .84rem;
      font-size: .24rem;
      color: #666;
      span{
        color: #ff4300;
      }
    }
  }

  .pic1 {
    background: url("../assets/cutpic/mianbao.png") center/cover no-repeat;
    background-size: 3.1rem 2.2rem;
  }

  .pic2 {
    background: url("../assets/cutpic/yiweke.png") center/cover no-repeat;
    background-size: 3.1rem 2.2rem;
  }

  .pic3 {
    background: url("../assets/cutpic/xianghuo.png") center/cover no-repeat;
    background-size: 3.1rem 2.2rem;
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

  .tab {
    div {
      float: left;
      height: 100%;
      box-sizing: border-box;
      margin: 0 .3rem;
      font-size: .28rem;
      line-height: .88rem;
      color: #333;

    }
  }


</style>
