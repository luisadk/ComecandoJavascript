//FuncaoemJSéFirstClassObject(Citizens)
//Higher-order function

//criar de forma literal

function fun1() {}


//consigo armazenar em variavel

const fun2 = function() {} //Aqui ele chama uma funçao, posso INVOCAR a funçao chamando com o nome + os parênteses

//posso tbm colocar uma função dentro de um ARRAY:

const array = [function(a, b) {return a + b}, fun1, fun2] //pode armazenar num ARRAY tanto a funçao literal qto a funçao numa constante
console.log(array[0](2, 3))

//Armazenar funçao em um ATRIBUTO DO OBJETO tbm é muito simples:

const obj = {}
obj.falar = function() {return 'Opa'}

console.log(obj.falar())

//Passar funçao com parametro

function run(fun) {
    fun()

}

run(function() {console.log('Executando...')})


//Uma FUNÇAO que pode conter OUTRAS FUNÇOES:

function soma(a, b) {return function(c) {
        console.log(a + b + c)
}
}

soma(2,3)(4)

const cincoMais = soma(2, 3)
cincoMais(4) //POR QUE DESSE JEITO??!




