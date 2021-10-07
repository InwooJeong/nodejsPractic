var Users = [{name:'Lotte', age:20}, {name:'Wir sind Helden', age:22}];
Users.push({name:'Nena', age:23});
console.log('사용자 수 : %d', Users.length);
console.log('첫 번째 사용자 이름 : %s', Users[0].name);

var add = function(a,b){
    return a + b;
};

Users.push(add)
console.log('배열 요소 수 : %d', Users.length);
console.log('마지막 요소로 추가된 함수 실행 : %d', Users[3](10,10));

for(var i=0;i<Users.length;i++){
    console.log('배열 요소 #'+ i + ': %s', Users[i].name);
}

console.log('\nforEach 구문 사용하기');
Users.forEach(function(item,index){
    console.log('배열 요소 #'+ i + ': %s', item.name);
});

Users.splice(1,0,{name:'Helene Fisher', age:25});
console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.dir(Users);

Users.splice(2, 1);
console.log('splice()로 인덱스 3요소 1개 삭제한 후');
console.dir(Users);