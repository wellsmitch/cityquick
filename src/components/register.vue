<template>
  <div class="hello" style="position: relative;">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold">会员注册</div>
    </header>
    <div style="background: #f0f0f0;height: .2rem;width: 100vw;background: #f0f0f0"></div>
    <div style="margin-top: .1rem;height: 100%;background: #f0f0f0">
      <div style="display: flex;box-sizing: border-box;">
        <input style="flex: 1" type="text" class="phone" placeholder="请输入手机号">
        <div style="float: right;padding:.35rem .3rem 0 0;color: #bdbdbd;" class="iconfont icon-guanbi-copy"></div>
      </div>
      <div>
        <div
          style="height: .28rem;padding: .35rem 0.3rem;overflow:hidden;border-bottom: 1px #f5f5f5 solid;border-top: 1px #f5f5f5 solid;display: flex;">

          <input class="yzm" type="text" style="padding: 0" placeholder="请输入短信验证码">
          <div style="float: right;padding-right:.3rem;color: #bdbdbd;" class="iconfont icon-guanbi-copy"></div>
          <button @click="sendyzm($event)" class="getyzm"
                  style="text-align:right;line-height:1;height: .3rem;width: 2.6rem;background:#fff;font-size: .3rem;border-left: 1px solid #eaeaea;color:#1b6cd0;text-align: center">
            获取验证码
          </button>
        </div>
      </div>

      <div
        style="height: .3rem;padding: .35rem 0.3rem;overflow:hidden;border-bottom: 1px #f5f5f5 solid;border-top: 1px #f5f5f5 solid;display: flex;">
        <input style="padding: 0" class="pw" type="password" ref="pw" placeholder="请设置6-20位登录密码">
        <div style="float: right;padding-right: .3rem;color: #bdbdbd;" class="iconfont icon-guanbi-copy"></div>
        <button ref="eye" class="iconfont icon-zhengyan"
                style="background: #fff;width: .5rem;height: 0.5rem;margin-top: -.1rem;font-size: 0.5rem;line-height: 1;}"
                @click="tap"></button>
      </div>
      <div style="padding: .5rem .3rem;display: flex;font-size: .24rem;background: #f0f0f0">
        <span style="color: #999;">注册即代表您已同意</span>
        <span @click="xieyi" style="color: blue" to="">管交网快配用户协议</span>
      </div>

      <div style="background: #f0f0f0">
        <button @click="reg" class="reg"
                style="width: 6.9rem;height: .8rem;margin: 0 .3rem .5rem;font-size: .3rem;background:#aaa;color: #a6bde9;border-radius: 5px;">
          注册
        </button>
      </div>


      <div style="background: #f0f0f0">
        <span style="font-size: .24rem;margin-left: .3rem">遇到问题？您可以 </span>
        <router-link class="diag" @click="diag()" style="font-size: .24rem;color: #1b6cd0;" to="">联系客服</router-link>
      </div>

    </div>
    <div ref="shadow"
         style="height: 100%;box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;position: absolute;z-index: 10;z-index: 10;top: 0;padding:1rem .5rem;background:rgba(0,0,0,.3);display: none;">
      <div style="display:flex;flex-direction:column;background:#fff;height: 100%;border-radius:.1rem ;">
        <div
          style="position: relative;text-align: center;: ;border-bottom: 1px #aaa solid;border-radius:.1rem ;overflow: hidden">
          <h1
            style="padding: .3rem 0;border-top-left-radius:.1rem ;border-top-right-radius:.1rem;font-size: .3rem;color: #333; ">
            管交网快配用户协议</h1>
          <p @click="yes"
             style="width:.35rem;height: .35rem;position: absolute;top: .3rem;right: .3rem;font-size: .35rem;"
             class="iconfont icon-guanbi"></p>
        </div>


        <div
          style="flex: 1;padding: .3rem;font-size: .24rem;line-height: .52rem;background: #fff;height: 7.52rem;overflow: auto;">
          <p style="color: #333;">第一、注册信息和隐私保护</p>

          <p style="color: #666">1、管交网快配账户的所有权归管交网，商户完成注册申请手续后，获得管交网帐号的使用权。用户

            应提供及时、详尽及准确的个人资料，并不断更

            新注册资料，符合及时、详尽准确的要求。所有

            原始键入的资料将引用为注册资料。如果因注册

            信息不真实而引起的问题，并对问题发生所带来

            的后果，乙方不负任何责任。</p>
          <p style="color: #666">2、商户不应将其帐号、密码转让或出借予他人

            使用。如用户发现其帐号遭他人非法使用，应立

            即通知管工地。因黑客行为或商户的保管疏忽导

            致帐号、密码遭他人非法使用，管交网不承担任

            何责任。</p>
          <p style="color: #666"> 3、 管交网快配不对外公开或向第三方提供单个用户的注册资料，除非：

            （1）事先获得用户的明确授权；

            （2）只有透露你的个人资料，才能提供你所要
          </p>


        </div>
        <p @click="yes" style="position: relative;margin: 0 0 .3rem;text-align: center;color:blue">同意</p>
      </div>
    </div>

  </div>
</template>


<script>

  import {Header} from 'mint-ui';
  import {Toast} from 'mint-ui';
  import $ from 'jquery';


  export default {
    name: 'register',
    data() {
      return {
        'yzm': ''
      }
    },
    methods: {

      //密码框效果转换
      tap() {
        if (this.$refs.pw.type == 'text') {
          this.$refs.pw.type = 'password'
          this.$refs.eye.className = 'iconfont icon-biyan'
        } else {
          this.$refs.pw.type = 'text'
          this.$refs.eye.className = 'iconfont icon-zhengyan'
        }

      },

      // 发送验证码
      sendyzm(e) {
        if ($('.phone').val() != '') {
          e.target.innerHTML = 60
          if (typeof Number(e.target.innerHTML) == "number") {
            //ajax请求

            function Trim(str, is_global) {
              var result;
              result = str.replace(/(^\s+)|(\s+$)/g, "");
              if (is_global.toLowerCase() == "g") {
                result = result.replace(/\s/g, "");
              }
              return result;
            }

            $.ajax({
              type: "get",
              url: "http://10.1.1.208:8080/api/1_0/sms/send",
              data: {
                'mobile': Trim($('.phone').val(), 'g'),
                'event': 'register'
              },
              async: true,
              success: function (data) {
                // console.log(data);
              }
            });
          }
          var timer1 = setInterval(function () {
            e.target.innerHTML--
            if (e.target.innerHTML == 0) {
              clearInterval(timer1)
              e.target.innerHTML = '获取验证码'
            }
          }, 1000)
        }
      },

      //协议框弹出
      xieyi() {
        this.$refs.shadow.style.display = 'block';
      },

      //同意协议
      yes() {
        this.$refs.shadow.style.display = 'none';
      },

      //注册按钮
      reg() {
        if ($('.phone').val() != '' && $('.yzm').val() != '' && $('.pw').val() != '') {

          function Trim(str, is_global) {
            var result;
            result = str.replace(/(^\s+)|(\s+$)/g, "");
            if (is_global.toLowerCase() == "g") {
              result = result.replace(/\s/g, "");
            }
            return result;
          }

          //用户名是否已存在
          $.ajax({
            type: "post",
            url: "http://10.1.1.208:8080/api/1_0/user/register",
            async: true,
            data: {
              'mobile': Trim($('.phone').val(), 'g'),
              'password': $('.pw').val(),
              'captcha': $('.yzm').val()
            },
            success: function (data) {
              if (data.code == 0) {
                Toast({
                  message: data.msg,
                  position: 'center',
                  duration: 2000
                });
              }
            }
          });
        }
      },

      dia() {
        plus.device.dial("10086", false);
      }
    },
    mounted() {
      var _this = this
      console.log(window.version)

      $('.icon-guanbi-copy').click(function () {
        $(this).prev().val('')
      })

      function color() {
        if ($('.phone').val() != '' && $('.yzm').val() != '' && $('.pw').val() != '') {
          $('.reg').css({'background': '#1269d3'})
        } else {
          $('.reg').css({'background': 'rgba(0,0,0,.3)'})
        }
      }

      $('input').on('focus', function () {
        color()
      })
      $('input').on('input', function () {
        color()
      })
      $('.diag').click(function () {
        console.log('22222222222222')
        _this.dia()
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

      //手机号格式不对
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

      //注册按钮
      $('.reg').click(function () {
        console.log($('.phone').val() != '' && $('.yzm').val() != '' && $('.pw').val() != '');
        if ($('.phone').val() != '' && $('.yzm').val() != '' && $('.pw').val() != '') {
          console.log('可以注册')
          $('.reg').css({background: '#1239d3'})
        } else {
          Toast({
            message: '注册信息不能为空',
            position: 'center',
            duration: 2000
          });
        }

        var gg = /[a-zA-Z0-9]{6,20}/
        var pwtrue = gg.test($('.pw').val())
        console.log(pwtrue)
        if (pwtrue) {
          alert('可以注册--发起ajax')

          /*$.ajax({
          type: "post",
          url: "http://10.1.1.208:8080/index.php/api/user/register",
          async: true,
          data: {
            'mobile': $('.phone').val(),
            'password': $('.pw').val(),
            'captcha': $('.yzm').val()
          },
          success: function (data) {
            console.log(data);
          }
        });*/
        } else if ((!pwtrue) && $('.pw').val() != '') {
          Toast({
            message: '密码为6-20位数字和字母组合',
            position: 'center',
            duration: 2000
          });
        }
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

  input {
    font-size: .3rem;
    padding: .35rem .3rem;
  }

  /*头部*/
  header {
    background: #fff;
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

  input {
    width: 100vw;
    height: .32rem;
  }


</style>
