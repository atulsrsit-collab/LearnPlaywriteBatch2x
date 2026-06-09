/*This is the program to calcuate the 
average of the marks received for students
in the class of 35*/

let marks=[89,98,55,44];
let sum=0;

for (let i=0;i<marks.length;i++)
{
    sum+=marks[i];
}
let avg= sum/marks.length;
console.log("avg of marks-->",avg);