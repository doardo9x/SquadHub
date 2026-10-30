
# SquadHub — Instruções do projeto

## 1. Objetivo

O SquadHub é um hub para encontrar jogadores, formar grupos
e entrar em lobbies de jogos.

A interface deve ser moderna, gamer, minimalista, intuitiva
e consistente entre todas as páginas.

Não transformar o projeto em um dashboard administrativo
genérico ou em um template visual sem personalidade.

## 2. Tecnologias obrigatórias

- HTML semântico.
- CSS para personalizações específicas.
- JavaScript para interações e componentes compartilhados.
- Bootstrap 5.2.3 para grid, responsividade, espaçamento,
  alinhamento, navegação, botões e componentes disponíveis.
- Fredoka como fonte principal, respeitando os arquivos existentes.
- Reutilizar os recursos e dependências já presentes.

Não atualizar a versão do Bootstrap nem introduzir frameworks
como React, Vue ou Tailwind sem solicitação explícita.

Priorizar utilitários e componentes nativos do Bootstrap.
Não criar CSS personalizado quando uma classe Bootstrap
resolver o problema adequadamente.

CSS so deve ser usado para personalizações afim de manter uma manutenção de facil acesso e facil compreensão.

## 3. Identidade visual

- Fundo predominantemente escuro.
- Roxo de destaque: #A020F0.
- Utilizar a fonte Fredoka.
- Manter uma identidade gamer minimalista inspirada na
  clareza de interfaces como o Discord, sem copiá-las.
- Manter cores, tipografia, raios, espaçamentos e estados
  dos componentes consistentes em todo o site.
- Usar gradientes, brilhos, sombras e animações com moderação.
- Evitar excesso de elementos decorativos e efeitos neon.
- Priorizar contraste, legibilidade e hierarquia visual.

Antes de criar um novo padrão, inspecionar os componentes
e estilos existentes e reutilizar o que já estiver adequado.

## 4. Estrutura e escopo

Antes de editar, analisar a estrutura do projeto, os caminhos
relativos, os arquivos CSS e JavaScript e as dependências.

- Preservar os nomes e a organização dos arquivos existentes.
- Respeitar os caminhos relativos entre páginas e assets.
- Considerar que as páginas podem estar em subpastas diferentes.
- Reutilizar componentes compartilhados quando apropriado.
- Não duplicar componentes globais sem necessidade.
- Não alterar páginas fora do escopo solicitado.
- Não reescrever arquivos funcionais sem justificativa.
- Não remover funcionalidades existentes para simplificar o layout.

## 5. Regras de UI/UX

Cada página deve ter um objetivo visual e funcional claro.

- Estabelecer hierarquia entre títulos, textos e ações.
- Destacar a ação principal sem competir com ações secundárias.
- Manter espaçamentos e alinhamentos coerentes.
- Evitar textos longos em áreas estreitas.
- Usar estados de hover, focus, active, disabled, loading,
  erro e vazio quando forem pertinentes.
- Fornecer feedback compreensível para as interações.
- Garantir navegação clara e acessível por teclado.
- Não adicionar funcionalidades inexistentes sem autorização.

## 6. Responsividade

Projetar e verificar os layouts para:

- Celular: aproximadamente 375 px.
- Tablet: aproximadamente 768 px.
- Desktop: aproximadamente 1440 px.

Usar breakpoints e classes responsivas do Bootstrap.

Verificar:
- Navegação e menu mobile.
- Grid, colunas e ordem dos elementos.
- Largura de botões, formulários e cards.
- Quebras de texto e títulos longos.
- Imagens e elementos multimídia.
- Rolagem horizontal involuntária.
- Espaçamentos e áreas clicáveis.

Não resolver problemas de responsividade apenas reduzindo
o tamanho de todos os elementos.

## 7. Processo obrigatório

Antes de implementar:
1. Entender o pedido e os critérios de aceitação.
2. Inspecionar os arquivos envolvidos.
3. Identificar impactos em outras páginas e componentes.
4. Apresentar um plano curto para tarefas abrangentes.

Durante a implementação:
1. Trabalhar apenas no escopo aprovado.
2. Reutilizar os padrões do projeto.
3. Evitar alterações não solicitadas.
4. Não substituir decisões de design existentes sem justificativa.

Após implementar:
1. Revisar as diferenças no Git.
2. Verificar HTML, CSS, JavaScript e caminhos dos assets.
3. Executar as verificações disponíveis.
4. Conferir os tamanhos de tela relevantes por meios disponíveis.
5. Separar os problemas corrigidos dos que ainda precisam
   de inspeção visual real.
6. Informar arquivos alterados, testes executados e limitações.

## 8. Honestidade na validação

Não afirmar que o site foi testado no navegador se isso
não aconteceu.

Não afirmar que a interface está visualmente perfeita
apenas porque o código não apresenta erros evidentes.

Quando não houver navegador ou captura de tela disponível,
explicar o que foi validado por código e o que ainda depende
de inspeção visual.

## 9. Proteção do projeto

- Não apagar arquivos ou assets sem necessidade.
- Não descartar alterações do usuário.
- Não executar comandos destrutivos do Git sem autorização.
- Não instalar dependências sem justificar sua necessidade.
- Não alterar arquivos de configuração fora do escopo
  sem explicar o motivo.

## 10. ui/ux, experiencia do usuario
- Quesitos de ui/ux são indispensaveis, todas as modificações de desing devem manter principios bem aplicados. A experiencia do usuario, facilidade navegação e facil entendimento do usuario deve ser o elemento principal ao criar novos elementos.

