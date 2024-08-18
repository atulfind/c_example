function* gen(){
    yield 'ok'
}


const dd = gen();

console.log(dd.next())