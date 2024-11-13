// Exercice 2 : 

// Énoncé : Cet algorithme est destiné à prédire l'avenir, et il doit être infaillible !
// Il lira au clavier l’heure et les minutes, et il affichera l’heure qu’il sera une minute plus tard.
// Par exemple, si l'utilisateur tape 21 puis 32, l'algorithme doit répondre :
// "Dans une minute, il sera 21 heure(s) 33".
// NB : on suppose que l'utilisateur entre une heure valide. Pas besoin donc de la vérifier.
// De même que le précédent, cet algorithme doit demander une heure et en afficher une autre. Mais cette fois, il doit gérer également les secondes, et afficher l'heure qu'il sera une seconde plus tard.
// Par exemple, si l'utilisateur tape 21, puis 32, puis 8, l'algorithme doit répondre : "Dans une seconde, il sera 21 heure(s), 32 minute(s) et 9 seconde(s)".
// NB : là encore, on suppose que l'utilisateur entre une date valide

let i_Heuresaisie = parseInt(prompt("Saisissez l'heure"));
let i_Minutesaisie = parseInt(prompt("Saisissez les minutes"));
let i_Secondessaisie = parseInt(prompt("Saisissez les secondes"));
let select = parseInt(prompt("Que souhaitez vous faire ? "+ "\n" + "Tapez 1 pour savoir quelle heure il sera dans 1 heure."+ "\n" + "Tapez 2 pour savoir quelle heure il sera dans 1 minutes."+ "\n" + "Tapez 3 pour savoir quelle heure il sera dans 1 seconde."));




// Je créer une fonction qui permettra de rajouter une heure à l'heure saisie pour pouvoir prédire le futur en tenant compte du format 24heures 
function Ajout_heure (){
    if (i_Heuresaisie<23){
        i_Heuresaisie++;
        
    }
    else {
    i_Heuresaisie= 0;
    }
}

// Je créer une fonction qui permettra de rajouter une minute à l'heure qui a été saisie en tenant compte qu'en rajoutant 1 minute à 59 je dois rajouter une heure (en appelant ma fonction Ajout_heure) et remettre à 0 les minutes 
function Ajout_minute () {
    if (i_Minutesaisie <59){
       i_Minutesaisie++;
    }
    else {
        i_Minutesaisie = 0;
        Ajout_heure();
    }

}

// Je créer une fonction qui permettra de rajouter une seconde à l'heure qui a été saisie en tenant compte qu'en rajoutant 1 seconde à 59 je dois rajouter une minute (en appelant ma fonction Ajout_minute) et remettre à 0 les secondes 
function Ajout_seconde () {
    if (i_Secondessaisie<59) { 
        i_Secondessaisie++;
        }

    else {
        Ajout_minute();
        i_Secondessaisie = 0;
    }
}



// Je créer un switch qui sera commandé par mon prompt select qui permettra à l'utilisateur de choisir ce qu'il veut faire et lui donner le résultat 
switch (select){

case 1:
    Ajout_heure(i_Heuresaisie,i_Minutesaisie,i_Secondessaisie);
    alert("Dans une Heure il sera : "+i_Heuresaisie+":"+i_Minutesaisie+":"+i_Secondessaisie);
    break ;

case 2: 
    Ajout_minute(i_Heuresaisie,i_Minutesaisie,i_Secondessaisie);
    alert("Dans une minute il sera : "+i_Heuresaisie+":"+i_Minutesaisie+":"+i_Secondessaisie);
    break;
case 3:
    Ajout_seconde(i_Heuresaisie,i_Minutesaisie,i_Secondessaisie);
    alert("Dans une seconde il sera : "+i_Heuresaisie+":"+i_Minutesaisie+":"+i_Secondessaisie);
    break;
default :
    alert("Selection invalide");
    break;     


}
