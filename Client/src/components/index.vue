<template>
  <div class="donate">
    <div class="donate-black">
        <h2>Donate</h2>
        <p>Your contribution is vital to the success of our initiative.<br>Choose the amount you wish to donate. </p>
    </div>
    <div class="donate-blue">
      <h3>Donation amount*</h3>
      <div class="donate-amount-box">
        <div class="donate-amount">
          <div class="denomination" v-for="preset in presets" v-bind:class="{ 'selected': preset == suggestion }" @click="addAmount(preset)">
            <label>{{preset}}</label>
          </div>
        </div>
        <div class="denomination-other">
          <input autocomplete="off" type="text" name="amount" value="" placeholder="Enter Other Amount">
        </div>
      </div>
    </div>
    <div class="donate-blue donate-payment">
      <div class="donate-submit">
        <button type="submit" autocomplete="off">Donate ${{this.suggestion}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import swal from 'sweetalert2'
  import axios from 'axios'

  export default {
    name: 'index',
    data() {
      return {
        presets: [40, 100, 200, 1000, 2500, 5000],
        suggestion: 40,
        currencies: [
            {name: "US Dollar", code: "USD", symbol: "$", rate: 1},
            {name: "Euro", code: "EUR", symbol: "€", rate: 0.897597},
            {name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755},
            {name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993}
        ]
      }
    },
    created: function () {

    },
    mounted: function () {

    },
    methods: {
      addAmount(money){
          this.suggestion = money
      },
      saveData() {
        let _this = this;
        if (this.newTitle) {
          let displayData = {
            "id": this.id,
            "title": this.newTitle
          };
          this.lists.push(displayData);
          this.id++;
          this.isDisplay = false;
          this.$http.post('/api/donate', displayData).then(function (res) {
            //_this.refreshData();
          });
        } else {
          swal('Добавлен');
        }
      }
    }
  }
</script>
<style scoped>
  .donate {
    background-color: #171b24;
    width: 500px;
    color: #FFF;
  }

  .donate p {
    line-height: 24px;
    font-size: 14px;
    font-weight: 300;
  }

  .donate h3 {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 30px;
  }

  .denomination {
    float: left;
    width: 33%;
    text-align: center;
    padding: 13px 0;
    cursor: pointer;
    background-color: #171b24;
    margin: 0 1px 1px 0;
    transition: background-color 0.2s ease;
  }

  .denomination label {
    font-weight: 600;
    cursor: pointer;
    margin: 0;
  }

  .denomination input {
    left: -10001px;
    position: absolute;
  }

  .denomination-other {
    width: 99.8%;
  }

  .denomination-other input {
    position: relative;
    color: #FFF;
    font-size: 14px;
    font-weight: 600;
    width: inherit;
    text-align: center;
    background-color: #171b24;
    border: none;
    padding: 13px 0;
    transition: background-color 0.2s ease;
  }

  .denomination-other input:hover {
    background-color: #ec3029;
  }

  .denomination-other input:before {
    position: absolute;
    left: 6px;
    top: 2px;
    content: "$";
  }

  .donate-amount .selected, .denomination-other input.selected, .donate-amount .denomination:hover {
    background-color: #EC3029;
    border: 0;
  }

  .donate-black h2 {
    font-family: "Oswald", sans-serif;
    color: #FFF;
    font-size: 32px;
    margin-bottom: 30px;
  }

  .donate-black h2 span {
    display: block;
    float: left;
    font-size: 16px;
    padding-top: 7px;
    margin-right: 20px;
    text-align: center;
    width: 30px;
    height: 25px;
    background-color: #ec3029;
    border-radius: 50%;
  }

  .donate-type label,
  .donate-payment label {
    font-size: 14px;
    font-weight: 300;
    margin-right: 30px;
  }

  .donate-blue {
    background-color: #1e252d;
    padding: 25px;
  }

  .donate-black {
    padding: 25px;
  }

  .donate-submit button {
    font-family: "Oswald", sans-serif;
    width: 100%;
    background-color: #ec3029;
    border: none;
    color: #FFF;
    font-size: 20px;
    line-height: 20px;
    padding: 14px 0;
    margin: 30px 0;
    text-transform: uppercase;
    cursor: pointer;
  }

  .donate-submit small {
    color: rgba(255, 255, 255, 0.4);
    font-size: 13px;
  }

  ::-webkit-input-placeholder {
    color: #FFF;
    font-size: 14px;
    font-weight: 300;
  }

  :-moz-placeholder {
    color: #FFF;
    font-weight: 300;
  }

  ::-moz-placeholder {
    color: #FFF;
    font-weight: 300;
  }

  :-ms-input-placeholder {
    font-weight: 300;
    color: #FFF;
  }

  *:focus {
    outline: none;
  }
</style>
