
# Escrita de c�digo

---

#### 1. Resolva os passos a seguir

a) Crie um objeto. Ele deve conter duas propriedades: nome (`string`) e apelidos (um `array` que sempre ter� exatamente tr�s apelidos). Depois, escreva uma fun��o que recebe como entrada um `objeto` e imprime uma mensagem no modelo abaixo: 

```
// Exemplo de entrada
const pessoa = {
   nome: "Vitor Hugo", 
   apelidos: [ "Vitinho", "Vit�o", "Vit" ]
}

// Exemplo de sa�da
// "Eu sou Vitor, mas pode me chamar de: Vitinho, Vit�o ou Vit"
```
**Dica:** n�o se esque�a de chamar a fun��o passando o objeto que voc� criou como argumento, sen�o seu c�digo n�o ser� executado!

b) Agora, usando o operador `spread`, crie um novo `objeto` mantendo o valor da propriedade `nome`, mas com uma nova lista de tr�s apelidos. Depois, chame a fun��o feita no item anterior passando como `argumento` o novo `objeto`.

---

#### 2. Resolva os passos a seguir

a) Crie dois `objetos` diferentes com as seguintes propriedades: nome, idade e profiss�o. 

b) Escreva uma `fun��o` que receba um `objeto` de cada vez e retorne um `array` com as seguintes informa��es:

- O valor de `nome`.
- O numero de caracteres do valor `nome`.
- O valor de `idade`.
- O valor de `profiss�o`.
- O numero de caracteres do valor `profiss�o`.

```
const pessoa = {
	nome: "Bruno", 
	idade: 23, 
	profissao: "Instrutor"
}

function minhaFuncao(pessoa) {
	let resultado = []
	// desenvolver sua logica
	return resultado
}

console.log(minhaFuncao(pessoa))
// Retorno: ["Bruno", 5, 23, "Instrutor", 9]
```

---

#### 3. Resolva os passos a seguir

a) Crie uma vari�vel de escopo global que guarde um `array` vazio chamada `carrinho`.

b) Crie tr�s novos objetos que representem frutas de um sacol�o. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem come�ar como `true`).

c) Crie uma fun��o que **receba** um objeto fruta por **par�metro** e coloque-a dentro do `array` de `carrinho`. Invoque essa fun��o passando os tr�s objetos criados. Dica: aqui voc� deve usar o m�todo `push()`.

d) Imprima a vari�vel `carrinho` e garanta que ela agora seja um **`array` preenchido com tr�s objetos.**
