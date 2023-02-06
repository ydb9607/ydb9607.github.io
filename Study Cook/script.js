function showpopup () {
    var Popup = document.getElementById('popup')
    Popup.classList.add('show')
  }
  
  function hidepopup () {
    var Popup = document.getElementById('popup')
    popup.classList.remove('hide');
  }

  function showPopup(hasFilter) {
    const popup = document.querySelector('#popup_2');
    
    if (hasFilter) {
      popup.classList.add('has-filter');
    } else {
      popup.classList.remove('has-filter');
    }
    
    popup.classList.remove('hide');
  }
  
  function closePopup() {
    const popup = document.querySelector('#popup_2');
    popup.classList.add('hide');
  }

  

