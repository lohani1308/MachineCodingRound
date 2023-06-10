const btn=[...document.getElementsByClassName("accordian")];
//Converting HTMLCollection to array
console.log(btn);


btn.map((bt)=>{
     bt.addEventListener("click",function(){
        console.log(this);
        this.classList.toggle("active");
        var panel=this.nextElementSibling;

        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+"px";
        }
     })
})
