    var send = document.querySelector(".btn-form");
    var sendConfirm = document.querySelector(".modal-success");
    var sendFail = document.querySelector(".modal-fail");
    var close = document.querySelector(".btn-success");
    var closeFail = document.querySelector(".btn-fail");
    var requiredSurname = document.getElementById("surname");
    var requiredName = document.getElementById("name");
    var requiredPhone  = document.getElementById("phone");
    var requiredMail = document.getElementById("mail");

    send.addEventListener("click", function(evt)
    {
      evt.preventDefault();
      if (requiredPhone.value !== "" && requiredSurname.value !== "" && requiredName.value !== "" && requiredMail.value !== "") {
      sendConfirm.classList.add("modal-show")
    } else { sendFail.classList.add("modal-show")}
    });

    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      sendConfirm.classList.remove("modal-show");
    });

    closeFail.addEventListener("click", function(evt) {
      evt.preventDefault();
      sendFail.classList.remove("modal-show");
    });

    window.addEventListener ("keydown", function(evt) {
      if(evt.keyCode === 27) {
        if(sendConfirm.classList.contains("modal-show")) {
        sendConfirm.classList.remove("modal-show");
        }
      }
    });

    window.addEventListener ("keydown", function(evt) {
      if(evt.keyCode === 27) {
        if(sendFail.classList.contains("modal-show")) {
        sendFail.classList.remove("modal-show");
        }
      }
    });
