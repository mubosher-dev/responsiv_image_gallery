const   gallaryContainer = document.querySelector('.gallary-container'),
        gallaryItems = document.querySelectorAll('.gallary-item'),
        gallaryWrapperImg = document.querySelector('#g-img'),
        gallaryFooter = document.querySelector('.gallary-footer'),
        sections = document.querySelector('#section'),
        sectionImages = sections.querySelectorAll('img'),
        cancelBtn = document.querySelector('#cancel');


gallaryItems.forEach((gBtn,index) => {
    gBtn.addEventListener('click', function() {
        gallaryContainer.classList.add('active');
        let src = gBtn.querySelector('img').src;
        gallaryWrapperImg.src = src ;
        sectionImages[index].classList.add('fade');
    });
        let img  = document.createElement('img');
        img.alt = "gallery-img";
        img.src = sectionImages[index].src;
        gallaryFooter.appendChild(img);
        imgChange(img)
        console.log(img);
})

function imgChange(img){
    img.addEventListener('click', function(){
        gallaryWrapperImg.src = img.src;
    })
}

cancelBtn.addEventListener('click',()=> {
    gallaryContainer.classList.remove('active');
})