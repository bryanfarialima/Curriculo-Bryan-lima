let idiomaAtual = 'pt'; // O HTML começa em PT, então dizemos isso para o JS

function alternarIdioma() {
    const elementosPT = document.querySelectorAll('.pt');
    const elementosEN = document.querySelectorAll('.en');
    const botao = document.getElementById('btn-idioma');

    if (idiomaAtual === 'pt') {
        // Se está em PT, esconde o PT e mostra o EN
        elementosPT.forEach(el => el.classList.add('hidden'));
        elementosEN.forEach(el => el.classList.remove('hidden'));
        botao.innerHTML = '🇧🇷 Português'; // Muda o botão para oferecer a volta ao PT
        idiomaAtual = 'en';
    } else {
        // Se está em EN, esconde o EN e mostra o PT
        elementosPT.forEach(el => el.classList.remove('hidden'));
        elementosEN.forEach(el => el.classList.add('hidden'));
        botao.innerHTML = '🇬🇧 English'; // Muda o botão para oferecer a volta ao EN
        idiomaAtual = 'pt';
    }
}
alternarIdioma();
