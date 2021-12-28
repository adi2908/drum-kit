var a=document.getElementsByClassName("drum");
var l=a.length;
var i;
var arr={'w':'crash','a':"kick-bass",'s':'snare','d':'tom-1','j':'tom-2','k':'tom-3','l':'tom-4'}
for (i=0;i<a.length;i++){
a[i].addEventListener("click",function (){
temp=this.innerHTML
var audio=new Audio('sounds/'+arr[temp]+'.mp3');
audio.play();
});
}
