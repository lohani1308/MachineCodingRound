const slides=[... document.getElementsByClassName('slide')];
console.log(slides);

var slideNo=0;

const left=document.getElementsByClassName("btn-prev");
const right=document.getElementsByClassName("btn-next");

left[0].addEventListener('click',()=>{
    slideNo--;

    if(slideNo < 0){
        slideNo=slides.length-1;
    }

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[slideNo].style.display="block";
});

right[0].addEventListener('click',()=>{
    slideNo++;

    if(slideNo > slides.length-1){
        slideNo=0;
    }
    
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[slideNo].style.display="block";
});



