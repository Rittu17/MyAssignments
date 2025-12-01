// // Write a JavaScript program to observe how the same variable name behaves:
// * in *global scope*,
// * inside a *function*, and
// * inside an *if-block* using both var and let.

genderType="female"
function printGender()
{
     let color="brown"
    console.log("Printing Color inside function is ",color) //accessible inside function
    if(genderType=="female"){
        var age=30
        let color="pink"
        console.log("printing color inside if block",color)
    }
    else{

        var age=35
        console.log("printing color inside else block",color);

    }
        console.log('Age is',age)//outside the ifelse block

}
printGender()
console.log(genderType)
