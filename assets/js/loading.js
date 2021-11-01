window.onload = function(){
  const body = document.querySelector('body')
  const overlay = document.querySelector('.overlay-loading')
  body.style.overflowY = 'visible'
  
  setTimeout(function(){
    overlay.classList.add('overlay-hide')
  }, 1000);

}