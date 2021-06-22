<template>
  <div class="donate">
    <div class="donate-black">
      <h2>Donate list</h2>
      <p>Most recent donation transactions</p>
    </div>
    <div class="donate-blue">
      <h3 class="donations-link" @click="main()">Back</h3>
      <div id="table">
        <table v-show="lists.length>0" class="table table-hover table-bordered">
          <thead class="table-dark">
          <tr>
            <th scope="col">Amount</th>
            <th scope="col">Currency</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="list in lists">
            <td scope="row">{{list.amount}}</td>
            <td>{{list.currency}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'donations',
    data() {
      return {
        lists: [],
      }
    },
    created: function () {
      this.getList();
    },
    mounted: function () {
      let _this = this;
      _this.refreshData();
    },
    methods: {
      getList() {
        let _this = this;
        axios.get('api/getList').then(function (response) {
          _this.lists = response.data;
        });
      },
      refreshData() {
        let _this = this;
        this.$http.get('/api/getList').then(function (response) {
          _this.lists = response.data;
        })
      },
      main(){
        this.$router.push('/');
      }
    }
  }
</script>
<style scoped>
  #table {
    width: 100%;
    height: 100%;
    margin: 50px auto;
    color: #fff;
  }

  #navbarSupportedContent ul {
    margin-left: auto !important;
    margin-right: 100px !important;
  }
</style>
