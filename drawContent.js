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