<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold;font-weight: bolder;">城市分站</div>
    </header>
    <div class="color"></div>
    <!--当前城市-->
    <div>

      <div class="nowlocal">当前城市</div>
      <div class="contain">
        <div class="pic"></div>
        <div class="didian"></div>
        <div class="tap">重新定位</div>
      </div>
      <div class="contain border">
        <div class="didian opencity">开放城市</div>
      </div>
      <div>
        <div v-for="item in place" class="site">{{item.name}}</div>
      </div>

      <div class="no">
        <div class="picbottom"></div>

        <div
          style="text-align: center;font-family: PingFang-SC-Medium;font-size: .24rem;color: #999;line-height: .32rem"
          v-show="city">抱歉您所在的城市<br/>暂未开通服务敬请期待！
        </div>
      </div>


    </div>

  </div>
</template>

<script>

  import $ from 'jquery';
  import {Navbar, TabItem} from 'mint-ui';

  export default {
    name: 'cityfenzhan',
    data() {
      return {
        'city': true,
        'place':[]
      }
    },
    methods: {
      cite() {
        $.getScript(window.gaodepw).done(function (script, textstatus) {
          plus.geolocation.getCurrentPosition(successCB, errorCB);

          function successCB(a) {
            $('.didian').html(a.address.city)
            if (a.address.city != '郑州市') {
              $('.no').css('display', 'block')
            } else {
              $('.no').css('display', 'none')
            }
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
      var _this = this
      $.ajax({
        type:'get',
        url:window.http+'/api/'+window.version+'/common/supportedCitys',
        success:function (data) {
          _this.place = data.data
        }
      })
      this.cite()
      $('.tap').click(function () {
        this.cite()
      }.bind(this))
      $('.border').css('borderBottom', 'none')
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .flt {
    float: left;
  }

  .frt {
    float: right;
  }

  .hello {
    height: 100vh;
    .site {
      width: 1.4rem;
      height: .60rem;
      border-radius: .05rem;
      border: solid 1px #e5e5e5;
      font-size: .3rem;
      line-height: .6rem;
      float: left;
      font-family: PingFang-SC-Medium;
      text-align: center;
      margin-left: .3rem;
      color: #333;
    }
    .picbottom {
      margin: 2rem auto 0;
      height: 2.3rem;
      width: 2rem;
      background: url("../assets/cutpic/dingweikong.png") center/cover;
    }
    .color {
      height: .2rem;
      background-color: #f0f0f0;
    }
    .nowlocal {
      height: .24rem;
      line-height: .24rem;
      margin: .3rem;
      margin-bottom: 0;
      font-family: PingFang-SC-Medium;
      font-size: .24rem;
      font-weight: normal;
      font-stretch: normal;
      color: #999999;
    }
    .contain {
      box-sizing: border-box;
      padding: 0 .3rem;
      display: flex;
      border-bottom: 1px solid #f5f5f5;
      .pic {
        width: .24rem;
        height: .3rem;
        margin-top: .3rem;
        margin-right: .2rem;
        background: url("../assets/cutpic/dingwei.png") center/cover;
      }
      .didian {
        flex: 1;
        line-height: .9rem;
        font-size: .3rem;
        font-family: PingFang-SC-Bold;
        color: #333;
      }
      .tap {
        width: 1.2rem;
        line-height: .9rem;
        font-size: .24rem;
        font-family: PingFang-SC-Bold;
        color: #1269d3;
      }
      .opencity {
        color: #999;
      }
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
