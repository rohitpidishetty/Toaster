export function createToast(parent, text, status) {
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
    top: 0;
  }
  @keyframes _54fs__r {
    from {
      margin-top: 400px;
    } 
    to {
     top: 0;
    }
  }
  .x_23d__hd {
    visibility: hidden;
    width: 0;
    height: 0;
  }
  ._X42LaS__sd {
    width: 20%;
  }
  ._mXl__1 {
    animation: _mXx__ll 3s;
  }
  @keyframes _mXx__ll {
    0% {
      margin-left: -2%;
    }
    25% {
      margin-left: 5%;
    }
    50% {
      margin-left: -50%;
    }
  }
  @media screen and (max-width: 750px) {
    ._X42LaS__sd {
      width: 80%;
    }
  }
  ._p_gbd3__{
    -webkit-animation-play-state:paused;
    -moz-animation-play-state:paused;
    -o-animation-play-state:paused; 
    animation-play-state:paused;
  }
</style>
<div
  class="_X42LaS__sd x_23d__hd"
  style="
    margin: 10px;
    border-radius: 5px;
    background-color: white;
    opacity: 0.75;
    position: fixed;
    box-shadow: 0px 0px 8px 2px rgb(241, 234, 234);
    z-index: 2;
    color: rgb(82, 55, 55);
    top: 0;
    cursor: pointer;
    padding-top: 3px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Roboto,
      Oxygen, Ubuntu, Cantarell, sans-serif;">
  <img
    width="11px"
    style="cursor: pointer"
    src="https://rohitpidishetty.github.io/Toaster/cancel.png"/>
  <span style="display:flex; align-items:center; padding-left:20px">
    <img src="https://rohitpidishetty.github.io/Toaster/cancel.png" style="margin-right:15px" width="20px" class="__sx_23js" />
    <center id="_kh43__hsg">Display your text</center>
  </span>
  <p
    id="_fjhgGK_Ld"
    style="
      margin-bottom: 0;
      border-radius: 0px 0px 50px 50px;"></p>
</div>`;
  switch (status) {
    case "ok":
      document
        .querySelector(".__sx_23js")
        .setAttribute(
          "src",
          "https://rohitpidishetty.github.io/Toaster/accept.png"
        );
      document.querySelector("#_fjhgGK_Ld").style.border = "2px solid #4BAE4F";
      break;
    case "info":
      document
        .querySelector(".__sx_23js")
        .setAttribute(
          "src",
          "https://rohitpidishetty.github.io/Toaster/info.png"
        );
      document.querySelector("#_fjhgGK_Ld").style.border = "2px solid #00CCFF";
      break;
    case "err":
      document
        .querySelector(".__sx_23js")
        .setAttribute(
          "src",
          "https://rohitpidishetty.github.io/Toaster/disagree.png"
        );
      document.querySelector("#_fjhgGK_Ld").style.border = "2px solid #FF2147";
      break;
    case "warn":
      document
        .querySelector(".__sx_23js")
        .setAttribute(
          "src",
          "https://rohitpidishetty.github.io/Toaster/warning.png"
        );
      document.querySelector("#_fjhgGK_Ld").style.border = "2px solid #FFD54F";
      break;
  }

  let width = document.querySelector("._X42LaS__sd").clientWidth - 4 + "px";
  document.getElementById("_fjhgGK_Ld").style.width = width;
  document.querySelector("._X42LaS__sd > img").style.marginLeft =
    document.querySelector("._X42LaS__sd").clientWidth - 25 + "px";
  document.querySelector("._X42LaS__sd > img").addEventListener("click", () => {
    document.querySelector("._X42LaS__sd").classList.toggle("_mXl__1");
    setTimeout(() => {
      document.getElementById("_fjhgGK_Ld").classList.toggle("_i2__Lk");
      document.querySelector("._X42LaS__sd").classList.add("x_23d__hd");
      document.querySelector("._X42LaS__sd").classList.toggle("_gU_L23");
      location.reload();
    }, 2000);
  });
  document.querySelector("._X42LaS__sd").addEventListener("mouseover", e => {
    e.target.classList.add("_p_gbd3__");
  });
  document.querySelector("._X42LaS__sd").addEventListener("mouseout", e => {
    e.target.classList.remove("_p_gbd3__");
  });
  parent.disabled = true;
  document.querySelector("._X42LaS__sd").classList.remove("x_23d__hd");
  document.querySelector(
    "._X42LaS__sd  > span >  #_kh43__hsg"
  ).innerHTML = text;
  document.getElementById("_fjhgGK_Ld").classList.toggle("_i2__Lk");
  document.querySelector("._X42LaS__sd").classList.toggle("_gU_L23");
  setTimeout(() => {
    parent.disabled = false;
  }, 1500);
}
