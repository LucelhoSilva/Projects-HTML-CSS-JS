document.addEventListener('DOMContentLoaded', function() {
  const catsSection = document.createElement('section');
  catsSection.id = 'gatos';
  catsSection.innerHTML = `
    <h1>Gatos são considerados os melhores amigos do homem ?</h1>
    <p class="author">Escrito por Lucelho Silva</p>
    <section id="inicio">
      <h2>Início</h2>
      <p>
        O design é a alma invisível por trás de tudo o que nos cerca. É a fusão de estética e funcionalidade, um processo meticuloso de dar forma e propósito às coisas. Desde a arquitetura imponente até o layout de um site, o design permeia todos os aspectos da vida moderna, moldando a maneira como interagimos com o mundo.
      </p>
    </section>
    <section id="sobre">
      <div class="img">
        <img src="https://source.unsplash.com/random/900x900/?cat" alt="Imagem de gatos" />
      </div>
      <h2>Sobre</h2>
      <p>
        Os gatos são criaturas fascinantes, conhecidas por sua elegância e independência. Cada raça, com sua pelagem única e olhos expressivos, traz consigo um charme inconfundível. Ter um gato como companheiro é uma experiência enriquecedora, proporcionando-nos momentos de ternura e tranquilidade.
      </p>
      <p>
        Além de sua beleza, os gatos são notáveis caçadores e caçadoras, demonstrando agilidade e inteligência na busca por presas. Sua habilidade de escalar e explorar lugares elevados os torna exploradores naturais e curiosos.
      </p>
      <p>
        Assim como os cachorros, os gatos também têm uma forma especial de se comunicar conosco. Seus miados, ronronar e expressões faciais são uma linguagem sutil que aprendemos a compreender. Essa conexão única entre humanos e gatos é uma prova da incrível capacidade de compreensão e afeto desses animais.
      </p>
      <p>
        Em última análise, os gatos são mais do que animais de estimação, são membros queridos de nossas famílias. Sua presença nos ensina sobre independência, carinho e a beleza da convivência harmoniosa com a natureza. Eles são verdadeiros presentes que enriquecem nossas vidas de maneiras profundas e duradouras.
      </p>
    </section>
    <section id="curiosidades-gatos">
      <h2>Curiosidades sobre Gatos</h2>
      <p>&bull; Você sabia que os gatos têm a incrível capacidade de dormir até 16 horas por dia, o que contribui para sua fama de dorminhocos?</p>
      <p>&bull; Os gatos possuem um sistema de comunicação complexo, utilizando não apenas miados, mas também posturas corporais e movimentos de cauda para se expressarem.</p>
      <p>&bull; Algumas raças de gato, como os Siameses, são conhecidas por serem muito falantes e gostam de "conversar" com seus donos.</p>
      <p>&bull; Os gatos são animais extremamente limpos e passam uma grande parte do tempo se acicalando para manter sua pelagem impecável.</p>
      <p>&bull; Apesar de sua independência, os gatos também são afetuosos e muitas vezes formam laços estreitos com seus donos.</p>
    </section>
  `;

  const conteudoPrincipal = document.querySelector('.content');
  conteudoPrincipal.appendChild(catsSection);
});