class Person{
    constructor(id, fName, lName, age, comment, wish, mail){
        this.id=id;
        this.fName=fName;
        this.lName=lName;
        this.age=age;
        this.comment=comment;
        this.wish=wish;
        this.mail=mail;
    }
    obtDetalles() {
        al("Your user data is: "+this.fName+" "+this.lName+" "+this.age+" "+this.comment+ " "+this.wish+" "+this.mail);
    }

    found(){
        varDir.innerHTML+="<tr><td>"+this.fName+"</td><td>"+this.lName+"</td><td>"+this.age+"</td><td>"+this.comment+"</td><td>"+this.wish+"</td><td>"+this.mail+"</td></tr>";
    }
}



var id=1;
const fName=document.getElementById('fName');
const lName= document.getElementById('lName');
const age=document.getElementById('age');
const comment=document.getElementById('comments');
const wish= document.getElementById('wishlist');
const mail=document.getElementById('mail');
let dataArray=[];
var object;
const varId=document.getElementById('ids');
var j=-50
const varFinder=document.getElementById('tutti');
const varDir=document.getElementById('location');

function dataRetriever(){
    if(fName.value=='' || lName.value=='' || mail.value==''){
        al("You didn't entered the required data");
        return;
    }
    else{
        al("Your data is saved! your id is: "+id);
        object = new Person(id, fName.value, lName.value, age.value, comment.value, wish.value, mail.value);
        dataArray.push(object);
        id++;
    }
}

function dataErase(){
    var j=-50;
    j=look(j);
    if(j==-50) al('Data Not Found for this User!');
    else{
        al("We're sorry you're leaving, we'll miss you <3 !");
        dataArray.splice(j,1);
    }
    varDir.innerHTML="";
}

function dataShow(){
    var j=-50;
    j=look(j);
    if(j==-50) al('Data Not Found for this User!');
    else{
        dataArray[j].obtDetalles();
    }
    varDir.innerHTML="";
}

function al(msg){
    alert(msg);
}

function look(j){
    for(var i=0; i<dataArray.length;i++){
        if(dataArray[i].id==varId.value) j=i;
    }
    return j;
}

function dataFinder(){
    debugger;
    varDir.innerHTML="";
    var pNom;
    var pApe;
    var comm;
    var wi;
    if(varFinder.value=='') al("Can't search if you don't insert something");
    for(var i=0;i<dataArray.length;i++){
        pNom=dataArray[i].fName.includes(varFinder.value);
        pApe=dataArray[i].lName.includes(varFinder.value);
        comm=dataArray[i].comment.includes(varFinder.value);
        wi=dataArray[i].wish.includes(varFinder.value);
         if(dataArray[i].id==varFinder.value || pNom || pApe || dataArray[i].age==varFinder.value || comm || wi || dataArray[i].mail==varFinder.value)
             dataArray[i].found();
    }
}

