var student_names=[];

function submit()
{
 var student1=document.getElementById("student1").value;
   
 var student2=document.getElementById("student2").value;

 var student3=document.getElementById("student3").value;

 var student4=document.getElementById("student4").value;

 student_names.push(student1, student2, student3, student4);

 document.getElementById("display_name").innerHTML=student_names;
 document.getElementById("submit").style.display="none";
 document.getElementById("sort").style.display="inline-block";
}

function sort()
{
    student_names.sort();
    document.getElementById("display_name").innerHTML=student_names;
}


