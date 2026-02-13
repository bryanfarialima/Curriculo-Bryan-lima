let idiomaAtual = 'en'; // O currículo começa em português

function alternarIdioma() {
    // Seleciona todos os textos em português e inglês
    const elementosPT = document.querySelectorAll('.pt');
    const elementosEN = document.querySelectorAll('.en');
    const botao = document.getElementById('btn-idioma');

    if (idiomaAtual === 'pt') {
        // Se está em PT, esconde o PT e mostra o EN
        elementosPT.forEach(el => el.classList.add('hidden'));
        elementosEN.forEach(el => el.classList.remove('hidden'));
        botao.innerHTML = '🇧🇷 Português'; // Muda o texto do botão
        idiomaAtual = 'en';
    } else {
        // Se está em EN, esconde o EN e mostra o PT
        elementosPT.forEach(el => el.classList.remove('hidden'));
        elementosEN.forEach(el => el.classList.add('hidden'));
        botao.innerHTML = '🇬🇧 English'; // Muda o texto do botão
        idiomaAtual = 'en';
    }
}
