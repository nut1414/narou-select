function selectChapterText(copy){
  const r = document.createRange();
  const s = document.createRange();
  s.selectNode(document.getElementsByClassName("novel_subtitle")[0]);
  r.selectNode(document.getElementById("novel_honbun"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(s);
  window.getSelection().addRange(r);
  if(copy){
    document.execCommand('copy');
  }
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "select-narou") {
    selectChapterText(false);
  }else if (request.type === "select-copy-narou") {
    selectChapterText(true);
  }
});
