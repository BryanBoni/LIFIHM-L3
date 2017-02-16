window.addEventListener("load", function () {
    /*Here is the main function*/
    //liste
    initFunction();

    function initFunction(){
        var list = document.getElementById("list");
        list.innerHTML="<table>"
                + "<caption>Tableau des ressources</caption>"
                + "<thead>"
                + "<tr>"
                +"<th> Bâtiments</th>"            
                +"<th> Salles</th>"          
                +"<th> Réservations</th>"            
                +"</tr>" 
                +"</thead>"
                +"<tbody>"
                +"<tr>"
                +"<td> Nautibus</td>"
                +"<td> TP3</td>"
                +"<td> Monsieur SNIP</td>"
                +"</tr>"   
                +"<tr>"
                +"<td> Déambulatoire</td>"
                +"<td> Amphie 4</td>"
                +"<td> Madame Quelquonque</td>"
                +"</tr>"   
                +"<tr>"
                +"<td> Thémis</td>"
                +"<td> TD53</td>"
                +"<td> Colonel Moutarde</td>"
                +"</tr>"   
                +"</tbody>"
                +"</table>";
    }

//    function initFunction(){
//    }
});