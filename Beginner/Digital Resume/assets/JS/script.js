const centerContainerSection = document.querySelector(".center-container")

const centerContainerHTML = `
<div class="container">
        <header>
          <h2>Lucelho Cristiano Vireira da Silva</h2>
          <h3>Desenvolvedor</h3>
          <img src="./assets/IMG/MinhaImagem.png" alt="minhafoto" />
        </header>

        <hr class="line" />
        <section class="containerInfo">
          <div class="perfilLeft">
            <address>
              <p><b>Nome:</b> Lorem</p>
              <p><b>Idade:</b> Lorem</p>
              <p><b>Nacionalidade:</b> Lorem</p>
            </address>
          </div>
          <aside class="social_links">
            <a id="github" href="https://github.com/LucelhoCristiano" target="_blank"><i class="fab fa-github"></i></a>
            <a id="whatsapp" href="https://www.instagram.com/lucelhosilva" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a id="linkedin" href="https://www.linkedin.com/in/lucelho-cristiano-b17196239" target="_blank"><i class="fab fa-linkedin"></i></a>
          </aside>
          <div class="perfilRight">
            <address>
              <p><b>Endereço:</b> Lorem</p>
              <p><b>Telefone:</b> Lorem</p>
              <p><b>E-mail:</b> Lorem</p>
            </address>
          </div>
        </section>

        <hr class="line" />
        <section>
          <h2>Objetivo Profissional</h2>
          <p class="professionalGoal">
            &bull; Meu objetivo profissional é obter meu primeiro emprego como desenvolvedor de software, onde possa aplicar e aprimorar minhas
            habilidades em que estou adquirindo cursando Ciência da Computação. Estou empenhado em adquirir experiência prática e trabalhar em equipe
            para desenvolver soluções inovadoras e eficientes. Além disso, busco oportunidades de aprendizado contínuo e crescimento profissional
            dentro de um ambiente dinâmico e colaborativo. Estou ansioso para contribuir para o sucesso da empresa, aplicando minha paixão pela
            programação e resolvendo desafios tecnológicos;
          </p>
          <p class="professionalGoal">&bull; Aprimorar minhas noções de liderança e trabalhar em equipe, projetando uma futura posição gerencial;</p>
          <p class="professionalGoal">&bull; Desenvolver minha carreira sob a supervisão de uma empresa comprometida com a inovação;</p>
        </section>

        <hr />
        <section>
          <h2>habilidades e competências</h2>
          <ul class="softSkill">
            <li>&bull; HTML (Avançado);</li>
            <li>&bull; CSS (Intermediário);</li>
            <li>&bull; JavaScript (Intermediária);</li>
            <li>&bull; Nodejs (iniciante);</li>
            <li>&bull; Java (intermediário);</li>
            <li>&bull; trabalho em equipe;</li>
            <li>&bull; Forte comunição e habilidades interpessoais;</li>
            <li>&bull; Capacidade de aprender com feedbacks;</li>
            <li>&bull; Esforçado;</li>
            <li>&bull; Motivado e dedicado;</li>
            <li>&bull; Adoro desafios e tenho facil adaptabilidade;</li>
          </ul>
        </section>

        <hr />
        <section>
          <h1>Formação</h1>
          <div class="container_formacao">
            <b>Centro Universitário Una | Cursando</b>
            <i> - Graduação em Ciências da Computação</i>
          </div>
        </section>

        <hr />
        <section>
          <h1>Cursos Complementares</h1>
          <ul class="course">
            <li>&bull; Desenvolvedor Full Stack Java, EBAC - Escola Britânica de Artes Criativas e Tecnologia (Cursando)</li>
            <li>&bull; JavaScript Essentials, Cisco Networking Academy (Setembro de 2022 | Concluído)</li>
            <li>&bull; Liderando, Una (Julho de 2022 | Concluído)</li>
            <li>&bull; Fundamentos De Lógica De Progamação, Fundação Bradesco (Agosto de 2021 | Concluído)</li>
          </ul>
        </section>

        <hr />
        <section>
          <h1>Idiomas</h1>
          <ul class="idioma">
            <li>Português - Nativo</li>
            <li>Inglês - intermediário</li>
            <li>Espanhol - Iniciante</li>
          </ul>
        </section>

        <hr />
        <section>
          <h1>Experiência Profissional</h1>

          <article>
            <h3 class="exp_title">
              Estagiário | Ouvidoria Geral Do Estado -
              <time datetime="2023-07">Desde julho/2023</time>
            </h3>
            <ul class="exp_li">
              <li>&bull; Desenvolvimento de rotinas de automatização em linguagem Python;</li>
              <li>&bull; Desenvolvimento e manutenção de sistemas de suporte as atividades desenvolvidas na gerência;</li>
              <li>&bull; Desenvolvimento de módulos web para sistema integrado de gestão patrimonial dos prestadores regulados;</li>
              <li>&bull; Elaboração de dashboards e relatórios.</li>
            </ul>
            <div class="exp_comp"><b>Competências:</b> Desenvolvimento de front-end · Desenvolvimento de back-end</div>
          </article>

          <article>
            <h3 class="exp_title">
              Freelance | Técnico em manutenção de computadores - DPS Celulares -
              <time datetime="2023-02">Desde fevereiro/2023</time>
            </h3>
            <ul class="exp_li">
              <li>
                &bull; Presto o serviço freelancer especializado em manutenção de notebooks e desktops, reparos e montagem de computadores. Com
                habilidades em identificação de falhas, substituição de peças e otimização de desempenho. Comprometido em fornecer serviços ágeis e
                confiáveis, com foco no atendimento ao cliente. Capacidade de lidar com projetos de diferentes tamanhos e adaptar-se às necessidades
                individuais.
              </li>
            </ul>
            <div class="exp_comp">
              <b>Competências:</b> · Atendimento ao cliente · Manutenção preventiva · Instalação de software · Solução de problemas de hardware ·
              Conserto de computadores · Manutenção e reparo
            </div>
          </article>

          <article>
            <h3 class="exp_title">
              Estagiário | Suporte técnico UNA -
              <time datetime="2023-03">Março de 2023</time> a
              <time datetime="2023-07"> Julho de 2023</time>
            </h3>
            <ul class="exp_li">
              <li>
                &bull; Atendimento aos usuários em demandas relacionadas a hardwares e softwares, identificando os problemas, buscando solucioná-los
                ou repassando ao profissional competente;
              </li>
              <li>
                &bull; Atendimento aos usuários em demandas relacionadas a hardwares e softwares, identificando os problemas, buscando solucioná-los
                ou repassando ao profissional competente;
              </li>
              <li>&bull; Instalação e configuração dos softwares adquiridos pela empresa.</li>
              <li>&bull; Suporte aos professores e setores administrativo caso haja necessidade.</li>
            </ul>
            <div class="exp_comp">
              <b>Competências:</b> Suporte técnico · Redes de computadores · Manutenção e reparo · Hardware de computador · Montagem de PC
            </div>
          </article>
        </section>
      </div>
`

centerContainerSection.innerHTML = centerContainerHTML
