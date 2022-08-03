


//wyszkuwianie znaczka kodu {{}} i zamiana domyslenego tekstu z szablonu na ten gotowy
function parser(parserConfig){

    template = parserConfig.template;//templatka do podmiany
    fsValues = parserConfig.fsValues;//tu chodzi o object
    // template = template.split("");


    //wyszukiwanie czy insteje to w stringu
    function fsTagsPositions(el){

        return template.indexOf(el)
    }

    fsTagStartPosition = fsTagsPositions("{{")
    fsTagEndPosition = fsTagsPositions("}}")

    while((fsTagStartPosition>=0)&&((fsTagEndPosition>=0))){
        //wyszukiwanie tagow

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
        console.log(`%c---\n ${template}`, "color: lime");

        fsTagStartPosition = fsTagsPositions("{{")
        fsTagEndPosition = fsTagsPositions("}}")
        console.log(fsTagStartPosition, fsTagEndPosition)

    }
    console.log("rebuilt: "+template)

    return template;

    
}