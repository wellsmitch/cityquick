<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div>
        <input type="text" placeholder="搜索地点">
        <div class="iconfont icon-sousuo frt"></div>
      </div>

      <div>郑州</div>
    </header>
    <div>
      <div v-for="item in arr" class="address">
        <img v-show="xianshi" src="../assets/cutpic/dingweikong.png" alt="">
        <div class="address1">
          <div class="dizhi flt"></div>
          <div class="flt">
            <div>
              {{item.name}}
            </div>
            <div>
              {{item.district}}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import $ from 'jquery';

  export default {
    name: 'search',
    data() {
      return {
        ele: '',
        'xianshi': false,
        arr: []
      }
    },
    methods: {},
    mounted() {
      var _this = this
      $('input').on('input', function () {
        _this.arr = []
        // if($('.address1').html()==''){
        $.ajax({
          url: "https://restapi.amap.com/v3/assistant/inputtips?keywords=" + $('input').val() + "&key=" + 'ebedd87f3b20e6f665c1313c1444321c',
          success: function (data) {
            $.each(data.tips, function (i, ele) {
              console.log(ele);
              if (ele.district.indexOf('郑州市') != -1) {
                _this.arr.push(ele)
              }
              if (_this.arr.length == 0) {
                this.xianshi = true
              }
            })
          },
          err: function (data) {
            console.log(data);
          }
        });

        // }
      }.bind(this))
    }
  }
</script>

<style lang="scss" scoped="scoped">
  $placeholder: #999999;
  .address {
    overflow: hidden;
  }

  .hello {
    height: 100vh;
    background: #fff;
  }

  img {
    display: block;
    height: 2rem;
    width: 1.78rem;
    margin: 3rem auto 0;
  }

  /*头部*/
  header {
    height: .6rem;
    padding: .14rem 0rem;
    display: flex;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    input:nth-of-type(1) {
      font-size: .28rem;
      height: .6rem;
    }
    input:nth-of-type(2) {
      width: .6rem;
      height: .6rem;
    }
    div:nth-child(1) {
      height: .6rem;
      font-size: .36rem !important;
      float: left;
      padding: 0rem .3rem;
      line-height: .6rem;
    }
    div:nth-child(2) {
      input {
        background: #f0f0f0;

      }
      .icon-sousuo {
        width: .3rem;
        height: .3rem;
        font-size: .3rem;
        padding-top: .15rem;
        line-height: 1;
        color: #999;
        font-weight: bolder;
      }
      padding: 0 .15rem 0 .3rem;
      flex: 1;
      height: .6rem;
      font-family: PingFang-SC-Medium;
      font-weight: normal;
      line-height: .6rem;
      background: #f0f0f0;
      color: #333333;
      font-size: .24rem;

    }
    div:nth-of-type(3) {
      float: right;
      height: .6rem;
      font-size: .24rem !important;
      padding: 0rem .3rem;
      line-height: .6rem;
      color: #333;
    }
  }

  .address {
    padding: .3rem 0;
    .dizhi {
      width: .24rem;
      height: .3rem;
      margin: .32rem;
      background: url("../assets/cutpic/dingwei.png") center/cover;
    }
    div:nth-of-type(2) {
      div:nth-of-type(1) {
        line-height: 1;
        font-size: .32rem;
        color: #333;
      }
      div:nth-of-type(2) {
        font-size: .24rem;
        margin-top: .2rem;
        color: #999;
      }
    }
  }

  /*返回箭头*/
  icon-fanhui2 {
    font-size: .35rem;

  }

</style>
