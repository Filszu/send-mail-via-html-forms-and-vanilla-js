const parserConfig = {
    template: null,
    fsValues: null
}


function generate(){
    paramsInput = document.querySelector('#query_string_params_input');
    const templateBox = document.querySelector('textarea');

    const paramsFromInput = paramsInput.value;
    const templateFromInput = templateBox.value;

    

    parserConfig.fsValues = searchParams(paramsFromInput);
    parserConfig.template = templateFromInput;

    parser(parserConfig)

    drawTemplate(template)
   

    
}