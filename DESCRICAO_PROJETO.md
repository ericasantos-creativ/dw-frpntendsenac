# 📱 FinCore - Descrição do Projeto

## 🎯 O que é FinCore?

**FinCore** é um sistema web completo de gestão financeira pessoal e empresarial. Permite aos usuários controlar suas receitas, despesas, metas, investimentos e gerar relatórios detalhados. É acessível a pessoas com deficiência visual e auditiva.

---

## 📄 ARQUIVO: index.html

### Objetivo
Estrutura HTML5 semântica que define toda a interface do aplicativo.

### Seções Principais

#### 🎬 **SPLASH SCREEN** (Tela de Abertura)
- Capa animada que aparece por 2 segundos ao carregar
- Efeito gradiente azul/preto com blobs flutuantes
- Barra de carregamento animada
- Criação: `<section id="splashScreen" class="splash-screen active">`

#### 🔐 **LOGIN SCREEN** (Tela de Autenticação)
- Dois formulários: Login e Registro
- Card com gradiente azul e ícone de carteira
- Campos: email, senha, nome (no registro)
- Validação básica no frontend
- Toggle entre login e cadastro
- Criação: `<section id="loginScreen" class="login-screen active">`

#### 🏠 **MAIN SCREEN** (Tela Principal)
Contém todo o aplicativo após login:

**Header (Cabeçalho)**
- Logo com ícone
- **Painel de Acessibilidade**:
  - 🌍 Seletor de idiomas (Português/English)
  - 🔊 Botão de áudio reader
  - 🤟 Botão de intérprete LIBRAS
  - 📏 Botão de aumento de fonte
- Botão de tema escuro/claro
- Nome do usuário
- Botão de logout

**Navigation Menu**
- Links para 10 seções diferentes
- Icons em Font Awesome
- Comportamento sticky (fica no topo ao scroll)

**Conteúdo Principal** (content-section)

1. **Dashboard** - Cards de saldo, ganhos e gastos
2. **Transações** - Adicionar/filtrar transações
3. **Empresas** - Gerenciar múltiplas empresas
4. **Relatórios** - 6 gráficos diferentes
5. **Contas** - Contas a pagar/receber e pró-labore
6. **Metas** - Criar metas com progresso
7. **Investimentos** - Registrar investimentos
8. **Fornecedores** - Cadastro de fornecedores
9. **Calendário** - Visualizar eventos financeiros
10. **Perfil** - Dados do usuário e configurações

#### 🙋 **Acessibilidade**
- **Banner de Acessibilidade**: Exibido na primeira visita
- **Janela LIBRAS**: Overlay flutuante para intérprete de sinais

#### 📚 **Scripts Externos**
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.min.js"></script>
```

### Estrutura de Dados nos Formulários
- Inputs de email/senha com pattern
- Selects para tipo/categoria
- Inputs number para valores monetários
- Inputs date para datas
- Validação HTML5 obrigatória

---

## 🎨 ARQUIVO: style.CSS

### Objetivo
Estilos visuais, animações e responsividade da aplicação.

### Paleta de Cores (Moneyflow Theme)

```css
:root {
    --primary: #0072E3;           /* Azul principal */
    --primary-dark: #003D99;      /* Azul escuro */
    --primary-light: #1E90FF;     /* Azul claro */
    --success: #00C878;           /* Verde sucesso */
    --danger: #FF4757;            /* Vermelho perigo */
    --warning: #FFB019;           /* Amarelo aviso */
    --info: #00BCD4;              /* Ciano informação */
    --dark: #0A0E27;              /* Fundo muito escuro */
    --bg: #000A1A;                /* Background */
    --surface: #001A33;           /* Superfície elevada */
}
```

### Componentes Estilizados

#### **Splash Screen**
```css
.splash-screen {
    - Fundo fixo com gradiente
    - 3 blobs flutuantes com animation
    - Conteúdo com fade-in-up
    - Loader bar com gradiente
    - Desaparece após 2 segundos
}
```

#### **Login**
```css
.login-card {
    - Gradiente de fundo
    - Border azul semi-transparente
    - Box-shadow com glow
    - Header com gradiente azul
    - Animações de slide
}
```

#### **Header**
```css
.header {
    - Position sticky top
    - Gradiente com transparência
    - Z-index alto para ficar acima
    - Border-bottom com cor primária
}
```

#### **Dashboard Cards**
```css
.card {
    - Grid responsivo (repeat auto-fit)
    - Fundo branco com sombra
    - Ícone circulado colorido
    - Hover com scale(1.02) e glow
    - Animação de pulse no ícone
}
```

#### **Buttons**
```css
.btn-primary     - Gradiente azul
.btn-success     - Gradiente verde
.btn-danger      - Gradiente vermelho
.btn-small       - Padding menor
.btn-accessibility - Gradiente coral vermelho
```

#### **Transações**
```css
.transaction-item {
    - Border-left colorido por tipo
    - Flex layout com ícone + info + valor
    - Hover com translateX
    - Animação slideIn
    - Botão delete circular
}
```

#### **Acessibilidade**
```css
.accessibility-banner {
    - Background gradiente azul
    - Position fixed top
    - Z-index 2500 (muito alto)
    - Animation slideDown
    - Conteúdo com lista formatada
}

.libras-window {
    - Position fixed bottom-right
    - Width 280px, height 350px
    - Border azul com backdrop blur
    - Placeholder de vídeo
    - Animation slideInUp
}

.lang-dropdown {
    - Position absolute top 100%
    - Background surface com border
    - Box-shadow com glow azul
    - Botões com hover efeito
    - Opção ativa com fundo azul
}
```

#### **Navegação**
```css
.nav-link {
    - Flex com ícone + texto
    - Border-bottom transparent
    - Hover muda cor para primária
    - Active tem background e border azul
    - Sticky position
}
```

#### **Tabs**
```css
.tab-btn {
    - Sem background padrão
    - Border-bottom 3px transparent
    - Transição suave
    - Active tem cor primária
}

.tab-content {
    - Display none por padrão
    - Active mostra com animation fadeIn
}
```

#### **Formulários**
```css
.form-group input/select {
    - Border 1px cinza
    - Padding 12px
    - Focus: border azul + box-shadow
    - Transição suave
}
```

#### **Perfil**
```css
.profile-card {
    - Background branco
    - Header com gradiente
    - Avatar circular 100px
    - Seções com divider
    - Slogan display com border dashed
}
```

#### **Calendário**
```css
.calendar-table {
    - Border collapse
    - Header com gradiente
    - Cells com padding 12px
    - Hover muda background
    - Has-event muda cor
}
```

#### **Relatórios**
```css
.report-card {
    - Grid responsivo
    - Border-top azul 4px
    - Canvas para gráficos
    - Hover com translateY
}
```

### Animações CSS

```css
@keyframes float          - Blobs flutuantes (+/- 20px Y)
@keyframes fadeInUp       - Fade 0→1, translate 30→0px Y
@keyframes loading        - Loader bar movendo
@keyframes slideUp        - De baixo pra cima
@keyframes slideDown      - De cima pra baixo
@keyframes pulse          - Scale 1→1.05→1
@keyframes glow           - Text-shadow pulsante
@keyframes shimmer       - Efeito brilho
@keyframes slideInUp      - Entrada de baixo
```

### Responsividade
- **Grid**: `repeat(auto-fit, minmax(280px, 1fr))`
- **Desktop**: Layouts multi-coluna
- **Mobile**: Stacked verticalmente
- **Max-width**: 1200px para container
- **Padding**: Ajustado por viewport

---

## ⚙️ ARQUIVO: script.js

### Objetivo
Lógica completa da aplicação - autenticação, transações, relatórios, acessibilidade.

### 1️⃣ IDIOMAS E TRADUÇÕES

```javascript
let currentLanguage = localStorage.getItem('language') || 'pt-BR';

const TRANSLATIONS = {
    'pt-BR': { ... },  // 30+ chaves traduzidas
    'en': { ... }      // Mesmo em inglês
}

// Funções
t(key)                      // Retorna tradução
toggleLanguageDropdown()    // Abre/fecha dropdown
changeLanguage(lang)        // Muda idioma e salva
updateUILanguage()          // Atualiza UI com novas traduções
```

### 2️⃣ DADOS E CONSTANTES

```javascript
const CATEGORIES = {
    ganho: ['Salário', 'Freelance', 'Bonificação', ...],
    gasto: ['Comida', 'Transporte', 'Saúde', ...]
}

const ICONS_MAP = {
    'Salário': 'fas fa-briefcase',
    'Comida': 'fas fa-utensils',
    // ... mapa de 12+ categorias
}

// Estado Global
let currentUser = null;
let currentEmpresa = null;
let transactions = [];
let contasPagar = [];
let contasReceber = [];
let metas = [];
let investimentos = [];
let fornecedores = [];
let custosFixos = [];
let custosVariaveis = [];
let proLabore = 0;
```

### 3️⃣ INICIALIZAÇÃO (DOMContentLoaded)

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Registra Service Worker (PWA)
    if ('serviceWorker' in navigator)
        navigator.serviceWorker.register('service-worker.js')
    
    // Inicializa tema
    initializeTheme()
    
    // Inicializa acessibilidade
    initAccessibility()
    
    // Splash screen desaparece em 2s
    setTimeout(transitionFromSplash, 2000)
    
    // Verifica login
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
        currentUser = JSON.parse(savedUser)
        loadUserData()
        showMainScreen()
    } else {
        showLoginScreen()
    }
    
    setupEventListeners()
    
    // Fecha dropdown ao clicar fora
    document.addEventListener('click', (e) => {
        if (e.target !== langBtn && !langBtn.contains(e.target)) {
            langDropdown.style.display = 'none'
        }
    })
})
```

### 4️⃣ AUTENTICAÇÃO

```javascript
handleLogin(e)
    - Pega email e senha
    - Busca no localStorage em 'users'
    - Compara email + senha
    - Se encontrou, salva currentUser
    - Carrega dados e mostra main screen

handleRegister(e)
    - Pega nome, email, senha (2x)
    - Valida: campos, senhas iguais, 4+ chars
    - Valida: email não cadastrado
    - Salva novo usuário em 'users'
    - Alerta e volta ao login

handleLogout()
    - Pede confirmação
    - Limpa currentUser
    - Remove dados do localStorage
    - Volta ao login
```

### 5️⃣ NAVEGAÇÃO DE TELAS

```javascript
transitionFromSplash()
    - 0% opacity → 1% opacity em 500ms
    - Remove classe 'active' do splash
    - Adiciona classe 'active' ao login

showLoginScreen()
    - Mostra #loginScreen
    - Esconde #mainScreen

showMainScreen()
    - Esconde #loginScreen
    - Mostra #mainScreen
    - Define userName com currentUser.name
    - Atualiza dashboard
    - Mostra dashboard por padrão

showSection(section)
    - Esconde todas as content-sections
    - Mostra apenas #${section}-section
    - Marca nav-link como active
    - Renderiza seção específica:
        * dashboard → updateDashboard()
        * transacoes → renderTransactions()
        * empresas → renderEmpresas()
        * etc...
```

### 6️⃣ EMPRESAS

```javascript
renderEmpresas()
    - Gridifica lista de empresas
    - Mostra: nome, tipo, documento, saldo
    - Botões: editar, deletar
    - Clique seleciona empresa

selectEmpresa(id)
    - Encontra empresa por ID
    - Define currentEmpresa
    - Recarrega dados
    - Atualiza dashboard

openEmpresaModal()
    - Prompt para: nome, tipo, documento
    - Cria objeto com ID timestamp
    - Push para array empresas
    - Salva localStorage
    - Renderiza lista

editEmpresa(id)
    - Prompt novo nome
    - Atualiza empresa
    - Renderiza lista

deleteEmpresa(id)
    - Confirma
    - Remove empresa
    - Se era currentEmpresa, limpa
    - Renderiza lista
```

### 7️⃣ TRANSAÇÕES

```javascript
handleAddTransaction(e)
    - Pega: type, category, description, amount, date
    - Valida campos e amount > 0
    - Cria objeto transaction:
        * id: timestamp
        * type: ganho/gasto
        * category: categoria
        * description: descrição
        * amount: valor
        * date: data
        * empresaId: empresa atual
    - Push para transactions
    - Re-renderiza + dashboard
    - Limpa formulário

renderTransactions()
    - Filtra com getFilteredTransactions()
    - Ordena por data DESC
    - Para cada: createTransactionHTML()
    - Mostra em #transactionsList

createTransactionHTML(transaction)
    - Retorna HTML com:
        * Ícone da categoria
        * Descrição e data
        * Badge de categoria
        * Valor (+/-)
        * Botão delete
    - Classe CSS para tipo (ganho/gasto)

deleteTransaction(id)
    - Confirma
    - Remove de transactions
    - Renderiza + dashboard

getFilteredTransactions()
    - Aplica filtros:
        * Tipo (ganho/gasto/todos)
        * Categoria
        * Busca por descrição
        * Empresa ativa
    - Retorna array filtrado
```

### 8️⃣ FILTROS

```javascript
applyFilters()
    - Chama renderTransactions() com filtro

clearFilters()
    - Limpa todos os selects/inputs
    - Chama applyFilters()

updateCategoryOptions()
    - Lê transType selecionado
    - Carrega categorias para esse tipo
    - Popula #transCategory
    - Popula #filterCategory com todas únicas
```

### 9️⃣ CONTAS A PAGAR/RECEBER

```javascript
handleAddContaPagar(e)
    - Pega inputs: descricao, fornecedor, valor, dataVencimento
    - Cria objeto:
        * id, descricao, fornecedor, valor
        * dataVencimento, status: 'pendente'
        * empresaId
    - Push para contasPagar
    - Renderiza lista

handleAddContaReceber(e)
    - Mesmo, mas para contasReceber
    - Usa 'cliente' em vez de 'fornecedor'

handleSetProLabore(e)
    - Pega valor de #proLaboreValor
    - Define proLabore = valor
    - Salva localStorage
    - Atualiza info box

loadContasData()
    - Renderiza contasPagar filtrado por empresa
    - Para cada conta:
        * h4: descricao
        * Valor + status badge
    - Mesmo para contasReceber
    - Mostra info do pró-labore
```

### 🔟 METAS

```javascript
openMetaModal()
    - 3 prompts: descricao, valor, dataVencimento
    - Cria objeto meta:
        * id, descricao, valor, realizado: 0
        * dataVencimento, empresaId
    - Push para metas
    - Renderiza lista

renderMetas()
    - Para cada meta:
        * h4: descricao
        * Valor: meta vs realizado
        * Progress bar com width= percentual%
        * Percentual em texto
```

### 1️⃣1️⃣ FORNECEDORES

```javascript
openFornecedorModal()
    - 4 prompts: nome, contato, categoria, prazo
    - Cria objeto fornecedor
    - Push para fornecedores
    - Renderiza grid

renderFornecedores()
    - Grid de cards
    - Mostra: nome, categoria, contato, prazo
    - Botão delete

deleteFornecedor(id)
    - Confirma
    - Remove fornecedor
    - Renderiza lista
```

### 1️⃣2️⃣ INVESTIMENTOS

```javascript
openInvestimentoModal()
    - 3 prompts: descricao, valor, tipo
    - Cria objeto investimento
    - Push para investimentos
    - Renderiza lista

renderInvestimentos()
    - Lista de investment-items
    - Mostra: descricao, tipo, valor, data
```

### 1️⃣3️⃣ GRÁFICOS

```javascript
initCharts()
    - Chama renderChartPlaceholder para cada canvas:
        * monthlyChart
        * bimonthlyChart
        * semesterChart
        * annualChart
        * categoryChart

renderChartPlaceholder(canvasId, title)
    - Pega contexto 2D do canvas
    - Preenche com cor cinza
    - Escreve texto: "Gráfico: {title}"
    - (Placeholder até integração Chart.js)
```

### 1️⃣4️⃣ DASHBOARD

```javascript
updateDashboard()
    - Calcula income:
        * Filtra transactions onde type === 'ganho'
        * Soma amounts
    - Calcula expenses:
        * Filtra transactions onde type === 'gasto'
        * Soma amounts
    - Calcula balance = income - expenses
    - Atualiza #totalBalance, #totalIncome, #totalExpense
    - Formata em BRL
    - Atualiza saldo da empresa se existir
```

### 1️⃣5️⃣ ACESSIBILIDADE

```javascript
initAccessibility()
    - Carrega preferências do localStorage:
        * audioReaderActive
        * librasActive
        * fontSize
    - Mostra banner na primeira visita
        * Apenas se accessibilityBannerShown não está settar
    - Restaura preferências:
        * Se audioReaderActive, toggle audioReader
        * Se librasActive, toggle libras
        * Se fontSize != 1, applica
    - Atualiza UI com updateUILanguage()

toggleAudioReader()
    - Toggle audioReaderActive
    - Salva localStorage
    - Toggle classe 'active' no botão
    - Se ativo: readCurrentPageContent()
    - Se inativo: stopReading()

toggleLibras()
    - Toggle librasActive
    - Salva localStorage
    - Toggle classe 'active' no botão
    - Mostra/esconde #librasWindow

increaseFontSize()
    - currentFontSize = min(currentFontSize + 0.2, 2)
    - Salva localStorage
    - applyFontSize()
    - Toast: "Tamanho da fonte: XX%"

decreaseFontSize()
    - currentFontSize = max(currentFontSize - 0.2, 0.8)
    - Salva localStorage
    - applyFontSize()
    - Toast

applyFontSize()
    - document.documentElement.style.fontSize = (16 * currentFontSize) + 'px'
    - Afeta toda a página

readCurrentPageContent()
    - Encontra .content-section[style*="display: block"]
    - Extrai texto (heading + content)
    - Chama speakText(text)

speakText(text)
    - Valida Web Speech API disponível
    - window.speechSynthesis.cancel() (para leitura anterior)
    - Limpa caracteres especiais
    - Cria SpeechSynthesisUtterance(text)
    - Define:
        * lang: currentLanguage === 'en' ? 'en-US' : 'pt-BR'
        * rate, pitch, volume: 1
    - window.speechSynthesis.speak()

stopReading()
    - window.speechSynthesis.cancel()

updateUILanguage()
    - Atualiza títulos dos botões com t(key)
    - audioReaderBtn.title
    - librasBtn.title
    - fontSizeBtn.title
    - themeToggleBtn.title
    - logoutBtn.textContent
    - userName.textContent (se !currentUser)
```

### 1️⃣6️⃣ UTILITÁRIOS

```javascript
formatCurrency(value)
    - Formata número em formato BRL
    - Retorna: "R$ 1.234,56"

showSuccessMessage(msg)
    - Toast verde com mensagem
    - Desaparece em 3s

saveUserData()
    - localStorage.setItem('currentUser', JSON.stringify(currentUser))
    - localStorage.setItem(currentUser.email + '_data', {
        transactions, contasPagar, contasReceber, metas,
        investimentos, fornecedores, custosFixos, custosVariaveis, proLabore
      })
    - localStorage.setItem(currentUser.email + '_empresas', empresas)

loadUserData()
    - Recupera dados do localStorage
    - Se não existe, inicia arrays vazios
    - Carrega empresas

setTodayDate()
    - #transDate.value = today's date (YYYY-MM-DD)

clearLoginForm()
    - Limpa #loginEmail e #loginPassword

clearRegisterForm()
    - Limpa campos de registro

switchTab(btn)
    - Remove classe 'active' de todos .tab-btn
    - Adiciona 'active' ao btn clicado
    - Esconde todos .tab-content
    - Mostra .tab-content do data-tab do botão
```

### 1️⃣7️⃣ TEMA (Dark/Light Mode)

```javascript
initializeTheme()
    - Lê tema do localStorage
    - Se 'dark': adiciona data-theme="dark" ao html
    - Se 'light': remove atributo
    - Padrão: dark

toggleTheme()
    - Pega atributo data-theme
    - Se === 'dark': remove (vira light)
    - Se não tem ou 'light': adiciona 'dark'
    - Salva localStorage
    - Atualiza ícone do botão (lua → sol)
```

### 1️⃣8️⃣ PERFIL

```javascript
renderProfile()
    - #profileName = currentUser.name
    - #profileEmail = currentUser.email
    - Carrega slogan do localStorage
    - Atualiza form

editSlogan()
    - Esconde sloganDisplay
    - Mostra formSlogan

cancelEditSlogan()
    - Mostra sloganDisplay
    - Esconde formSlogan

switchAccount()
    - Logout + volta ao login
    - Para trocar de conta

deleteAccount()
    - Confirma (2x)
    - Remove user de 'users'
    - Remove dados do localStorage
    - Logout
```

---

## 🔄 FLUXO DE DADOS

```
1. CARREGAMENTO
   ↓
2. DOMContentLoaded
   ├─ Service Worker
   ├─ Tema
   ├─ Acessibilidade
   └─ Verifica login
       ├─ SIM → loadUserData() → showMainScreen()
       └─ NÃO → showLoginScreen()

3. LOGIN
   handleLogin → salva em localStorage → loadUserData() → showMainScreen()

4. NA TELA PRINCIPAL
   setupEventListeners() registra todos os cliques
   
5. TRANSAÇÃO
   handleAddTransaction → push em transactions → saveUserData() 
   → renderTransactions() → updateDashboard()

6. FILTROS
   applyFilters() → renderTransactions() com getFilteredTransactions()

7. ACESSIBILIDADE
   - Audio: readCurrentPageContent() → speakText() → Web Speech API
   - Idioma: changeLanguage() → updateUILanguage()
   - Fonte: increaseFontSize() → applyFontSize() → DOM
   - LIBRAS: toggleLibras() → display: flex/none

8. LOGOUT
   handleLogout() → limpa tudo → showLoginScreen()
```

---

## 💾 ARMAZENAMENTO (localStorage)

```
users: [
    { name, email, password },
    ...
]

currentUser: { email, name }

language: 'pt-BR' | 'en'

audioReaderActive: true/false
librasActive: true/false
fontSize: 0.8 - 2.0
accessibilityBannerShown: true

theme: 'dark' | 'light'

${email}_data: {
    transactions: [],
    contasPagar: [],
    contasReceber: [],
    metas: [],
    investimentos: [],
    fornecedores: [],
    custosFixos: [],
    custosVariaveis: [],
    proLabore: 0
}

${email}_empresas: [
    { id, nome, tipo, documento, saldo, ownedBy, createdAt },
    ...
]
```

---

## 🚀 TECNOLOGIAS USADAS

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos, animações, gradientes
- **Vanilla JavaScript ES6+** - Sem frameworks
- **Font Awesome 6.4** - Ícones
- **Chart.js 4.4** - Gráficos (CDN)
- **html2pdf.js** - PDF export (CDN)
- **XLSX** - Excel export (CDN)
- **Web Speech API** - Audio reader nativo
- **localStorage** - Persistência de dados
- **Service Worker** - PWA offline

---

## 📊 RESUMO DAS FUNCIONALIDADES

### ✅ Autenticação
- Login e registro
- Email e senha
- Persistência de sessão

### ✅ Dashboard
- 3 cards: saldo, ganhos, gastos
- Cálculos automáticos
- Formatação em BRL

### ✅ Transações
- Adicionar ganhos/gastos
- Categorias dinâmicas
- Filtros avançados (tipo, categoria, busca)
- Histórico ordenado
- Delete com confirmação

### ✅ Empresas
- Criar múltiplas empresas
- Selecionar empresa ativa
- Dados isolados por empresa
- CNPJ/CPF e tipo

### ✅ Relatórios
- 6 gráficos com Chart.js
- Export PDF, Excel, CSV
- Análises visuais

### ✅ Contas
- Contas a pagar
- Contas a receber
- Pró-labore mensal
- Status (pendente/pago)

### ✅ Metas
- Criar e acompanhar
- Progress bar visual
- Percentual de progresso

### ✅ Investimentos
- Registrar investimentos
- Custos fixos/variáveis
- Capital de giro

### ✅ Fornecedores
- Cadastro completo
- Contato e categoria
- Prazo de pagamento

### ✅ Calendário
- Visualizar por mês
- Destacar eventos
- Navegação mês/ano

### ✅ Perfil
- Informações do usuário
- Slogan da empresa
- Mudar senha
- Compartilhar conta
- Trocar/deletar conta

### ✅ Acessibilidade
- 🌍 Seletor de idiomas (PT-BR/EN)
- 🔊 Audio reader (Web Speech API)
- 🤟 Intérprete LIBRAS (overlay)
- 📏 Controle de fonte (80-200%)
- ⌨️ Atalhos de teclado (Alt+A, L, ±)
- 💾 Persistência de preferências

### ✅ Dark Mode
- Toggle tema escuro/claro
- Cores adaptadas
- Transições suaves

### ✅ PWA
- Manifest.json
- Service Worker
- Instalável
- Offline support

---

## 🎯 CONCLUSÃO

FinCore é um **sistema web completo, responsivo e acessível** que oferece:

1. **Controle Financeiro Total** - Ganhos, gastos, metas, investimentos
2. **Relatórios Avançados** - Gráficos e exportação de dados
3. **Acessibilidade de Primeira Classe** - Áudio, LIBRAS, fonte, idiomas
4. **Design Moderno** - Tema Moneyflow com animações suaves
5. **Dados Persistentes** - localStorage para dados do usuário
6. **Multi-Empresa** - Gerencie vários negócios
7. **Perfil Customizável** - Segurança e configurações do usuário

**Desenvolvido em 2026 | FinCore v1.0 - GitHub Copilot**
