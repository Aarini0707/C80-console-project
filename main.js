first_array=[];

function submit(){
var second_array=[];
for(var f=1; f<=4; f++)
{
var name_of_student=document.getElementById("name_of_the_student_"+f).value;
first_array.push(name_of_student);
}
console.log(first_array);
var length_of_array=first_array.length;
for(var b=0; b<length_of_array; b++)
{
second_array.push("<h4>Name- "+first_array[b]+"</h4>");
}
console.log(second_array);
document.getElementById("display_name_with_commas").innerHTML=second_array;
var remove_commas=second_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
first_array.sort();
console.log(first_array);
var second_array_sorted=[];
var length_of_array=first_array.length;
for(var b=0; b<length_of_array; b++)
{
second_array_sorted.push("<h4>Name- "+first_array[b]+"</h4>");
}
console.log(second_array_sorted);
var remove_commas=second_array_sorted.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

function new_update(){
document.getElementById("display_name_without_commas").innerHTML="<h1>" +first_array+"</h1>";
   
}