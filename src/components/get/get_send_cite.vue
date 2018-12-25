<template>
  <div class="hello">
    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold;font-weight: bolder;">常用地址</div>
      <div style="float: right;font-family: PingFang-SC-Medium;font-size:.3rem;font-weight: normal">添加新地址</div>
    </header>

    <div class="bot">
      <div style="height: .2rem;background: .2rem;background: #f0f0f0"></div>
      <div class="list" style="padding: 0 .3rem;overflow: hidden;">
        <div class="ma" style="display: flex;">
          <div class="cite"></div>
          <div style="flex: 1;">
            <div style="overflow: hidden;">
              <p class="flt"
                 style="height: .3rem;line-height: .3rem;background:rgba(18,105,211,.3);color: blue;margin:.3rem .06rem .2rem 0;font-size: .2rem ">
                默认</p>
              <p class="flt" style="height: .3rem;line-height: .3rem;margin:.3rem .06rem .2rem 0;font-size: .3rem ">
                奥特莱斯</p>
            </div>
            <p style="font-size: .24rem ">新郑市龙湖镇302</p>
            <div style="overflow: hidden;">
              <p class="flt" style="font-size: .24rem;padding: .2rem 0;line-height: 1;font-family: PingFang-SC-Medium;">
                zhao明明</p>
              <p class="flt"
                 style="font-size: .24rem;padding: .2rem .3rem .2rem;line-height: 1;font-family: PingFang-SC-Medium;">
                12347884</p>
              <b class="edit"></b>
            </div>
          </div>
        </div>

        <div v-show="false">
          <label class="mint-checklist-label" style="padding: .25rem 0;flex: 1;text-align: center">
            <div style="display: inline-block;">
            <span class="mint-checkbox">
              <input type="checkbox" class="mint-checkbox-input" value="值A">
              <span class="mint-checkbox-core isdefault" style="width: .3rem;height: .3rem;"></span>
            </span>
              <span class="mint-checkbox-label">默认</span>
            </div>
          </label>

          <label class="mint-checklist-label"
                 style="margin: .25rem 0;flex: 1;text-align: center;border-left:1px #ddd solid ;border-right:1px #ddd solid ;">
            <div style="display: inline-block;">
              <span class="iconfont icon-bianji" style="font-size: .3rem;vertical-align: middle"></span>
              <span class="mint-checkbox-label" style="font-size: .24rem">编辑</span>
            </div>
          </label>

          <label class="mint-checklist-label" style="padding: .25rem 0;flex: 1;text-align: center">
            <div style="display: inline-block;">
              <span class="iconfont icon-shanchu" style="font-size: .3rem;vertical-align: middle"></span>
              <span class="mint-checkbox-label" style="font-size: .24rem">删除</span>
            </div>
          </label>
        </div>
      </div>


    </div>
  </div>
</template>
<script>

  import $ from 'jquery';
  import {Navbar, TabItem, Checklist} from 'mint-ui';

  export default {
    name: 'get_send_cite',
    data() {
      return {}
    },
    methods: {
      // tap(e){
      //   console.log(e.target)
      // }
    },
    mounted() {
      $('.mint-checkbox-label').css({'fontSize': '.24rem'})
      $('.edit').click(function () {
        if ($(this).parent().parent().parent().next()[0].style.display == 'none') {
          $(this).parent().parent().parent().next()[0].style.display = 'flex'
        } else {
          $(this).parent().parent().parent().next()[0].style.display = 'none'
        }
      })

// $('.list'),click(function () {
//
//   console.log($(this).children('div:nth-child(2)').children('label:nth-child(1)').children('div').children('span').children('input').prop('checked'))
//
// })
      $('.isdefault').click(function () {
        console.log(!$(this).prev().prop('checked'));
      })
    }
  }
</script>
<style lang="scss" scoped="scoped">


  .mint-checkbox-core::after {
    top: 0rem !important;
    left: .08rem !important;
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

  .cite {
    width: .24rem;
    height: .3rem;
    float: left;
    margin-top: .72rem;
    margin-right: .3rem;
    background: url('../../assets/cutpic/dingwei.png') center/cover
  }
  .edit{
    width: .27rem;
    height: .3rem;
    float: right;

    background: url('../../assets/cutpic/bianji.png') center/cover
  }


</style>
