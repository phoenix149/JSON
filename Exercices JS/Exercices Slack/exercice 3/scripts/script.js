// Exercice 3 : 

// Un magasin de reprographie facture 0,10 E les dix premières photocopies, 0,09 E les vingt suivantes et 0,08 E au-delà. Ecrivez un algorithme qui demande à l’utilisateur le nombre de photocopies effectuées et qui affiche la facture correspondante. (demandez à votre formateur plus de précisions sur l'attendu) 

let i_Nbphotocopies = parseInt(prompt("Saisissez le nombre de photocopie(s) désirée(s)"));
let f_PAP;
let f_P10premiere ;
let f_p20suivante;
let f_Prestant;
let i_Nbrestant;
let f_prixnbrestant; 

if (i_Nbphotocopies <= 10) {
    f_PAP = i_Nbphotocopies*0.10;
    alert("Le prix à payer est de : "+f_PAP+"€");
}

else if (i_Nbphotocopies > 10 && i_Nbphotocopies <=30){
    i_Nbrestant = i_Nbphotocopies - 10;
    f_prixnbrestant = i_Nbrestant * 0.09;
    f_P10premiere = 0.10*10;
    f_PAP = f_prixnbrestant+f_P10premiere;

    alert("Le prix à payer est de : "+f_PAP+"€");
}

else {
    i_Nbrestant = i_Nbphotocopies-30;
    f_P10premiere = 0.10*10;
    f_p20suivante = 0.09*20;
    f_Prestant = i_Nbrestant*0.08;
    f_PAP = f_P10premiere+f_p20suivante+f_Prestant;

    alert("Le prix à payer est de : "+f_PAP+"€");
}
    



