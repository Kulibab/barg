const menu = document.getElementById('menu_popup');
const close = document.querySelector('.close');
const menuPopup = document.getElementById('menuPopup');
const swiperWrapper = document.querySelector('.swiper-wrapper');

menu.addEventListener('click', () => {
  menuPopup.classList.toggle('show');
})

close.addEventListener('click', () => {
  menuPopup.classList.toggle('show');
})

const dishes = [
      {
          name: "Керала каррі з куркою",
          description: "Традиційний керальський каррі  з паприкою. На основі йогурту з насиченим пряним смаком",
          img: "Indian red chicken curry ",
          price: "180"
      },
      {
          name: "Керала каррі з ягням",
          description: "Традиційний керальський каррі  з паприкою. На основі йогурту з насиченим пряним смаком",
          img: "Indian red lamb curry",
          price: "245"
      },
      {
          name: "Баттер-чікен",
          description: "Знаменитий індійський Баттер каррі з багатим вершковим смаком",
          img: "Indian butter chicken curry ",
          price: "195"
      },
      {
          name: "Баттер-панір",
          description: "Знаменитий індійський Баттер каррі з багатим вершковим смаком",
          img: "Indian butter paneer curry",
          price: "180"
      },
      {
          name: "Малай з куркою",
          description: "Каррі з кешью та родзинками. Ніжний та вершковий смак.",
          img: "Indian malay chicken curry with cashew nuts",
          price: "190"
      },
      {
          name: "Малай з паніром",
          description: "Каррі з кешью та родзинками. Ніжний та вершковий смак.",
          img: "Indian malay paneer curry with cashew nuts",
          price: "180"
      },
      {
          name: "Зелений каррі  з куркою",
          description: "Тайский каррі на кокосовому молоці з екзотичними спеціями ",
          img: "Thai green chicken curry",
          price: "190"
      },
      {
          name: "Зелений каррі  з ягням",
          description: "Тайский каррі на кокосовому молоці з екзотичними спеціями ",
          img: "Thai green lamb curry",
          price: "245"
      },
      {
          name: "Жовтий каррі з куркою",
          description: "Пікантний Тайский каррі на кокосовому молоці з традиційним вмістом рибного соусу",
          img: "Thai yellow chicken curry",
          price: "185"
      },
      {
          name: "Жовтий каррі з креветками",
          description: "М’який та ніжний Тайский каррі на кокосовому молоці з традиційним вмістом рибного соусу",
          img: "Thai yellow prown curry",
          price: "235"
      },
      {
          name: "Том Ям з куркою",
          description: "Традіційний Тайський суп. Насичений смак кокосового молока, лайма та спецій",
          img: "Thai Tom Yum soup with chicken",
          price: "195"
      },
      {
          name: "Том Ям з креветками",
          description: "Традіційний Тайський суп. Насичений смак кокосового молока, лайма та спецій",
          img: "Thai Tom Yum soup with prowns",
          price: "225"
      },
      {
          name: "Райта",
          description: "Індійський соус на основі йогурту, м’яти та огірка. Смакує з Наан",
          img: "Raita sauce",
          price: "95"
      },
      {
          name: "Наан",
          description: "Традиційний Індійський хліб. Без додавання дріжжів, з вершковим маслом та часником. Випікається в печі.",
          img: "Naan Bread ",
          price: "45"
      },
      {
          name: "Манго-Лассі ",
          description: "Традиційний індійський кисло-молочний напій з додаванням пюре манго",
          img: "Mango Lassi",
          price: "95"
      }
  ]

function addSlides () {
  dishes.forEach( el => {
    let slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    let image = document.createElement('img');
    slide.appendChild(image);
    image.src = `./images/${el.img}.jpg`;
    slide.appendChild(image)
    let title = document.createElement('h2');
    title.classList.add('slide-title');
    title.innerHTML = el.name;
    slide.appendChild(title);
    let desc = document.createElement('p');
    desc.classList.add('slide-desc');
    desc.innerHTML = el.description;
    slide.appendChild(desc);
    let price = document.createElement('p');
    price.classList.add('price');
    let count = document.createElement('span');
    count.classList.add('count');
    count.innerHTML = el.price;
    price.appendChild(count);
    price.innerHTML += ' грн'
    slide.appendChild(price);
    swiperWrapper.appendChild(slide);
  })
}

addSlides();
var swiper = new Swiper('.swiper-container', {loop: true});