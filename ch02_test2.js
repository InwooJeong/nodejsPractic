var result = 0;

console.time('duration_sum');
for(var i=1;i<=1000;i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('sum of 1 ~ 1000 : %d', result);

console.log('현재 실행한 파일 이름 : %s', __filename);
console.log('현재 실행한 파일 패스 : %s', __dirname);

var Person = {name:"Lotte", age: 20};
console.dir(Person);

console.log('argv 속성 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

process.argv.forEach(function(item, index){
    console.log(index + ':', item);
});