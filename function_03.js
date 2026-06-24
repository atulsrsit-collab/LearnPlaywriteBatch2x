const functionvowelcount= (str)=>
{
    let count=0;
    for (const char of str)
    {
        if(char ==="a"||
            char ==="e" ||
            char ==="i"||
            char ==="o"||
            char ==="u"

        )
        count++;
}
return count;
}

functionvowelcount("this is atul");
console.log(functionvowelcount("this is atul"));