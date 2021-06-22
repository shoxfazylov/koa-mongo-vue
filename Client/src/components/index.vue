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
          <div class="denomination" v-for="amount in numbers" v-bind:class="{ 'selected': amount == suggestion }" @click="addAmount(amount)">
            <label>{{currency.symbol}}{{amount}}</label>
          </div>
        </div>
        <div class="denomination-other">
          <div class="donate-amount-block">
            <div class="donate-amount-currency">
              {{this.currency.symbol}}
            </div>
            <input type="text" class="donate-amount-price" v-model="suggestion">
            <select v-on:change="changeCurrency($event)">
              <option v-for="curr in this.currencies" v-bind:value="curr.code">
                {{ curr.symbol }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="donate-blue donate-payment">
      <div class="donate-submit">
        <button @click="saveData()" type="submit" autocomplete="off">Donate {{this.currency.symbol}}{{this.suggestion}}</button>
      </div>
      <a class="donations-link" @click="donations()">Donate list</a>
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
        ],
        currency: {name: "US Dollar", code: "USD", symbol: "$", rate: 1},
        numbers: []
      }
    },
    computed: {
        amounts: function () {
            let amounts = [];
            this.presets.forEach(function($match, $i) {
                amounts[$i] = $match;
            });
            return amounts;
        }
    },
    mounted: function () {
        this.initForm();
    },
    methods: {
      initForm (){
        this.numbers = this.amounts;
      },
      changeCurrency (event){
        for (let item of this.currencies) {
          if(item.code == event.target.value){
            this.currency = item;
          }
        }
        this.convertAmount();
      },
      convertAmount(){
        for (let k in this.amounts) {
            this.amounts[k] = this.roundTo5(this.presets[k] * this.currency.rate);
        }
      },
      roundTo5(price) {
        return Math.round(price / 50) * 50;
      },
      addAmount(money){
          this.suggestion = money
      },
      saveData() {
        let _this = this;
        _this.suggestion = parseFloat(_this.suggestion)
        if(Number.isInteger(_this.suggestion)){
          let data = {
            "amount": _this.suggestion,
            "currency": _this.currency.code
          };
          this.$http.post('/api/donate', data).then(function (res) {
            swal('Good job!', 'Thank you for your donation!', 'success');
          });
        }else{
          swal('Oops...', 'Something went wrong!', 'error')
        }
      },
      donations (){
        this.$router.push('/donations');
      }
    }
  }
</script>
