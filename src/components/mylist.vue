<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold">我的订单</div>
    </header>
    <mt-navbar v-model="selected">

      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">待配送</mt-tab-item>
      <mt-tab-item id="3">配送中</mt-tab-item>
      <mt-tab-item id="4">已送达</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <div class="mid">
      <div v-model="selected">
        <div class="show">
          <div class="detail">
            <div class="mid_ mid_1">
              <div>2017-04-14 10:48</div>
              <div>待配送</div>
            </div>
            <div class="mid_ mid_2">
              <div></div>
              <div>新郑华南城一号交易广场全部</div>
            </div>
            <div class="mid_ mid_3">
              <div class="getx"></div>
              <div>龙湖锦艺城</div>
            </div>

            <div class="mid_ mid_4">
              <div class="getx">预计收费:
                <span class="money">{{money}}</span>
              </div>
              <div>取消订单</div>
            </div>
          </div>
        </div>
        <!--待配送-->
        <div class="show">
          <router-link tag="div" :to="{path: '/daifahuo',name: 'daifahuo',query:{id:1}}" class="detail">
            <div class="mid_ mid_1">
              <div>2017-04-14 10:48</div>
              <div>待配送</div>
            </div>
            <div class="mid_ mid_2">
              <div></div>
              <div>新郑华南城一号交易广场</div>
            </div>
            <div class="mid_ mid_3">
              <div class="getx"></div>
              <div>龙湖锦艺城</div>
            </div>

            <div class="mid_ mid_4">
              <div class="getx">预计收费:
                <span class="money">{{money}}</span>
              </div>
              <div class="cancel">取消订单</div>
            </div>
          </router-link>
        </div>
        <!--代付款-->
        <div class="show">
          <div class="detail">
            <div class="mid_ mid_1">
              <div>2017-04-14 10:48</div>
              <div>配送中</div>
            </div>
            <div class="mid_ mid_2">
              <div></div>
              <div>新郑华南城一号交易广场</div>
            </div>
            <div class="mid_ mid_3">
              <div class="getx"></div>
              <div>龙湖锦艺城</div>
            </div>

            <div class="mid_ mid_4">
              <div class="getx">预计收费:
                <span class="money">{{money}}</span>
              </div>
              <div @click="ok()" class="pay" style="color: #1269d3;border-color: #1269d3">确认送达</div>
            </div>
          </div>
        </div>
        <!--已送达-->
        <div class="show">
          <div class="detail">
            <div class="mid_ mid_1">
              <div>2017-04-14 10:48</div>
              <div>已送达</div>
            </div>
            <div class="mid_ mid_2">
              <div></div>
              <div>新郑华南城一号交易广场</div>
            </div>
            <div class="mid_ mid_3">
              <div class="getx"></div>
              <div>龙湖锦艺城</div>
            </div>

            <div class="mid_ mid_4">
              <div class="getx">预计收费:
                <span class="money">{{money}}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <mt-popup
      position="bottom"
      v-model="popupVisible"
      popup-transition="bottom">

      <div class="paywrap">
        <div class="aboutpay">
          <div style="position: relative;">
            <div>支付订单</div>
            <div @click="popupVisible=false"
                 style="position: absolute;top: 0;width: .3rem;height: .3rem;font-size: .3rem;right: .3rem;color: #000;"
                 class="iconfont icon-guanbi"></div>
          </div>
          <div class="price">123</div>
          <div class="selectpay">
            <div class="iconfont icon-alipay"></div>
            <div>支付宝支付</div>
            <div class="se iconfont icon-xuanzhong"></div>
          </div>

          <div class="selectpay">
            <div style="width: .4rem;height: .34rem;text-indent: -.1rem;color: green;font-size: .34rem"
                 class="iconfont icon-weixinfukuan"></div>
            <div>微信支付</div>
            <div class="se iconfont icon-weixuanzhong"></div>
          </div>
          <div class="quren">确认支付</div>
        </div>

      </div>
    </mt-popup>
    <div class="full">
      <div class="cancell">
        <div style="text-align: center">取消订单</div>
        <div>
          <div>计划有变，已不需要该服务</div>
          <div class="iconfont cannot icon-weixuanzhong"></div>
        </div>
        <div>
          <div>信息填写错误，重新下单</div>
          <div class="iconfont cannot icon-weixuanzhong"></div>
        </div>
        <div>
          <div>等候时间过长，已无耐心了</div>
          <div class="iconfont cannot icon-weixuanzhong"></div>
        </div>
        <div>
          <div>其它原因</div>
          <div class="iconfont cannot icon-weixuanzhong"></div>
        </div>
        <div class="xuanze">
          <div class="none">取消</div>
          <div class="yes">确定</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery';
  import {Navbar, TabItem, Popup, MessageBox} from 'mint-ui';

  export default {
    name: 'mylist',
    data() {
      return {
        selected: '1',
        money: 1000,
        arr: [1, 2, 3],
        popupVisible: false
      }
    },
    methods: {
      ok() {
        this.popupVisible = !this.popupVisible
      },


    },
    mounted: function () {
      var _this = this

      //待配送详情

      $('.cancel').click(function () {
        $('.full').css({'display': 'block'})
      })
      $('.yes').click(function () {
        $('.full').css({'display': 'none'})
        /*如果需要向后台传送数据，此处可以写ajax数据交互*/
      })
      $('.none').click(function () {
        $('.full').css({'display': 'none'})
      })
      //取消订单选项详情逻辑
      $('.cannot').click(function () {
        $('.cannot').attr('class', "iconfont cannot icon-weixuanzhong")
        $(this).attr('class', "iconfont cannot icon-xuanzhong")
      })

//支付
      $('.se').click(function () {
        $('.se').attr('class', 'se iconfont icon-weixuanzhong');
        $(this).attr('class', 'se iconfont icon-xuanzhong')

      })

      $('.mint-popup-bottom').css({'width': '100%', 'height': '5.2rem'})
      //根据参数不同展示不同选项卡中的信息
      $('.show').css({'display': 'none'})
      $('.show').eq(_this.$route.query.num - 1).css({'display': 'block'})
      this.selected = this.$route.query.num

      $('.mint-tab-item').click(function (i, ele) {
        $('.show').css({'display': 'none'})
        $('.show').eq($(this).index()).css({'display': 'block'})
      })
    }
  }
</script>

<style lang="scss" scoped="scoped">
  input {
    font-size: .3rem;
    padding: .35rem .3rem;

  }

  .hello {
    position: relative;
    /*取消订单弹窗*/
    .full {
      display: none;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, .5);
      position: absolute;
      z-index: 10;
      top: 0;
      .cancell {
        position: relative;
        box-sizing: border-box;
        padding: 0 .3rem;
        background: #fff;
        width: 6rem;
        border-radius: .2rem;
        top: 4.32rem;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        color: #666;
        .cannot {
          color: #1b6cd0;
        }
        > div {
          display: flex;
          width: 100%;
          height: .8rem;
          text-align: center;
          font-size: .28rem;
          line-height: .8rem;
          font-family: PingFang-SC-Medium;
          border-bottom: 1px solid #e5e5e5;
          div:nth-child(1) {
            flex: 1;
            text-align: left;
          }
          div:nth-child(2) {
            width: .3rem;
          }
        }
        .xuanze {
          div {
            flex: 1;
            color: #1b6cd0;
            text-align: center !important;
          }
        }
        div:nth-child(1) {
          display: block;
          color: #333;

        }
      }

    }
    .paywrap {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .5);
      height: 5.2rem;
      width: 100%;

    }
    .aboutpay {
      position: absolute;
      width: 100%;
      height: 5.2rem;
      background-color: #ffffff;
      text-align: center;
      left: 0;
      bottom: 0;
      .selectpay {
        display: flex;
        box-sizing: border-box;

        div:nth-child(1) {
          width: .3rem;
          height: .3rem;
          color: #1269d3;
        }
        div:nth-child(2) {
          text-align: left;
          text-indent: .2rem;
          flex: 1;
        }
        div:nth-child(3) {
          width: .3rem;
          height: .3rem;
          color: #1269d3;
          padding: 0;
        }
      }
      div:nth-child(1) {
        height: .9rem;
        font-size: .3rem;
        line-height: .9rem;
        color: #333;
        border-bottom: 1px solid #f0f0f0;
      }
      div:nth-child(2) {
        color: #000;
      }
      > div:nth-child(2) {
        font-size: .36rem;
        line-height: .8rem;
        padding: .5rem auto .4rem;
        font-family: PingFang-SC-Bold;
        color: #ff4300;
      }

      div:nth-child(3), div:nth-child(4) {
        width: 100%;
        height: .80rem;
        line-height: .8rem;
        margin: 0 auto .3rem;
        padding: 0 .3rem;
        /*background-color: #1269d3;*/
        border-radius: 5px;
        color: #fff;
      }
      div:nth-child(5) {
        width: 6.9rem;
        font-size: .3rem;
        line-height: .3rem;
        border-radius: 5px;
        margin: 0 auto;
        padding: .3rem 0;
        border-top: 1px solid #f0f0f0;
        background: #0366d6;
        color: #fff;
      }
    }
  }

  .mid {
    .show {
      padding: .25rem .3rem .1rem;
      margin-bottom: .2rem;
      box-sizing: border-box;
      border-radius: .2rem;
      background: #fff;
      overflow: hidden;
    }
    .mid_1 {
      border-bottom: 1px solid #f5f5f5;
      overflow: hidden;
      padding-bottom: .25rem;
      div:nth-child(1) {
        float: left;
        font-size: .2rem;
        color: #999;
        font-family: PingFang-SC-Medium;
        float: left;
      }
      div:nth-child(2) {
        width: 1rem;
        height: .4rem;
        background: rgba(18, 105, 211, .2);
        color: #1269d3;
        float: right;
        font-size: .2rem;
        border-radius: .15rem;
        text-align: center;
        line-height: .4rem;
        font-family: PingFang-SC-Medium;
      }
    }
    .mid_2, .mid_3 {
      overflow: hidden;
      border-bottom: 1px solid #f5f5f5;
      div:nth-child(1) {
        margin: .33rem .3rem 0 0;
        float: left;
        width: .36rem;
        height: .34rem;
        background: url("../assets/cutpic/shou.png") center/cover no-repeat;
      }
      div:nth-child(2) {
        float: left;
        font-size: .3rem;
        line-height: 1rem;
        color: #333;
      }
    }

    .mid_4 {
      overflow: hidden;
      padding-bottom: .3rem;
      font-size: .24rem;
      div:nth-child(1) {
        margin: .33rem .3rem 0 0;
        color: #333;
        float: left;
        width: 3rem;
        height: 100%;
        .money {
          color: #ff4300;
        }
      }
      div:nth-child(2) {
        margin-top: .2rem;
        width: 1.8rem;
        height: .6rem;
        float: right;
        font-family: PingFang-SC-Medium;
        font-size: .3rem;
        line-height: .6rem;
        text-align: center;
        color: #666;
        border-radius: 5px;
        border: solid 1px #e5e5e5;
      }
    }
    height: 100%;
    background: #f0f0f0;
    padding: .2rem;
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

  .mint-navbar {
    justify-content: space-around;
  }

  /*选项卡*/
  .mint-tab-item {
    flex: 0;
    flex-basis: auto;
  }

  .is-selected {
    color: #1269d3 !important;
    border-bottom: 2px #1269d3 solid;
    margin-bottom: 0 !important;
  }
</style>
