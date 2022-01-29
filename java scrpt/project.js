fetch("data.json").then(res=>res.json()).then(
    data=>
    display(data.profile)
)

function display(csit){
    var cdeck=document.querySelector(".card-deck")
    console.log(cdeck)
    var cd=document.createElement("div")
    cd.classList.add("card")
    console.log(cd)
    cdeck.appendChild(cd)
    //
    for(var i in iti){
        
        // name
        var name=document.createElement("img")
        im.src=iti[i].img;
        cd.appendChild(im)
    // name area
    var name=document.createElement(h1)
    name.textContent=iti[i].name;
    cd.appendChild(name)    
    }
        
    }



        
    
