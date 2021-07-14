function splitString(str)
{
    let alpha = "";
    let num = "";
    let special = "";
    for (let i=0; i<str.length; i++)
    {
        if (!isNaN(String(str[i])))
            num+=str[i];
        else if((str[i] >= 'A' && str[i] <= 'Z') ||
         (str[i] >= 'a' && str[i] <= 'z'))
            alpha+=str[i];
        else
            special+=str[i];
    }
    
    console.log(alpha);
    console.log(num);
    console.log(special);
}
 
// Driver method
let str = "ab c 1 2 3df!!";
splitString(str);