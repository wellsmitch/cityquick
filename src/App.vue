<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import './scss/base.scss'
  import $ from 'jquery'
  export default {

    name: 'App',
    methods: {
      plus_ready() {
        document.addEventListener('plusready', () => {
          plus.key.addEventListener('backbutton', () => {
            let webview = plus.webview.currentWebview();
            let webview_list = plus.webview.all();
            if (webview_list.indexOf(webview) == webview_list.length - 1) {
              webview.canBack((e) => {
                if (e.canBack) {
                  webview.back();
                } else {
                  plus.nativeUI.confirm('确认退出？', (event) => {
                    if (0 == event.index) {
                      plus.runtime.quit();
                    }
                  }, '提示', ["确定", "取消"]);
                }
              })
            } else {
              webview_list[webview_list.length - 1].canBack((e) => {
                if (e.canBack) {
                  webview_list[webview_list.length - 1].back();
                } else {
                  webview_list[webview_list.length - 1].close();
                }
              })
            }
          });
        });
      }

    },
    mounted() {
      $('.mint-cell-wrapper').css({'padding':'0'})//消除mintUI中mint-cell-wrapper的的padding值
      this.plus_ready()
    }
  }
</script>
<style>
  html{
    overflow: hidden;
  }
#app{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
