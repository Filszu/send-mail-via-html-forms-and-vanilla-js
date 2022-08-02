window.onload = () =>{
    console.log('hello')
    // ?apiKey?user?mail
    /*request : {
        apiKey:
        user:
        content:{
            to:
            email:
        }
    }*/
   

    searchParams()
    parser()
}

//**Wyszukiwanie parametrow z string <-GET request
//**dodadnie ich do parser config jako wartosci values do podmnieniania
function searchParams(){

    const queryString = new URLSearchParams(location.search);

    const fsKeyValues = Object.fromEntries(new URLSearchParams(queryString))
    console.log(fsKeyValues);
    

    //zmina wartosci obiektu na przekonwertowane
    parserConfig.fsValues = fsKeyValues;

    console.log(parserConfig)

}


//++parser sklada sie z 2 elementow templatki i obiektu, w ktorych znajduja sie rzezy do podmnienia
/*
    templatka:
        abc{{aaa}}
    
    obiket:
        {
            aaa: 'bbb'
        }
*/

const parserConfig = {
    template: "<h1>Witaj</h1><p>{{name}}</p><p>{{email}}<p>{{wrongKey}}<h2>{{luckyNumber}}</h2><h3>{{wrongKey}}</h3><hr>",
    fsValues: null
}

//wyszkuwianie znaczka kodu {{}} i zamiana domyslenego tekstu z szablonu na ten gotowy
function parser(){

    template = parserConfig.template;
    fsValues = parserConfig.fsValues;//tu chodzi o object
    // template = template.split("");
    let i=0;
    do{

    
    //wyszukiwanie tagow
    fsTagStartPosition = template.indexOf("{")
    fsTagEndPosition = template.indexOf("}")
    console.log(fsTagStartPosition, fsTagEndPosition)

    //szukane slowo
    let fsKeyWord = template.slice(fsTagStartPosition+2, fsTagEndPosition)

    //ciąg do podmnienienia z {{ klucz}}
    let fsKeyToParse = template.slice(fsTagStartPosition, fsTagEndPosition+2)

    console.log(fsKeyWord)
    console.log(fsKeyToParse)

    //spradzanie czy istnieje i podmienianie
    if(fsKeyWord in fsValues){
        console.log("key has been founded: "+fsKeyWord)
        template =template.replace(fsKeyToParse,fsValues[fsKeyWord])

        // console.log(fsValues[fsKeyWord])
    }
    else {
        console.log("there is no such key like: "+fsKeyWord)

         template =template.replace(fsKeyToParse,'NULL')
        //  undefined
    }

    
    i++
    }
    while((fsTagStartPosition>=0) && (fsTagEndPosition>=0))
    // while(i<10)


    

    // template=template.replace("{{","xxxxxxxx")
    // let changedValue
    console.log("rebuilt: "+template)

    drawTemplate(template)//przekazanie do rysunku

    
}

//$$rysowanie
//tempalte, params
function drawTemplate(view){

const tempalteBox = document.querySelector('textarea');
const htmlTemplateBox = document.querySelector('.html_view')
const parseredBox = document.querySelector('.parser')


tempalteBox.innerHTML=parserConfig.template;
htmlTemplateBox.innerHTML=parserConfig.template;
parseredBox.innerHTML=view;

}


console.log(dataToSend)
function sendEmail(){
  
   
}


//dane do wyslania do maila
const dataToSend = {
    user: "Filip",
    ApiKey: 'w13143244',
    fromWebsite: null,
    content: {}

}