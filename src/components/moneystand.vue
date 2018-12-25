<template>
  <div class="hello">

    <header>
      <div @click="$router.go(-1)" class="iconfont icon-xiangzuo"></div>
      <div style="font-family: PingFang-SC-Bold">收费标准-郑州</div>
    </header>

    <div class="panel panel-default">
      <!-- Table -->
      <table class="table">
        <thead>
        <tr>
          <th>车型</th>
          <th>起步价</th>
          <th>超里程费</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in car">
          <td>{{item.cat_title}}</td>
          <td>{{item.starting_price}}/{{item.starting_price_distance}}KM</td>
          <td>{{item.starting_price}}/KM</td>
        </tr>
        </tbody>
      </table>
      <div class="msg">
        <div v-for="item in attantion">{{item}}</div>



      <!-- Table -->

    </div>
    <table class="table table1">
      <thead>
      <tr>
        <th>附加说明</th>
        <th>费用</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in else1">
        <td>{{item.title}}</td>
        <td>{{item.summary}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>

  import $ from 'jquery';
  import {Navbar, TabItem} from 'mint-ui';

  export default {
    name: 'moneystand',
    data() {
      return {
        car:[],
        attantion:[],
        else1:[]
      }
    },
    methods: {},
    mounted() {
      var _this = this


      //附加费用
      $.ajax({
        type: "get",
        url: window.http+"/api/"+window.version+"/truck/offer",
        async: true,
        success: function (data) {
          console.log(data.data.extend);
          _this.else1 = data.data.extend
          _this.attantion= data.data.summary
          _this.car = data.data.truck
        }
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="scoped">
  .hello {
    background: #f0f0f0;

    .panel {
      height: 100%;
      margin-top: .2rem;
      padding: 0 .3rem;
      box-sizing: border-box;
      width: 100%;
      background: #fff;
      overflow: auto;
      .msg{
        div{
          font-family: PingFang-SC-Medium;
          font-size: .24rem;
          font-weight: normal;
          color: #999999;
          line-height: .44rem;
        }
        div:nth-child(1){
          margin-top: .3rem;
          line-height: .28rem;
        }
      }
      table {
        border-top-left-radius: .2rem;
        border-top-right-radius: .2rem;
        width: 100%;
        margin-top: .3rem;
        text-align: center;
        background: rgba(18, 105, 211, .2);
        border-spacing: 0;
        border-collapse: collapse;
        font-family: PingFang-SC-Medium;
        font-size: .3rem;
        thead {
          th {
            color: #1269d3;
            font-weight: normal;
          }

        }
        tbody {
          background: #fff;
          td {
            height: .8rem;
            padding: 0;
            border: 1px solid #d0e1f6;
            font-size: .3rem;
            color: #666;
          }
        }
        th {
          height: .8rem
        }

      }
      .table1{
        thead{
          tr{
            height: .8rem;
            line-height: .8rem;
            text-align: center;
          }
          th:nth-of-type(1){
            width: 2.6rem;
          }
        }

      }
    }
  }

  input {
    font-size: .3rem;
    padding: .35rem .3rem;
  }

  header, .main {
    background: #fff;
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
      width: 2.35rem;
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

  .main {
    font-family: PingFang-SC-Medium;
    font-size: .3rem;
    color: #333;
  }

  /*返回箭头*/
  icon-fanhui2 {
    font-size: .35rem;

  }


</style>
