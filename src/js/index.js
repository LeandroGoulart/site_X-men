const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-selecionado img');
        const idpersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/images/card-${idpersonagem}.png`;

        const nomePersonagem = document.querySelector('.nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.querySelector('.descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');


    });
});
