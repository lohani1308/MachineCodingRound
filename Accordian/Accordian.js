const btn=document.getElementsByClassName("accordian");

console.log(btn);


for(let i=0;i<btn.length;i++){
     btn[i].addEventListener("click",function(){
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
}
