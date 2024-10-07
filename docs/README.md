# Documentação do Projeto (TIDocs)

Esta pasta armazena a documentação do projeto para a disciplina de **Trabalho Interdisciplinar 1** dos cursos de Tecnologia da Informação da **[PUC Minas](https://pucminas.br)**. Essa documentação é estruturada na forma de um site que fica disponível por meio do GitHub Pages e pode ser incluído, também, no site da solução hospedada. Um [exemplo publicado do TIDocs](https://webtech-puc-minas.github.io/ti1-template/) está disponível por meio do repositório do **[WebTech PUC Minas](https://github.com/webtech-pucminas)**.

A documentação do projeto inclui as seguintes seções:

1. Introdução
2. Contexto
3. Concepção
4. Metodologia
5. Solução
6. FAQ (Questões frequentes)
7. Referências Bibliográficas

O template para o site é estruturado e permite que a equipe evolua a documentação do projeto à medida que avance no desenvolvimento.

# Orientações gerais

Esta seção traz explicações breves sobre o conjunto de artefatos que precisam ser incluídos na documentação do projeto com uma conjunto de links importantes para que se entenda como criar cada coisa. 

## Problema

Nesse momento você deve apresentar o problema que a sua aplicação deve resolver. No entanto, não é a hora de comentar sobre a aplicação. Descreva também o contexto em que essa aplicação será usada, se houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de fato existir, pois ainda não é a hora de apresentar requisitos detalhados ou projetos.

Nesse momento, o grupo pode optar por fazer uso de ferramentas como Design Thinking, que permite um olhar de ponta a ponta para o problema.

**Links Úteis**:

- [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
- [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
- [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

Aqui você deve descrever os objetivos do trabalho indicando que o objetivo geral é desenvolver um software para solucionar o problema apresentado acima. Apresente também alguns (pelo menos 2) objetivos específicos dependendo de onde você vai querer concentrar a sua prática investigativa, ou como você vai aprofundar no seu trabalho.

**Links Úteis**:

- [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

Descreva a importância ou a motivação para trabalhar com esta aplicação que você escolheu. Indique as razões pelas quais você escolheu seus objetivos específicos ou as razões para aprofundar em certos aspectos do software.

O grupo de trabalho pode fazer uso de questionários, entrevistas e dados estatísticos, que podem ser apresentados, com o objetivo de esclarecer detalhes do problema que será abordado pelo grupo.

**Links Úteis**:

- [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

Descreva quem serão as pessoas que usarão a sua aplicação indicando os diferentes perfis. O objetivo aqui não é definir quem serão os clientes ou quais serão os papéis dos usuários na aplicação. A ideia é, dentro do possível, conhecer um pouco mais sobre o perfil dos usuários: conhecimentos prévios, relação com a tecnologia, relações hierárquicas, etc.

Adicione informações sobre o público-alvo por meio de uma descrição textual, ou diagramas de personas, mapa de stakeholders, ou como o grupo achar mais conveniente.

**Links Úteis**:

- [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
- [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)

## Personas

Relacione as personas identificadas no seu projeto e os respectivos mapas de empatia. Lembre-se que você deve ser enumerar e descrever precisamente e de forma personalizada todos os principais envolvidos com a solução almeja.

**Links Úteis**:

- [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
- [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
- [Rock Content](https://rockcontent.com/blog/personas/)
- [Criar personas (Hotmart)](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)

## Histórias de Usuários

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

**Links Úteis**:

- [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
- [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

Lista de requisitos Funcionais e não funcionais
Funcionais:

RF-001: O sistema deve gerar gráficos baseados no consumo de água e energia do 
usuário, exibindo informações diárias, semanais e mensais. -Prioridade Alta.

RF-002: O sistema deve exibir um status de desempenho (Péssimo, Ruim, Regular, 
Bom, Ótimo) com base na avaliação do consumo de água e energia do usuário. -
Prioridade Baixa

RF-003: O sistema deve calcular e exibir a diferença entre o consumo real do 
usuário e o consumo esperado. -Prioridade Média

RF-004: O sistema deve calcular o consumo de água e energia com base no número 
de pessoas na residência e nos eletrodomésticos cadastrados. -Prioridade Média

RF-005: O sistema deve mostrar dicas de economia de água e energia. -Prioridade 
Baixa

RF-006: O sistema deve permitir a exportação dos dados de consumo. -Prioridade 
Média

RF-007: O sistema deve apresentar uma tabela com produtos e seu respectivo gasto 
de água ou energia. -Prioridade Média

RF-008: O sistema deve exibir o histórico de consumo de água e energia do usuário. 
-Prioridade Média

RF-009: O sistema deve possuir um layout que permita ao usuário escolher entre 
comparar o consumo de água ou de energia. -Prioridade Alta

RF-010: O sistema deve calcular o consumo esperado do usuário, com base em 
fatores definidos, como o número de residentes e tipo de eletrodomésticos. -
Prioridade Alta

RF-011: O sistema deve fornecer previsões de gastos futuros com base nos padrões 
de consumo anteriores. -Prioridade Média

RF-012: O sistema deve permitir a simulação da economia de energia ao utilizar 
outras fontes de energia alternativas. -Prioridade Baixa

RF-013: O sistema deve permitir ao usuário comparar o valor mensal de suas contas 
de água e energia. -Prioridade Alta

Não Funcionais:

RNF-001: O site deve ser responsivo, adaptando-se a diferentes tamanhos de tela e 
dispositivos. -Prioridade Alta

RNF-002: O sistema deve processar rapidamente as requisições do usuário, com 
tempo de resposta não superior a 5 segundos. -Prioridade Média

RNF-003: O site deve ser fácil de usar, garantindo uma experiência intuitiva e 
acessível para todos os usuários. -Prioridade Alta

RNF-004: O site deve ser seguro, implementando medidas de proteção de dados e 
privacidade dos usuários. -Prioridade Alta

RNF-005: O site deve ser compatível com os principais navegadores, incluindo 
Chrome, Firefox, Safari e Edge. -Prioridade Alta

RNF-006: O site deve operar de forma contínua, garantindo disponibilidade 24 horas 
por dia, 7 dias por semana. -Prioridade Média

## User Flow

Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

**Links Úteis**:

- [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
- [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
- [Top 25 User Flow Tools &amp; Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)

## Wireframes

Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a estrutura de um site web e seu relacionamentos entre suas páginas. Um wireframe web é uma ilustração semelhante ao layout de elementos fundamentais na interface.

**Links Úteis**:

- [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
- [Figma](https://www.figma.com/)
- [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
- [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)

## Gestão de Projetos

 Nesta parte do documento, você deve apresentar  o processo de trabalho baseado nas metodologias ágeis, a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a gestão de configuração do projeto via GitHub.

Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.

**Links Úteis**:

- [Sobre Projects - GitHub Docs](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [Gestão de projetos com GitHub | balta.io](https://balta.io/blog/gestao-de-projetos-com-github)
- [(460) GitHub Projects - YouTube](https://www.youtube.com/playlist?list=PLiO7XHcmTsldZR93nkTFmmWbCEVF_8F5H)
- [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
- [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
