# Como fazer deploy do site Viver Saudável

## Passos para configurar o repositório

### 1. Criar o repositório no GitHub
- Nome: `viver.saudavel.github.io`
- Conta: `marciotrindadefilho`
- Repositório público

### 2. Clonar e configurar o projeto
\`\`\`bash
git clone https://github.com/marciotrindadefilho/viver.saudavel.github.io.git
cd viver.saudavel.github.io
\`\`\`

### 3. Instalar dependências
\`\`\`bash
npm install
\`\`\`

### 4. Testar localmente
\`\`\`bash
npm run dev
\`\`\`

### 5. Fazer build e export
\`\`\`bash
npm run build
npm run export
\`\`\`

### 6. Configurar GitHub Pages
1. Ir para Settings do repositório
2. Na seção "Pages"
3. Source: "GitHub Actions"
4. O workflow já está configurado em `.github/workflows/deploy.yml`

### 7. Push para o repositório
\`\`\`bash
git add .
git commit -m "Initial commit - Viver Saudável website"
git push origin main
\`\`\`

## URLs importantes

- **Repositório:** https://github.com/marciotrindadefilho/viver.saudavel.github.io
- **Site publicado:** https://marciotrindadefilho.github.io/viver.saudavel.github.io/
- **Actions:** https://github.com/marciotrindadefilho/viver.saudavel.github.io/actions

## Estrutura de deploy

O site é automaticamente publicado no GitHub Pages sempre que há um push para a branch `main`. O GitHub Actions:

1. Instala as dependências
2. Faz o build do Next.js
3. Exporta os arquivos estáticos
4. Publica na branch `gh-pages`

## Domínio customizado (opcional)

Para usar um domínio próprio:
1. Adicionar arquivo `CNAME` na pasta `public/`
2. Configurar DNS do domínio
3. Configurar no GitHub Pages settings

## Monitoramento

- Verificar Actions para status do deploy
- Testar site após cada atualização
- Monitorar performance e acessibilidade
