var createElement = (tag, parent, id, html) => {
    var ele = document.createElement(tag);
    ele.id = id || "";
    ele.innerHTML = html || "";
    parent.appendChild(ele);
    return ele;
  }
createElement("style", document.head, "", `
#app-mount > div[class*="app-"] { margin-bottom: 48px !important; }
#dht-ctrl { position: absolute; bottom: 0; width: 100%; height: 48px; background-color: #FFF; }
#dht-ctrl button { height: 32px; margin: 8px 0 8px 8px; font-size: 16px; padding: 0 12px; background-color: #7289DA; color: #FFF; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.75); }
#dht-ctrl button:disabled { background-color: #7A7A7A; cursor: default; }
#dht-ctrl-close { margin: 8px 8px 8px 0 !important; float: right; }
#dht-ctrl p { display: inline-block; margin: 14px 12px; }
#dht-ctrl input { display: none; }`);

var btn = (id, title) => "<button id='dht-ctrl-"+id+"'>"+title+"</button>";
var input = (id, title) => "<input id='dht-ctrl-"+id+"'>"+title+"</input>";
      
createElement("div", document.querySelectorAll("[class*='button--']")[5], "dht-ctrl", `
    ${btn("upload", "Upload &amp; Combine")}
    ${btn("settings", "Settings")}
    ${btn("download", "Download")}
    ${btn("reset", "Reset")}
    ${input("close", "X")}`);

createElement("style", document.head, "", `
    #takeProfit--tp { width: 80px; height: 20px; margin: 5px}
    `);
var input = document.createElement("input");
input.type = "text";
input.className = "takeProfit--tp"; // set the CSS class
document.querySelectorAll("[class*='box--']")[1].appendChild(input)
