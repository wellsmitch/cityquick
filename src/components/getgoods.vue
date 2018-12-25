<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold;font-weight: bolder;">取货地址</div>
      <div class="frt">郑州</div>
    </header>

    <div class="middle">
      取货地址地图
      <div class="iconfont icon-xiaotuziCduan-"></div>

    </div>
    <div class="bottom">

      <div class="fe send1">
        <div class="pic"></div>
        <div class="dizhi">管交网大厦</div>
        <router-link to="/search" class="iconfont icon-xiangyou"></router-link>
      </div>
      <div class="fe send2">
        <div class="pic"></div>
        <input type="text" placeholder="详细地址如街道门牌号">
      </div>
      <div class="fe name">
        <div class="pic"></div>
        <input type="text" placeholder="联系人姓名">
      </div>
      <div class="fe phone">
        <div class="pic"></div>
        <input type="text" placeholder="请输入手机号">
        <div class="iconfont icon-guanbi-copy"></div>
      </div>
      <div class="fe defaultaddress">
        <div>
          <label class="mint-checklist-label" style="padding: .25rem 0;flex: 1;text-align: center">
            <div style="display: inline-block;">
            <span class="mint-checkbox">
              <input type="checkbox" class="mint-checkbox-input" value="值A">
              <span class="mint-checkbox-core isdefault" style="width: .3rem;height: .3rem;"></span>
            </span>
              <span class="mint-checkbox-label" style="font-size: .24rem">设置默认地址</span>
            </div>
          </label>
        </div>
        <!--<div>设置默认地址</div>-->
      </div>

      <button class="yes">确认</button>

    </div>
  </div>
</template>
<script>
  import $ from 'jquery';
  import {Navbar, TabItem, Checklist} from 'mint-ui';

  export default {
    name: 'getgoods',
    data() {
      return {}
    },
    methods: {},
    mounted() {
      $('.mint-checkbox-core::after').css({
  'top':'0rem',
  'left':'.05rem'
})

$('.icon-guanbi-copy').click(function () {
  console.log($('.phone input').val(''));
})
    }
  }
</script>
<style lang="scss" scoped="scoped">
  .fe {
    display: flex;
    height: 1rem;
    padding: 0 .3rem;
  }

  .pic {
    margin-right: .3rem;
    margin-top: .33rem;
    width: .34rem;
    height: .34rem;
  }


  .hello {
    height: 100vh;
    display: flex;
    flex-direction: column;
    .middle {
      flex: 1;
      position: relative;
      border-top: 1px solid #aaa;
      border-bottom: 1px solid #aaa;
      .icon-xiaotuziCduan- {
        width: .6rem;
        height: .6rem;
        position: absolute;
        font-size: .32rem;
        color: #333;
        bottom: .3rem;
        right: .3rem;
      }
    }
    /*头部*/
    header {
      height: .35rem;
      padding: .27rem 0.3rem .26rem;
      position: relative;
      div:nth-of-type(1) {
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
      div:nth-of-type(3) {
        line-height: 1;
        font-size: .24rem;
        color: #333;
        line-height: .35rem;
      }
    }
    .bottom {

      .send1 {
        font-size: .28rem;
        line-height: 1rem;
        color: #333;
        .dizhi{
          flex: 1;
        }
        .pic {

          background: url("../assets/cutpic/fa.png") center/cover;
          background-position-x: .01rem;
        }
      }
      .send2 {
        .pic {
          width: .3rem;
          height: .36rem;
          background: url("../assets/cutpic/dingwei.png") center/cover;
          background-position-x: .01rem;
        }

      }
      .name {
        .pic {
          background: url("../assets/cutpic/wo.png") center/cover;
          background-position-x: .01rem;
        }

      }
      .phone {
        display: flex;
        .pic{
          width: .25rem;
          height: .36rem;
          background: url("../assets/cutpic/shouji.png") center/cover;
          background-position-x: .01rem;
        }
        input{
          flex: 1;
        }
        .icon-guanbi-copy{
          font-size: .28rem;
          line-height: 1rem;
          float: right;
          color: #999;
        }

      }

      .defaultaddress{
        height: 1.1rem;
      }
      .yes{
        height: .8rem;
        width: 6.9rem;
        margin: 0 .3rem .3rem;
        background: #1269d3;
        border-radius: .05rem;
        color: #fff;
      }
    }
    /*返回箭头*/
    icon-fanhui2 {
      font-size: .35rem;

    }
  }
</style>
