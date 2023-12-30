let count = document.querySelector(".count");
let track=0;
let changeCounter = (track)=>{
    if(track>0){
        count.style.color = 'green';
    }else if(track==0){
        count.style.color = 'blue';
    }else{
        count.style.color = 'red';
    }
    count.textContent =  track;
}
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
btn1.addEventListener('click',function(){
    track = track+1;
    changeCounter(track);
});
btn2.addEventListener('click',function(){
    track=0;
    changeCounter(track);
});
btn3.addEventListener('click',function(){
    track = track-1;
    changeCounter(track);
});
document.addEventListener('keydown',function(e){
    if(e.key=='+'){
        track = track+1;
        changeCounter(track);
    }
    if(e.key=='r'){
        track=0;
        changeCounter(track);
    }
    if(e.key=='-'){
        track = track-1;
        changeCounter(track);
    }
});


