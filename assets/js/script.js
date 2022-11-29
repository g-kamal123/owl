window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    lightBoxVideo.setAttribute("src","https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1&mute=1");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.setAttribute("allow","autoplay");
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    // lightBoxVideo.removeAttribute("allow");
    lightBoxVideo.removeAttribute("src","https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1&mute=1");
  }