const answer = document.querySelectorAll('.answer');
const plusButton = document.querySelectorAll('.plus-button');
const plusImg = document.querySelectorAll('.plus-icon');

for (let i = 0; i < plusButton.length; i++) {
   plusButton[i].addEventListener("click", () => {
             answer[i].classList.toggle("active")
             if (plusImg[i].src.match('assets/images/icon-plus.svg')) {
                     plusImg[i].src = 'assets/images/icon-minus.svg'
                  } else {
                     plusImg[i].src = 'assets/images/icon-plus.svg'
                  }
          })
}

 