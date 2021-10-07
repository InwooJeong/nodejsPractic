var calc = {};
calc.add = function(a, b){
    return a + b;
}

console.log('모듈 분리 전 - calc.add 함수 호출 결과 : %d', calc.add(10,10));

var calc1 = require('./calc');
console.log('모듈 분리 후 - calc.add 함수 호출 결과 : %d', calc1.add(10,10));

var calc2 = require('./calc2');
console.log('모듈 분리 후 - calc2.add 함수 호출 결과 : %d', calc2.add(10,10));

var nconf = require('nconf');
nconf.env();
console.log('OS 환경 변수 값 : %s', nconf.get('OS'));