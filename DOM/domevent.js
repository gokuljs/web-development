// dom events are used to make things interactive
//like clicking on a button,howering a link,dragging and dropping a link,pressing the enter key
// process is select an element add a event listner
// to add listen we uses add event listener
//syntax
//element.addEventListener(type,functionTocall);
//var h1=document.querySelector("h1");
//h1.addEventListener("click",function(){
//alert("h1 was clicked");
//});

/*h1.addEventListener("click",function(){
    h1.style.color="orange";
}); // when u click on h1 the color will changes 
and u can have more than ne event listen in an html

example 2 
document.querySelector("ul").addEventListener("click",function(){
    alert("ul was clicked");
});
// accesing all the elements inside the event listener 
using an for loop 
for(var i=0;i<lis.length;i++){
    lis[i].addEventListener("click",function(){
        this.style.color="red";
    });
}

*/