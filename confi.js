function searchColor() {
    document.getElementById('searchButton').style.backgroundColor = '#f5f5f5'
    document.getElementById('search').style.backgroundColor = '#f5f5f5'
}
function searchColorNorm() {
    document.getElementById('searchButton').style.backgroundColor = 'white'
    document.getElementById('search').style.backgroundColor = 'white'
}
function year() {
    const dataAtual = new Date();
    let anoAtual = dataAtual. getFullYear();
    document.getElementById('dateCopy').innerHTML = anoAtual
}