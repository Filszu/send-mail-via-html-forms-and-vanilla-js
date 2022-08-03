window.onload = () =>{
    console.log('hello')

    //zmina wartosci obiektu na przekonwertowane
    parserConfig.fsValues = searchParams();
    // parserConfig.fsValues = searchParams("?name=piotr");

    console.log(`%c parserConfig:`, "color: yellow");
    console.log(parserConfig)

    // //parse {{key}} to => value
    // parser(parserConfig)

    // drawTemplate(template)//przekazanie do rysunku

    drawTemplate(parser(parserConfig))//najpierw zamiana parserem ktory zwraca html a ten jest przekazywany do drawTemplate()
}

//**Wyszukiwanie parametrow z string <-GET request
//**dodadnie ich do parser config jako wartosci values do podmnieniania



//++parser sklada sie z 2 elementow templatki i obiektu, w ktorych znajduja sie rzezy do podmnienia
/*
    templatka:
        abc{{aaa}}
    
    obiket:
        {
            aaa: 'bbb'
        }
*/
const templ1 = "<h1>Witaj</h1><p>{{name}}</p><p>{{email}}<p>{{wrongKey}}<h2>{{luckyNumber}}</h2><h3>{{wrongKey}}</h3><hr>";
const templ2 = "<h1>name: {{name}}</h1>";
const templ3 = "<h1>Hello {{name}}</h1><p>{{age}}</p>ur email:<p>{{email}}<p>";


const parserConfig = {
    template: templ1,
    fsValues: null
}