window.addEventListener("load", function() {
    /*Here is the main function*/
    //liste
    initFunction();
    <table>
    <caption>liste</caption>
    <thead>
        <tr>
            <th> Bâtiments</th>            
            <th> Salles</th>            
            <th> Réservations</th>            
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> Nautibus</td>
            <td> TP3</td>
            <td> Monsieur SNIP</td>
        </tr>   
        <tr>
            <td> Déambulatoire</td>
            <td> Amphie 4</td>
            <td> Madame Quelquonque</td>
        </tr>   
        <tr>
            <td> Thémis</td>
            <td> TD53</td>
            <td> Colonel Moutarde</td>
        </tr>   
    </tbody>

</table>


function coloriertableau(){
var arrayLignes = document.getElementById("monTableau").rows; //l'array est stocké dans une variable

var longueur = arrayLignes.length;//on peut donc appliquer la propriété length

var i=0; //on définit un incrémenteur qui représentera la clé


while(i<longueur)

    {

        if(i % 2 == 0)//si la clé est paire

        {

            arrayLignes[i].style.backgroundColor = "#bdcbf5";

        }

        else //elle est impaire

        {

            arrayLignes[i].style.backgroundColor = "#829eeb";

        }

        i++;

    }
}
//    function initFunction(){
//    }
});