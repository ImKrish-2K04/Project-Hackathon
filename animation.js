function page1Animation(){
    var tl=gsap.timeline()
    tl.from(".nav-logo a img",{
        y:-100,
        duration:0.6,
        opacity:0,
        delay:0.5,
        
    })
    tl.from(".nav-links.first",{
        y:-100,
        duration:0.6,
        opacity:0
    })
    tl.from(".enam-logo a img",{
        y:-100,
        duration:0.6,
        opacity:0,
    })
    tl.from(".secondary-navbar .nav-links .dropdown .dropdown-link",{
        y:-100,
        duration:0.6,
        opacity:0,
        stagger:0.15
    })
    tl.from(".hero-section .key-sections.left ",{
        x:-250,
        duration:0.4,
        opacity:0
    })
    tl.from(".hero-section .slider-container.right ",{
        x:250,
        duration:0.4,
        opacity:0
    })
}
function page2Animation(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            markers:false,
            start:"top 70%",
            end:"top -60%",
            scrub:2,
    
        }
    })
    //line1
    tl2.from(".whatsNewVideo .video",{
        x:-300,
        opacity:0,
        duration:0.5
    },"animation1")
    tl2.from(".whatsNewVideo .whatsNew",{
        x:300,
        opacity:0,
    },"animation1")
    
    //line2
    tl2.from(".over-cover .overview",{
        x:-300,
        opacity:0,
        duration:0.3
    },"animation2")
    tl2.from(".over-cover .coverage",{
        x:300,
        opacity:0,
    },"animation2")
    
}
page1Animation()
page2Animation()



