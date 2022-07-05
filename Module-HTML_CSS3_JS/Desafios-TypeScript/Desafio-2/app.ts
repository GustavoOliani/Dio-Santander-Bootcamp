// Como podemos melhorar esse código usando TS?

interface Pessoa {
    nome: String;
    idade: number;
    profissao: Profissao;
}

enum Profissao {
    Atriz = "Atriz",
    Padeiro = "Padeiro",
}

let pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz,
};


let pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro,
}

let pessoa3: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz,
};

let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro,
}