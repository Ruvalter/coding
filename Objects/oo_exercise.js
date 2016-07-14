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

// 2 - Criar uma classe Zoo, que tem um metodo getAnimal que deve receber um animal como argumento e
// adicioná-lo em um vetor de animais que ele possui.

// 3 - Deve também ter um método showValues que deve
// mostrar o valor total da somatoria dos animais.

// 4 - Deve também possuir um método que deve mostrar
// a quantidade de animais por tipo, showByCategories, ela deve receber um argumento, onde,
// deve se filtrar por categoria escrita. Se ela não existir, mostrar mensagem de erro, e se não for
// dado nenhuma categoria, mostrar de todos:

// var zoo = new Zoo()

// zoo.getAnimal(rabbit)

// zoo.showValues()

// => The zoo has animals on total of 89.99 $

// zoo.showByCategories()

// => Rabbit: 1

// 5 - Criar na classe zoo um metodo que retorna somente o nome dos animais que possui.
