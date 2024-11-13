// Exercice 4 : 

// Les habitants de Zorglub paient l’impôt selon les règles suivantes :
// les hommes de plus de 20 ans paient l’impôt
// les femmes paient l’impôt si elles ont entre 18 et 35 ans
// les autres ne paient pas d’impôt
// Le programme demandera donc l’âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le fait que l’habitant est imposable.

alert("Bienvenue sur l'application des impôts de Zorglub, ensemble nous allons vérifier si vous êtes impôsable ou non");
let s_Sexe = prompt("Quel est votre sexe ? " + "\n" + "\n" + "Entrez M si vous êtes un male" + "\n" + "\n" + "Entrez F si vous êtes une femelle");
let i_Age = parseInt(prompt("Quel est vôtre âge ?"));

// Si le sexe entré est M et que son age est supérieur à 20 affiche "Félicitation, vous êtes imposable"
// Si le sexe entré est F et que l'âge est supérieur ou égale 18 et l'age saisie est inférieur ou égale à 35 affiche "Félicitation, vous êtes imposable"   
if ((s_Sexe == "M" && i_Age > 20) || (s_Sexe == "F" && i_Age >= 18 && i_Age <= 35)) {
    alert("Félicitation, vous êtes impôsable");
    
}
// Sinon dans tous les autres cas affiche "Malheureusement, vous n'êtes pas imposable."
else {
    alert("Malheureusement, vous n'êtes pas impôsable ou la saisie que vous avez effectuée est incorrecte.");

}