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
            .html('<span>Supprimer</span>');
    })

        .on('click', '.btn-remove', function (e) {
            /*             i = i - 1
                        $("#compteur").attr("id", "compteur").html(i); */
            $(this).parents('.entry:first').remove();

            e.preventDefault();
            return false;
        });
});

var x = 1;
$(function () {
    $(document).on('click', '.btn-add2', function (e) {
        e.preventDefault();
        x += 1

        var dynaForm = $('.formDynamique2'),
            currentEntry = $(this).parents('.entry2');
        newEntry = (currentEntry.clone()).appendTo(dynaForm);

        $("#compteur2").attr("id", "compteur2" + x);
        $("#compteur2" + x).html(x - 1);
        $("#compteur2").attr("id", "compteur2").html(x);

        newEntry.find('input').val('');
        newEntry.find('select').val('');

        dynaForm.find('.entry2:not(:last) .btn-add')
            .removeClass('btn-add2').addClass('btn-remove2')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span>Supprimer</span>');
    })

        .on('click', '.btn-remove2', function (e) {
            /*             i = i - 1
                        $("#compteur").attr("id", "compteur").html(i); */
            $(this).parents('.entry2:first').remove();

            e.preventDefault();
            return false;
        });
});



