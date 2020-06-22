console.log("this is background")
chrome.browserAction.onClicked.addListener(ButtonClicked)

function ButtonClicked(tab){
let msg={
    txt:"nada"
}
chrome.tabs.sendMessage(tab.id,msg);
}