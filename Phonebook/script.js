// Captura elementos do DOM
const form = document.getElementById('Form'); // Captura o formulário
const table = document.getElementById('table'); // Captura a tabela
const tbody = table.querySelector('tbody'); // Captura o corpo da tabela (tbody)

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Verifica se os campos são válidos antes de adicionar o contato
  if (validaCampos()) {
    adicionarContato();
  }
});

// Função para adicionar um novo contato à tabela
function adicionarContato() {
  // Captura os inputs de nome e telefone
  const nameInput = document.getElementById("name");
  const telefoneInput = document.getElementById("telephone");

  // Obtém os valores inseridos nos inputs
  const name = nameInput.value;
  const telefone = telefoneInput.value;

  // Verifica se o formato do telefone é válido
  if (!/^(\(\d{2}\) ?\d{5}-\d{4})$/.test(telefone)) {               
    alert('Insira o telefone no formato (##) #####-####');          
  // usando uma expressão regular e a função test para verificar se um número de telefone está no formato esperado
  //^: marca o início da string.
  //(\(\d{2}\) ?\d{5}-\d{4}): Isso corresponde ao padrão completo de um número de telefone no formato "(##) #####-####", onde:
  //?: permite que haja um espaço opcional após os parênteses do código de área.
  //$: marca o final da string.                                                                   
  //O operador '!' antes da função test inverte o resultado. Se a expressão regular NÃO coincidir com o número de telefone fornecido,a condição será verdadeira.
  //Portanto, o bloco dentro do if será executado,mostrando uma mensagem de alerta pedindo ao usuário para inserir o telefone no formato desejado.
    return;
  }

  
  // Formata o telefone corretamente
  const formattedTelefone = formatarTelefone(telefone);

  // Se o telefone estiver formatado corretamente, cria uma nova linha na tabela
  if (formattedTelefone) {
    criarLinhaTabela(name, formattedTelefone);
    nameInput.value = '';
    telefoneInput.value = '';
  }
}

// Função para criar uma nova linha na tabela
function criarLinhaTabela(name, telefone) {
  const newRow = document.createElement('tr'); // Cria uma nova linha (tr)
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${telefone}</td>
    <td><button class="delete-button">X</button></td>
  `;

  tbody.appendChild(newRow); // Adiciona a nova linha ao corpo da tabela (tbody)

  const deleteButton = newRow.querySelector('.delete-button');
  // Adiciona um ouvinte de evento para o botão de exclusão
  deleteButton.addEventListener('click', function() {
    tbody.removeChild(newRow); // Remove a linha da tabela ao clicar no botão
  });
}

// Função para validar os campos do formulário
function validaCampos() {
  const nameInput = document.getElementById("name");
  const telefoneInput = document.getElementById("telephone");

  const name = nameInput.value;
  const telefone = telefoneInput.value;

  // Verifica se o nome e o telefone foram preenchidos
  if (name === '') {
    alert('Falta preencher o campo nome');
    return false;
  } else if (telefone === '') {
    alert('Falta preencher o campo telefone');
    return false;
  }
  return true; // Retorna verdadeiro se ambos os campos estiverem preenchidos
}

// Função para formatar o número de telefone no formato desejado
function formatarTelefone(numero) {
  const value = numero.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Verifica se o número tem o tamanho esperado
  if (value.length !== 11) {
    alert('Insira o DDD e os 9 dígitos do número seguindo o exemplo (##) #####-####');
    return null;
  }

  // Formata o número no formato desejado (##) #####-####                                                                                            
  return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  // Usando a função replace de JavaScript para formatar um número de telefone
  //(\d{2}): corresponde aos primeiros dois dígitos do número, que é o código de área (DDD) do telefone. Os parênteses () são usados para criar um grupo de captura.
  //(\d{5}): corresponde aos próximos cinco dígitos do número, que são o número principal do telefone.
  //(\d{4}): corresponde aos últimos quatro dígitos do número, que geralmente representam uma parte do número de série.
  //($1) $2-$3 formata o número de telefone no formato "(##) #####-####", onde ## é o código de área, ##### é o número principal e #### é a parte do número de série.
}


