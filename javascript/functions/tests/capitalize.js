function capitalize(str){
    past1 = ((str.slice(1)).toLowerCase());
    return str.charAt(0).toUpperCase() + past1;
}

console.log(capitalize("amos"));