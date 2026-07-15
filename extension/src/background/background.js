// Create context menu when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "simplifai",
    title: "Simplify with SimplifAI",
    contexts: ["selection"],
  });
});

// When the user clicks "Simplify with SimplifAI"
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "simplifai") {
    chrome.storage.local.set({
      selectedText: info.selectionText,
    });

    chrome.action.openPopup();
  }
});

// Listen for messages from popup/content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  if (request.type === "GET_SELECTED_TEXT") {

    chrome.storage.local.get("selectedText", (data) => {

      sendResponse({
        text: data.selectedText || "",
      });

    });

    return true;
  }

});