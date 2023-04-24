export function initToast() {
  document.body.innerHTML +=
    '<style>.incBar {animation: inc 3s ease-out;}@keyframes inc {from {width: 0;}to {width: calc(5);}}.pull {animation: pullUp 3s;position: fixed;z-index: 1000;}@keyframes pullUp {from {margin-top: 200px;}}.hide {visibility: hidden;width: 0;height: 0;}</style><div id="toast" class="hide" style="margin: 0;width: 20%;border-radius: 5px;background-color: black;opacity: 0.75;color: white;z-index: -1;padding-top: 10px;font-family:system-ui, -apple-system, BlinkMacSystemFont,Roboto, Oxygen, Ubuntu, Cantarell,sans-serif"><img width="11px" style="cursor: pointer" src="https://rohitpidishetty.github.io/Toaster/cancel.png" /><center id="text">Display your text</center><p id="progressBar" style=" border: 2px solid rgb(5, 206, 5);margin-bottom: 0;border-radius: 0px 0px 50px 50px;"></p></div>';
  let width = document.getElementById("toast").clientWidth - 4 + "px";
  document.getElementById("progressBar").style.width = width;
  document.querySelector("#toast > img").style.marginLeft =
    document.getElementById("toast").clientWidth - 25 + "px";
  document.querySelector("#toast > img").addEventListener("click", () => {
    document.querySelector("#toast").classList.add("hide");
    document.getElementById("progressBar").classList.toggle("incBar");
    document.getElementById("toast").classList.toggle("pull");
  });
}

export function createToast(parent, text) {
  parent.disabled = true;
  document.getElementById("toast").classList.toggle("pull");
  document.getElementById("text").innerHTML = text;
  document.querySelector("#toast").classList.remove("hide");
  document.getElementById("progressBar").classList.toggle("incBar");
  setTimeout(() => {
    parent.disabled = false;
  }, 2000);
}
