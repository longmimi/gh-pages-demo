
var btn=document.getElementById('start-btn');
var close=document.getElementById('modal-header-close');
var cancel=document.getElementById('close-btn');
var modal = document.getElementById('modal');
var click_ = document.getElementsByClassName('modal')[0];
btn.addEventListener('click',function () {
    modal.style.display='block';
  });
close.addEventListener('click', function () {
    modal.style.display = 'none';
});
cancel.addEventListener('click', function () {
    modal.style.display = "none";
}); 
modal.addEventListener('click', function (e) {
        // e.stopPropagation();
    if (e.target == click_) {
        modal.style.display = "none";
    }
}); 
