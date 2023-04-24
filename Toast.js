export function preload() {
document.body.innerHTML += '<style>._i2__Lk {animation: __inX_4 3s ease-out;}@keyframes __inX_4 {from {width: 0;}to {width: calc(5);}}.x_23d__hd {animation: _54fs__r 3s;position: fixed;z-index: 1000;}@keyframes _54fs__r {from {margin-top: 200px;}}.hide {visibility: hidden;width: 0;height: 0;}</style>';
}

export function initToast() {
  document.body.innerHTML +=
    '<div class="_Xsd_j__ _X42LaS__sd" style="margin: 0;width: 20%;border-radius: 5px;background-color: black;opacity: 0.75;color: white;z-index: -1;padding-top: 10px;font-family:system-ui, -apple-system, BlinkMacSystemFont,Roboto, Oxygen, Ubuntu, Cantarell,sans-serif"><img width="11px" style="cursor: pointer" src="https://rohitpidishetty.github.io/Toaster/cancel.png" /><center id="_kh43__hsg">Display your text</center><p id="_fjhgGK_Ld" style=" border: 2px solid rgb(5, 206, 5);margin-bottom: 0;border-radius: 0px 0px 50px 50px;"></p></div>';
  let width = document.querySelector("._X42LaS__sd").clientWidth - 4 + "px";
  document.getElementById("_fjhgGK_Ld").style.width = width;
  document.querySelector("._X42LaS__sd > img").style.marginLeft =
    document.querySelector("._X42LaS__sd").clientWidth - 25 + "px";
  document.querySelector("._X42LaS__sd > img").addEventListener("click", () => {
    document.querySelector("._X42LaS__sd").classList.add("_Xsd_j__");
    document.getElementById("_fjhgGK_Ld").classList.toggle("_i2__Lk");
    document.querySelector("._X42LaS__sd").classList.toggle("x_23d__hd");
  });
}

export function createToast(parent, text) {
  parent.disable = true;
  document.querySelector("._X42LaS__sd").classList.toggle("x_23d__hd");
  document.querySelector("._X42LaS__sd > #_kh43__hsg").innerHTML = text;
  document.querySelector("._X42LaS__sd").classList.remove("_Xsd_j__");
  document.getElementById("_fjhgGK_Ld").classList.toggle("_i2__Lk");
  setTimeout(() => {
    parent.disabled = false;
  }, 1500);
}
