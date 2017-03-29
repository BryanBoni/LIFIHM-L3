window.addEventListener("load", function () {
    /*Here is the main function*/


    initFunction();

    function initFunction() {
        var list = document.getElementById("list");
        //var table = document.createElement("table");

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
        //table.setAttribute("class", "table");


        /*
         table.setAttribute("class", "table");
         list_creation(list, table);
         
         add_element(list, table, "Nautibus", "C4", "Salle déjà réservée");//test row.
         
         */
        add_element_thumbnail(list, "Nautibus", "C4", "Salle déjà réservée");

        add_element_thumbnail(list, "Greingard", "21", "Salle déjà réservée");

        add_element_thumbnail(list, "Nautibus", "C4", "Salle déjà réservée");

        add_element_thumbnail(list, "Greingard", "21", "Salle déjà réservée");

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
                add_element_thumbnail(list, values[0].value, values[1].value, values[2].value);
                alert("Element ajouté à la liste");
                document.getElementById("formulaire_style").removeChild(danger);
            } else {
                document.getElementById("formulaire_style").appendChild(danger);
                isGood = true;
            }
        });

    }

    /*Test for a thumbnail version of  the list*/
    function add_element_thumbnail(list, batiment, salle, reservation) {
        var button = document.createElement("button");
        var thumbnail = document.createElement("div");
        thumbnail.setAttribute("id", "thumbnail");
        thumbnail.setAttribute("class", "col-sm-6 col-md-4 col-lg-3");

        var spanGlyph = document.createElement("span");
        spanGlyph.innerHTML = "<span class=\"glyphicon glyphicon-edit\" style=\"float: right;\"></span>"; // aria-hidden="true"

        var spanGlyph2 = document.createElement("span");
        spanGlyph2.innerHTML = "<span class=\"glyphicon glyphicon-edit\" style=\"float: right;\"></span>";

        var spanGlyph3 = document.createElement("span");
        spanGlyph3.innerHTML = "<span class=\"glyphicon glyphicon-edit\" style=\"float: right;\"></span>";

        var batiment_label = document.createElement("p");
        var batiment_txt = document.createElement("div");

        var salle_label = document.createElement("p");
        var salle_txt = document.createElement("div");

        var reservation_label = document.createElement("p");
        var reservation_txt = document.createElement("div");

        button.setAttribute("id", "supp_element");
        button.setAttribute("type", "button");
        button.setAttribute("class", "btn btn-danger");
        button.appendChild(document.createTextNode("Supprimer"));

        button.addEventListener("click", function () {
            list.removeChild(thumbnail);
        });

        batiment_txt.appendChild(document.createTextNode(batiment));
        batiment_txt.appendChild(spanGlyph);
        batiment_label.innerHTML = "<b>Bâtiment </b><br />";// + batiment_txt.innerHTML;
        batiment_label.appendChild(batiment_txt);
        
        batiment_txt.addEventListener("click", function () {
            //salle_txt.removeChild(salleF);
            
            batiment = prompt("veuillez choisir une nouvelle valeur.", batiment);

            thumbnail.removeChild(batiment_label);
            thumbnail.removeChild(salle_label);
            thumbnail.removeChild(reservation_label);
            thumbnail.removeChild(button);
            
            //salleF = document.createTextNode(salle);
            batiment_txt.innerHTML = batiment;
            batiment_txt.appendChild(spanGlyph);
            batiment_label.innerHTML = "<b>Bâtiment </b><br />";
            batiment_label.appendChild(batiment_txt);

            thumbnail.appendChild(batiment_label);
            thumbnail.appendChild(salle_label);
            thumbnail.appendChild(reservation_label);
            thumbnail.appendChild(button);
        });

        salle_txt.appendChild(document.createTextNode(salle));
        salle_txt.appendChild(spanGlyph2);
        salle_label.innerHTML = "<b>Salle </b><br />";
        salle_label.appendChild(salle_txt);

        salle_txt.addEventListener("click", function () {
            //salle_txt.removeChild(salleF);
            
            salle = prompt("veuillez choisir une nouvelle valeur.", salle);

            thumbnail.removeChild(batiment_label);
            thumbnail.removeChild(salle_label);
            thumbnail.removeChild(reservation_label);
            thumbnail.removeChild(button);
            
            //salleF = document.createTextNode(salle);
            salle_txt.innerHTML = salle;
            salle_txt.appendChild(spanGlyph2);
            salle_label.innerHTML = "<b>Salle </b><br />";
            salle_label.appendChild(salle_txt);

            thumbnail.appendChild(batiment_label);
            thumbnail.appendChild(salle_label);
            thumbnail.appendChild(reservation_label);
            thumbnail.appendChild(button);
        });

        reservation_txt.appendChild(document.createTextNode(reservation));
        reservation_label.innerHTML = "<b>Réservation </b><br />";
        reservation_label.appendChild(reservation_txt);
        reservation_txt.appendChild(spanGlyph3);

        reservation_txt.addEventListener("click", function () {
            //salle_txt.removeChild(salleF);
            
            reservation = prompt("veuillez choisir une nouvelle valeur.", reservation);

            thumbnail.removeChild(batiment_label);
            thumbnail.removeChild(salle_label);
            thumbnail.removeChild(reservation_label);
            thumbnail.removeChild(button);
            
            //salleF = document.createTextNode(salle);
            reservation_txt.innerHTML = reservation;
            reservation_txt.appendChild(spanGlyph3);
            reservation_label.innerHTML = "<b>Réservation </b><br />";
            reservation_label.appendChild(reservation_txt);

            thumbnail.appendChild(batiment_label);
            thumbnail.appendChild(salle_label);
            thumbnail.appendChild(reservation_label);
            thumbnail.appendChild(button);
        });

        thumbnail.appendChild(batiment_label);
        thumbnail.appendChild(salle_label);
        thumbnail.appendChild(reservation_label);
        thumbnail.appendChild(button);
        list.appendChild(thumbnail);
    }

    /*
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
     var td = document.createElement("td");
     var td2 = document.createElement("td");
     var td3 = document.createElement("td");
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
     
     td.addEventListener("click", function () {
     batiment = prompt("veuillez choisir une nouvelle valeur.", batiment);
     tr.removeChild(td);
     tr.removeChild(td2);
     tr.removeChild(td3);
     tr.removeChild(td_btn);
     td.innerHTML = batiment;
     //td.appendChild(document.createTextNode(batiment));
     tr.appendChild(td);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tr.appendChild(td_btn);
     });
     td.appendChild(document.createTextNode(batiment));
     tr.appendChild(td);
     
     td2.addEventListener("click", function () {
     salle = prompt("veuillez choisir une nouvelle valeur.", salle);
     tr.removeChild(td);
     tr.removeChild(td2);
     tr.removeChild(td3);
     tr.removeChild(td_btn);
     td2.innerHTML = salle;
     //td2.appendChild(document.createTextNode(salle));
     tr.appendChild(td);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tr.appendChild(td_btn);
     });
     td2.appendChild(document.createTextNode(salle));
     tr.appendChild(td2);
     
     td3.addEventListener("click", function () {
     reservation = prompt("veuillez choisir une nouvelle valeur.", reservation);
     tr.removeChild(td);
     tr.removeChild(td2);
     tr.removeChild(td3);
     tr.removeChild(td_btn);
     td3.innerHTML = reservation;
     // td3.appendChild(document.createTextNode(reservation));
     tr.appendChild(td);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tr.appendChild(td_btn);
     });
     td3.appendChild(document.createTextNode(reservation));
     tr.appendChild(td3);
     
     //tr.innerHTML = "<td>" + batiment + "</td> <td>" + salle + "</td> <td>" + reservation + "</td>";
     
     tr.appendChild(td_btn);
     
     body.appendChild(tr);
     table.appendChild(body);
     list.appendChild(table);
     }
     
     */


});