// 1) Create an Array with five names and print all five in reverse.
console.log("Question-1: Create an Array with five names and print all five in reverse.");
let arr_name = ["Ajay", "Rahul", "Meeet", "Hiren", "Shaurabh"];
for(let i = arr_name.length-1; i>=0 ;i--){
    console.log(arr_name[i]);
}

// 2) print only the elements which are divisible by 5 from 1 to 50.
console.log("Question-2: print only the elements which are divisible by 5 from 1 to 50.");
for(let i = 1; i <=50; i++){
    if(i%5==0){
        console.log(i);
    }

}