// DECLARAÇÃO DE VARIÁVEIS - CHAMANDO TAGS DO SITE;

// <link rel="stylesheet" id="styleSite"> (linha 8) 
const theme = document.getElementById('styleSite');


// 


///// DARKMODE E LIGHTMODE

// SE <link rel="stylesheet" id="styleSite"> (linha 8) HREF FOR 'DARK.CSS', REMOVERÁ O MODO DARK DO ARMAZENAMENTO E FARÁ O MODO LIGHT
// SENÃO "ELSE", IRÁ INSERIR O MODO DARK NO ARMAZENAMENTO DO SITE E FARÁ O MODO DARK.
function darkModeOp() {
    if (theme.getAttribute('href') == 'dark.css') localStorage.removeItem('dark'), light();
    else localStorage.setItem('dark', 1), contrast();   
}


// VER SE O MODO DARK ESTÁ NO ARMAZENAMENTO DO SITE E (&&) INSERIR A FUNÇÃO DARK (MODO DARK) 
function contrast() {  
// Short-circuit evaluation - Método substituto para IF ELSE. Se o Modo Dark estiver no armazenamento, o operador lógico "&&" dirá que a função "dark()" também é verdadeira.
 localStorage.getItem('dark') && dark(); 
}


// FUNÇÃO MODO DARK
function dark() {

    //ADICIONA O MODO DARK AO ARMAZENAMENTO
    localStorage.setItem('dark', 1)

    // INSERE O ATRIBUTO href='dark.css' EM <link rel="stylesheet" id="styleSite" > (linha 8) 
    theme.setAttribute('href', 'dark.css')

    // TROCA O NOME ID DO ELEMENTO DE LIGHT PARA DARK
    document.getElementById('light').id = 'dark'

    // TROCANDO A LUA PELO SOL
    document.getElementById('imgD').setAttribute('src', 'sun.svg')
    document.getElementById('img').setAttribute('src', 'searchlight.svg')


}

// FUNÇÃO MODO LIGHT
function light() {
    //REMOVE MODO DARK DO ARMAZENAMENTO DO SITE    
    localStorage.removeItem('dark')

    // INSERE O ATRIBUTO href='style.css' EM <link rel="stylesheet" id="styleSite" > (linha 8)     
    theme.setAttribute('href', 'style.css')

    // TROCA O NOME ID DO ELEMENTO DE DARK PARA LIGHT
    document.getElementById('dark').id = 'light'

    // TROCANDO O SOL PELA LUA
    document.getElementById('imgD').setAttribute('src', 'moon.svg')
    document.getElementById('img').setAttribute('src', 'search.svg')
   

}

// JAVASCRIPT PARA O CSS swiper-bundle.min
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
// 

// MOSTRAR O ANO ATUAL NO FINAL DO SITE
function year() {
    const dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    document.getElementById('dateCopy').innerHTML = anoAtual
}


// LOGIN DO SITE
function loginandSignUp() {
document.body.innerHTML += `
<form id='loginandSignUpForm'>
<label for="nome">Nome</label>
<input type="text" class='inputForm' name='nome'>
<label for="email">Email</label>
<input type="email" class='inputForm' name='email'>
<label for="senha">Senha</label>
<input type="text" class='inputForm' name='senha'>
</form> 

`

}
