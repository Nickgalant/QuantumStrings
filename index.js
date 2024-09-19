import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/post", (req, res) => {
    res.render("post.ejs");
});

// Array para armazenar os artigos
let artigos = [];

app.post("/submit", (req, res) => {
    const novoArtigo = {
        titulo: req.body.titulo,
        texto: req.body.texto
    };
    
    // Adiciona o novo artigo ao array
    artigos.push(novoArtigo);
    
    res.render("index.ejs", { artigos });
});

app.get("/", (req, res) => {
    // Renderiza a página com todos os artigos ao carregar
    res.render("index.ejs", { artigos });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});