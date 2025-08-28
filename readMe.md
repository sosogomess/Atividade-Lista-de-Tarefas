# 💄 Lista de Produtos de Maquiagem

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Async Storage](https://img.shields.io/badge/AsyncStorage-3178C6?style=for-the-badge&logo=react&logoColor=white)

Um aplicativo elegante e funcional para gerenciar sua lista de produtos de maquiagem favoritos, desenvolvido com React Native e AsyncStorage.

## ✨ Funcionalidades

- **Persistência de dados** - Seus produtos salvos permanecem mesmo após fechar o aplicativo
- **Interface amigável** - Design intuitivo com tema de maquiagem em tons de rosa
- **Gerenciamento completo** - Adicione, visualize e exclua produtos facilmente
- **Experiência responsiva** - Funciona em diversos tamanhos de tela

## 📱 Telas

### Tela Principal
- Lista de produtos salvos anteriormente
- Campo para adicionar novos produtos
- Botão para adicionar produto à lista
- Botão para limpar toda a lista

### Visualizações
- Lista vazia: Mensagem amigável quando não há produtos cadastrados
- Lista com produtos: Visualização clara com opção de exclusão individual

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **AsyncStorage** - Sistema de armazenamento local para persistência de dados
- **Componentes Funcionais** - Utilizando Hooks como useState e useEffect
- **FlatList** - Renderização eficiente de listas

## 📋 Requisitos Implementados

- [x] Tela inicial mostrando os produtos já salvos
- [x] Campo de texto para digitar um novo produto
- [x] Botão "Adicionar" que salva o produto no AsyncStorage
- [x] Exibição da lista de produtos (usando FlatList)
- [x] Funcionalidade para excluir um produto da lista
- [x] Botão "Limpar Tudo" que apaga todos os produtos
- [x] Mensagem amigável quando não há produtos cadastrados

## 🚀 Como Usar

1. Digite o nome do produto de maquiagem no campo de texto
2. Clique em "Adicionar" para salvar o produto na lista
3. Para remover um produto individual, clique no "✖" ao lado do nome
4. Para limpar toda a lista, use o botão "Limpar Tudo"

## 📥 Como Clonar

Deseja experimentar este aplicativo? Siga estas etapas:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/meu-app-storage.git

# Navegue até o diretório do projeto
cd meu-app-storage

# Instale as dependências
npm install

# Execute o aplicativo
npm start