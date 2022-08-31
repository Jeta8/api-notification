const json = require('body-parser/lib/types/json');
const app = require('./config/express')();
const port = app.get('port');
const jsonData= require('./data/notificacoes.json'); 


function Notificacoes(request, response)
{
  console.log("recebeu")
  return response.status(200).json(jsonData)
}

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

app.get('/', Notificacoes);
