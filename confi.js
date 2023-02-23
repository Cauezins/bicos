function darkModeOp() {
    let theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'dark.css') {
        localStorage.removeItem('dark')
        light()
    } else{
        localStorage.setItem('dark', 1)
        contrast()
    }
    
}


function contrast() {
    const darkMode = localStorage.getItem('dark')
    
    if(darkMode){
        dark()
    } 
}

function dark() {
    let theme = document.getElementsByTagName('link')[0];
    localStorage.setItem('dark', 1)
    theme.setAttribute('href', 'dark.css')
    document.getElementById('light').id = 'dark'
    document.getElementById('imgD').setAttribute('src', 'sun.svg')
    document.getElementById('img').setAttribute('src', 'searchlight.svg')
    document.getElementById('searchButton').style.backgroundColor = '#373737'
    document.getElementById('search').style.backgroundColor = '#373737'

}

function light() {
    let theme = document.getElementsByTagName('link')[0];
    localStorage.removeItem('dark')
    theme.setAttribute('href', 'style.css')
    document.getElementById('dark').id = 'light'
    document.getElementById('imgD').setAttribute('src', 'moon.svg')
    document.getElementById('img').setAttribute('src', 'search.svg')
    document.getElementById('searchButton').style.backgroundColor = 'white'
    document.getElementById('search').style.backgroundColor = 'white'

}

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

// FUNÇÃO LOGIN
var opacidade = 1
function signUpFunction() {

   var form = document.createElement('FORM')
   form.setAttribute('id', 'signUpForm');
    var name = document.createElement('INPUT')
    name.setAttribute('class', 'signUpInput')
    name.setAttribute('type', 'text')
    name.setAttribute('placeholder', 'Nome ');

    var lastName = document.createElement('INPUT')
    lastName.setAttribute('class', 'signUpInput')
    lastName.setAttribute('type', 'text')
    lastName.setAttribute('placeholder', 'Sobrenome ');

    var cpf = document.createElement('INPUT')
    cpf.setAttribute('class', 'signUpInput')
    cpf.setAttribute('type', 'text')
    cpf.setAttribute('placeholder', 'CPF ');

    var cnpj = document.createElement('INPUT')
    cnpj.setAttribute('class', 'signUpInput')
    cnpj.setAttribute('type', 'text')
    cnpj.setAttribute('placeholder', 'CNPJ ');

    var email = document.createElement('INPUT')
    email.setAttribute('class', 'signUpInput')
    email.setAttribute('type', 'text')
    email.setAttribute('placeholder', 'Email ');

    var birthday = document.createElement('INPUT')
    birthday.setAttribute('class', 'signUpInput')
    birthday.setAttribute('type', 'text')
    birthday.setAttribute('placeholder', 'Data de Nascimento ');

    var password = document.createElement('INPUT')
    password.setAttribute('class', 'signUpInput')
    password.setAttribute('type', 'text')
    password.setAttribute('placeholder', 'Senha ');
    
    var button = document.createElement('INPUT')
    button.setAttribute('class', 'signUpInput')
    button.setAttribute('id', 'signUpButton')
    button.setAttribute('type', 'button')
    button.setAttribute('value', 'Cadastrar ');
    
    var h1 = document.createElement('H1')
    h1.setAttribute('id', 'h1')
    h1.setAttribute("onclick","eraseForm()");
    h1.innerHTML = 'X'; h1.style.fontSize = '20px'; 
    h1.style.position = 'relative';
    h1.style.left = '120px';



    document.getElementById('anuncioCad').appendChild(form).appendChild(h1)
    document.getElementById('signUpForm').appendChild(name)
    document.getElementById('signUpForm').appendChild(lastName)
    document.getElementById('signUpForm').appendChild(cpf)
    document.getElementById('signUpForm').appendChild(cnpj)
    document.getElementById('signUpForm').appendChild(email)
    document.getElementById('signUpForm').appendChild(birthday)
    document.getElementById('signUpForm').appendChild(password)
    document.getElementById('signUpForm').appendChild(button)
    
   
    if(opacidade == 1)     document.getElementById('anuncioButton').onclick = null;
       
  

      }
    //   FIM DA FUNÇÃO LOGIN
    
   
        function eraseForm () {
        var intervalo = 1500 / 10;
        var timer = setInterval(function() {
        document.getElementById('signUpForm').style.opacity = opacidade -= 0.1;
        if(opacidade <= 0) {
        clearInterval(timer);
        document.getElementById('signUpForm').style.display = 'none';
        document.getElementById('signUpForm').remove()
        document.getElementById('anuncioButton').onclick = signUpFunction
        opacidade = 1
        }
        }, intervalo); 
      
       
        
       }
        
