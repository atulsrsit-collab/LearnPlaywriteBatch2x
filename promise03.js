let promiseOne= new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    console.log("this is an async function")
}),1000;
resolve()
});

promiseOne.then(function()

{
    console.log("promise has been delivered");
})


