function UI(){
    this.outputimage = document.getElementById("outputImage");
    this.outputword = document.getElementById("outputWord");
    this.outputlanguage = document.getElementById("outputLanguage");

    this.langlist = document.getElementById("language");
}


UI.prototype.changeui = function (){

    this.outputimage.src  = `images/${this.langlist.value}.png`
    this.outputlanguage.innerHTML = this.langlist.options[this.langlist.selectedIndex].textContent;
}


UI.prototype.changedisplay = function (word){

this.outputword.textContent = word;
}