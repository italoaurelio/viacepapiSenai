# 🚀 Projeto de Estudo - Consulta de API com ViaCEP 📡

## 📌 Descrição
Este projeto foi desenvolvido como parte dos estudos no **SENAI** para entender o funcionamento de consultas a APIs. Utiliza a API do [ViaCEP](https://viacep.com.br/) para buscar informações de endereço a partir de um CEP informado pelo usuário. 🏡

## 🛠️ Tecnologias Utilizadas
- ⚡ **JavaScript**
- 🎨 **HTML**
- 💅 **CSS**
- 🔗 **Fetch API**

## ✨ Funcionalidades
✅ Entrada de um **CEP** pelo usuário 📍
✅ Requisição à API do **ViaCEP** 🌐
✅ Exibição dos dados do endereço retornado 🏠

## 🚀 Como Utilizar
1️⃣ **Clone este repositório:**
   ```sh
   git clone https://github.com/seu-usuario/projeto-viacep.git
   ```
2️⃣ **Acesse a pasta do projeto:**
   ```sh
   cd projeto-viacep
   ```
3️⃣ **Abra o arquivo `index.html` no navegador.** 🌍
4️⃣ **Digite um CEP e clique em "Buscar" para visualizar as informações do endereço.** 🔎

## 📝 Exemplo de Código
```js
async function buscarCEP(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data);
}
```

## 🔜 Próximos Passos
🚧 Criar um layout mais intuitivo para exibição das informações. 🎨
🚧 Implementar tratamento de erros para CEPs inválidos. ❌
🚧 Adicionar funcionalidade para salvar os últimos CEPs buscados. 💾

## 👨‍💻 Autor
📢 [Seu Nome] - Desenvolvedor em formação pelo **SENAI** 🎓
