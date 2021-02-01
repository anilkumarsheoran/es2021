//Promise.any accepts an array of promise and resolves as soon as any of the supplies promise become resolved

Promise.any([
    fetch('https://google.com/').then(()=> 'google'),
    fetch('https://twitter.com/').then(()=> 'twitter'),
    fetch('https://example.com/').then(()=> 'example'),
]).then((first)=>{
    //Any of the promises was fulfilled
    console.log(first);
}).catch((error) => {
    //All of the promise were rejected
    console.log(error)
})