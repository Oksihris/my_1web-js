var oldcolor;
function applyTableEvents()
{
    var allTableRows = document.getElementsByTagName("tr");
    for(tr of allTableRows)
    {
        tr.onmouseenter = tr.onmouseleave = function(event)
        {
            if(event.type == 'mouseleave')
            {
                
                event.target.style.background = oldcolor;
            }
            else
            {
                oldcolor = event.target.style.background;
                event.target.style.background = "#040a30";
            }
        }
    }
}


function applyHeaderEvents()
{
    for(var i = 2; i < 6; ++i)
    {
        var HeaderTagName = "h" + i;
        var allHeaders = document.getElementsByTagName(HeaderTagName);
    
        for(header of allHeaders)
        {
            header.onclick = onClick_header;
        }
    }
	function onClick_header(event)
    {
        if(event.target.nextElementSibling)
        {
            switchHeaderMode(event.target, event.target.nextElementSibling.style.display == "none"? "" : "none");
        }
    }

    function switchHeaderMode(elem, mode)
    {
        var nextElem = elem.nextElementSibling;


        while(nextElem && !isSameOrUpperHeader(nextElem, elem.tagName))
        {
            nextElem.style.display = mode;
            
            if(isLowerHeader(nextElem, elem.tagName)){
                nextElem = switchHeaderMode(nextElem, mode);
            }
            else{
                nextElem = nextElem.nextElementSibling;
            }
        }
        return nextElem;
    }
    
    function isSameOrUpperHeader(elem, headerName){
        return elem && isHeader(elem) && 
            Number.parseInt(elem.tagName.charAt(1)) <= Number.parseInt(headerName.charAt(1));
    }
    
    function isLowerHeader(elem, headerName)
    {
        return elem && isHeader(elem) && 
            Number.parseInt(elem.tagName.charAt(1)) > Number.parseInt(headerName.charAt(1));
    }

    function isHeader(elem)
    {
        return (elem.tagName.length == 2 && elem.tagName.charAt(0) == 'H');
    }
}
//alert("Ваш браузер не підтримує HTML5");


setTimeout(function(){
	document.body.classList.add('body_visible');}, 200);


  


