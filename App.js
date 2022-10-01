var URL = "https://api.funtranslations.com/translate/ferb-latin.json";


var Input1 = document.querySelector("#txt-area");
var Btn = document.querySelector("#translate");
var Output = document.querySelector("#Output");


Btn.addEventListener("click",ConstructURL);
var Ctext = Input1.value;
console.log(Ctext);

function ConstructURL(){

    var Ctext = Input1.value;

    var finalURL = URL + "?" + "text=" + Ctext;
    console.log(finalURL);
    dataConversion(finalURL);

}

function dataConversion(finalURL){

    fetch(finalURL).then(response => response.json()).then(json => {console.log(json); 
        
        var translatedtext = json.contents.translated;
        Output.innerText = translatedtext;
    
    }).catch(errorHandler)

}


function errorHandler(error){

    console.log("Something went wrong with server");
    Output.innerText = "Something went wrong with server" + error;
}