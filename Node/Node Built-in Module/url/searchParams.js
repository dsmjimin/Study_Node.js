const { URL } = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category')); //키에 해당하는 모든 값들을 가져옴
console.log('searchParams.get():', myURL.searchParams.get('limit')); //키에 해당하는 첫 번째 값만 가져옴
console.log('searchParams.has():', myURL.searchParams.has('page')); //해당 키가 있는지 없는지 검사

console.log('searchParams.keys():', myURL.searchParams.keys()); //searchParams의 모든 키를 반복키 객체로 가져옴
console.log('searchParams.valuse():', myURL.searchParams.values()); //searchParams의 모든 값을 반복기 객체로 가져옴

myURL.searchParams.append('filter', 'es3'); //append(키, 값): 해당 키를 추가, 같은 키의 값이 있다면 유지하고 하나 더 추가
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6'); //append와 비슷하지만, 같은 키의 값들을 모두 지우고 새로 추가함
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter'); //해당 키 삭제
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString()); //조작한 searchParams 객체를 다시 문자열로 만듦.
//위 문자열을 search에 대입하면 주소 객체에 반영됨
myURL.search = myURL.searchParams.toString();

//위 코드는 URL 생성자를 통해 myURL이라는 주소 객체를 만듦
