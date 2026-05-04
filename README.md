
PROJETO: LIVRARIA MACKENZIE - ARQUITETURA CLEAN
=

1. ARQUITETURA DO PROJETO
   
-------------------------
O projeto segue os princípios da Clean Architecture, garantindo que a lógica de 
negócio esteja separada da interface e do armazenamento de dados.

[Apresentação / View]
- Local: src/presentation/templates
- O que faz: Contém os ficheiros HTML e CSS (Tailwind) que o utilizador vê.

[Controlador / Controller]
- Local: src/presentation/controller.py
- O que faz: Recebe os dados da rota e prepara-os para serem exibidos na View.

[Aplicação / Service]
- Local: src/app/service.py
- O que faz: Contém as regras de negócio. Ex: calcular qual banner exibir 
  com base no mês ou filtrar livros com as suas respetivas notas.

[Persistência / Infrastructure]
- Local: src/infrastructure/persist.py
- O que faz: Lê e escreve nos ficheiros de texto (livros.txt, promocao.txt, avaliacao.txt).

[Domínio / Entidades]
- Local: src/domain/
- O que faz: Define os modelos de dados e as interfaces (contratos) do sistema.


2. FEATURE IMPLEMENTADA
   
-------------------------
- Múltiplas Avaliações: Suporte para exibir várias críticas e notas de diferentes 
  leitores para o mesmo livro (leitura de ficheiro TXT com tratamento de vírgulas).


3. COMO EXECUTAR O PROJETO
   
-------------------------
Passo 1: Criar o ambiente virtual
```
    python -m venv venv
```
Passo 2: Ativar o ambiente (Windows)
```
    .\venv\Scripts\activate
```
Passo 3: Instalar as dependências
```
    pip install flask
```
Passo 4: Rodar a aplicação
```
    python app.py
```
Acesse no navegador: http://127.0.0.1:5000

