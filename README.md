
# Quiz App

Este projeto é uma aplicação simples de quiz, onde o usuário pode responder a uma série de perguntas e ver sua pontuação final ao concluir. Ele foi construído utilizando HTML, CSS e JavaScript.

## Funcionalidades

- Exibe perguntas com múltiplas opções de resposta.
- Valida a resposta correta e exibe feedback visual.
- Mostra a pontuação final ao completar o quiz.
- Possibilidade de reiniciar o quiz após a conclusão.

## Estrutura de Arquivos

- `index.html`: Estrutura básica da página web.
- `style.css`: Estilos para a aparência do aplicativo.
- `script.js`: Lógica do quiz, incluindo manipulação de perguntas, respostas e pontuação.

## Tecnologias Utilizadas

- **HTML**: Usado para estruturar o conteúdo do aplicativo.
- **CSS**: Usado para estilizar o aplicativo e garantir que tenha um visual atraente e responsivo.
- **JavaScript**: Usado para controlar a lógica do quiz, exibir perguntas, processar respostas e calcular a pontuação.

## Como Funciona

### Estrutura HTML

O arquivo `index.html` define a estrutura básica da aplicação com uma área para exibir as perguntas e botões de resposta:

```html
<h2 id="question">Escreva a pergunta</h2>
<div id="answer-buttons">
  <button class="btn">Answer 1</button>
  <button class="btn">Answer 2</button>
  <button class="btn">Answer 3</button>
  <button class="btn">Answer 4</button>
</div>
<button id="next-btn">Próxima</button>
```

### Estilos CSS

O arquivo `style.css` contém as regras de estilo para o layout e design visual da aplicação, como cores, tamanhos e espaçamentos. Ele também define os estilos para quando uma resposta correta ou incorreta for selecionada:

```css
.correct {
  background: #9aeabc;
}

.incorrect {
  background: tomato;
}
```

### Lógica JavaScript

O arquivo `script.js` contém a lógica do quiz, incluindo o controle do fluxo de perguntas, a verificação de respostas e o cálculo da pontuação. Ele também manipula os eventos de clique nos botões de resposta e o botão "Próxima":

- **`startQuiz`**: Inicializa o quiz e define as variáveis iniciais.
- **`showQuestion`**: Exibe a pergunta atual e os botões de resposta.
- **`selectAnswer`**: Valida a resposta escolhida e atualiza a pontuação.
- **`showScore`**: Exibe a pontuação final do quiz.
- **`resetState`**: Limpa o estado anterior das perguntas e respostas.

## Como Executar

1. Faça o download ou clone o repositório.
2. Abra o arquivo `index.html` em um navegador web.
3. O quiz será carregado automaticamente.
4. Responda as perguntas clicando nos botões. O aplicativo vai mostrar a resposta correta ou incorreta com feedback visual.
5. Clique em "Próxima" para avançar para a próxima pergunta.
6. Após responder todas as perguntas, a pontuação final será exibida.

## Estrutura do Código JavaScript

### Array de Perguntas

As perguntas e respostas estão definidas em um array de objetos no formato:

```javascript
const questions = [
  {
    question: "Qual é, atualmente, o maior animal da terra?",
    answers: [
      { text: "Tubarão-baleia", correct: false },
      { text: "Elefante", correct: false },
      { text: "Girafa", correct: false },
      { text: "Baleia-azul", correct: true },
    ],
  },
  // Mais perguntas...
];
```

### Funções Principais

- **`startQuiz`**: Inicia o quiz, resetando a pontuação e exibindo a primeira pergunta.
- **`showQuestion`**: Exibe a pergunta e cria os botões para as respostas.
- **`selectAnswer`**: Processa a escolha do usuário, verifica se a resposta está correta e atualiza o estado visual.
- **`handleNextButton`**: Avança para a próxima pergunta ou exibe a pontuação final.

## Contribuições

Se você quiser contribuir com melhorias para este projeto, fique à vontade para fazer um fork e enviar um pull request com suas sugestões.

## Licença

Este projeto está licenciado sob a licença MIT. Você é livre para usá-lo, modificá-lo e distribuí-lo, desde que mantenha os créditos apropriados.
