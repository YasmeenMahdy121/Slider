/* Slider */
let sliderImgs=document.querySelectorAll('.slider-container img');
let sliderNum=document.querySelector('.slider-container .slider-num');
let indecators=document.querySelector('.controls .indecators');
let currentSlide=1;
if(localStorage.getItem('currentSlide')!==null){
    currentSlide=localStorage.getItem('currentSlide');
}
let prev=document.querySelector('.prev');
let next=document.querySelector('.next');

//create ul element
let indecatorsUlElement=document.createElement('ul');

//create li elements with length of imgs and append it to ul element
for(let i=0; i<sliderImgs.length; i++){
    let li=document.createElement('li');
    li.setAttribute("data-index",i+1);
    li.appendChild(document.createTextNode(i+1));
    indecatorsUlElement.appendChild(li);
}
indecators.appendChild(indecatorsUlElement);

//get all li elements
let indecatorsLiElements=document.querySelectorAll('ul li');

// click prev & next event
prev.onclick = prevSlide;
next.onclick = nextSlide;

//indecators click
indecatorsLiElements.forEach((indecator)=>{
    indecator.onclick = clickIndecator;
}); 

//prev btn
function prevSlide(){
    if(currentSlide==1){
        return false;
    }
    else{
        currentSlide--;
        checker();
    }
}
//next btn
function nextSlide(){
    if(currentSlide==sliderImgs.length){
        return false;
    }
    else{
        currentSlide++;
        checker();
    }
}
//click indecators
function clickIndecator(){
    currentSlide=parseInt(this.getAttribute("data-index"));
    checker();
};

//remove active class from each slider
function removeAll(){
    sliderImgs.forEach((img)=>{
        img.classList.remove('active');
    });
    //
    indecatorsLiElements.forEach((li)=>{
        li.classList.remove('active');
    });
}

//checker func
function checker(){

    removeAll();

    sliderNum.textContent='Slide #'+currentSlide+' of '+sliderImgs.length;

    //add active class to active slider
    sliderImgs[currentSlide-1].classList.add('active');

    //add active class to active indecator
    indecatorsLiElements[currentSlide-1].classList.add('active');

    //add disabled class to disabled button
    if(currentSlide==sliderImgs.length){
         next.classList.add('disabled');
    }
    else{
         next.classList.remove('disabled');
    }
    if(currentSlide==1){
        prev.classList.add('disabled');
    }
    else{
        prev.classList.remove('disabled');
    }
    localStorage.setItem('currentSlide',currentSlide);
}
checker();
