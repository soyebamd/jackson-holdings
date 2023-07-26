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

document.addEventListener('scroll', fixedTop);