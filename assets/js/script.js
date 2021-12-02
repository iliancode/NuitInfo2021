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
// beateau 
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

// formulaires dynamiques
// sauvé
var i = 1;
$(function () {
    $(document).on('click', '.btn-add2', function (e) {
        e.preventDefault();
        i += 1

        var dynaForm2 = $('.formDynamique2'),
            currentEntry2 = $(this).parents('.entry2');
        newEntry2 = (currentEntry2.clone()).appendTo(dynaForm2);

        $("#compteur2").attr("id", "compteur2" + i);
        $("#compteur2" + i).html(i - 1);
        $("#compteur2").attr("id", "compteur2").html(i);

        newEntry2.find('input').val('');
        newEntry2.find('select').val('');
        
        dynaForm2.find('.entry2:not(:last) .btn-add2')
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


