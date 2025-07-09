# Teste Técnico Front-end BeTalent

Este é um repositório para Testes Técnicos em Front-end da Be. Ele é destinado a pessoas que participam de nossos processos seletivos. 

# Teste Prático - Frontend

Este projeto é um teste prático de Frontend utilizando **React**, **TypeScript**, **TailwindCSS**, e **Vite**. O objetivo é consumir dados de uma API mockada (com `json-server`) para listar e gerenciar informações de funcionários de forma simples, clara e funcional.

---

## 🔗 Acesse o projeto online

O frontend foi **hospedado na Vercel**, o que permite fácil acesso e compartilhamento. Você pode visualizar a aplicação rodando aqui:

👉 [https://testepraticofrontend.vercel.app/](https://testepraticofrontend.vercel.app/)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia     | Função Principal                            |
|----------------|----------------------------------------------|
| React          | Biblioteca para construção da interface      |
| TypeScript     | Tipagem estática para maior confiabilidade   |
| Vite           | Bundler moderno para desenvolvimento rápido  |
| Tailwind CSS   | Utilitário para estilização responsiva       |
| Axios          | Cliente HTTP para requisições à API          |
| React Icons    | Biblioteca de ícones                         |
| JSON Server    | Mock da API REST para simulação de backend   |

---

## 📁 Estrutura do Projeto

```bash
TESTEPRATICOFRONTEND/
├── db.json                  # Mock da API local
└── tabela-funcionarios/    # Aplicação React
    ├── public/
    ├── src/
    │   ├── components/      # Componentes reutilizáveis
    │   ├── services/        # Integração com API (axios)
    │   ├── App.tsx
    │   └── main.tsx
    └── package.json


🚀 Como Rodar o Projeto Localmente

1. Clone o repositório

git clone https://github.com/IagoSantos123/TESTEPRATICOFRONTEND.git
cd TESTEPRATICOFRONTEND


2. Instale as dependências do projeto React

cd tabela-funcionarios
npm install


3. Instale o JSON Server (se ainda não tiver instalado)

npm install -g json-server


4. Inicie o mock da API Na raiz do projeto (onde está o db.json):

json-server --watch db.json --port 3001

A API estará disponível em: http://localhost:3001/employees

5. Inicie a aplicação React
Em uma nova aba do terminal:

cd tabela-funcionarios
npm start


A aplicação abrirá em: http://localhost:5173


