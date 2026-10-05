let text = "JAVASCRIPT"; // 1
console.log(text.toLowerCase());
let text3 = "javascript";//2
text3 = text3[0].toUpperCase() + text3.slice(1)
console.log(text3)
function truncate(str, maxlength) { // 3
    if(str.length > maxlength) { 
        return str.slice(0,maxlength - 3) + "...";
    }
    return str;
}
console.log(truncate(Hello, World!!!,10))