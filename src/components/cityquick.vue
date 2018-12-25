<template>
  <div class="hello">

    <header>
      <router-link tag="div" to="/mydetail" class="wo"></router-link>
      <div>管交网快配</div>
      <router-link tag="div" to="/cityfenzhan">
        <b>郑州</b>
        <b class="iconfont icon-xiangxia"></b>

      </router-link>
    </header>

    <div class="navbar" style="height:100%;">

      <mt-navbar v-model="selected" style="justify-content: space-around">
        <mt-tab-item id="1">同城专车</mt-tab-item>
        <mt-tab-item id="2">同城共配</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container class="tab" v-model="selected">
        <mt-tab-container-item id="1" class="tab">
          <div style="width: 100%;height: 100%;" id="out" class="tab"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2" class="tab">
          <div class="tab">22222222222</div>
        </mt-tab-container-item>
      </mt-tab-container>


      <div class="bottom">
        <div class="placeagain iconfont icon-xiaotuziCduan-"></div>
        <div class="select">
          <div class="goods">帮我送</div>
          <div class="goods">帮我取</div>
        </div>
        <!--帮我送-->
        <div v-show="show1" class="citetap" style="background: #fff">
          <div class="help">
            <!--收货图标-->
            <span class="fahuo"></span>
            <input type="text" placeholder="请完善发货信息">
            <router-link to="/sendgoods" tag="b" class="iconfont icon-xiangyou"></router-link>
          </div>

          <div class="help">
            <!--发货图标-->
            <span class="shouhuo"></span>
            <input type="text" placeholder="请完善收货信息">
            <router-link to="/getgoods" tag="b" class="iconfont icon-xiangyou"></router-link>
          </div>

        </div>
        <!--帮我取-->
        <div v-show="show2" style="background: #fff">
          <div class="help">
            <!--收货图标-->
            <span class="fahuo"></span>
            <input type="text" placeholder="请完善发货信息11111111">
            <router-link to="/sendgoods" tag="b" class="iconfont icon-xiangyou"></router-link>
          </div>

          <div class="help">
            <!--发货图标-->
            <span class="shouhuo"></span>
            <input type="text" placeholder="请完善收货信息111111111">
            <router-link to="/getgoods" tag="b" class="iconfont icon-xiangyou"></router-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import $ from 'jquery';
  import {Navbar,Toast} from 'mint-ui';
  export default {
    name: 'cityquick',
    data() {
      return {
        'selected': '1',
        'show1': true,
        'show2': false
      }
    },
    methods: {
      cite() {
        $.getScript(window.gaodepw).done(function (script, textstatus) {
          plus.geolocation.getCurrentPosition(successCB, errorCB);

          function successCB(a) {
            console.log(a)
            var marker = new AMap.Marker({
              position: new AMap.LngLat(a.coords.longitude, a.coords.latitude),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
              title: a.address.district
            });

            var map = new AMap.Map('out', {
              zoom: 18,//级别
              center: [a.coords.longitude, a.coords.latitude],//中心点坐标
              viewMode: '2D'//使用3D视图
            });
            map.add(marker);
            $('.amap-logo').css({'display':'none'})
            $('.amap-copyright').css({'display':'none','visibility':'hidden'})
          }

          function errorCB() {
            Toast({
              message: '无法获取当前位置',
              position: 'center',
              duration: 2000
            });
          }
        })
      }
    },
    mounted() {
      this.cite()
//回到当前位置
      $('.placeagain').click(function () {
        this.cite()
      }.bind(this))


      $('.mint-tab-container-wrap,.tab').css({'height': '100%'})
      var _this = this
      $('.mint-navbar').css({
        'display': 'flex',
        'justifyContent': 'spaceAround',
        'color': 'red'
      });
      $('.mint-tab-item').css({
        'fontSize': '.3rem',
        'display': 'inlineBlock',

        'flexGrow': '0',
        'flexBasis': 'auto'

      });


      $('.goods').click(function () {
        if ($(this).index() == 0) {
          _this.show1 = true
          _this.show2 = false
          // console.log(_this.show1,_this.show2);
        } else if ($(this).index() == 1) {
          _this.show2 = true
          _this.show1 = false
          // console.log(_this.show1,_this.show2);
        }

      })
      $('.select div').click(function () {
        $(this).css({'borderBottom': '1px solid #1269d3'}).siblings().css({'borderBottom': 'none'})
      })

    }

  }
</script>

<style lang="scss" scoped="scoped">


  /*头部*/
  header {
    background: #fff;
    position: relative;
    padding: .27rem .3rem;
    height: .34rem;
    .wo {
      display: block;
      float: left;
      width: 0.34rem;
      height: 0.34rem;
      background: url("../assets/cutpic/wo.png") center/cover no-repeat;
    }

    div:nth-child(1) {
      float: left;
      font-weight: bolder;
      color: #1269d3;
    }
    div:nth-child(2) {
      font-size: 0.35rem;
      line-height: 1;
      width: 1.76rem;
      height: .34rem;
      font-family: PingFang-SC-Bold;
      font-weight: bolder;
      color: #333333;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    div:nth-child(3) {
      float: right;
      b:nth-child(1) {
        font-size: .24rem;
      }
      b:nth-child(2) {
        font-size: .12rem;
      }
      b {
        font-weight: normal;
        color: #333;
      }

    }
  }

  .placeagain {
    width: .6rem;
    height: .6rem;
    position: relative;
    left: 6.3rem;
    border-radius: 50%;
    font-size: .34rem;
    line-height: .6rem;
    margin-bottom: .3rem;
    text-align: center;
    background: #fff;
  }

  .navbar {
    .bottom {
      position: absolute;
      box-sizing: border-box;
      padding: .3rem;
      width: 100%;
      bottom: 0;
      z-index: 20;
      .select {
        background: #fff;
        border-bottom-left-radius: .2rem;
        border-bottom-right-radius: .2rem;
        div {
          color: #333;
          box-sizing: border-box;
        }
      }

      .help {
        padding: .36rem .3rem;
        overflow: hidden;
        .fahuo {
          float: left;
          display: block;
          width: .36rem;
          height: .36rem;
          background: url("../assets/cutpic/fa.png") center/cover;
          background-position-x: .01rem;
        }
        .shouhuo {
          float: left;
          display: block;
          width: .36rem;
          height: .36rem;
          background: url("../assets/cutpic/shou.png") center/cover;
          background-position-x: .01rem;
        }
        input {
          float: left;
          text-indent: .3rem;
        }
        b {
          float: right;
          font-weight: normal;
        }
      }

      .select {
        background: #f5f5f5;
        border-top-right-radius: .2rem;
        border-top-left-radius: .2rem;
        overflow: hidden;
        padding: .3rem .3rem 0;
        div:nth-child(1) {
          margin-right: .5rem;
        }

        div {
          box-sizing: border-box;
          padding-bottom: .3rem;

          float: left;
        }
      }
    }

  }
</style>
