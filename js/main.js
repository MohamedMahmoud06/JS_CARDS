var imagList=Array.from(document.querySelectorAll(".item img"))
var modalBox=document.getElementById("modalBox")
var innerBox=document.getElementById("innerBox")
var closeEl=document.getElementById("closeEl")
var nextEl=document.getElementById("nextEl")
var prevEl=document.getElementById("prevEl")
var currentIndex=0
for(var i=0;i<imagList.length;i++){
    imagList[i].addEventListener("click",function(event){
        currentIndex=imagList.indexOf(event.target)
        modalBox.style.display="flex"
        var imagSrc=event.target.getAttribute("src")
        innerBox.style.backgroundImage="url("+imagSrc+")"
    })
}
nextEl.addEventListener("click",nextSlide)
function nextSlide(){
    currentIndex++
    if(currentIndex==imagList.length){
        currentIndex=0
    }
    var imagSrc=imagList[currentIndex].getAttribute("src")
    innerBox.style.backgroundImage="url("+imagSrc+")"

}
prevEl.addEventListener("click",prevSlide)
function prevSlide(){
    currentIndex--
    if(currentIndex<0){
        currentIndex=5
    }
    var imagSrc=imagList[currentIndex].getAttribute("src")
    innerBox.style.backgroundImage="url("+imagSrc+")"
}
closeEl.addEventListener("click",function(){
    modalBox.style.display="none"
})