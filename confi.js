function slider() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            620: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
        }
      });
}

function searchColor() {
    if(document.getElementsByTagName('link')[0].getAttribute('href') == 'style.css'){
        document.getElementById('searchButton').style.backgroundColor = '#f5f5f5'
        document.getElementById('search').style.backgroundColor = '#f5f5f5'
    } else{
        document.getElementById('searchButton').style.backgroundColor = '#535353'
        document.getElementById('search').style.backgroundColor = '#535353'
    }
}
function searchColorNorm() {
    if(document.getElementsByTagName('link')[0].getAttribute('href') == 'style.css'){
        document.getElementById('searchButton').style.backgroundColor = 'white'
        document.getElementById('search').style.backgroundColor = 'white'
    } else{
        document.getElementById('searchButton').style.backgroundColor = '#373737'
        document.getElementById('search').style.backgroundColor = '#373737'
    }
    
}
function year() {
    const dataAtual = new Date();
    let anoAtual = dataAtual. getFullYear();
    document.getElementById('dateCopy').innerHTML = anoAtual
}
function dark() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'style.css') {
        theme.setAttribute('href', 'dark.css')
        document.getElementById('light').id = 'dark'
        document.getElementById('imgD').setAttribute('src', 'sun.svg')
        document.getElementById('img').setAttribute('src', 'searchlight.svg')
        document.getElementById('searchButton').style.backgroundColor = '#373737'
        document.getElementById('search').style.backgroundColor = '#373737'
    } else {
        theme.setAttribute('href', 'style.css')
        document.getElementById('dark').id = 'light'
        document.getElementById('imgD').setAttribute('src', 'moon.svg')
        document.getElementById('img').setAttribute('src', 'search.svg')
        document.getElementById('searchButton').style.backgroundColor = 'white'
        document.getElementById('search').style.backgroundColor = 'white'
    }
}