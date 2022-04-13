$(document).ready(function () {
  // typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 90);
    };
  })(jQuery);

  // input text for typing animation
  $("#holder").writeText("TOMANDO A SERIO SUA DIVERSÃO.");

  // initialize wow.js
  new WOW().init();

  // Push the body and the nav over by 285px over
  var main = function () {
    $(".fa-bars").click(function () {
      $(".nav-screen").animate(
        {
          right: "0px",
        },
        200
      );

      $("body").animate(
        {
          right: "285px",
        },
        200
      );
    });

    // Then push them back */
    $(".fa-times").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px",
        },
        200
      );

      $("body").animate(
        {
          right: "0px",
        },
        200
      );
    });

    $(".nav-links a").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px",
        },
        500
      );

      $("body").animate(
        {
          right: "0px",
        },
        500
      );
    });
  };

  $(document).ready(main);

  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    navigationTooltips: ["home", "service", "mural", "reserva"],
    anchors: ["home", "service", "mural", "reserva"],
    menu: "#myMenu",
    fitToSection: false,

    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);

      //using index
      if (index == 1) {
        /* add opacity to arrow */
        $(".fa-chevron-down").each(function () {
          $(this).css("opacity", "1");
        });
        $(".header-links a").each(function () {
          $(this).css("color", "white");
        });
        $(".header-links").css("background-color", "transparent");
      } else if (index != 1) {
        $(".header-links a").each(function () {
          $(this).css("color", "black");
        });
        $(".header-links").css("background-color", "white");
      }
    },
  });

  // move section down one
  $(document).on("click", "#moveDown", function () {
    $.fn.fullpage.moveSectionDown();
  });

  // fullpage.js link navigation
  $(document).on("click", "#skills", function () {
    $.fn.fullpage.moveTo(2);
  });

  $(document).on("click", "#projects", function () {
    $.fn.fullpage.moveTo(3);
  });

  $(document).on("click", "#contact", function () {
    $.fn.fullpage.moveTo(4);
  });

  // smooth scrolling
  // $(function () {
  //   $("a[href*=#]:not([href=#])").click(function () {
  //     if (
  //       location.pathname.replace(/^\//, "") ==
  //         this.pathname.replace(/^\//, "") &&
  //       location.hostname == this.hostname
  //     ) {
  //       var target = $(this.hash);
  //       target = target.length
  //         ? target
  //         : $("[name=" + this.hash.slice(1) + "]");
  //       if (target.length) {
  //         $("html,body").animate(
  //           {
  //             scrollTop: target.offset().top,
  //           },
  //           700
  //         );
  //         return false;
  //       }
  //     }
  //   });
  // });
});

// Función que activa el overlay. Se pasa como parámetro el contenedor padre (#vintalight en el DOM)
const activeVintalight = (container) => {
  // Delegación de eventos para detectar click en los hijos
  container.addEventListener("click", (e) => {
    let element = e.target;
    // Validar que se haya dado click en el pseudoelemento before
    if (element.tagName == "DIV") {
      // Obtener dirección y descripción de la imagen que se dio click
      let src = element.querySelector("img").src,
        descrip = element.querySelector("img").alt,
        // Crear un nuevo div que se usará como overlay
        vintalightOverlay = document.createElement("div");
      // Agregar clase al div que creamos para poder darle estilos con CSS
      vintalightOverlay.classList.add("vintalight-overlay");
      // Agregar contenido al overlay
      vintalightOverlay.innerHTML = `
                <figure class="vintalight__container2 active">

                <div class="Xcontainer">
                    <button class="vintalight__button" id="button-close">✕</button></div>
                    
                    <div class="vintalight__photo2">
                        <img src="${src}" alt="${descrip}" class="vintalight__img"/>
                    </div>
                    <figcaption class="vintalight__caption">
                        <h3 class="vintalight__text">${descrip}</h3>
                       
                    </figcaption>
                    <div class="buttonContainer">
                    <button class="button"> <a href="#contact" class="inbutton">voce escolhe na sua reserva</a>
                    </button>
                    </div>

                     
                </figure>
            `;
      // Meter el overlay en el DOM
      document.body.appendChild(vintalightOverlay);
      // Añadimos la clase active para poder darle transición
      setTimeout(() => {
        vintalightOverlay.classList.add("active");
      }, 1);
      // Eliminar el scroll del body
      document.body.style.overflow = "hidden";
      // Evento para cerrar el overlay
      document.getElementById("button-close").addEventListener("click", () => {
        // Eliminar clase active
        vintalightOverlay.classList.remove("active");
        // Eliminar overlay del DOM
        setTimeout(() => {
          document.body.removeChild(vintalightOverlay);
        }, 500);
        // Devolver scroll al body
        document.body.style.overflow = "auto";
      });
      // Evento para cerrar el overlay con la tecla ESC
      window.addEventListener("keyup", (e) => {
        if (e.key === "Escape") document.getElementById("button-close").click();
      });
    }
  });
};

// Activamos la función
window.addEventListener(
  "load",
  activeVintalight(document.getElementById("vintalight"))
);
