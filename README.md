# 📚 Livraria Mackenzie — Front-End (Cliente)

Interface estática da Livraria Mackenzie. Consome os dados da API de forma assíncrona e renderiza os livros e banners dinamicamente na tela.

---

## 🗂️ Estrutura de Arquivos

```
/
├── index.html    → Estrutura base da aplicação com Tailwind CSS
├── script.js     → Lógica de consumo da API (fetch) e renderização dinâmica
└── style.css     → Estilizações e animações customizadas
```

---

## ⚙️ Funcionamento

O cliente utiliza JavaScript para buscar dados no endereço da API (`localhost:5000`).

> ⚠️ É necessário que o servidor esteja rodando para que os dados apareçam na tela.

---

## 🚀 Como Executar

```bash
# Passo 1: Certifique-se de que o servidor (API) está ativo

# Passo 2: Abra o arquivo index.html no navegador
# Recomendado: use a extensão Live Server do VS Code para garantir
# que o script.js e o style.css sejam carregados corretamente

# Passo 3: A interface irá carregar automaticamente os livros
# e banners vindos do servidor
```

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML | Estrutura da página |
| Tailwind CSS | Estilização |
| JavaScript (Fetch API) | Consumo da API e renderização dinâmica |
