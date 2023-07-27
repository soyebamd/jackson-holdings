// add spacer for header

const siteHeaderHeight = document.querySelector('.site-header');

const stickyHeaderSpacer = document.querySelector('.stickyHeaderSpacer');

stickyHeaderSpacer.style.height = siteHeaderHeight.clientHeight + 'px';


 
// when scroll add class fixed to header

function fixedTop() { 
   
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 100) {
                
        siteHeaderHeight.classList.add('site-header--medium');
        

    }
    
    else { siteHeaderHeight.classList.remove('site-header--medium');  }

}


// add background moving image when scroll


 function moveBgImg() {

    const getSliderBg = document.querySelector('.page-slider');

    const moveControl = window.scrollY/2 ;
    
    getSliderBg.style.backgroundPositionY = -moveControl * 2.5 + 'px';
    
     getSliderBg.style.backgroundPositionX = 'center';

     
    getSliderBg.style.backgroundSize = 100+window.scrollY/122+'%';
    
     


}
document.addEventListener('scroll', moveBgImg);


document.addEventListener('scroll', fixedTop);


