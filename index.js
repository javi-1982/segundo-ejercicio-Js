const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 380,
    ingredientes: ["Muzzarella","Tomate","Queso Azul","Parmesano","Roquefort",],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// a) Las pizzas que tengan un id impar
const pizzasIdImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);
console.log("A) Las pizzas con ID impar son:", pizzasIdImpar);


// b) ¿Hay alguna pizza que valga menos de $600?
const pizzasBaratas = pizzas.filter(pizza => pizza.precio <600);
console.log("B) Las pizzas que valen menos de $600 son:");
pizzasBaratas.forEach(pizza => {
  console.log(`La ${pizza.nombre}: $${pizza.precio}`);
});


// c) El nombre de cada pizza con su respectivo precio
console.log("C) Nombre y precio de cada pizza:");
pizzas.forEach(pizza => {
  console.log(`${pizza.nombre}: $${pizza.precio}`);
});


// d) Todos los ingredientes de cada pizza
console.log("D) Ingredientes de cada pizza:");
pizzas.forEach(pizza => {
  console.log(`*La ${pizza.nombre} lleva:`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log(`- ${ingrediente}`);
  });
});
