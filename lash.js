console.log("بسم الله الرحمن الرجيم ");
// make array of photo which we wont to add in image slide 
let images=[
    "photo/1.jpeg",
    "photo/2.jpeg",
    "photo/3.jpeg",
    "photo/4.jpeg",
    "photo/5.jpeg",
    "photo/6.jpeg",
]

let imgCont=document.querySelector(".container");
// select the buttom contaner and create the next and the back 
let btnContainer=document.querySelector(".buttom");
// next btn 
let backBtn=document.createElement("button");
let backBtnText=document.createTextNode("Back..");
backBtn.appendChild(backBtnText);
btnContainer.appendChild(backBtn);

/// circil divs container 
let cercilsContainer=document.createElement("div");
cercilsContainer.style.width="50%";
// cercilsContainer.style.height="6vh"; 
cercilsContainer.classList="flex";
// cercilsContainer.style.backgroundColor="black"; 
btnContainer.appendChild(cercilsContainer);
// create the circils 
let arrOfCrcils=[];
for(let i=0;i<images.length;i++)
{
    let crcile=document.createElement("div");
    crcile.classList=`circle  ${i}`;
    arrOfCrcils.push(crcile);
    cercilsContainer.appendChild(crcile);

}
// console.log(arrOfCrcils);
// back btn 
let nextBtn=document.createElement("button");
nextBtn.classList="next";
let nextBtnText=document.createTextNode("Next..");
nextBtn.appendChild(nextBtnText);
btnContainer.appendChild(nextBtn);


// ***************************************


// made counter for the images
let counter = 0;

            // create the div which will care the image 
            let div=document.createElement("div");
            div.style.width="100%";
            div.style.height="100%";
            // create the element respons for the img 
            const image = document.createElement('img');
            image.style.width="100%";
            image.style.height="100%"; 
            image.src = images[counter];
            div.appendChild(image);   
            imgCont.appendChild(div);
// select the counter of slides div 
let count=document.querySelector(".counter");
let countText=document.createTextNode(`Slide #${counter+1} of ${images.length}Slides`) 
count.appendChild(countText);
nextBtn.addEventListener("click", ()=>{
    backBtn.classList.remove("disapled");
    backBtn.disabled=false;
    counter++;
    if(counter<images.length)
        {
 image.src = images[counter];
div.appendChild(image);   
imgCont.appendChild(div); 
console.log(counter);
console.log(nextBtn.disabled);
if (counter===images.length-1)
    {
        nextBtn.classList="disapled";
        nextBtn.disabled = true;
        console.log(nextBtn.disabled);
        console.log("Done ");
    }
        }

    else 
    {
        nextBtn.classList="disapled";
        nextBtn.disabled = true;
        console.log(nextBtn.disabled);
        console.log("Done ");
}
countText.nodeValue=`Slide #${counter+1} of ${images.length}Slides`;
arrOfCrcils[counter-1].classList.remove("active");
arrOfCrcils[counter-1].classList="circle";
arrOfCrcils[counter].classList="active";


});
if(counter===0)
    {
        backBtn.classList="disapled";
        backBtn.disabled = true;
        console.log(backBtn.disabled);
        console.log("Done ");
        console.log(counter);
        arrOfCrcils[counter].classList="active";
    }

backBtn.addEventListener("click", ()=>{
    nextBtn.classList.remove("disapled");
    nextBtn.disabled=false;
    if(counter===0)
    {
        backBtn.classList="disapled";
        backBtn.disabled = true;
        console.log(backBtn.disabled);
        console.log("Done ");
        console.log(counter);
    }
    if(counter>0)
        {
            counter--;
 image.src = images[counter];
div.appendChild(image);   
imgCont.appendChild(div); 
console.log(counter);
console.log(backBtn.disabled);
if(counter===0)
    {
        backBtn.classList="disapled";
        backBtn.disabled = true;
        console.log(backBtn.disabled);
        console.log("Done ");
        console.log(counter);
    }

        }
        countText.nodeValue=`Slide #${counter+1} of ${images.length}Slides`;
        arrOfCrcils[counter+1].classList.remove("active");
        arrOfCrcils[counter+1].classList="circle";
        arrOfCrcils[counter].classList="active";

});


