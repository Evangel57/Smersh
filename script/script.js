const blockmoh = document.getElementById('block-moh');
const blockmul = document.getElementById('block-mul');
const mohBtn = document.getElementById('moh-btn');
const mulBtn = document.getElementById('multicam-btn');

document.getElementById('moh-btn').addEventListener('click', function() {
    blockmoh.style.opacity = '1';
    blockmoh.classList.add('active');

    blockmul.style.opacity = '0';
    blockmul.classList.remove('active');
    
    mohBtn.classList.add('active-btn');
    mulBtn.classList.remove('active-btn');
});


document.getElementById('multicam-btn').addEventListener('click', function() {
    blockmoh.style.opacity = '0';
    blockmoh.classList.remove('active');

    blockmul.style.opacity = '1';
    blockmul.classList.add('active');

    mulBtn.classList.add('active-btn');
    mohBtn.classList.remove('active-btn');
});