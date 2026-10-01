## AI Quality: O Desafio Gilded Rose – Iteração 2

## 1. O Novo Cenário: O Auditor Especialista

Na Iteração 1, vocês exploraram o "que" a IA consegue gerar. Na Iteração 2, vocês atuarão como Engenheiros de QA seniores. Vocês possuem agora o conhecimento suficiente para explorar uma melhor abordagem quando tem acesso a Estrutura Interna (Caixa Branca). A missão é confrontar a suíte gerada pela IA com uma análise matemática e estrutural do código legado.

**Combinação utilizada pelo grupo:** JavaScript + Gemini

## 2. Descrição da Missão: Iteração 2

Vocês devem realizar uma "necropsia" lógica do código Gilded Rose para verificar se a IA foi capaz de percorrer todos os caminhos possíveis ou se ela apenas "arranhou a superfície".

## 2.1. Análise de Fluxo de Controle (Obrigatório)

O grupo deve selecionar o método principal de atualização de inventário do Gilded Rose e:

- 1. Gerar o Grafo de Fluxo de Controle (CFG).

- 2. Definir Critérios de Cobertura e Derivar os Casos de Teste: Escolham pelo menos um critério (Ex: Cobertura de Comandos, Cobertura de Decisões ou Cobertura de Caminhos).

- 3. Calcular a Complexidade Ciclomática e Derivar os Casos de Teste.

## 2.2. A Nova Proposição (Manual vs. IA)

- Proposição Manual: Com base no Grafo, listem quais seriam os casos de teste ideais para atingir 100% do critério escolhido. Nota: Você não precisa codificar todos, apenas mapear os inputs necessários.

- O Segundo Prompt: Crie um novo prompt para sua LLM e compare se a IA melhora com orientações estruturais.

## 3. O Entregável Final (Slides)

Os slides deve ser atualizado para incluir a análise da Iteração 2. O quadro comparativo final é o coração da entrega:

| Critério | Iteração 1 (Prompt ingênuo) | Abordagem manual (teórica) | Iteração 2 (Prompt estruturado) |
| --- | --- | --- | --- |
| Cobertura de decisão | 97,14% de branches na execução registrada antes do caso de inventário vazio | 100% mapeada nos 14 cenários independentes | 100% de branches na execução registrada após incluir inventário vazio; resposta da LLM ainda não registrada |
| Casos de teste | 20 no total: 18 passam e 2 testes de Conjured falham | 14 cenários mapeados (13 itens e inventário vazio) | Quantidade gerada pela LLM não comprovada; o mapeamento documentado contém 14 cenários |
| Alucinações | Sim: a resposta afirma 100% de branches, mas a execução registrada antes do caso vazio mostra 97,14% | N/A | Não avaliável sem a resposta real da LLM |

## 4. Entrega e Apresentação (Sorteio)

Atenção ao cronograma e formato de encerramento:

- Apresentação: Na aula do dia 06/04 será realizado sorteio para apresentação do trabalho. O qual deverá ser apresentado seu processo, mostrar a execução e defender sua análise técnica perante a turma.

- Participação Geral: Os demais alunos atuarão como conselho auditor, auxiliando a analisar a apresentação realizada.

## 5. Critérios de Avaliação Atualizados (Total: 1,0 Pontos)

| Critério | Peso Descrição do Esperado |
| --- | --- |
| Análise de Fluxo (CFG) | 0,5 Correção do Grafo de Fluxo e cálculo da |
|   | Complexidade Ciclomática. |
| Profundidade da Auditoria | 0,3 Capacidade de comparar o que a IA gerou vs. o que |
|   | o Grafo exigia. |


| Evolução de Prompt | 0,2 Demonstração de que o novo prompt foi mais técnico |
| --- | --- |
|   | e preciso. |

Dica: Não tentem "ajustar" o Grafo para bater com o que a IA fez. Se a IA falhou em cobrir um caminho complexo, esse é o seu melhor resultado! O mercado busca profissionais que apontem falhas, não que as escondam.
