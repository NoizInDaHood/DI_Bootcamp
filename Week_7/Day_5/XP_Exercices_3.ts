// Exercise 3: Type Casting
// What You Will Learn
// Convert a variable from one type to another using type casting.
// Understand the difference between type casting and type assertions.
// Task
// Create a variable someValue of type any and cast it to a string. Then, use it as a string.

// 1. Création de la variable de type 'any'
let someValue: any = "Développeur TypeScript";

// 2. "Cast" (Assertion) vers le type string pour utiliser une méthode de string
// On utilise la syntaxe 'as' qui est la plus propre
let longueurTexte: number = (someValue as string).length;

// 3. Utilisation de la variable comme une string
let enMajuscules: string = (someValue as string).toUpperCase();

console.log(`Longueur : ${longueurTexte}`); // Affiche : Longueur : 21
console.log(`En majuscules : ${enMajuscules}`); // Affiche : EN MAJUSCULES : DÉVELOPPEUR TYPESCRIPT