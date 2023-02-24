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
   function createForm() {
    
    // CRIANDO UM FORMULÁRIO
    var form = document.createElement('FORM')
    form.setAttribute('id', 'signUpForm');

    // QUANDO O FORMULÁRIO FOR CRIADO, O BOTÃO PERDE O ONCLICK: NÃO PODERÁ CRIAR OUTRO FORMULÁRIO ENQUANTO HOUVER UM ATIVO
    document.getElementById('anuncioButton').removeAttribute('onclick')


// APPENDCHILD ADICIONA OS INPUTS AO FORMULÁRIO
document.getElementById('anuncioCad').appendChild(form).innerHTML = 
`
<h1 id="h1" onclick="removeForm()" style="font-size: 20px; position: relative; left: 120px;"> X </h1>
<input class="signUpInput" type="text" placeholder="Nome ">
<input class="signUpInput" type="text" placeholder="Sobrenome ">
<input class="signUpInput" type="text" placeholder="CPF ">
<input class="signUpInput" type="text" placeholder="CNPJ ">
<input class="signUpInput" type="text" placeholder="Email ">
<input class="signUpInput" type="text" placeholder="Data de Nascimento ">
<input class="signUpInput" type="text" placeholder="Senha ">
<input class="signUpInput" id="signUpButton" type="button" value="Cadastrar ">
`
//  FIM DA CRIAÇÃO
  }
    
        function removeForm() {
        // DIMINUI A OPACIDADE DO FORMULÁRIO UTILIZANDO O SETINTERVAL
        
        var opacidade = 1
        var intervalo = 1500 / 10;
        var timer = setInterval(()=> {
        document.getElementById('signUpForm').style.opacity = opacidade -= 0.1;
        if(opacidade <= 0) {

            // QUANDO A OPACIDADE VIRAR 0 E O FORMULÁRIO FICAR TRANSPARENTE, O FORMULÁRIO SERÁ REMOVIDO E O INTERVALO ACABA
            document.getElementById('signUpForm').remove()
            clearInterval(timer);
    
        opacidade = 1
        }
        }, intervalo); 
        // QUANDO O FORMULÁRIO ATUAL FOR CANCELADO, O ONCLICK SERÁ RECOLOCADO NO BOTÃO PARA QUE POSSA CHAMAR OUTRO
        document.getElementById('anuncioButton').setAttribute('onclick', 'createForm()')
        }

  
    //   FIM DA FUNÇÃO LOGIN
