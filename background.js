browser.contextMenus.create({
  id: "select-narou",
  title: "Select なろう chapter"
});

browser.contextMenus.create({
  id: "select-copy-narou",
  title: "Select and Copy なろう chapter"
});

function messageTab(tabs,type) {
  browser.tabs.sendMessage(tabs[0].id, {
    type
  });
}

function onExecuted(result,selecttype) {
    let querying = browser.tabs.query({
        active: true,
        currentWindow: true
    });
    querying.then((tabs) => messageTab(tabs, selecttype));
}

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "select-narou") {
    let executing = browser.scripting.executeScript({
      files: ["narou.js"],
      target: {tabId: tab.id}
    });
    executing.then((result) => onExecuted(result, "select-copy-narou"));
  }else if (info.menuItemId === "select-copy-narou") {
    let executing = browser.scripting.executeScript({
      files: ["narou.js"],
      target: {tabId: tab.id}

    });
    executing.then((result) => onExecuted(result, "select-copy-narou"));

  }
});

browser.action.onClicked.addListener((tab) => {
  let executing = browser.scripting.executeScript({
    files: ["narou.js"],
    target: {tabId: tab.id}
  });
  executing.then((result) => onExecuted(result, "select-copy-narou"));
}
);