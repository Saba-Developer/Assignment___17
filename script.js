let num_1=parseFloat(prompt("Enter 1st number"));
let num_2=parseFloat(prompt("Enter 2nd number"));
let operation=prompt("Enter the Operator: + , - , * , /");
let answer;
if(operation == "+")
{
answer = num_1+num_2;
console.log(`The Sum of ${num_1} and ${num_2} = ${num_1 + num_2}`);
}
else if(operation == "-")
{
    answer = num_1-num_2;
    console.log(`The Subtraction of ${num_1} and ${num_2} = ${num_1 - num_2}`);
}
else if(operation == "*")
{
    answer = num_1 * num_2;
    console.log(`The Multiplication of ${num_1} and ${num_2} = ${num_1 * num_2}`);
}
else if(operation == "/")
{
    answer == num_1 / num_2;
    console.log(`The Division of ${num_1} and ${num_2} = ${num_1 / num_2}`);
}
else
{
    console.log("Wrong Operator!");
    
}