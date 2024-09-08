import express from "express";
import bodyParser from "body-parser";
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), 'views', 'index.ejs');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return NextResponse.json({ content: fileContent });
}

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/post", (req, res) => {
    res.render("post.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});