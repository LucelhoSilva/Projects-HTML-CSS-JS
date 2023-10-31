document.addEventListener('DOMContentLoaded', function() {
  const dogsSection = document.createElement('section');
  dogsSection.id = 'cachorros';
  dogsSection.innerHTML = `
    <h1>Cachorros são considerados os melhores amigos do homem ?</h1>
      <p class="author">Escrito por Lucelho Silva</p>
      <section id="inicio">
        <h2>Início</h2>
        <p>Os cachorros são mais do que animais de estimação, são companheiros leais que trazem alegria e amor às nossas vidas. Sua presença é uma fonte constante de felicidade, enchendo nossos dias com momentos especiais. Com sua lealdade inabalável, eles se tornam verdadeiros amigos e membros queridos da família, proporcionando-nos conforto e apoio em todos os momentos.</p>
      </section>
      <section id="sobre">
        <div class="img">
          <img src="https://source.unsplash.com/random/900x900/?dog" alt="Imagem de cachorros" />
        </div>
        <h2>Sobre</h2>
        <p>Os cachorros, assim como o design, são uma maravilha de harmonia e funcionalidade na natureza. Cada raça, cor de pelagem e tamanho traz consigo um propósito e uma beleza única. Sua presença em nossas vidas é uma fonte inestimável de alegria e amor, enchendo nossos dias com momentos de pura felicidade.</p>
        <p>Além de serem nossos leais companheiros, os cachorros são incríveis solucionadores de problemas. Desde pastorear rebanhos até servir como cães de resgate, eles demonstram uma inteligência e habilidade surpreendentes. A capacidade de se adaptar e aprender é verdadeiramente notável, tornando-os uma espécie de animal de estimação incomparável.</p>
        <p>Eles também têm uma forma única de nos comunicar suas necessidades e emoções. Seus latidos, abanar de rabos e expressões faciais são uma linguagem silenciosa que aprendemos a decifrar. Essa conexão especial entre humanos e cachorros é uma demonstração da incrível capacidade de compreensão e empatia que esses animais têm.</p>
        <p>Em última análise, os cachorros são mais do que animais de estimação, são membros valiosos de nossas famílias. Sua presença nos ensina sobre lealdade, compaixão e a verdadeira essência do amor incondicional. Eles são verdadeiramente tesouros da natureza, moldando nossas vidas de maneiras profundas e duradouras.</p>
      </section>
      <section id="curiosidades">
        <h2>Curiosidades sobre Cachorros</h2>
        <p>&bull; Você sabia que os cachorros têm um olfato incrivelmente aguçado, sendo capazes de detectar certos odores a quilômetros de distância?</p>
        <p>&bull; Os cães vêm em uma grande variedade de raças, desde os pequenos Chihuahuas até os imponentes São Bernardos, cada um com suas próprias características únicas.</p>
        <p>&bull; Os cachorros são conhecidos por sua incrível capacidade de aprender comandos e truques, demonstrando uma inteligência surpreendente.</p>
        <p>&bull; Algumas raças de cachorro, como o Border Collie, são excepcionalmente atléticas e adoram participar de esportes e atividades físicas.</p>
        <p>&bull; Os cachorros são animais sociais por natureza e muitas vezes formam laços fortes com seus donos e outros membros da família.</p>
      </section>
  `;

  const conteudoPrincipal = document.querySelector('.content');
  conteudoPrincipal.appendChild(dogsSection);
});
