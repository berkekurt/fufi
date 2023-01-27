/*document.addEventListener('keydown', function() {
  setTimeout(myFunction, 4000);
});

function myFunction() {
  alert('Hello');
}

setTimeout(() => {document.addEventListener('keydown', function() {
  setTimeout(myFunction, 4000);
});
function myFunction() {
  alert('Hello');
} */
setTimeout(() => {document.addEventListener('keydown', e =>{
  console.log(e)
  if(e.keyCode ===89){
    window.open("https://discord.gg/RPBW66CC"); 
      e.preventDefault()
  }
  if(e.keyCode ===78){
   window.open("https://i.ytimg.com/vi/hZpdMOMip2E/maxresdefault.jpg"); 
      e.preventDefault()
  }

  
})
  
}, 8500);

