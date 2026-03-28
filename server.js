const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Caminho para o arquivo index.html
const indexPath = path.join(__dirname, 'start', 'index.html');

// Caminho para o arquivo database.json
const databasePath = path.join(__dirname, 'database.json');

// Rota para contar a entrada no site e redirecionar para index.html
app.get('/', (req, res) => {
  let entranceCount = getEntranceCount();
  entranceCount++;
  updateDatabase(entranceCount);

  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ocorreu um Erro ao Ler o Arquivo index.html:', err);
      return res.status(500).send('Ocorreu um Erro Interno do Servidor.');
    }

    // Atualizar as informações no HTML
    data = data.replace(/<span id="entrance-count">.*<\/span>/, `<span id="entrance-count">${entranceCount}</span>`);
    res.send(data);
  });
});

// Atualiza o valor da entrada no arquivo database.json
function updateDatabase(entranceCount) {
  const data = { entranceCount: entranceCount };
  fs.writeFile(databasePath, JSON.stringify(data), (err) => {
    if (err) {
      console.error('Ocorreu um Erro ao Atualizar o Arquivo database.json:', err);
    }
  });
}

// Obtém o valor da entrada do arquivo database.json
function getEntranceCount() {
  try {
    let data = fs.readFileSync(databasePath, 'utf8');
    let jsonData = JSON.parse(data);
    return jsonData.entranceCount;
  } catch (err) {
    console.error('Ocorreu um Erro ao Ler o Arquivo database.json:', err);
    return 0;
  }
}

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'assets')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'css')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'pages')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));
app.use(express.static(path.join(__dirname, 'scripts')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'start')));

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`⠀`);
  console.log(`Servidor Iniciado com Sucesso!`);
  console.log(`Porta do Servidor: ${PORT}`);
  console.log(`⠀`);
});
