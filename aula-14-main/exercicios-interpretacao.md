
# Interpreta��o de c�digo

Tente responder os exerc�cios dessa se��o sem executar o c�digo.  
Se ficar muito dif�cil, pode rodar no seu computador para analisar e pensar sobre o resultado.

---

#### 1. Leia o c�digo.

```
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [ "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish" ], 
	transmissoesHoje: [
		{ canal: "Telecine", horario: "21h" }, 
		{ canal: "Canal Brasil", horario: "19h" }, 
		{ canal: "Globo", horario: "14h" }
	]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
```

O que vai ser impresso no console?

---

#### 2. Leia o c�digo.

```
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
```

a) O que vai ser impresso no console?

b) O que faz a sintaxe dos tr�s pontos antes do nome de um objeto?

---

#### 3. Leia o c�digo.

```
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
```

a) O que vai ser impresso no console?

b) Explique o valor impresso no console. Voc� sabe por que isso aconteceu?
