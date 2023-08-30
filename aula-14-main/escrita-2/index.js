
/**
 * 
 * Resolva os passos a seguir
 * 
 * a) Crie dois "objetos" diferentes com as seguintes propriedades: nome, idade e profiss�o. 
 * 
 * b) Escreva uma "fun��o" que receba um "objeto" de cada vez e retorne um "array" com as seguintes informa��es:
 * - O valor de "nome".
 * - O numero de caracteres do valor "nome".
 * - O valor de "idade".
 * - O valor de "profiss�o".
 * - O numero de caracteres do valor "profiss�o".
 * 
**/

/*
const pessoa = {
	nome: "Bruno", 
	idade: 23, 
	profissao: "Instrutor"
}


function minhaFuncao(pessoa) {
	let resultado = []

	// Desenvolver sua logica

	return resultado
}


console.log(minhaFuncao(pessoa))
// Retorno: ["Bruno", 5, 23, "Instrutor", 9]
*/

const pessoa1 = {
	nome: "Jorge",
	idade: 43,
	profissao: "jardineiro"
}

const pessoa2 = {
	nome: "Antônio",
	idade: 25,
	profissao: "servente de pedreiro do Pedro"
}

function atividadeB (e) {
	let resultado = []

	resultado.push( e.nome )
	resultado.push( e.nome.length )
	resultado.push( e.idade )
	resultado.push( e.profissao )
	resultado.push( e.profissao.length )
	return resultado
}

console.log(atividadeB(pessoa1))
console.log(atividadeB(pessoa2))
