let video = document.querySelector('.videop');
let play = document.querySelector('.play');

//#####>>play div move with mouse using JavaScript🔰

// video.addEventListener('mouseenter',function(){
//     play.style.opacity = 1;
//     play.style.scale = 1;

// })
// video.addEventListener('mousemove',function(dets){
//     play.style.left = dets.x + 'px'
//     play.style.top = dets.y + 'px'
// })

// video.addEventListener('mouseleave',function(){
//     play.style.opacity = 0;
//     play.style.scale = 0;
// })

video.addEventListener('mouseenter',function(dets){
    gsap.to(play,{
        opacity: 1,
        scale:1,
    })
})
//play div move with mouse using GSAP>>⬆⬇
video.addEventListener('mouseleave',function(dets){
    gsap.to(play,{
        opacity: 0,
        scale:0,
    })
})
video.addEventListener('mousemove',function(dets){
    gsap.to(play,{
        left:dets.x-50,
        top:dets.y-50,
        opacity:1,
        scale:1,
        
    })
    //play div gsap end
})
//page 1 text & Video animation GSAP;;;
let text = document.querySelectorAll('#page1Text')

gsap.from(text,{
    x:-200,
    scale:.5,
    delay:.2,
    opacity:0,
    duration:.3,
    stagger:.2,
})
gsap.from(video,{
    scale:.5,
    opacity:.3,
    delay:.2,
    duration:.3
})
//<<<<<<<<<<<>>>>>>>>>>>
// used call function to run the code
function itemsAnim(){
    let crsr = document.querySelectorAll('.crsr');
let items = document.querySelector('.items');

    items.addEventListener('mouseleave',function(){
        gsap.to(crsr,{
            opacity:0,
            scale:0
        })
    })
    
    items.addEventListener('mousemove',function(dets){
        gsap.to(crsr,{
            left:dets.x-0,
            top:dets.y,
            opacity:1,
            scale:1
    
        })
    })
    
}
itemsAnim();

let icon = document.querySelector('#menu');
let links = document.querySelectorAll('.link1');


icon.addEventListener('dblclick',function(){
    gsap.to(links,{
        opacity:1
        
    })
})