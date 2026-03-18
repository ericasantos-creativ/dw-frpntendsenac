# Product Requirements Document (PRD)
## FinCore - Sistema de Gestão Financeira

**Versão:** 1.0  
**Data:** 17 de março de 2026  
**Status:** Em Desenvolvimento  

---

## 1. Visão Geral do Produto

### 1.1 Descrição
FinCore é um sistema web completo de gestão financeira pessoal e empresarial, permitindo que usuários gerenciem suas finanças com múltiplas empresas, contas, metas e investimentos em uma plataforma moderna e intuitiva.

### 1.2 Objetivo Principal
Fornecer uma solução completa para controle financeiro com suporte a:
- Múltiplas empresas/negócios por usuário
- Rastreamento de transações
- Gestão de contas a pagar/receber
- Análises e relatórios em tempo real
- Compartilhamento de acesso
- Sincronização offline

### 1.3 Público-Alvo
- Microempreendedores (MEI)
- Pequenos negócios (PME)
- Profissionais autônomos
- Pessoas físicas com múltiplas fontes de renda

---

## 2. Stack Tecnológico

### 2.1 Frontend
```
- HTML5 - Estrutura semântica
- CSS3 - Estilos responsivos com custom properties
- JavaScript ES6+ - Lógica da aplicação
- Font Awesome 6.4.0 - Ícones vetoriais
```

### 2.2 Armazenamento
```
- localStorage - Persistência de dados no cliente
- IndexedDB - Sincronização offline (planejado)
```

### 2.3 PWA
```
- Service Worker - Cache e offline-first
- Manifest.json - Metadados da aplicação
- HTTPS - Segurança obrigatória
```

### 2.4 Desenvolvimento
```
- VS Code - IDE
- Git/GitHub - Controle de versão
- Node.js (opcional) - Para build/testing
```

---

## 3. Arquitetura do Sistema

### 3.1 Estrutura de Diretórios
```
sistema de gestâo financeira/
├── index.html           # Página principal
├── style.css           # Estilos globais
├── script.js           # Lógica da aplicação
├── service-worker.js   # Cache e offline
├── manifest.json       # Configuração PWA
├── PRD.md              # Documentação
└── assets/
    ├── icons/          # Ícones da aplicação
    └── images/         # Imagens estáticas
```

### 3.2 Arquitetura de Componentes
```
┌─────────────────────────────────────────┐
│         Login / Autenticação            │
├─────────────────────────────────────────┤
│              Header                      │
│  Logo | Nome Usuario | Logout            │
├─────────────────────────────────────────┤
│  Navigation Menu (10 seções)            │
├─────────────┬──────────────────────────┤
│             │                           │
│   Navbar    │   Main Content Area       │
│             │   (Dinâmico)             │
│   - Menu    │                           │
│             │   Temas Escuro/Claro     │
│             │                           │
└─────────────┴──────────────────────────┘
```

---

## 4. Schema de Dados

### 4.1 Estrutura de Usuário
```javascript
{
  email: String,              // Chave primária
  name: String,               // Nome completo
  password: String,           // Hash (MD5 básico)
  createdAt: Timestamp,       // Data de criação
  lastLogin: Timestamp        // Último acesso
}
```

### 4.2 Estrutura de Empresa
```javascript
{
  id: Number,                 // Identificador único
  name: String,               // Nome da empresa
  tipo: String,               // "PF" ou "PJ"
  documento: String,          // CPF ou CNPJ
  slogan: String,             // Slogan/Missão
  saldo: Number,              // Saldo atual
  emails: Array,              // Usuários com acesso
  createdAt: Timestamp
}
```

### 4.3 Estrutura de Transação
```javascript
{
  id: Number,                 // Timestamp único
  type: String,               // "ganho" ou "gasto"
  category: String,           // Categoria
  description: String,        // Descrição
  amount: Number,             // Valor em R$
  date: String,               // Data (YYYY-MM-DD)
  empresaId: Number,          // Qual empresa
  timestamp: Timestamp,
  fixed: Boolean              // É fixa?
}
```

### 4.4 Estrutura de Conta a Pagar/Receber
```javascript
{
  id: Number,
  descricao: String,
  fornecedor: String,         // Para contas a pagar
  cliente: String,            // Para contas a receber
  valor: Number,
  dataVencimento: String,
  status: String,             // "pendente" ou "pago"
  createdAt: Timestamp
}
```

### 4.5 Estrutura de Meta
```javascript
{
  id: Number,
  nome: String,
  valor: Number,              // Meta em R$
  realizado: Number,          // Valor atingido
  dataLimite: String,
  categoria: String,
  status: String              // "em_progresso", "atingida", "expirada"
}
```

### 4.6 Estrutura de Investimento
```javascript
{
  id: Number,
  tipo: String,               // "Ações", "Renda Fixa", etc
  valor: Number,
  dataAquisicao: String,
  rentabilidade: Number,
  observacoes: String
}
```

### 4.7 Estrutura de Fornecedor
```javascript
{
  id: Number,
  nome: String,
  contato: String,            // Email/Telefone
  categoria: String,
  prazoPagamento: String,     // Ex: "30 dias"
  createdAt: Timestamp
}
```

### 4.8 Estrutura de Perfil de Usuário
```javascript
{
  slogan: String,             // Slogan pessoal/empresa
  sharedAccounts: [           // Contas compartilhadas
    {
      id: Number,
      email: String,
      permission: String,     // "view", "edit", "admin"
      expiry: Date,
      createdAt: Timestamp
    }
  ]
}
```

---

## 5. Funcionalidades Principais

### 5.1 Autenticação
- [x] Login com email/senha
- [x] Registro de novo usuário
- [x] Logout
- [x] Persistência de sessão (localStorage)

### 5.2 Dashboard
- [x] 3 Cards principais (Saldo, Ganhos, Gastos)
- [x] Atualização em tempo real
- [x] Filtro por empresa

### 5.3 Gerenciamento de Transações
- [x] Adicionar transações (ganho/gasto)
- [x] Deletar transações
- [x] Filtrar por tipo e categoria
- [x] Busca por descrição
- [x] Histórico completo

### 5.4 Empresas/Negócios
- [x] Criar múltiplas empresas
- [x] Selecionar empresa ativa
- [x] Editar informações
- [x] Deletar empresa
- [x] Saldo por empresa

### 5.5 Contas a Pagar/Receber
- [x] Registrar contas a pagar
- [x] Registrar contas a receber
- [x] Marcar como pago/recebido
- [x] Definir pró-labore
- [x] Organização por abas

### 5.6 Metas Financeiras
- [x] Criar metas
- [x] Visualizar progresso (%)
- [x] Editar metas
- [x] Deletar metas

### 5.7 Investimentos
- [x] Registrar investimentos
- [x] Categorizar tipo
- [x] Rastrear rentabilidade
- [x] Custos fixos e variáveis
- [x] Análise capital de giro

### 5.8 Fornecedores
- [x] Cadastro de fornecedores
- [x] Contato e categoria
- [x] Prazos de pagamento
- [x] Lista completa

### 5.9 Calendário
- [x] Visualizar mês
- [x] Marcar pagamentos/recebimentos
- [x] Navegar entre meses
- [x] Listar eventos do dia

### 5.10 Relatórios
- [ ] Gráficos mensais
- [ ] Gráficos bimestrais
- [ ] Gráficos semestrais
- [ ] Gráficos anuais
- [ ] Análise de cenários
- [ ] Distribuição por categoria
- [ ] Exportar relatório (PDF/CSV)

### 5.11 Perfil de Usuário
- [x] Editar slogan da empresa
- [x] Mudar senha
- [x] Compartilhar conta com terceiros
- [x] Gerenciar acessos
- [x] Trocar de conta
- [x] Deletar conta

### 5.12 Temas
- [ ] Modo claro (default)
- [ ] Modo escuro
- [ ] Sincronizar com preferências do SO

### 5.13 PWA
- [ ] Instalação em home screen
- [ ] Funcionamento offline
- [ ] Sincronização automática
- [ ] Notificações push

---

## 6. APIs e Endpoints (Planejado)

### 6.1 Autenticação
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/change-password
```

### 6.2 Usuários
```
GET  /api/users/profile
PUT  /api/users/profile
DELETE /api/users/{id}
```

### 6.3 Transações
```
GET    /api/transactions
POST   /api/transactions
DELETE /api/transactions/{id}
GET    /api/transactions/export
```

### 6.4 Relatórios
```
GET /api/reports/monthly
GET /api/reports/quarterly
GET /api/reports/annual
GET /api/reports/categories
POST /api/reports/export
```

### 6.5 Empresas
```
GET  /api/companies
POST /api/companies
PUT  /api/companies/{id}
DELETE /api/companies/{id}
```

---

## 7. Fluxo de Dados

### 7.1 Fluxo de Login
```
1. Usuário acessa index.html
2. Verifica localStorage.currentUser
3. Se existe → renderiza mainScreen
4. Se não existe → renderiza loginScreen
5. Ao fazer login → salva currentUser + sessionStorage
```

### 7.2 Fluxo de Dados de Transações
```
1. Usuário adiciona transação
2. Validação básica no cliente
3. Salva em transactions[] (global)
4. Executa saveUserData() → localStorage
5. Renderiza transactionsList
6. Atualiza updateDashboard()
```

### 7.3 Fluxo de Relatório
```
1. Usuário clica em Relatórios
2. showSection('relatorios') é chamado
3. initCharts() processa dados
4. Cria dados para gráficos
5. Chart.js renderiza canvases
6. Opção de exportar (planejado)
```

---

## 8. Requisitos Não-Funcionais

### 8.1 Performance
- [ ] Carregamento < 2s
- [ ] First Contentful Paint < 1.5s
- [ ] Interatividade responsiva
- [ ] Cache de recursos

### 8.2 Segurança
- [ ] HTTPS obrigatório
- [ ] Hash de senhas (bcrypt/argon2)
- [ ] Validação de entrada
- [ ] CSP headers
- [ ] XSS protection

### 8.3 Acessibilidade
- [x] Semântica HTML5
- [x] Contraste de cores WCAG AA
- [x] Labels em formulários
- [ ] ARIA labels
- [ ] Navegação por teclado

### 8.4 Compatibilidade
- [x] Chrome/Edge 90+
- [x] Firefox 88+
- [x] Safari 14+
- [x] Mobile (iOS/Android)

### 8.5 Responsividade
- [x] Desktop (1920px+)
- [x] Tablet (768px-1024px)
- [x] Mobile (320px-480px)

---

## 9. Temas de Cores

### 9.1 Modo Claro
```css
--primary: #7c3aed        /* Roxo */
--primary-dark: #6d28d9   /* Roxo escuro */
--success: #10b981        /* Verde */
--danger: #ff4757         /* Vermelho */
--warning: #ffa502        /* Laranja */
--info: #00bcd4           /* Azul ciano */
--dark: #1f2937          /* Cinza escuro */
--light: #f9fafb         /* Cinza claro */
```

### 9.2 Modo Escuro (Novo)
```css
--primary: #a78bfa        /* Roxo claro */
--primary-dark: #8b5cf6   /* Roxo médio */
--bg-dark: #1a1a2e        /* Fundo muito escuro */
--surface: #16213e        /* Superfícies */
--text: #e0e0e0           /* Texto claro */
--border: #2a2a4e         /* Bordas */
```

---

## 10. Casos de Uso

### 10.1 UC1: Gerenciar Múltiplas Empresas
```
Ator: Usuário
Fluxo Principal:
1. Usuário faz login
2. Clica em "Empresas" no menu
3. Visualiza lista de empresas
4. Clica em empresa para selecionar
5. Dados são filtrados pela empresa escolhida
6. Dashboard reflete os dados da empresa
```

### 10.2 UC2: Análise Financeira
```
Ator: Usuário
Fluxo Principal:
1. Usuário clica em "Relatórios"
2. Visualiza gráficos por período
3. Seleciona período desejado (mensal/anual/etc)
4. Visualiza análise de cenários
5. Exporta relatório (planejado)
```

### 10.3 UC3: Compartilhar Conta
```
Ator: Proprietário da conta
Fluxo Principal:
1. Acessa seção "Perfil"
2. Clica em "Compartilhar com Terceiros"
3. Insere email + nível de acesso
4. Define data de expiração (opcional)
5. Terceiro recebe acesso
6. Pode revogar acesso a qualquer momento
```

---

## 11. Critérios de Aceite

### 11.1 Dashboard
- [ ] 3 cards exibindo corretamente
- [ ] Valores atualizados ao adicionar transação
- [ ] Filtro por empresa funciona
- [ ] Carrega dados salvos após refresh

### 11.2 Transações
- [ ] Adicionar transação com validação
- [ ] Deletar transação e atualizar saldo
- [ ] Filtros funcionam (tipo, categoria, busca)
- [ ] Histórico mostra todas as transações

### 11.3 Relatórios
- [ ] Gráficos renderizam sem erros
- [ ] Dados são precisos
- [ ] Exportação envia arquivo
- [ ] Interface responsiva

### 11.4 Modo Escuro
- [ ] Toggle funciona
- [ ] Cores legíveis
- [ ] Persistência de preferência
- [ ] Sem efeitos de flash

### 11.5 PWA
- [ ] Se instala em home
- [ ] Funciona offline
- [ ] Sincroniza online
- [ ] Ícone e splash screen

---

## 12. Roadmap

### Fase 1: MVP (Atual)
- [x] Autenticação básica
- [x] CRUD de transações
- [x] Múltiplas empresas
- [x] Perfil de usuário
- [ ] Temas claro/escuro
- [ ] PWA básico

### Fase 2: Relatórios
- [ ] Gráficos funcionais
- [ ] Exportação PDF
- [ ] Análise de cenários
- [ ] Alertas de metas

### Fase 3: Backend
- [ ] API REST
- [ ] Autenticação JWT
- [ ] Banco de dados (PostgreSQL)
- [ ] Sincronização em nuvem

### Fase 4: Mobile
- [ ] App nativo (React Native)
- [ ] Sincronização biidirecional
- [ ] Notificações push
- [ ] Câmera para recibos

---

## 13. Métricas de Sucesso

- Total de usuários ativos
- Taxa de retenção mensal
- Tempo médio de uso
- Erros relatados
- Taxa de conclusão de metas
- Satisfação do usuário (NPS)

---

## 14. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|--------|-----------|
| Perda de dados localStorage | Média | Alto | Backup em IndexedDB |
| Compatibilidade browser | Baixa | Médio | Testes em múltiplos browsers |
| Desempenho com muitas transações | Média | Médio | Paginação e cache |
| Segurança (HTTPS) | Alto | Crítico | Deploy em servidor seguro |

---

## 15. Glossário

- **MEI**: Microempreendedor Individual
- **PME**: Pequena e Média Empresa
- **PWA**: Progressive Web App
- **localStorage**: Armazenamento local do navegador
- **Session**: Dados da sessão do usuário
- **Saldo**: Total de dinheiro disponível
- **Pró-labore**: Retirada fixa mensal do proprietário

---

**Documento preparado por:** Equipe de Desenvolvimento  
**Última atualização:** 17/03/2026  
**Próxima revisão:** 30/03/2026
