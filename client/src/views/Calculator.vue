<template>
  <div class="mt-16 d-flex text-center justify-center">
    <v-card class="pa-5 pt-10" color="cyan">
      <div width="91">
        <v-card class="text-h3 text-end text-pink" color="black" height="50"> {{ current || '0' }} </v-card>
      </div>
      <div>
        <v-btn @click="clear" color="#DCDCDC" class="text-h3" width="91" height="91" rounded="0">C</v-btn>
        <v-btn @click="sign" color="white" class="text-h3" width="91" height="91" rounded="0"> +/- </v-btn>
        <v-btn @click="percent" color="white" class="text-h3" width="91" height="91" rounded="0">%</v-btn>
        <v-btn @click="devide" color="#FFB8DE" class="text-h3 operator" width="91" height="91" rounded="0">÷</v-btn>
      </div>
      <div>
        <v-btn @click="append('7')" color="white" class="text-h3 number" width="91" height="91" rounded="0">7</v-btn>
        <v-btn @click="append('8')" color="white" class="text-h3 number" width="91" height="91" rounded="0">8</v-btn>
        <v-btn @click="append('9')" color="white" class="text-h3 number" width="91" height="91" rounded="0">9</v-btn>
        <v-btn @click="times" color="#FFB8DE" class="text-h3 operator" width="91" height="91" rounded="0">x</v-btn>
      </div>
      <div>
        <v-btn @click="append('4')" color="white" class="text-h3 number" width="91" height="91" rounded="0">4</v-btn>
        <v-btn @click="append('5')" color="white" class="text-h3 number" width="91" height="91" rounded="0">5</v-btn>
        <v-btn @click="append('6')" color="white" class="text-h3 number" width="91" height="91" rounded="0">6</v-btn>
        <v-btn @click="minus" color="#FFB8DE" class="text-h3 operator" width="91" height="91" rounded="0">-</v-btn>
      </div>
      <div>
        <v-btn @click="append('1')" color="white" class="text-h3 number" width="91" height="91" rounded="0">1</v-btn>
        <v-btn @click="append('2')" color="white" class="text-h3 number" width="91" height="91" rounded="0">2</v-btn>
        <v-btn @click="append('3')" color="white" class="text-h3 number" width="91" height="91" rounded="0">3</v-btn>
        <v-btn @click="plus" color="#FFB8DE" class="text-h3 operator" width="91" height="91" rounded="0">+</v-btn>
      </div>
      <div>
        <v-btn @click="append('0')" color="white" class="text-h3 number" width="182" height="91" rounded="0">0</v-btn>
        <v-btn @click="dot" color="white" class="text-h3" width="91" height="91" rounded="0">.</v-btn>
        <v-btn @click="equal" color="#3CBBB1" class="text-h3 text-white" width="91" height="91" rounded="0">=</v-btn>
      </div>
    </v-card>
  </div>
</template>


<script>
import equal from 'assert';

// import { sign } from 'crypto';
export default {
  name: 'Calculator',

  data: () => ({
    previous: null,
    current: '',
    operator: null,
    operatorClicked: false,
    result: '',

  }),

  methods: {

    // Clear all displayed number and memory stack.
    clear() {
      console.log("cleared")
      this.current = ''
    },

    // Swap +/-
    sign() {
      console.log("signed")
      this.current = this.current.charAt(0) === '-' ?
        this.current.slice(1) : `-${this.current}`;

    },

    // Turn to % (/100)
    percent() {
      console.log("percent")
      this.current = `${parseFloat(this.current) / 100}`;
      
    },

    // add next number.
    append(number) {
      console.log("append")
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      } else if (this.result) {
        this.result = '';
        this.current = '';
        //this.current = `${number}`;
      }

      this.current = this.current + number;
    },

    dot() {
      console.log("dot")

      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },

    setPreviuos() {
      console.log("setPreviuos")
      this.previous = this.current;
      this.operatorClicked = true;
    },

    devide() {
      console.log("devide")
      this.operator = "/"
      this.setPreviuos();
      this.result = ''

    },

    times() {
      console.log("times")
      this.operator = "*"
      this.setPreviuos();
      this.result = ''

    },

    minus() {
      console.log("minus")
      this.operator = "-"
      this.setPreviuos();
      this.result = ''

    },

    plus() {
      console.log("plus")
      this.operator = "+"
      this.setPreviuos();
      this.result = ''
    },

    calculate(x, y, op) {
      switch (op) {
        case "+" : return x + y
        case "-" : return x - y
        case "*" : return x * y
        case "/" : return x / y
        default: return null
      }
    },

    equal() {
      console.log("equal")
      this.current = `${this.calculate(
        parseFloat(this.previous),
        parseFloat(this.current),
        this.operator
      )}`;
      this.previous = null;
      this.result = this.current;
    },
  }
}
</script>


<style scoped>

</style>