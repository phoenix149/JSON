// Exercice 1 : 

// Je déclare une variable qui prendra la valeur que l'utilisateur aura saisie au clavier
let i_Ageenfant = parseInt(prompt("Entrez l'age de l'enfant dont vous souhaitez connaitre la catégorie" +"\n"+ "exemple : votre enfant à 8 ans écrivez 8"));

// Si l'âge saisie par l'utilisateur est supérieur ou égale à 6 et si il est inférieur ou égale à 7 affiche le message : Qu'il fait partie de la catégorie Poussin.
if (i_Ageenfant >= 6 && i_Ageenfant <=7) {
    alert("Votre enfant est dans la catégorie Poussin");

}
// Si l'âge saisie par l'utilisateur est supérieur ou égale à 8 et si il est inférieur ou égale à 9 affiche le message : Qu'il fait partie de la catégorie Pupille.
else if (i_Ageenfant >= 8 && i_Ageenfant <=9){
    alert("Votre enfant est dans la catégorie Pupille");
}
// Si l'âge saisie par l'utilisateur est supérieur ou égale à 10 et si il est inférieur ou égale à 11 affiche le message : Qu'il fait partie de la catégorie Minime.
else if (i_Ageenfant >=10 && i_Ageenfant <=11) {
    alert ("Votre enfant est dans la catégorie Minime");
}
// Si l'âge saisie par l'utilisateur est supérieur à 12 affiche le message : Qu'il fait partie de la catégorie Cadet.
else if (i_Ageenfant >12) {
    alert("Votre enfant est dans la catégorie Cadet");
}
// Si l'âge saisie par l'utilisateur est inférieur à 6 ou si l'utilisateur n'a pas écrit l'âge correctement affiche ce message :
else {
    alert("Votre enfant n'a pas l'âge requis, ou l'âge que vous avez saisie n'est pas valide")
}

