//declaração e atribuição de um valor a uma variável (= para atribuir um valor)
let weight = 72.8

//retorna a variável mais um texto
console.log(`${weight} kg`) 

//atribuindo propriedades a um objeto (: para atribuir um valor nas variáveis dentro do objeto)
let student = {
    name: "Carol",
    age: 31,
    stars: 4.7,
    isSubscribed: true
}

//retorna o tipo da variável student
console.log(typeof student) 

//retorna os valores de dentro de student, mais a variável weight e um texto
console.log(`${student.name} de idade ${student.age} pesa ${weight} kg`) 

//atribuindo um objeto a um array 
let students = [student]

//retorna todo o objeto dentro do array
console.log(students)

//retorna o valor da variável na posição 0 do array 
console.log(students[0])