
document.getElementById("btn").onclick = function() {find()};


function find(){

let title=document.getElementById("title").value;
chrome.tabs.query( {}, sendTitle)
function sendTitle(tabs){
    let retTabs=[];
    if(title&&title!=""){
    for(var i=0;i<tabs.length;i++){
        let url=tabs[i].url.toString();
        let tabTitle=tabs[i].title.toString();
        if(tabTitle.includes(title)||url.includes(title)){
            retTabs.push(tabs[i]);

        }

    }
    if(retTabs.length==1){
        chrome.tabs.update(retTabs[0].id, {selected: true});
        chrome.windows.update(retTabs[0].windowId,{focused: true} )
    }
    else{
        for(var i=0;i<retTabs.length;i++){
            let div=document.getElementById("tabs");
            var anchor = document.createElement('a');
            anchor.setAttribute('href',retTabs[i].url);
            anchor.innerText = retTabs[i].title;
            anchor.style['display']="block";
            anchor.addEventListener('click', getLink, false);
            div.appendChild(anchor);
        }

    }
    }
   
}
}
function getLink(){
    let url=this.href;
    chrome.tabs.query( {}, goTab)
    function goTab(tabs){
        for(var i=0;i<tabs.length;i++){
            let urlTab=tabs[i].url.toString();
            if(url==urlTab){
               chrome.tabs.update(tabs[i].id, {selected: true});
               chrome.windows.update(tabs[i].windowId,{focused: true} )
               break;
            }
    
        }
    }
    
}
