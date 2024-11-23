//Avec cette variable je récupère mon bouton
let bouton = document.getElementsByClassName('button')[0];
//Je récupère le wrapper
let slo_pizza = document.getElementsByClassName('wrapper')[0];
//Je récupère le preview
let pizza = document.getElementsByClassName('preview')[0];

//Je lui dis si j'appui sur le bouton tu vas chercher les info de pizzas.json
bouton.addEventListener('click', function () {
    fetch('./pizzas.json')
        //Première promesse
        .then((slo_pizza) => slo_pizza.json())
        //Ensuite je crée ma deuxième variable avec une deuxième promesse
        .then((slo_pizza2) => {
            //J'affiche dans la console 
            console.log(slo_pizza2);
            //J'appelle ma fonction slo
            pizza_Appear(slo_pizza2);

        });
})
function pizza_Appear(slo_pizza2) {
    //là je réinitialise mon preview pour éviter que chaque fois que j'appui sur le bouton ma fonction s'éxécute et que ça s'accumule 
    pizza.innerHTML = "";
    //Je commence par créer une variable titre dont le but va être de récupérer le Nom du restau et de l'écrire dans un h1
    let titre = document.createElement("h1");
    titre.setAttribute("class", "header");
    titre.innerHTML = slo_pizza2.Name;
    pizza.appendChild(titre);
    //là je fais la même chose avec le slogan mais cette fois dans un h2
    let slogan = document.createElement("h2");
    slogan.setAttribute("class", "header");
    slogan.innerHTML = slo_pizza2.Slogan;
    pizza.appendChild(slogan);
    //Je crée une section qui va contenir mais pizza en lui donnant une id pizzaSection
    let pizzaSection = document.createElement('section');
    pizzaSection.setAttribute("id", "pizzaSection");

    //Ensuite première boucle vu qu'on veux que notre client puisse ajouter autant de pizza qu'il le souhaite mais que ça continue à fonctionner
    //Donc tant que i < au nombre de pizza contenue dans notre fichier json il fait tout ce qui suit  
    for (let i = 0; i < slo_pizza2.Pizzas.length; i++) {
        //Je crée un article avec une variable pizzaArticle où je viens mettre une class pizzaInfo
        let pizzaArticle = document.createElement('article');
        pizzaArticle.setAttribute("class", "pizzaInfo");
        //Ensuite à l'intérieur je viens créer un h1 pour mettre le nom de la pizza en indiquant l'indice de la pizza
        let namePizza = document.createElement("h1");
        namePizza.innerHTML = slo_pizza2.Pizzas[i].Nom;
        //Je fais la même chose pour le prix mais cette fois-ci dans un h2
        let pricePizza = document.createElement("h2");
        pricePizza.innerHTML = slo_pizza2.Pizzas[i].Prix;
        //Ensuite je viens créer un image qui prendra comme source la valeur de la propriété Image pour la pizza[i]
        let imgPizza = document.createElement("img");
        imgPizza.src = slo_pizza2.Pizzas[i].Image;
        imgPizza.setAttribute("class", "img")
        //Je les fais apparaitre
        pizzaArticle.appendChild(namePizza);
        pizzaArticle.appendChild(pricePizza);
        pizzaArticle.appendChild(imgPizza);
        //Je crée ma variable liste pour mettre mon ul où je mettrais mes li avec chaque ingrédients
        let liste = document.createElement('ul');

        //Ensuite j'ai ma deuxième boucle toujours à l'intérieur de ma première qui va me permetre d'afficher un li par ingrédient
        for (let j = 0; j < slo_pizza2.Pizzas[i].Ingredients.length; j++) {

            let listeIngredients = document.createElement('li');
            listeIngredients.innerHTML = slo_pizza2.Pizzas[i].Ingredients[j];
            liste.appendChild(listeIngredients);

        }
        //Je fais apparaitre ma liste en dehors de ma deuxième boucle mais toujours dans la première et mon Article qui contient chaque pizza
        pizzaArticle.appendChild(liste);
        pizzaSection.appendChild(pizzaArticle);

    }
    // Et enfin je fais apparaitre ma pizza section qui contient tous mes articles
    pizza.appendChild(pizzaSection);
}