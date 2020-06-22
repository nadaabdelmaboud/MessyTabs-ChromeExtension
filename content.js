console.log("this is content 2")

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendResponse){
    console.log(message.txt)

        sendResponse({yoo:"ohayoo"});
    return true;

}