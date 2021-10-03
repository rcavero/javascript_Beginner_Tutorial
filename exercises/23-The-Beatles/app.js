
/*function letItBe(n, str){
    for(let i=0;i<n;i++){
        str = str + "let it be, "
    }
    return str;
}

function addToStr(str, sentence){
    str = str + sentence;
}

function sing(){
    let str="algo";
    letItBe(4, str)
    addToStr(str,"wishper words of wishdom, ")
    letItBe(5, str)
    addToStr(str,"there wil be an answer, let it be")
    console.log(str);
    return (str);
}*/
function sing(){
    let song = "";
    for(let i=0;i<4;i++){
        song = song + "let it be, ";
    }
    song = song + "whishper words of wishdom, ";
    for(let j=0;j<5;j++){
        song = song + "let it be, "
    }
    song = song + "there will be an answer, let it be";
    return song;
}
//Your code above ^^^

console.log(sing());