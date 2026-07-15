/*// Store the latest selected text
let selectedText = "";

// Capture text whenever the user changes their selection
document.addEventListener("mouseup", () => {
  const selection = window.getSelection();

  if (!selection) return;

  const text = selection.toString().trim();

  if (text.length > 0) {
    selectedText = text;

    chrome.storage.local.set({
      selectedText: text,
    });
  }
});

// Listen for requests from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  if (request.type === "GET_SELECTED_TEXT") {

    sendResponse({
      text: selectedText,
    });

  }

  return true;
});*/
let selectedText = "";

console.log("SimplifAI content script loaded");

document.addEventListener("mouseup", () => {

  const selection = window.getSelection();

  if (!selection) return;

  const text = selection.toString().trim();

  if (text.length > 0) {

    console.log("Selected:", text);

    selectedText = text;

    console.log("Chrome object:", chrome);
    console.log("Chrome storage:", chrome.storage);

    chrome.storage.local.set({
      selectedText: text,
    });

  }

});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  if (request.type === "GET_SELECTED_TEXT") {
    sendResponse({
      text: selectedText,
    });
  }

  return true;

});