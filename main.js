document.querySelectorAll('a[href^="#"]').forEach((i) => {
  i.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');

    const targetElement = document.querySelector(targetId);

    if(targetElement){
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }
  });
});


const buttonAccount = document.querySelector('.nav__buttonAccount');

let blindAccount = document.querySelector('.nav__blind');

let crossElement = document.querySelector('.elementCross');

buttonAccount.addEventListener('click', function(){
    blindAccount.style.top = '0';
})

crossElement.addEventListener('click', function(){
    blindAccount.style.top = -1000 + 'px';
})


