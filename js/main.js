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

const getSliderBg = document.querySelector('.page-slider');

if (getSliderBg) {


    function moveBgImg() {

        const moveControl = window.scrollY / 2;
    
        getSliderBg.style.backgroundPositionY = -moveControl * 2.5 + 'px';
    
        getSliderBg.style.backgroundPositionX = 'center';

     
        getSliderBg.style.backgroundSize = 100 + window.scrollY / 122 + '%';
    
     


    }

    

document.addEventListener('scroll', moveBgImg);

    
}


// map link


const mapLink = document.querySelector('#map');

mapLink.addEventListener('click', function () { 

  
openNewWindowWithUrl('https://maps.google.com/maps/dir//4663+Stenton+Ave+%2379+Philadelphia,+PA+19144+USA/@40.0263659,-75.1587659,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c6b826f56edefd:0xbc042c4c749bcf15');


})


function openNewWindowWithUrl(url) {
    const newWindow = window.open('', '_blank');
  
    if (newWindow) {
      newWindow.location.href = url;
    } else {
      console.log('Unable to open the new window. Please check your popup settings.');
    }
  }
  









document.addEventListener('scroll', fixedTop);



// add move animation on screen visible


function getCurrentCordinate() {
  const elementsToAnimate = document.querySelectorAll('.move--init-left, .move--init-right, .thumbs');
  const windowHeight = window.innerHeight;

  elementsToAnimate.forEach(element => {
    const isTopVisible = element.getBoundingClientRect().top < windowHeight;

    

    if (isTopVisible) {
      if (element.classList.contains('move--init-left')) {
        element.classList.add('moveFromLeft');
      }

     if (element.classList.contains('thumbs')) {
       element.querySelectorAll('a img').forEach(thumbs => thumbs.classList.add('moveUp') );
      }
      
      
      if (element.classList.contains('move--init-right')) {
        element.classList.add('moveFromRight');
      }

      element.classList.remove('move');
    }


  //  else { element.classList.add('move'); element.classList.remove('moveFromLeft') }


  });
}




document.addEventListener('scroll', getCurrentCordinate);
getCurrentCordinate();

