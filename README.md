# 📍 Buscar CEP

Aplicativo mobile desenvolvido com **Ionic + Angular** para consulta de CEPs brasileiros utilizando a API pública [ViaCEP](https://viacep.com.br/).

---

## 🚀 Funcionalidades

- Busca de endereço pelo CEP
- Exibição de logradouro, bairro, cidade e UF
- Histórico de CEPs consultados
- Tratamento de erros para CEPs inválidos ou não encontrados

---

## 🛠️ Tecnologias

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [RxJS](https://rxjs.dev/)
- [ViaCEP API](https://viacep.com.br/)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install

# Rode o projeto
ionic serve
```

---

## 📱 Como usar

1. Digite um CEP válido no campo de busca
2. Clique em **Buscar CEP**
3. O resultado será exibido na aba **Resultado**

---

## 📁 Estrutura principal

```
src/
├── app/
│   ├── services/
│   │   └── cep.ts        # Serviço de requisição à API ViaCEP
│   ├── tab1/             # Tela de busca
│   └── tab2/             # Tela de resultado
│   └── tab3/             # Histórico de CEPs proucurados

```

---

## 🌐 API utilizada

[ViaCEP](https://viacep.com.br/) — API gratuita e pública para consulta de CEPs brasileiros.

Exemplo de requisição:
```
GET https://viacep.com.br/ws/01001000/json/
```

---

