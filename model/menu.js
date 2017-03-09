window.addEventListener("load", function () {
    /*Here is the main function*/


    initFunction();

    function initFunction() {
        var list = document.getElementById("list");
        var table = document.createElement("table");
        var danger = document.createElement("div");
        var span1 = document.createElement("span"); 
        var span2 = document.createElement("span");
        
        danger.setAttribute("class", "alert alert-danger");
        danger.setAttribute("role", "alert");
        
        span1.setAttribute("class", "glyphicon glyphicon-exclamation-sign");
        span1.setAttribute("aria-hidden", "true");

        span2.setAttribute("class", "sr-only");
        span2.appendChild(document.createTextNode("Error:"));
        
        danger.appendChild(span1);
        danger.appendChild(span2);
        danger.appendChild(document.createTextNode(" Veuillez remplir tous les champs avant d'ajouter une salles !"));
        table.setAttribute("class", "table");

        list_creation(list, table);

        add_element(list, table, "Nautibus", "C4", "Salle déjà réservée");//test row.
        document.getElementById("add_element").addEventListener("click", function () {
            
            var values = document.getElementById("formulaire").getElementsByTagName("input");
            var i;
            var isGood = true;
            for (i = 0; i < 3; i++) {
                if (values[i].value == null || values[i].value == "") {
                    isGood = false;
                }
            }
            if (isGood == true) {
                add_element(list, table, values[0].value, values[1].value, values[2].value);
                alert("Element ajouté à la liste");
                document.getElementById("formulaire_style").removeChild(danger);
            } else {
                document.getElementById("formulaire_style").appendChild(danger);
                isGood = true;
            }
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
        var td_btn = document.createElement("td");
        var button = document.createElement("button");
        var txt_btn = document.createTextNode("X");

        td_btn.setAttribute("id", "supp_element_td");

        button.setAttribute("id", "supp_element");
        button.setAttribute("type", "button");
        button.setAttribute("class", "btn btn-danger");

        button.addEventListener("click", function () {
            body.removeChild(tr);
        });

        button.appendChild(txt_btn);
        td_btn.appendChild(button);

        tr.innerHTML = "<td>" + batiment + "</td> <td>" + salle + "</td> <td>" + reservation + "</td>";

        tr.appendChild(td_btn);




        body.appendChild(tr);
        table.appendChild(body);
        list.appendChild(table);
    }

});