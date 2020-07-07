
function Translete(word,language){

    this.apikey ="trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481";
    this.word = word;
    this.language= language;


    this.xhr = new XMLHttpRequest();

}


Translete.prototype.translateword = function(callback){

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET",endpoint)

    this.xhr.onload = () =>{

        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            
            callback(null,text);
        }
        else{
            callback("bir hata var",null);
        }
    }


    this.xhr.send();
}


Translete.prototype.changelang = function(newword,newlang){
    this.word = newword;
    this.language= newlang;
}