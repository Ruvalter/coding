var animals = [
  {
    name: 'Caro',
    type: 'Cat',
    value: 99.99
  },
  {
    name: 'Bob',
    type: 'Cat',
    value: 109.99
  },
  {
    name: 'Fido',
    type: 'Dog',
    value: 88.00
  },
  {
    name: 'Flufkins',
    type: 'Rabbit',
    value: 100.00
  },
  {
    name: 'Snow Ball',
    type: 'Rabbit',
    value: 89.99
  }
]

// var myAnimal = new Object(animals)

// myAnimal.bla = 3;

// myAnimal.description = function(index) {
//   console.log("I am " + animals[index].name + " and I am a " + animals[index].type);
// }

// myAnimal.description(4);

//instancia(Objeto criado através de uma classe), classe(Pode receber argumentos, atributos e metodos customizados) , objeto e função

 // - como criar uma classe em JS
 // - como instanciar uma classe em JS object istance

// Exercicios:

// 1 - criar uma classe Animal que vai receber os dados de animais e ter elas como atributos,
// ela deve ter um método description que deve printar "I'm <name> and i am a <animal>".

// Ex:

// data = {
//   name: 'Snow Ball',
//   type: 'Rabbit',
//   value: 89.99
// }

// var rabbit = new Animal(data)

// rabbit.description()

// => I'm Snow Ball and i am a rabbit

function Animal (data) {
    this.name = data.name
    this.type = data.type
    this.value = data.value

    this.description = function () {
      console.log("I am", this.name, "and I am a", this.type)
    }
}

// var data = animals[3]

// var rabbit = new Animal(animals[3])
// var cat1 = new Animal(animals[1])
// var cat2 = new Animal(animals[0])
// var dog = new Animal(animals[2])





//olhar o map

// 2 - Criar uma classe Zoo, que tem um metodo getAnimal que deve receber um animal como argumento e
// adicioná-lo em um vetor de animais que ele possui.



function Zoo () {
  this.animals = []
  this.getAnimal = function (newAnimal) {
    this.animals.push(newAnimal)
  }
  this.showValues = function () {
    var totalSum = 0
    this.animals.forEach(function (animal){
      totalSum += animal.value
    })
    return totalSum
  }
  this.showByCategories = function (category) {
    var filteredAnimals = this.animals.filter(function(animal){
      return category.toLowerCase() == animal.type.toLowerCase()
    })

    //operador ternário (apenas para ifs simples)
    return filteredAnimals.length == 0 ? "Nenhum animal nesta categoria" : filteredAnimals.length

    //javaScript funcional
    // if (filteredAnimals.length == 0) {
    //   return "Nenhum animal nesta categoria"
    // }


    //javaScript padrão
    // var totalBycategory = 0
    // this.animals.forEach(function (animal){
    //   if (category.toLowerCase() == animal.type.toLowerCase()) {
    //     totalBycategory += 1
    //   }
    // })
    // if (totalBycategory == 0) {
    //   return "Nenhum animal nesta categoria"
    // }
    // return totalBycategory
  }
}

// var zoo = new Zoo()
// zoo.getAnimal(rabbit)
// zoo.getAnimal(dog)
// zoo.getAnimal(cat1)


//instanciando
var result = animals.map(function (item) {
  return new Animal(item)
})

result.forEach(function (item) {
  zoo.getAnimal(item)
})



console.log(zoo)


// 3 - Deve também ter um método showValues que deve
// mostrar o valor total da somatoria dos animais.

console.log(zoo.showValues())


// 4 - Deve também possuir um método que deve mostrar
// a quantidade de animais por tipo, showByCategories, ela deve receber um argumento, onde,
// deve se filtrar por categoria escrita. Se ela não existir, mostrar mensagem de erro, e se não for
// dado nenhuma categoria, mostrar de todos:

console.log(zoo.showByCategories("cat"))





// zoo.showByCategories()

// => Rabbit: 1




// 5 - Criar na classe zoo um metodo animalsNames que retorna somente o nome dos animais que possui. (usar o map)




console.log(zoo)












