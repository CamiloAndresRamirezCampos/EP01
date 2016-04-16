
nom_div("escenario")
{
    EntornoJuego(); // En La etiqueta <div id = "escenario"> que se encuenta en Html llamamos la función EntornoJuego desde la que dibujamos la Matriz.
    aleatoria();
}

function EntornoJuego()
{
    // Se dibuja la matriz  en la que se plasmaran los patrones de memoria en Html...
        txt = "<table>",
        nomID   = "";
        eventos = [];
        for(var fila = 0; fila < 5; fila ++)
        {
            txt += "<tr>";
            for(var col = 0; col < 5; col ++)
            {
                nomID = fila + "_" + col;
                txt += "<td id = 'td_"+(nomID)+"'>";
                txt += "</td>";
            }
            txt += "</tr>";
        }
        txt += "</table>";
        nom_div("escenario").innerHTML = txt;
}

function aleatoria()
{
    casillaColorida = "";
    casillaAleatoria=[];
    for(a=0; a < 1; a++)
    {
        fila = Math.floor(Math.random() * 5);
        columna = Math.floor(Math.random() * 5);   
        casillaColorida = "td_"+fila+"_"+columna;

        if(casillaAleatoria.indexOf(casillaColorida) < 0)
        {
            nom_div("td_"+fila+"_"+columna).style.backgroundColor = coloresEnRandom();
            casillaAleatoria.push(casillaColorida);
        }
        else
        {
            casillaColorida += 1;
        }
    }
    
}

function nom_div(div)
{
    return document.getElementById(div);
}

function coloresEnRandom() {

    var randomAzul = Math.floor(Math.random() * 255);
    var randomrojo = Math.floor(Math.random() * 255);
    var randomVerde = Math.floor(Math.random() * 255);
    var coloresEnRandom = "rgb("+randomAzul+","+randomrojo+","+randomVerde+")";

    return coloresEnRandom;
}