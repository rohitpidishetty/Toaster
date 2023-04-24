export function initToast() {
  document.body.innerHTML += `<style>
  ._i2__Lk {
    animation: __inX_4 3s ease-out;
  }
  @keyframes __inX_4 {
    from {
      width: 0;
    }
    to {
      width: calc(5);
    }
  }
  ._gU_L23 {
    animation: _54fs__r 3s;
    position: fixed;
    z-index: 1000;
  }
  @keyframes _54fs__r {
    from {
      margin-top: 300px;
    }
  }
  .x_23d__hd {
    visibility: hidden;
    width: 0;
    height: 0;
  }
</style>
<div
  class="_X42LaS__sd x_23d__hd"
  style="
    margin: 10px;
    width: 20%;
    border-radius: 5px;
    background-color: black;
    opacity: 0.75;
    color: white;
    z-index: -1;
    padding-top: 10px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Roboto,
      Oxygen, Ubuntu, Cantarell, sans-serif;">
  <img
    width="11px"
    style="cursor: pointer"
    src="https://rohitpidishetty.github.io/Toaster/cancel.png"/>
  <center id="_kh43__hsg">Display your text</center>
  <p
    id="_fjhgGK_Ld"
    style="
      border: 2px solid rgb(5, 206, 5);
      margin-bottom: 0;
      border-radius: 0px 0px 50px 50px;"></p>
</div>`;
  let width = document.querySelector("._X42LaS__sd").clientWidth - 4 + "px";
  document.getElementById("_fjhgGK_Ld").style.width = width;
  document.querySelector("._X42LaS__sd > img").style.marginLeft =
    document.querySelector("._X42LaS__sd").clientWidth - 25 + "px";
  document.querySelector("._X42LaS__sd > img").addEventListener("click", () => {
    document.getElementById("_fjhgGK_Ld").classList.toggle("_i2__Lk");
    document.querySelector("._X42LaS__sd").classList.add("x_23d__hd");
    document.querySelector("._X42LaS__sd").classList.toggle("_gU_L23");
    document.querySelector('._X42LaS__sd').remove();
  });
}

export function createToast(parent, text) {
  parent.disabled = true;
  document.querySelector("._X42LaS__sd").classList.remove("x_23d__hd");
  document.querySelector("._X42LaS__sd > #_kh43__hsg").innerHTML = text;
  document.getElementById("_fjhgGK_Ld").classList.toggle("_i2__Lk");
  document.querySelector("._X42LaS__sd").classList.toggle("_gU_L23");
  setTimeout(() => {
    parent.disabled = false;
  }, 1500);
}
