// Exercice 5 : 

//énoncé :

// Les élections législatives, en Guignolerie Septentrionale, obéissent à la règle suivante :
// lorsque l'un des candidats obtient plus de 50% des suffrages, il est élu dès le premier tour.
// en cas de deuxième tour, peuvent participer uniquement les candidats ayant obtenu au moins 12,5% des voix au premier tour.
// Vous devez écrire un algorithme qui permette la saisie des scores de quatre candidats au premier tour. Cet algorithme traitera ensuite le candidat numéro 1 (et uniquement lui) : il dira s'il est élu, battu, s'il se trouve en ballottage favorable 
// (il participe au second tour en étant arrivé en tête à l'issue du premier tour) ou défavorable (il participe au second tour sans avoir été en tête au premier tour)

let candidat1 = parseFloat(prompt("Saisissez combien de % le Candidat 1 a obtenu au premier tour"));
let candidat2 = parseFloat(prompt("Saisissez combien de % le Candidat 2 a obtenu au premier tour"));
let candidat3 = parseFloat(prompt("Saisissez combien de % le Candidat 3 a obtenu au premier tour"));
let candidat4 = parseFloat(prompt("Saisissez combien de % le Candidat 4 a obtenu au premier tour"));

// Cette condition là sert à tester si la somme de tous les % des candidats est bien égale à 100%
if (candidat1 + candidat2 + candidat3 + candidat4 == 100) {
    // Si le % obtenu par le candidat numéro 1 est supérieur à 50 alors il est élu directement
    if (candidat1 > 50) {
        alert("Le candidat numéro 1 a été élu(e) directement en obtenant la majorité des voix, il n'y aura donc pas de second tour");
    }
    // Sinon si le candidat a obtenu au moins 12.5% et qu'aucun autre candidat n'a obtenu plus de 50% alors il est qualifié pour le second tour 
    else if (candidat1 >= 12.5 && candidat2 < 50 && candidat3 < 50 && candidat4 < 50) {
        // Si le candidat a obtenu plus de % que tous les autres candidats alors il est qualifié pour le second tour en étant en tête des suffrage
        if (candidat1 > candidat2 && candidat1 > candidat3 && candidat1 > candidat4) {
            alert("Le candidat1 se qualifie pour le second tour en étant en tête des suffrages !");
        }
        // Sinon il est qualifié, mais il n'est pas en tête des suffrages.
        else {
            alert("Le candidat1 se qualifie au second tour mais n'est pas en tête des suffrages.");
        }
    }
    //Sinon le candidat 1 est éliminé.
    else {
        alert("Le candidat 1 est éliminé, il pourra retenter sa chance aux prochaines élections");
    }

}
// Sinon (la somme de % obtenu par l'ensemble des candidat est != 100)  
else {
    alert("Les taux que vous avez saisie sont invalides, les votes ont été truqués !");
}    
