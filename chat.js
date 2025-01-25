// Função principal para enviar a mensagem
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    
    if (userInput) {
        // Exibir mensagem do usuário
        appendMessage(userInput, 'user');

        // Limpar campo de entrada
        document.getElementById('user-input').value = '';

        // Resposta do bot após 1 segundo
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            appendMessage(botResponse, 'bot');

            // Rolar a caixa de chat para a última mensagem
            scrollToBottom();
        }, 1000);
    }
}

// Função para adicionar uma mensagem na tela
function appendMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', sender);
    messageContainer.innerHTML = `<div class="text">${message}</div>`;
    document.querySelector('.chat-box').appendChild(messageContainer);
}

// Função para rolar a caixa de chat até a última mensagem
function scrollToBottom() {
    const chatBox = document.querySelector('.chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para gerar a resposta do bot
function getBotResponse(query) {
    query = query.toLowerCase().trim();

    // Verifica se o usuário está perguntando sobre uma categoria específica
    if (query.includes('compilador') || query.includes('compiladores')) {
        return "Você está perguntando sobre compiladores! Exemplos incluem GCC, javac, MinGW, Node.js. Diga o nome do compilador para saber mais.";
    }
    if (query.includes('framework') || query.includes('frameworks')) {
        return "Você está perguntando sobre frameworks! Exemplos incluem React, Angular, Django, Flask, Vue, Laravel, Ruby on Rails, Express, Spring, Flutter. Diga o nome do framework para saber mais.";
    }
    if (query.includes('linguagem') || query.includes('linguagens')) {
        return "Você está perguntando sobre linguagens de programação! Exemplos incluem C++, Python, Java, Ruby, Go, Rust, JavaScript, Swift, TypeScript, Kotlin, Elixir, Lua, Haskell, Perl, Scala, OCaml. Diga o nome da linguagem para saber mais.";
    }

    // Detalhes sobre compiladores
    const compilers = {
        'gcc': "GCC (GNU Compiler Collection) é um compilador de código aberto para várias linguagens como C, C++, e Fortran.",
        'javac': "javac é o compilador de código fonte para Java, convertendo o código em bytecode para a Java Virtual Machine (JVM).",
        'node.js': "Node.js é um ambiente de execução para JavaScript no servidor. Ele usa o motor V8 do Google Chrome.",
        'mingw': "MinGW é uma versão do GCC voltada para o ambiente Windows, que permite compilar código C, C++ e Fortran em plataformas Windows."
    };

    // Detalhes sobre frameworks
    const frameworks = {
        'react': "React é uma biblioteca JavaScript para construir interfaces de usuário dinâmicas.",
        'angular': "Angular é um framework JavaScript para construir aplicações web robustas, usando TypeScript.",
        'django': "Django é um framework Python para criar aplicativos web rápidos e seguros.",
        'flask': "Flask é um framework minimalista em Python para construir aplicações web leves e eficientes.",
        'vue': "Vue.js é um framework progressivo para construir interfaces de usuário, conhecido pela sua simplicidade e flexibilidade.",
        'laravel': "Laravel é um framework PHP para desenvolvimento de aplicações web, focado na elegância e sintaxe expressiva.",
        'ruby on rails': "Ruby on Rails é um framework web para Ruby, facilitando a construção de aplicações web de maneira rápida e com pouco código.",
        'express': "Express é um framework web para Node.js, conhecido por sua simplicidade e flexibilidade para construir aplicações web e APIs.",
        'spring': "Spring é um framework para Java, que facilita o desenvolvimento de aplicações empresariais e web de forma modular e escalável.",
        'flutter': "Flutter é um framework UI de código aberto criado pela Google para criar aplicações nativas para Android e iOS com uma única base de código."
    };

    // Detalhes sobre linguagens
    const languages = {
        'c++': "C++ é uma linguagem de programação poderosa e eficiente, usada em sistemas de alto desempenho e jogos.",
        'python': "Python é uma linguagem interpretada e popular, conhecida por sua simplicidade e versatilidade.",
        'java': "Java é uma linguagem de programação amplamente usada em sistemas corporativos e aplicativos móveis.",
        'ruby': "Ruby é uma linguagem dinâmica e flexível, famosa pela simplicidade e produtividade.",
        'go': "Go é uma linguagem de programação desenvolvida pela Google, conhecida por sua eficiência e simplicidade em sistemas de alto desempenho.",
        'rust': "Rust é uma linguagem de programação focada em segurança e performance, especialmente em sistemas críticos e concorrentes.",
        'javascript': "JavaScript é a linguagem essencial para o desenvolvimento web, usada no front-end e no back-end com Node.js.",
        'swift': "Swift é uma linguagem de programação desenvolvida pela Apple para criar aplicativos para iOS e macOS.",
        'typescript': "TypeScript é uma linguagem de programação desenvolvida pela Microsoft, que é um superconjunto do JavaScript com tipagem estática.",
        'kotlin': "Kotlin é uma linguagem moderna que roda na Java Virtual Machine (JVM) e é usada principalmente para o desenvolvimento Android.",
        'elixir': "Elixir é uma linguagem funcional, concorrente e de código aberto, construída para criar aplicações escaláveis e de alta disponibilidade.",
        'lua': "Lua é uma linguagem de programação leve, projetada para ser embutida em aplicações e usada principalmente para scripts de jogos.",
        'haskell': "Haskell é uma linguagem funcional pura, conhecida por sua forte tipagem e imutabilidade, usada principalmente em pesquisas acadêmicas e programação funcional.",
        'perl': "Perl é uma linguagem de programação dinâmica, usada principalmente em scripts de automação e manipulação de texto.",
        'scala': "Scala é uma linguagem que combina paradigmas de programação funcional e orientada a objetos, executada na JVM e popular no ecossistema do Apache Spark.",
        'ocaml': "OCaml é uma linguagem funcional com suporte a programação orientada a objetos e imperativa, conhecida por seu uso em compiladores e ferramentas de análise de código."
    };

    // Caso o usuário digite "chat", iniciar a conversa
    if (query === 'chat') {
        return "Bem-vindo! Pergunte sobre compiladores, frameworks ou linguagens. Eu posso te ajudar com isso!";
    }

    // Checar a correspondência e retornar a resposta detalhada
    if (compilers[query]) {
        return compilers[query];
    }
    if (frameworks[query]) {
        return frameworks[query];
    }
    if (languages[query]) {
        return languages[query];
    }

    // Caso o bot não entenda a consulta, retorna resposta padrão
    return "Desculpe, não entendi sua solicitação. Tente perguntar sobre compiladores, frameworks ou linguagens.";
}

// Função para mudar o fundo do chat de forma dinâmica
function changeBackground() {
    const chatContainer = document.querySelector('.chat-container');
    const backgrounds = [
        'lightblue', 'lightpink', 'lavender', 'peachpuff', 'lightseagreen', 'lightyellow', 'lightcoral'
    ];

    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    chatContainer.style.backgroundColor = randomBackground;
}

// Chama a função para alterar o fundo na carga
window.onload = changeBackground;
