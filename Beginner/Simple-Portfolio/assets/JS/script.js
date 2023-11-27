const mainContentSection = document.querySelector(".main-content")
const contactSection = document.querySelector("#contact")

const mainContentHTML = `
        <article class="text">
          <h2>Sobre mim🤔</h2>
          <p>
            Olá, me chamo Lucelho Cristiano, tenho 22 anos e sou de Minas Gerais, Brasil. Atualmente estou fazendo faculdade na universidade UNA, cursando ciencias da computação e
            fazendo um curso paralelo de fullstack java pela EBAC. Participo tambem de um projeto chamado FavelaWare, que tem como objetivo ajuda adolescentes com a idade entre 15 a 18
            anos a ter um contato com as linguagens de programação e se torna programadores.
          </p>
        </article>

        <aside class="techs">
          <h2>👨‍💻 Tecnologias</h2>

          <div class="cards-container">
            <div class="card">
              <img src="./assets/IMG/techs/html logo.png" alt="Logo do HTML5" />
            </div>

            <div class="card">
              <img src="./assets/IMG/techs/css logo.png" alt="Logo do CSS3" />
            </div>

            <div class="card">
              <img src="./assets/IMG/techs/javascript logo.png" alt="Logo do JavaScript" />
            </div>

            <div class="card">
              <img src="./assets/IMG/techs/logo java.png" alt="Logo do java" />
            </div>
          </div>
        </aside>
`

const contactHTML = `
      <div class="container">
        <h2>Se tiver interessado e so entrar em contato Contato</h2>
        <div class="contact-methods">
          <div>
            <h3>So preencher os cambos a baixo</h3>
            <form>
              <input type="text" placeholder="Seu nome" required />
              <input type="email" placeholder="Seu e-mail" required />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
`

mainContentSection.innerHTML = mainContentHTML
contactSection.innerHTML = contactHTML
