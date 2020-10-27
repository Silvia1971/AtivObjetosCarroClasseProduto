var item = new Array();

function Carro(id, marca, qtd, valorunit) {
    this.id = id;
    this.marca = marca;
    this.qtd = qtd;
    this.valorunit = valorunit;
    this.estacionamento = function() {
        console.log(`O carro ${this.id} da marca ${this.marca} de quantidade ${this.qtd} está neste estacionamento.`);
    };
    this.tipocombustivel = function() {
        console.log(`Este carro utiliza ${this.combustivel} como combustível.`);
    }
    this.calcular = function() {
        return  parseFloat(this.qtd) * parseFloat(this.valorunit);
    }
}


function adiciona() {
var id = document.getElementById('id');
var marca = document.getElementById('marca');
var qtd = document.getElementById('qtd');
var valorunit = document.getElementById('valorunit');

var carro1 = new Carro(id.value, marca.value, qtd.value, valorunit.value);

item.push(carro1);

console.log(item);

mostrar();
limparTxt();
}

function mostrar() {
    var lista = document.getElementById('lista');
    var text = '';
    var total = 0;
    text = '<ul>';
    for (var i = 0; i<item.length; i++)
    {
        text += "<li>";        
        text += "Id: " + item[i].id + " - ";
        text += "Marca: " + item[i].marca + " - ";
        text += "Qtd: " + item[i].qtd + " - ";
        text += "Valor Unit: R$ " + item[i].valorunit + " - ";
        text += "Valor Total: R$ " + item[i].calcular();
        text += "</li>";

        total += item[i].calcular();
    }

    text+="</ul>";
    text+="TOTAL: R$ " + total;

    lista.innerHTML = text;
}

function mostrarTabela()
{
    var lista = document.getElementById("lista");
    var total = 0;
    var text = "";
    var celula="";
    text = `<table style="border: 1px solid black"><tr>
    <th style = "border: 1px solid black; padding: 15px;">ID</th>
    <th style = "border: 1px solid black; padding: 15px;">Marca</th>
    <th style = "border: 1px solid black; padding: 15px;">Quantidade</th>
    <th style = "border: 1px solid black; padding: 15px;">Valor Unit.</th>
    <th style = "border: 1px solid black; padding: 15px;">Valor Total</th>
    </tr>`;

    for (var i = 0; i<item.length; i++)
    {   
        celula = "<td style = \"border: 1px solid black; padding: 15px;\">" + item[i].id + "</td>";
        celula += "<td style = \"border: 1px solid black; padding: 15px;\">" + item[i].marca + "</td>";
        celula += "<td style = \"border: 1px solid black; padding: 15px;\">" + item[i].qtd + "</td>";
        celula += "<td style = \"border: 1px solid black; padding: 15px;\">" + item[i].valorunit + "</td>";
    
        var totInd= parseFloat(item[i].calcular());
        celula += "<td style = \"border: 1px solid black; padding: 15px;\"> R$ " + totInd + "</td>";

        total += totInd;
        text += "<tr>" + celula + "</tr>";
        celula = ""; 
    }
       
    text += "<tr><td colspan=\"5\" style=\"text-align:right\">TOTAL: R$ " + total + "&nbsp;&nbsp;</td></tr>";
    text += "</table>";

    lista.innerHTML = text;
}


function apagar() {
item.pop();
mostrar();
limparTxt();

}

function limpar() {
item = [];
mostrar();
limparTxt();

}

function limparTxt() {
var id = document.getElementById('id');
var marca = document.getElementById('marca');
var qtd = document.getElementById('qtd');
var valorunit = document.getElementById('valorunit');

id.value = '';
marca.value = '';
qtd.value = '';
valorunit.value = '';
}