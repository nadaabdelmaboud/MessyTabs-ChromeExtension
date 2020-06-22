
document.getElementById("btn").onclick = function() {find()};


function find(){

let title=document.getElementById("title").value;
chrome.tabs.query( {}, sendTitle)
function sendTitle(tabs){
    for(var i=0;i<tabs.length;i++){
        let url=tabs[i].url.toString();
        let tabTitle=tabs[i].title.toString();
        if(tabTitle.includes(title)||url.includes(title)){
       chrome.tabs.update(tabs[i].id, {selected: true});
      chrome.windows.update(tabs[i].windowId,{focused: true} )
      break;
        }

    }
 

}
   
}