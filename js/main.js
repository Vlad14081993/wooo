// Modal Window

const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const modal = document.getElementById('wrapper-modal');
const overlay = document.getElementById('overlay');

btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
})

const closeModal = () => {
    modal.classList.remove('active');
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);


// Mobile Menu
$(document).ready(function () {
  $('.mobile_menu').on('click', function () {
    $('.menu-dNone, .main-menu').toggleClass('d-flex');
  });
});


// Slick Slide
$(document).ready(function(){
  $('.offer-slide-item').slick({
    infinite: true,
    dots: true,
    customPaging: function(slider, i) {
      // this example would render "tabs" with titles
      return '<button class="offer__slide-btn"></button>';
    },
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.dream-wrapper').slick({
    infinite: true,
    dots: true,
    customPaging: function(slider, i) {
      // this example would render "tabs" with titles
      return '<button class="dream-slide__btn"></button>';
    },
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

// Contacts Textarea
var textarea = document.querySelector('.form-block__message');

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});


// validate

$.validator.addMethod("regex", function (value, element, regexp) {
  var regExsp = new RegExp(regexp);
  return regExsp.test(value);
}, "Please check your input."
);


$('.form-book').each(function () {
  $(this).validate({
    rules: {
      name: {
        required: true,
        regex: "[A-Za-z]{1,32}",
        minlength: 3
      },
      tel: {
        digits: true,
        required: true,
        minlength: 10,
        maxlength: 12,
        regex: "[0-9]+"
      },
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      name: {
        required: "Field is required",
        regex: "Enter your name properly"
      },
      tel: {
        required: "Field is required",
        regex: "Enter your phone number properly"
      },
      email: {
        required: "Field is required",
        regex: "Enter your email properly"
      }
    }
  });
});

$("#form-mail").validate({
  rules: {
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    email: {
      required: "Field is required",
      regex: "Enter your email properly"
    }
  },

  submitHandler: function (form) {
    $('#preloader-active').fadeIn();
    var $form = $(form);
    var $formId = $(form).attr('id');
    switch ($formId) {
      case 'form-book1':
        $.ajax({
          type: 'POST',
          url: $form.attr('action'),
          data: $form.serialize()
        })
          .done(function () {
            console.log('Success');
          })
          .fail(function () {
            console.log('Fail');
          })
          .always(function () {
            console.log('Always');
            setTimeout(function () {
              $('#wrapper-modal').fadeIn();
              $form.trigger('reset');
            }, 1400);
            setTimeout(function () {
              $('#preloader-active').fadeIn();
              $form.trigger('reset');
            }, 1400);
          });
        break;
      case 'form-book2':
        $.ajax({
          type: 'POST',
          url: $form.attr('action'),
          data: $form.serialize()
        })
          .done(function () {
            console.log('Success');
          })
          .fail(function () {
            console.log('Fail');
          })
          .always(function () {
            console.log('Always');
            setTimeout(function () {
              $('#preloader-active').fadeIn();
              $form.trigger('reset');
            }, 1400);
          });
        break;
    }
    return false;
  }
});
$('.js-form').each(function () {
  valEl($(this));
});



