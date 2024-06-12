
// add class to nav links
let targetallDiv = document.querySelectorAll('.sectiondiv');
let allanchors = document.querySelectorAll('header ul a');

window.onscroll = () =>
{
    targetallDiv.forEach((targetnav)=>{
        let getTop = window.scrollY;
        let offset = targetnav.offsetTop - 700;
        let height = targetnav.offsetHeight;
        let getID = targetnav.getAttribute('id');
        if(getTop >= offset && getTop < offset + height)
        {
           allanchors.forEach((removeanchors)=>{
            removeanchors.classList.remove('active');
            document.querySelector('header ul a[href*= ' + getID + ']').classList.add('active');
           })

        }
    })
}

let specialCursor = document.querySelector('.special-crsr');
if(specialCursor)
{
    document.addEventListener('mousemove',(e)=>{
        let xVal = e.clientX;
        let yVal = e.clientY;
        // setTimeout(()=>{
            specialCursor.style.left = xVal + 'px';
            specialCursor.style.top = yVal + 'px';
        // },200);
       
    })
}

let specialCursorTwo = document.querySelector('.special-crsr-hover');
if(specialCursorTwo)
{
    document.addEventListener('mousemove',(e)=>{
        let xValOne = e.clientX;
        let yValTwo = e.clientY;
        // setTimeout(()=>{
            specialCursorTwo.style.left = xValOne + 'px';
            specialCursorTwo.style.top = yValTwo + 'px';
        // },200);
       
    })
}
let imageEffect = document.querySelector('.image-effect');
if(imageEffect)
{
    imageEffect.addEventListener('mousemove',()=>{
        specialCursor.style.opacity = "0";
        specialCursor.style.scale = "0"
        specialCursorTwo.style.opacity = "1";
        specialCursorTwo.style.scale = "1";
    })
    imageEffect.addEventListener('mouseleave',()=>{
        specialCursor.style.opacity = "1";
        specialCursor.style.scale = "1"
        specialCursorTwo.style.opacity = "0";
        specialCursorTwo.style.scale = "0";
    })
}

let headerData = document.querySelector('header');
if(headerData)
{
window.addEventListener('scroll',()=>{
    headerData.classList.toggle('active', window.scrollY > 100);
})
}

let musicTile = document.querySelector('.music-tile');
let musicTileIcon = musicTile.querySelector('i');
let music = musicTile.querySelector('.peaceMusic');
if(musicTile && musicTileIcon && music)
{
    musicTile.addEventListener('click',()=>{
        musicTile.classList.toggle('active');
        if(music.paused)
        {
            music.play();
        }
        else
        {
            music.pause();
        }
       })
     music.addEventListener('ended',()=>{
        music.play();
    })
     
}


// // GSAP code starts from here
// var tl = gsap.timeline();
// gsap.to('.image-effect video',{
//     scrollTrigger : {
//         trigger : ".image-effect video",
//         scroller : "body",
//         // markers : true,
//         start: "top 50%",
//         end: "bottom 80%",
//         scrub : 2,
//         // pin : true,
//     },
//     duration : 1,
//     scale : 1.2
// });

// gsap.to('.image-effect',{
//     scrollTrigger : {
//         trigger : ".image-effect",
//         scroller : "body",
//         // markers : true,
//         start: "top 50%",
//         end: "bottom 60%",
//         scrub : 2,
//         // pin : true,
//     },
//     duration : 2,
//     width: "100%",
//     height:"700px"
// });

let projectImages = document.querySelectorAll('.Projects-images');
let projectCover = document.querySelector('.Projects-cover');
projectImages.forEach((targetimgs)=>{
    targetimgs.addEventListener('mousemove',(e)=>{
        projectImages.forEach((removeimages)=>{
            removeimages.classList.remove('active');
        })
        targetimgs.classList.add('active');
        projectCover.src = e.target.getAttribute('src');
    })
})

// js code for gallery slider
let gallerySlide = document.querySelectorAll('.gallery-slide');
let index = 0;
function nextbtn()
{
   gallerySlide[index].classList.remove('active');
   index = (index + 1) % gallerySlide.length;
   gallerySlide[index].classList.add('active');
}

function previousbtn()
{
    gallerySlide[index].classList.remove('active');
    index = (index - 1 + gallerySlide.length) % gallerySlide.length;
    gallerySlide[index].classList.add('active');
}

let hoverImagesBox = document.querySelectorAll('.bottom-landing-contents-right-contents');
hoverImagesBox.forEach((targethover)=>{
    targethover.addEventListener('mousemove',(e)=>{
        let getXVal = e.clientX - targethover.offsetLeft;
        let getYVal = e.clientY - targethover.offsetTop;

        targethover.style.setProperty('--setLeft', getXVal + 'px');
        targethover.style.setProperty('--setTop', getYVal + 'px');
    })  

})

// js code for menu buttons activation
let MenuButtons = document.querySelector('.menu');
let menuSlide = document.querySelector('header nav ul');

MenuButtons.addEventListener('click',()=>{
    MenuButtons.classList.toggle('active');
    menuSlide.classList.toggle('active');
})
