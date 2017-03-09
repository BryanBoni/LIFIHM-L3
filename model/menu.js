window.addEventListener("load", function () {
    /*Here is the main function*/


    initFunction();

    function initFunction() {
        var list = document.getElementById("list");
        var table = document.createElement("table");
        table.setAttribute("class", "table");

        list_creation(list, table);

        add_element(list, table, "Nautibus", "C4", "Salle déjà réservée");//test row.
        document.getElementById("add_element").addEventListener("click", function(){
            var values = document.getElementById("formulaire").getElementsByTagName("input");

            add_element(list, table, values[0].value, values[1].value, values[2].value);
            alert("Element ajouté à la liste");
        });
        
    }

    function list_creation(list, table) {
        var head = document.createElement("thead");
        var tr = document.createElement("tr");

        tr.innerHTML = "<th>Bâtiments</th> <th>Salles</th> <th>Réservation</th> <th></th>";

        head.appendChild(tr);
        table.appendChild(head);
        list.appendChild(table);

    }

    function add_element(list, table, batiment, salle, reservation) {
        var body = document.createElement("tbody");
        var tr = document.createElement("tr");


        tr.innerHTML = "<td>" + batiment + "</td> <td>" + salle + "</td> <td>" + reservation + "</td>" + "<td id=\"supp_element_td\"><button id=\"supp_element\" type=\"button\" class=\"btn btn-danger\"><b>X</b></button></td>";
        
        tr.addEventListener("click", function(){
            body.removeChild(tr);
        });

        body.appendChild(tr);
        table.appendChild(body);
        list.appendChild(table);
    }

});