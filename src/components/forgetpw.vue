<template>
  <div class="hello" style="position: relative;">
    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div>忘记密码</div>
    </header>
    <div style="background: #f0f0f0;height: .2rem;width: 100vw"></div>
    <div style="margin-top: .1rem">
      <input type="text" class="phone" placeholder="请输入手机号">
      <div>
        <div
          style="height: .28rem;padding: .35rem 0;overflow:hidden;border-bottom: 1px #f5f5f5 solid;border-top: 1px #f5f5f5 solid;margin: 0 .3rem;display: flex;">

          <input class="yzm" type="text" style="padding: 0" placeholder="请输入短信验证码">
          <button @click="sendyzm($event)" class="getyzm"
                  style="text-align:right;line-height:1;height: .3rem;width: 2.6rem;background:#fff;font-size: .3rem;border-left: 1px solid #eaeaea;color:#1b6cd0;text-align: center">
            获取验证码
          </button>
        </div>
      </div>
      <div
        style="height: .3rem;padding: .35rem 0;overflow:hidden;border-bottom: 1px #f5f5f5 solid;border-top: 1px #f5f5f5 solid;margin: 0 .3rem;display: flex;">
        <input style="padding: 0" class="pw" type="password" ref="pw" placeholder="请设置6-20位登录密码">
        <button ref="eye" class="iconfont icon-yanjing_xianshi_o"
                style="background: #fff;width: .5rem;height: 0.5rem;margin-top: -.1rem;font-size: 0.5rem;line-height: 1;}"
                @click="tap($event)"></button>
      </div>
      <div
        style="height: .3rem;padding: .35rem 0;overflow:hidden;border-bottom: 1px #f5f5f5 solid;border-top: 1px #f5f5f5 solid;margin: 0 .3rem;display: flex;">
        <input style="padding: 0" class="pw pw1" type="password" ref="pw" placeholder="请设置6-20位登录密码">
        <button ref="eye" class="iconfont icon-yanjing_xianshi_o"
                style="background: #fff;width: .5rem;height: 0.5rem;margin-top: -.1rem;font-size: 0.5rem;line-height: 1;}"
                @click="tap($event)"></button>
      </div>
      <div style="background: #f0f0f0">
        <button @click="reg" class="reg"
                style="width: 6.9rem;height: .8rem;margin: 0 .3rem .5rem;font-size: .3rem;background:#aaa;color: #a6bde9;border-radius: 5px;">
          确认保存
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import {Header} from 'mint-ui';
  import {Toast} from 'mint-ui';
  import $ from 'jquery';
  export default {
    name: 'forgetpw',
    data() {
      return {
        'yzm': ''
      }
    },
    methods: {
      //密码框效果转换
      tap(e) {

// console.log($(e.target).prev())
        if ($(e.target).prev()[0].type == 'text') {
          $(e.target).prev()[0].type = 'password';
          $(e.target)[0].className = 'iconfont icon-yanjing_yincang_o'
        } else {
          $(e.target).prev()[0].type = 'text';
          $(e.target)[0].className = 'iconfont icon-yanjing_xianshi_o'
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
              url: window.http+"/api/"+window.version+"/sms/send",
              data: {
                'mobile': Trim($('.phone').val(), 'g'),
                'event': 'resetpwd'
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

      //  确认保存
      reg() {
        if ($('.phone').val() != '' && $('.yzm').val() != '' && $('.pw').val() != '' && $('.pw1').val() != '') {

          function Trim(str, is_global) {
            var result;
            result = str.replace(/(^\s+)|(\s+$)/g, "");
            if (is_global.toLowerCase() == "g") {
              result = result.replace(/\s/g, "");
            }
            return result;
          }
console.log($('.yzm').val())
          console.log(Trim($('.phone').val(), 'g'));

          $.ajax({
            type: "post",
            url: window.http+'/api/'+window.version+"/user/resetpwd",
            async: true,
            data: {
              'mobile': Trim($('.phone').val(), 'g'),
              'newpassword': $('.pw').val(),
              'captcha': $('.yzm').val()
            },
            success: function (data) {
              // if (data.code == 0) {
              //   Toast({
              //     message: data.msg,
              //     position: 'center',
              //     duration: 2000
              //   });
              //
              // }
              console.log(data)
            }
          });
        }
      }
    },
    mounted() {
      $('input').on('input', function () {
        if ($('.phone').val() != '' && $('.yzm').val() != '' && $('.pw').val() != '' && $('.pw1').val() != '') {
          $('.reg').css({'background': 'blue'})
        }
      })
      $('input').on('keydown', function () {
        if ($('.phone').val() != '' && $('.yzm').val() != '' && $('.pw1').val() != '') {
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

      //确认保存按钮
      $('.reg').click(function () {
        console.log($('.phone').val() != '' && $('.yzm').val() != '' && $('.pw').val() != '');
        if ($('.phone').val() != '' && $('.yzm').val() != '' && $('.pw').val() != '') {
          $('.reg').css({background: '#1239d3'})
        } else {
          Toast({
            message: '修改信息不能为空',
            position: 'center',
            duration: 2000
          });
        }
        var gg = /[a-zA-Z0-9]{6,20}/
        var pwtrue = gg.test($('.pw').val())
        console.log(pwtrue)
        if (pwtrue) {
          if($('.pw').val()[0]!=$('.pw').val()[1]){
            Toast({
              message: '两次输入的密码不一致',
              position: 'center',
              duration: 2000
            });
          }else{


            alert('可以修改密码--发起ajax')
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
          }

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
  $placeholder: #999999;
  .flt {
    float: left;
  }
  .frt {
    float: right;
  }
  /*placeholder兼容*/
  input::-webkit-input-placeholder {
    color: $placeholder
  }
  /* webkit内核的浏览器 */
  input:-moz-placeholder {
    color: $placeholder;
  }
  /* Firefox版本4-18 */
  input::-moz-placeholder {
    color: $placeholder
  }
  /* Firefox版本19+ */
  input:-ms-input-placeholder {
    color: $placeholder
  }
  input {
    font-size: .3rem;
    padding: .35rem .3rem;
  }
  /*头部*/
  header {
    font-family: PingFang-SC-Bold;
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
    height: .3rem;
  }
</style>
