const buttonDesk = document.getElementById("buttonDesk");
  const dialogDesk = document.getElementById("dialogDesk");

  buttonDesk.addEventListener("click", () => {
    dialogDesk.showModal();
    
  });

  function closeDialogDesk() {
    dialogDesk.close();
  }

  const buttonBook = document.getElementById("buttonBook");
  const dialogBook = document.getElementById("dialogBook");

  buttonBook.addEventListener("click", () => {
    dialogBook.showModal();
    
  });

  function closeDialogBook() {
    dialogBook.close();
  }

 


  

  const trig = document.querySelector('#trigger');
  const closer = document.querySelector('#close');

  trig.addEventListener('click', openNav);
  closer.addEventListener('click', closeNav);

  function openNav() {
      document.getElementById("infoMenu").style.width = "100vw";
  }

  function closeNav() {
      document.getElementById("infoMenu").style.width = "0%";
  }
