const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth > 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        selecaoPersonagem(personagem);

        alterarImagemGrande(personagem);

        alterarNomeDescricao(personagem);


    });
});

function alterarNomeDescricao(personagem) {
    const nomePersonagem = document.querySelector('.nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
    const descricaoPersonagem = document.querySelector('.descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarImagemGrande(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-selecionado img');
    const idpersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/images/card-${idpersonagem}.png`;
}

function selecaoPersonagem(personagem) {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    personagem.classList.add('selecionado');
}

