import express from 'express';

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Opa, servidor rodando na porta 3000')
});
// app.get('/escolas',(req,res)=>{
//     res.send('rota de escolas')
// });
// app.get('/users',(req,res)=>{
//     res.send('rota de usuarios')
// });

app.listen(port,()=>{
    console.log('Exemplo de porta rodando na 3000')
});
