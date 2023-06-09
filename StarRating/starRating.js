const stars=[...document.getElementsByClassName('fa-star')]
console.log(stars);

function executeRating(stars){
    const starClassActive='fa fa-star active';
    const starClassInactive='fa fa-star';

    const len=stars.length;
    let i;

    stars.map((star)=>{
        star.onclick=()=>{
            i=stars.indexOf(star);
            console.log(star.classList);
            console.log(star.className)
            document.getElementById("noStars").innerHTML=i+1;

            if(star.className===starClassInactive){
                for(i;i>=0;i--)stars[i].className=starClassActive;
            }
            else {
                for (i; i < len; ++i) stars[i].className = starClassInactive;
             }
        };
    });
}


executeRating(stars);