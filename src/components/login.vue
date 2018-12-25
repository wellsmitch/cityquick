<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>

    </header>

    <img src="static/denglu.png" alt="">

    <div style="margin-top: .1rem">
      <input type="text" class="phone" placeholder="请输入手机号">

      <div>

      </div>

      <div
        style="height: .3rem;padding: .35rem 0;overflow:hidden;border-bottom: 1px #f5f5f5 solid;border-top: 1px #f5f5f5 solid;margin: 0 .3rem;display: flex;">
        <input style="padding: 0" class="pw" type="password" ref="pw" placeholder="请输入密码">
        <button ref="eye" class="iconfont icon-biyan"
                style="background: #fff;width: .5rem;height: 0.5rem;margin-top: -.1rem;font-size: 0.5rem;line-height: 1;}"
                @click="tap"></button>
      </div>


      <button @click="login" class="login"
              style="display: block;width: 6.9rem;height: .8rem;margin: 0.8rem auto .6rem;font-size: .3rem;background:#aaa;color: #fff;border-radius: .05rem;">
        登录
      </button>

      <div style="overflow: hidden;padding: 0 .3rem;}">
        <router-link to="/register" class="flt" style="font-size: .24rem;color: #1b6cd0;">会员注册</router-link>
        <router-link to="/forgetpw" class="frt" style="font-size: .24rem;color: #1b6cd0;">忘记密码？</router-link>
      </div>

    </div>

  </div>
</template>

<script>

  import {Header} from 'mint-ui';
  import {Toast} from 'mint-ui';
  import $ from 'jquery';

  export default {
    name: 'login',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      tap() {
        if (this.$refs.pw.type == 'text') {
          this.$refs.pw.type = 'password'
          this.$refs.eye.className = 'iconfont icon-biyan'
        } else {
          this.$refs.pw.type = 'text'
          this.$refs.eye.className = 'iconfont icon-zhengyan'
        }

      },
      login() {
        function Trim(str, is_global) {
          var result;
          result = str.replace(/(^\s+)|(\s+$)/g, "");
          if (is_global.toLowerCase() == "g") {
            result = result.replace(/\s/g, "");
          }
          return result;
        }


        $.ajax({
          type: "post",

          url: window.http + "/api/" + window.version + "/user/login",
          async: true,
          data: {
            'account': Trim($('.phone').val(), 'g'),
            'password': Trim($('.pw').val(), 'g')
          },
          success: function (data) {
            console.log(data);
          }
        });
      }
    },
    mounted() {
      var _this = this
      $('input').on('keydown', function () {
        if ($('.phone').val() != '' && $('.yzm').val() != '' && $('.pw').val() != '') {
          $('.reg').css({'background': '#fff'})
        }
      })

// 去掉字符串中所有空格(包括中间空格,需要设置第2个参数为:g)
      function trim(str, is_global) {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g, "");
        if (is_global && is_global.toLowerCase() == "g") {
          result = result.replace(/\s/g, "");
        }
        return result;
      }

// 判断是否是手机号码格式
      function isPhone(str) {
        var reg = /^1(3|4|5|7|8)\d{9}$/;
        return reg.test(trim(str, 'g'));
        // console.log(reg.test(str))
      }

// 手机号码格式转化为 344 格式 （188 3886 9199）
      function phoneSeparated(tel) {
        var tel = trim(tel, 'g')
        if (isPhone(tel)) {
          tel = tel.substring(0, 3) + ' ' + tel.substring(3, 7) + ' ' + tel.substring(7, 11)
          $('.phone').val(tel)
        }
      }

      //错误号码弹窗
      $('.phone').on('input', function () {
        phoneSeparated($(this).val())
      });
      $('.yzm,.pw,.getyzm').focus(function () {
        if (!isPhone($('.phone').val())) {
          Toast({
            message: '请输入正确的手机号',
            position: 'center',
            duration: 2000
          });
          $('.phone').val('')
        }
      })
      $('.yzm').on('input', function () {
        if (!isPhone($('.phone').val())) {
          Toast({
            message: '请输入正确的手机号',
            position: 'center',
            duration: 2000
          });
        }
      })
      $('input').on('input', function () {
        //登录按钮
        $.each($('input'), function (i, ele) {

          if ($('.phone').val() != '' && $('.yzm').val() != '' && $('.pw').val() != '') {
            $('.login').css({background: 'blue'})
          }
        })
      })
      $('.login').click(function () {

        var gg = /[a-zA-Z0-9]{6,20}/
        var pwtrue = gg.test($('.pw').val())

        $.ajax({
          type: "get",
          url: "http://10.1.1.208:8080/api/1_0/user/login",
          async: true,
          data: {
            'account': trim($('.phone').val(), 'g'),
            'password': $('.pw').val(),
            'version': '1.0'
          },
          success: function (data) {
            if (!pwtrue || $('.pw').val() == '' && $('.phone').val() == '' || data.code == 0) {
              console.log('12131')
              Toast({
                message: '账号和密码错误，请重新输入',
                position: 'center',
                duration: 2000
              });
            } else {
              // console.log(window.localStorage.usrtoken);
              window.localStorage.setItem('usrtoken', data.data.userinfo.token);

              _this.$router.push({name: 'cityquick'})

            }
          }
        });

      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="scoped">
  .flt {
    float: left;
  }

  .frt {
    float: right;
  }

  .hello {

  }

  img {
    height: 1.7rem;
    width: 2rem;
    margin: 1.1rem auto .86rem
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

  input {
    width: 100vw;
    height: .32rem;
    font-size: .3rem;
    padding: .35rem .3rem;
  }

  ;


</style>
