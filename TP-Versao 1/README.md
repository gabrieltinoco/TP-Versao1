# AI Quality: O Desafio Gilded Rose 

## **1. Contextualização e Motivação** 

A indústria de desenvolvimento de software vive uma mudança de paradigma. Com a popularização das IAs Generativas (LLMs), a barreira para _escrever_ código diminuiu drasticamente. No entanto, a facilidade de geração trouxe um novo risco: a inserção massiva de códigos plausíveis, mas sutilmente incorretos, frágeis ou com débitos técnicos ocultos. 

Neste cenário, o papel do profissional de Teste e Qualidade evolui. Vocês deixam de ser apenas "escritores de scripts de teste" para se tornarem **Auditores de Qualidade e Engenheiros de Prompt** . O mercado atual não premia quem sabe copiar código do ChatGPT, mas sim quem sabe **guiar a IA** para produzir resultados robustos e, crucialmente, quem possui o conhecimento técnico para validar se a máquina está "alucinando" ou entregando qualidade real. 

## **2. Objetivos de Aprendizagem** 

Esta atividade foi desenhada para consolidar as competências críticas do semestre em um cenário realista: 

1. **Engenharia de Prompt para Testes:** Aprender a formular pedidos técnicos precisos para extrair o melhor das LLMs. 

2. **Auditoria de Código (Code Review):** Desenvolver o olhar crítico para identificar falsas sensações de segurança em códigos gerados automaticamente. 

3. **Capacidade de Síntese:** Comunicar achados técnicos complexos de forma visual e direta (soft skill essencial). 

## **3. Descrição da Missão: "O Auditor vs. A Máquina"** 

O grupo assumirá a responsabilidade de testar o famoso código legado **"Gilded Rose"** , conhecido mundialmente por sua lógica de negócios complexa e estrutura condicional confusa. Porém, vocês não farão o trabalho braçal; vocês coordenarão uma IA para fazê-lo. 

O trabalho consiste em orquestrar uma IA para testar este código e, em seguida, realizar uma **autópsia técnica** do resultado. Vocês devem questionar: _“A IA cobriu todos os melhores testes?”_ . 

- **Repositório Base:** <u>https://github.com/emilybache/GildedRose-Refactoring-Kata</u> 

### **3.1. A Regra da Exclusividade (Stack Tecnológica)** 

Para enriquecer a discussão em sala, cada grupo deverá operar com uma configuração única. Vocês devem escolher uma combinação de **Linguagem de Programação + LLM** . 

- _Exemplo:_ Se o Grupo A escolheu <mark>Java + ChatGPT,</mark> o Grupo B deve buscar outra combinação, como <mark>Java + DeepSeek</mark> ou <mark>Python + ChatGPT.</mark> 

- **Ação:** Registrem sua escolha imediatamente no Fórum do Canvas. A alocação segue a ordem de chegada ( _First-come, first-served_ ). 

### **Sugestões de LLMs Gratuitas (Para inspiração):** 

- **ChatGPT (OpenAI):** Versão 3.5 ou 4o-mini (Gratuitas). 

- **Gemini (Google):** Excelente integração e contexto. 

- **DeepSeek (DeepSeek-V3/R1):** Modelo _open-weight_ muito forte em código. 

- **Claude 3.5 Sonnet (Anthropic):** Via interface web (limite diário gratuito), conhecido por gerar código muito limpo. 

- **Microsoft Copilot:** Usa GPT-4 no backend gratuitamente. 

- **HuggingChat / Llama 3:** Alternativas Open Source. 

## **4. Roteiro de Execução** 

### **Fase 1: Engenharia de Prompt e Geração** 

Utilizando o repositório do _Gilded Rose Refactoring Kata_ (Emily Bache) como base, vocês deverão iterar com a IA escolhida. O objetivo aqui é explorar diferentes formas de pedir (prompts): 

- Solicitem a criação de uma suíte de testes unitários para o sistema. 

- _Ponto de Atenção:_ Salvem os prompts utilizados. Vocês precisarão demonstrar no vídeo se usaram técnicas como "Chain-of-Thought", "Persona Pattern" ou se apenas colaram o código. 

### **Fase 2: A Auditoria de Qualidade (O Coração do Trabalho)** 

É aqui que a nota é definida. Com o código gerado pela IA em mãos, vocês devem agir como "Advogados do Diabo", verificando se os testes gerados foram adequados. 

## **5. O Entregável: Vídeo-Demonstração** 

A entrega será os slides e um **vídeo técnico** demonstrando a execução dos testes, hospedado no YouTube, Drive ou .mp4. 

O que é obrigatório conter na apresentação que será realizada em sala de aula **:** 

1. **Setup:** Apresentação rápida do grupo e da combinação (Linguagem + LLM). 

2. **Revelação dos Prompts:** Mostrem _como_ vocês pediram. O prompt fez diferença no resultado? 

3. **Evidências Visuais:** Não apenas falem; deem zoom nos números vermelhos e verdes. 

4. **O Veredito (Análise Crítica):** Concluam com uma análise honesta. A IA passou na auditoria? Onde vocês tiveram que intervir manualmente? 

## **6. Dinâmica da Aula: Avaliação de Pares** 

A apresentação é apenas a primeira parte. A aula funcionará como um painel técnico de revisão. 

- **Sorteio:** As apresentações serão sorteadas em sala de aula. 

- **Log de Crítica (Atividade em Sala):** Todos os alunos deverão preencher um **Log de Avaliação** individual durante as apresentações. Vocês deverão sintetizar os pontos fortes e fracos das abordagens dos colegas (ex: "O Grupo X usou um prompt muito criativo, mas não exploraram além do que foi gerado pela LLM"). 

- **Nota:** A entrega deste Log será ao final da aula. A presença e a atenção ativa são obrigatórias. 

## **7. Critérios de Avaliação (Total: 3 Pontos)** 

|**Critério**|**Peso**|**Descrição do Esperado**|
|---|---|---|
|Evidência<br>Técnica<br>e Prompts|0,5|O vídeo demonstra visualmente a execução dos<br>testes.|
|Profundidade<br>da<br>Análise (Audit)|1,0|Capacidade do grupo de criticar a IA. O grupo<br>identificou algum ponto em que a IA não performou<br>bem? A IA gerou adequadamente os testes para o<br>sistema?|
|Apresentação|0,5|Ficou claro o processo realizado? Conseguiram<br>explorar as etapas solicitadas?|
|Log<br>de<br>Crítica<br>(Individual)|1,0|Qualidade do resumo e das observações feitas<br>sobre os trabalhos dos colegas no Log entregue em<br>sala de aula.|



