import express from 'express'

import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express()
app.use(express.json())

// const usuarios = []

// Criando uma rota
app.post('/usuarios', async (req,res)=>{

    await prisma.usuario.create({
        data:{
            email:req.body.email,
            nome:req.body.nome,
            idade:req.body.idade
        }
    })

    res.status(201).json(req.body)
})

app.get('/usuarios', async (req,res)=>{
    
    const usuarios_db = await prisma.usuario.findMany()

    res.status(200).json(usuarios_db)
})

// PORTA LOCAL DO SERVIDOR
app.listen(3000, () => {
    console.log('Servidor rodando')
})