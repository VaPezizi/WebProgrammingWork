//vastaus1 = numero joka muunnetaan
//tyyppi1 = muunnettavan numeron tyyppi
//tyyppi2 = tyyppi joksika muunnetaan


function convert() {
    // Haetaan arvot
    "use strict";
    let inputValue = parseFloat(document.getElementById('numero').value);
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;

    
    let Yksikot = {
        Pikoa: 1e-12,
        Nanoa: 1e-9,
        Mikroa: 1e-6,
        Milliä: 1e-3,
        Senttiä: 1e-2,
        Desiä: 1e-1,
        Perusmuotoa: 1,
        Dekaa: 1e1,
        Hehtoa: 1e2,
        Kiloa: 1e3,
        Megaa: 1e6,
        Gigaa: 1e9,
        Teraa: 1e12
        
    };

    if (isNaN(inputValue)) {
        document.getElementById('tulos').innerHTML = "<p>Virhe! Syötteen on oltava numero!</p>";
        return;
    }

    if(fromUnit == "Gigaa"){
        var result = Math.round(inputValue / (Yksikot[toUnit] / Yksikot[fromUnit]));
    }else{
        var result = inputValue / (Yksikot[toUnit] / Yksikot[fromUnit]);
    }

    // Printataan tulos
    document.getElementById('tulos').innerHTML =`<p>${inputValue} ${fromUnit} on yhteensä ${result} ${toUnit}</p>`;
}
function convertDB(){
    let inputValue = parseFloat(document.getElementById("numero").value)
    //Jos arvo on väärä
    if (isNaN(inputValue)) {
        document.getElementById('tulos').innerHTML = "<p>Virhe! Syötteen on oltava numero!</p>";
        return;
    }
    //Muunnetaan binääriksi ja laitetaan sivulle
    let result = Number(inputValue).toString(2);
    document.getElementById('tulos').innerHTML =`<p>Tulos: ${result}</p>`;
    
}
function convertBD(){
    let inputValue = parseInt(document.getElementById("numero2").value)
    if (inputValue >= 1111111111111111111111){
        document.getElementById('tulos2').innerHTML = "<p>Virhe! Numero on liian suuri!</p>";
        return;
    }
    let result = parseInt(inputValue, 2);
    
    if (isNaN(result)) {
        document.getElementById('tulos2').innerHTML = "<p>Virhe! Syötteen on oltava binääriä!</p>";
        return;
    }
    
    
    document.getElementById('tulos2').innerHTML =`<p>Tulos: ${result}</p>`;
}
function convertDH(){
    let inputValue = parseFloat(document.getElementById("numero").value);
    let result = inputValue.toString(16);
    if(isNaN(inputValue)){
        document.getElementById('tulos').innerHTML = "<p>Virhe! Syötteen on oltava desimaaliluku!</p>";
        return;
    }
    document.getElementById('tulos').innerHTML =`<p>Tulos: ${result}</p>`;


}
function convertHD(){
    let inputValue = document.getElementById("numero2").value;
    let result = parseInt(inputValue, 16);
    if(isNaN(result)){
        document.getElementById('tulos2').innerHTML = "<p>Virhe! Syötteen on oltava desimaaliluku!</p>";
        return;
    }
    document.getElementById('tulos2').innerHTML =`<p>Tulos: ${result}</p>`;
}