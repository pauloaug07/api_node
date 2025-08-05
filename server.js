import express, { json } from 'express'

const app = express()
app.use(express.json())

const usuarios = []

// ROTAS
app.get('/cadastro', (req, res) => {
    res.status(200).json(usuarios)
    // res.send('Deu certo o GET')
})

app.post('/cadastro', (req, res) => {
    // console.log(req.body)
    usuarios.push(req.body)
    // res.status(201).send('Deu bom no POST')
    res.status(201).json(req.body)
})

// PORTA LOCAL DO SERVIDOR
app.listen(3000, () => {
    console.log('Servidor rodando')
})