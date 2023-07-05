function fizzbuzz(number){
    for (let i = 1; i < number+1; i+=1){
        output = "";
        if (i % 3 === 0){
            output += "Fizz";
        }
        
        if (i % 5 === 0){
            output += "Buzz";
        }

        if (output.length === 0)
         {
            console.log(i);
         }else{
            console.log(output);
         }
    }
}

fizzbuzz(40);