let order = new Promise(function(resolve, reject)
{
    let orderready= true;
    if (orderready)
    {
        resolve("Pizza is delivred");
    }
    else
    {
        reject("order is cancelled");
    }
});

console.log(order);



