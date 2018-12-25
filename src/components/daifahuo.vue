<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold;font-weight: bolder;">待配送</div>
    </header>
    <div style="height: .2rem;background: #f0f0f0"></div>
    <div style="display: flex;height: 13rem;flex-direction: column">
    <div class="all" style="overflow: auto;flex: 1">
      <div class="dingdan">
        <div>订单号:</div>
        <div>123456789</div>
      </div>
      <div class="leixing">
        <div>服务类型:</div>
        <div>123456789</div>
      </div>
      <div class="chexing">
        <div>车型:</div>
        <div>123456789</div>
      </div>
      <div class="time">
        <div>用车时间:</div>
        <div>123456789</div>
      </div>
      <div class="money">
        <div>预及费用:</div>
        <div>$456</div>
        <div class="iconfont icon-xiangyou" style="float: right;padding-right: .3rem"></div>
      </div>
      <div class="money1">
        <div>代收货款:</div>
        <div>$456</div>
      </div>
      <div class="explain" style="display: flex;">
        <div>特殊说明:</div>
        <div style="flex: 1;overflow: auto">123456789华南城速交叉口华南城二路与新郑快速交叉口华南城二路与新郑快速交叉口华南城二路与新郑快速交叉口华南城二路与新郑快速交叉口华南城二路与新郑快速交叉口</div>
      </div>
      <div style="height: .2rem;padding:0;background: #f0f0f0"></div>
      <div class="fa">
        <div></div>
        <div>
          <div>新郑华南城</div>
          <div>华南城二路与新郑快速交叉口</div>
          <div>发货人：1234567891</div>
        </div>
      </div>
      <div class="shou">
        <div></div>
        <div>
          <div>新郑华南城</div>
          <div>华南城二路与新郑快速交叉口</div>
          <div>发货人：1234567891</div>
        </div>
      </div>


    </div>
      <div class="again">
      <div>再次下单</div>
      </div>
    </div>
  </div>
</template>

<script>

  import $ from 'jquery';
  import {Navbar, TabItem} from 'mint-ui';

  export default {
    name: 'daifahuo',
    data() {
      return {}
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style lang="scss" scoped="scoped">
  .hello{
    display: flex;
    flex-direction: column;
  }
.again{
  height: .8rem;
  padding:.4rem .3rem .4rem;
  div{
    width: 100%;
    height: .80rem;
    background-color: #1269d3;
    border-radius: .05rem;
    line-height: .8rem;
    font-size: .3rem;
    text-align: center;
    color: #fff;
  }

}
  /*头部*/
  header {
    height: .35rem;
    padding: .27rem 0.3rem .26rem;
    position: relative;
    color: #333;
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
  .all{
    flex: 1;
    flex-direction: column;
    height: 100%;
    .money{
      >div:nth-child(2){
        color: #ff4300!important;

      }
    }
    .fa,.shou{
      display: flex;
      box-sizing: border-box;
      padding: .3rem;
      >div:nth-child(1){
        margin-top: .08rem;
        margin-right: .3rem;
      }
      div:nth-child(2){
        flex: 1;
        div{
          clear: both!important;
          width:100%;
        }
        div:nth-child(1){
          font-size: .3rem;
          line-height: .5rem;
        }
        div:nth-child(2){
          font-size: .24rem;
          line-height: .4rem;
        }
        div:nth-child(3){
          font-size: .24rem;
        }

      }
    }
    .fa{
      >div:nth-child(1){
        width: .36rem;
        height: .34rem;
        background: url("../assets/cutpic/fa.png") center/cover no-repeat;
      }
    }
    .shou{
      >div:nth-child(1){
        width: .36rem;
        height: .34rem;
        background: url("../assets/cutpic/shou.png") center/cover no-repeat;
      }
    }

    >div{
      border-bottom: 1px solid #f5f5f5;
      overflow: hidden;
      padding: .36rem 0 .3rem .3rem;
      font-family: PingFang-SC-Medium;
      font-size: .28rem;

      div{
        float: left;
      }
      div:nth-child(1){
        width: 1.3rem;
        color: #666;
      }
      div:nth-child(2){
       font-size: .24rem;
        color: #333;
      }
    }

  }


</style>
