

eventListeners();

function eventListeners(){

    document.getElementById("translate-form").addEventListener("submit",translateword);
    document.getElementById("language").onchange = function (){
        //Arayüz
        ui.changeui();
    }
}

const ui = new UI();
const tran = new Translete(document.getElementById("word").value,document.getElementById("language").value);

function translateword(e){

tran.changelang(document.getElementById("word").value,document.getElementById("language").value);  
tran.translateword(function(err,response){

    if(err){
        console.log(err);
    }
    else{
        ui.changedisplay(response);
    }

});



    e.preventDefault();
}