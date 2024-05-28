window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.onload = function () {
  console.log(document.getElementById('mobile').width, document.getElementById('mobile').height);
  function update() {
    console.log(window.pageYOffset);
    let myobj = document.getElementById("rocket");
    if (window.pageYOffset > 0) myobj.src = "rocketf.png";
    else myobj.src = "rocketg.png";

    if (window.pageYOffset > 100) {
      myobj.style.bottom = "250px";
      document.getElementById('wlcm').style.opacity = "0";
    }
    else if (window.pageYOffset < 100) {
      myobj.style.bottom = (150 + window.pageYOffset).toFixed() + "px";
      document.getElementById('wlcm').style.opacity = "1";
    }

    if (window.pageYOffset < 600) {
      document.getElementById("garden").style.display = "block";
      document.body.style.backgroundColor = "white";
      document.body.style.backgroundImage = "url('sky.png')";
      document.body.style.backgroundPosition = "0px " + (window.pageYOffset - 200).toFixed() + "px";
      document.getElementById("garden").style.bottom = (-1 * window.pageYOffset).toFixed() + "px";
    }
    else if (window.pageYOffset < 1400) {
      document.getElementById("garden").style.display = "none";
      document.body.style.transition = "background-color 0.5s";
      document.body.style.backgroundColor = "black";
      document.body.style.backgroundImage = "url('night.png')";
      document.body.style.backgroundPosition = "0px " + (window.pageYOffset - 1400).toFixed() + "px";
    }
    else if (window.pageYOffset < 1830) {
      document.getElementById("p1").style.opacity = "0";
      document.body.style.transition = "background-image 0.2s";
      document.body.style.backgroundImage = "url('bg2.jpg')";
      document.body.style.backgroundPosition = "0px " + (window.pageYOffset - 1830).toFixed() + "px";
      document.getElementById("space").style.display = "block";
      document.getElementById("space").style.bottom = (window.pageYOffset - 1650).toFixed() + "px";
    }
    else {
      document.getElementById("space").style.bottom = "180px";
      document.getElementById("space").style.position = "fixed";
      myobj.src = "rocketg.png";
      document.getElementById("p1").style.opacity = "1";
      document.getElementById("p1").style.height = "180px";
      document.getElementById("p1").style.width = "194px";
    }
  }

  // window.addEventListener('scroll', update);

}
