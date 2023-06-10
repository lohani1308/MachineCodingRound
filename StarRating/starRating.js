const stars=[...document.getElementsByClassName('fa-star')]
console.log(stars);

function executeRating(stars){
    const starClassActive='fa fa-star active';
    const starClassInactive='fa fa-star';
867
    const len=stars.length;
    let i;

    stars.map((star)=>{
        star.onclick=()=>{
            i=stars.indexOf(star);
            console.log(star.classList);
            console.log(star.className);
            document.getElementById("noStars").innerHTML=i+1;

            if(star.classList.contains('active')){
                for (i; i < len; ++i) stars[i].classList.remove('active');
            }
            else {
                for(i;i>=0;i--)stars[i].classList.add('active');
             }
        };
    });
}


executeRating(stars);