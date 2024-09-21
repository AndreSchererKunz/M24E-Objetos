function Pessoa(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
}

Pessoa.prototype.displayInfo = function() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, altura: ${this.altura}`);
};

function Funcionario(nome, idade, altura, salario) {
    Pessoa.call(this, nome, idade, altura);
    this.salario = salario;
}

Funcionario.prototype = Object.create(Pessoa.prototype);
Funcionario.prototype.constructor = Funcionario;

Funcionario.prototype.displayInfo = function() {
    Pessoa.prototype.displayInfo.call(this);
    console.log(`Salario: ${this.salario}`);
};

function Estudante(nome, idade, altura, mensalidade) {
    Pessoa.call(this, nome, idade, altura);
    this.mensalidade = mensalidade;
}

Estudante.prototype = Object.create(Pessoa.prototype);
Estudante.prototype.constructor = Estudante;

Estudante.prototype.displayInfo = function() {
    Pessoa.prototype.displayInfo.call(this);
    console.log(`Mensalidade: ${this.mensalidade}`);
};

const funcionario1 = new Funcionario('Mateus', 40, '180cm', 5000);
const estudante1 = new Estudante('Alex', 20, '170cm', 400);
const funcionario2 = new Funcionario('Julia', 30, '160cm', 3000);

funcionario1.displayInfo();
estudante1.displayInfo();
funcionario2.displayInfo();