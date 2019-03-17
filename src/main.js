// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

var app = new Vue({
  // element property which points to the DOM
  el: "#app",
  data: {
    //the data we'll use in
    //building our app goes in here
    current : '',
    x: '',
    y: '',
    operator: null,
    changeMode : true
    
  },
  methods : {
    // the functions we'll use in 
    // controlling our app go in here
    setNumber(digit){
      if(this.operator === null){
        this.x += digit;
        this.display = this.x;
      }
      else{
        this.y += digit;
        this.display = this.y;
      }
    },
    press: function (event) {
      //we make a reference to the inner text
      // of each button to dispatch our functions
      let key = event.target.innerText;
      if ( key != "=" &&
      key != "C" &&
      key != "*" &&
      key != "/" &&
      key != "√" &&
      key != "x ²" &&
      key != "%" &&
      key != "<=" && 
      key != "±" && 
      key != "sin" && 
      key != "cos" && 
      key != "tan" && 
      key != "log" && 
      key != "ln" && 
      key != "x^" && 
      key != "x !" && 
      key != "π" && 
      key != "e" && 
      key != "rad" && 
      key != "∘") {
        app.current += key;
      } else if ( key === "="){
        equals();
      } else if (key === "C"){
        clear();
      } else if (key === "*"){
      multiply();
      } else if (key === "/"){
        divide();
      } else if (key === "+"){
        plus();
      } else if (key === "-"){
        minus();
      } else if (key === "±"){
        plusMinus();
      } else if (key === "<="){
        backspace();
      } else if (key === "%"){
        percent();
      } else if (key === "π"){
        pi();
      } else if (key === "x ²"){
        square();
      } else if (key === "√"){
        squareRoot();
      } else if (key === "sin"){
        sin();
      } else if (key === "cos"){
        cos();
      } else if (key === "tan"){
        tan();
      } else if (key === "log"){
        log();
      } else if (key === "ln"){
        ln();
      } else if (key === "x^"){
        exponent();
      } else if (key === "x !"){
        factorial();
      } else if (key === "e"){
        exp();
      } else if (key === "rad"){
        radians();
      } else if (key === "∘"){
        degrees();
    }
  },
}
});

function equals() {
  if ((app.current).indexOf("^") > -1) {
    var base = (app.current).slice(0,(app.current).indexOf("^"));
    var exponent = (app.current).slice((app.current).indexOf("^")+1);
    app.current = eval("Math.pow(" + base + "," + exponent + ")");
  } else{
    app.current = eval(app.current)
  }
}

function clear(){
  app.current = "";
}

function backspace(){
  app.current = app.current.substring(0, app.current.length - 1);
}

function multiply(){
  app.current += "*";
}

function divide(){
  app.current += "/";
}

function plus(){
  app.current += "+";
}

function minus(){
  app.current += "-";
}

function sin(){
  app.current = Math.sin(app.current);
}

function cos(){
  app.current = Math.cos(app.current);
}

function tan(){
  app.current = Math.log10(app.current);
}


  
