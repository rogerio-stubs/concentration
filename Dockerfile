# Use a imagem oficial do Node.js 17 como base
FROM node:17

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos de configuração
COPY package*.json ./
COPY tsconfig.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do aplicativo
COPY . .

# Build do aplicativo
RUN npm run build

# Exponha a porta em que o aplicativo estará em execução
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:dev"]
