//menu
jQuery(function ($) {
  $(".sidebar-dropdown > a").click(function () {
    $(".sidebar-submenu").slideUp(200);
    if ($(this).parent().hasClass("active")) {
      $(".sidebar-dropdown").removeClass("active");
      $(this).parent().removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this).next(".sidebar-submenu").slideDown(200);
      $(this).parent().addClass("active");
    }
  });

  $("#close-sidebar").click(function () {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function () {
    $(".page-wrapper").addClass("toggled");
  });
});

// validation formulaire bootstrap
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var form = document.getElementById('needs-validation');
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();


// formulaires dynamiques
// bateau sauveuteur 
var j = 1;
$(function () {
    $(document).on('click', '.btn-add', function (e) {
        e.preventDefault();
        j += 1

        var dynaForm = $('.formDynamique'),
            currentEntry = $(this).parents('.entry');
        newEntry = (currentEntry.clone()).appendTo(dynaForm);

        $("#compteur").attr("id", "compteur" + j);
        $("#compteur" + j).html(j - 1);
        $("#compteur").attr("id", "compteur").html(j);

        newEntry.find('input').val('');
        newEntry.find('select').val('');

        dynaForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span>x</span>');
    })

        .on('click', '.btn-remove', function (e) {
            /*             i = i - 1
                        $("#compteur").attr("id", "compteur").html(i); */
            $(this).parents('.entry:first').remove();

            e.preventDefault();
            return false;
        });
});

$('#selectModele').change(function() {
  opt = $(this).val();
  if (opt=="new") {
      $('#msgbox').html(`
      <input type="text" class="form-control" id="inputNewModel" name="inputNewModel"
          placeholder="Nouvelle Marque" required />
      <div class="invalid-feedback">Veuillez fournir un modele valid.</div>`);
  }
});

$('#selectMarque').change(function() {
  opt = $(this).val();
  if (opt=="new") {
      $('#msgbox2').html(`
      <input type="text" class="form-control" id="inputNewMarque" name="inputNewMarque"
          placeholder="Nouveau Model" required />
      <div class="invalid-feedback">Veuillez fournir une marque valid.</div>`);
  }
});



