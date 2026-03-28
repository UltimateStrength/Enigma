# 🔍 Enigma — IDK Riddle

Site de enigma em camadas com servidor próprio — o jogador avança de nível em nível resolvendo os puzzles. Hospedado no Render com um backend Node.js que rastreia estatísticas globais de participação.

🔗 **[Jogar agora](https://enigma-site.onrender.com/)**

> ⚠️ O Render desliga instâncias inativas no plano gratuito — pode demorar alguns segundos na primeira abertura.

## 🎮 Como funciona

O jogador acessa a homepage e inicia o riddle. Cada nível é uma página separada com um enigma a ser resolvido. O servidor registra entradas e conclusões, exibindo estatísticas em tempo real na página inicial:

- Quantidade de pessoas que acessaram o site
- Quantidade de pessoas que completaram o riddle
- Percentual de conclusão geral
- Número total de níveis

## 🧠 Arquitetura

O projeto tem separação clara entre frontend e backend:

```
Enigma/
├── server.js           # Servidor Express — rotas e lógica principal
├── database.json       # "Banco de dados" local (JSON) para persistência de stats
├── package.json        # Dependências: Express + path
├── index.html          # Homepage com estatísticas e botão de início
├── pages/              # HTMLs de cada nível do riddle
├── scripts/            # Scripts JS do frontend
├── css/                # Estilos
├── assets/             # Imagens e recursos
├── start/              # Página/lógica de início do jogo
└── .github/workflows/  # CI/CD (GitHub Actions)
```

**Fluxo de dados:**
- O `server.js` serve os arquivos estáticos e expõe endpoints para ler/atualizar o `database.json`
- O frontend consulta o servidor para exibir as stats atualizadas na homepage
- Cada entrada no site incrementa o `entranceCount` no JSON

## 🛠️ Tecnologias

- **Backend:** Node.js + Express
- **Persistência:** JSON file (`database.json`)
- **Frontend:** HTML / CSS / JavaScript vanilla
- **Deploy:** [Render](https://render.com)
- **CI/CD:** GitHub Actions

## 🚀 Rodando localmente

```bash
git clone https://github.com/UltimateStrength/Enigma.git
cd Enigma
npm install
npm start
# acesse http://localhost:3000
```

## 📌 Contexto

Projeto pessoal para explorar desenvolvimento fullstack pela primeira vez — servidor Node.js real, persistência de dados, deploy em produção e múltiplas páginas interligadas com lógica de progressão. O riddle em si ficou inacabado (0% de conclusão até agora), mas toda a infraestrutura está funcionando.
