

const ash = document.querySelector('h3')
ash.innerText='potato'


const home = document.querySelector("a");
const home2 = document.querySelector(
  "body > footer:nth-child(3) > section:nth-child(1) > article:nth-child(1) > a:nth-child(2)"
);
console.log(home2)
home.innerText='Start'
home2.innerText = "Start";

const contact = document.querySelector('body > header:nth-child(1) > nav:nth-child(2) > a:nth-child(3)')
const contact2 = document.querySelector(
  "body > footer:nth-child(3) > section:nth-child(1) > article:nth-child(1) > a:nth-child(4)"
);
contact.innerText = " Mail Us";
contact2.innerText = " Mail Us";

const info = document.querySelector(".art-2 > p:nth-child(4)");
info.innerText = 'Changed this information!'

const button = document.querySelector('button')
button.style.backgroundColor = 'green';
button.innerText= 'Köp'

const product = document.querySelector(".art-1");
product.style.backgroundColor='pink'

const address = document.querySelector(
  "body > footer:nth-child(3) > section:nth-child(1) > article:nth-child(2) > p:nth-child(2)"
);
address.innerHTML='Sinus skateboards <br> Storvägen 44 <br> 123 45 Staden'

const allP = document.querySelectorAll('p')
allP.forEach((element) => element.style.color='blue');

const allBtn = document.querySelectorAll('button')
allBtn.forEach((element) => (element.innerText = "add to cart"));

home.classList.add('active'); 

const logo = document.querySelector(".logo");
logo.classList.remove("logo"); 