const promiseOne= new Promise(function(resolve,reject) {

setTimeout
(function()
{
    console.log("this is an aynsc function call");
    resolve()
},1000)

})

promiseOne.then(function()
{
    console.log("promise is consumed");
})



