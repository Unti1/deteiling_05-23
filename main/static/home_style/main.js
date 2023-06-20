jQuery(document).ready(function($) {

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }
  
      if (/android/i.test(userAgent)) {
          return "Android";
      }
  
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }
  
      return "unknown";
  }

  if (/webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    $('.install_button').attr('href', 'https://apps.apple.com/us/app/upoker/id1430660365');
  } else {
    $('.install_button').attr('href', 'https://play.google.com/store/apps/details?id=com.zharev.upoker');
  }

  // reg form

  $reg_form = $('#register-form-rcl');

  $input = $('.default-field input[required]');
  $input1 = $('#login-user');
  $input2 = $('#email-user');
  $input3 = $('#primary-pass-user');


  $("input#email-user").inputmask({
    mask: "*{2,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        cardinality: 1,
        casing: "lower"
      }
    }
  });

  $input.on('change', function(){
    $input.removeClass('empty');

    $input.each(function(){
        if ($(this).val() == '') {
          $(this).addClass('empty');
          $('.popup-num-1, .popup-num-2, .popup-num-3, .popup-num-4').removeClass('can_click');
          // $(this).addClass('empty empty-anim');
          // setTimeout(function(){
          //   $input.removeClass('empty-anim');
          // },1000);
        }
    });

  });  

  $('#btn-notru-reg').on('click', function() {
    
    $input.removeClass('empty');

    $input.each(function(){
        if ($(this).val() == '') {
          $('.popup-num-1, .popup-num-2, .popup-num-3, .popup-num-4').removeClass('can_click');
          $(this).addClass('empty empty-anim');
          setTimeout(function(){
            $input.removeClass('empty-anim');
          },1000);
        }
    });
    
    if ( !$input1.hasClass('empty') && !$input2.hasClass('empty') && !$input3.hasClass('empty') ) {
      $reg_form.removeClass('show-1 show-3 show-3-2 show-4').addClass('show-2');
      $('.popup-num-1, .popup-num-2, .popup-num-3, .popup-num-4').addClass('can_click');
    }
    
  });
  $('#btn-enter-сlub1').on('click',function(){
    $reg_form.removeClass('show-1 show-2 show-3-2 active-3-2 show-4').addClass('show-3 active-3-1');
  });
  $('#btn-create-club1').on('click',function(){
    $reg_form.removeClass('show-1 show-2 show-3 active-3-1 show-4').addClass('show-3-2 active-3-2');
  });
  $('#btn-enter-сlub2').on('click',function(){
    $reg_form.removeClass('show-1 show-2 show-3 show-3-2').addClass('show-4');
  });
  $('#btn-create-club2').on('click',function(){
    $reg_form.removeClass('show-1 show-2 show-3 show-3-2').addClass('show-4');    
  });
  
  $('.popup-num-1').on('click', function(){
    if ( !$(this).hasClass('show-1') ) {
      $reg_form.removeClass('show-2 show-3 show-3-2 show-4').addClass('show-1');
    }
  });
  $('.popup-num-2').on('click', function(){
    if ( !$(this).hasClass('show-2') && $(this).hasClass('can_click') ) {
      $reg_form.removeClass('show-1 show-3 show-3-2 show-4').addClass('show-2');
    }
  });
  $('.popup-num-3').on('click', function(){
    if ( (!$(this).hasClass('show-3') || !$(this).hasClass('show-3-2')) && $(this).hasClass('can_click') ) {
      if ( $reg_form.hasClass('active-3-2') ) {
        $reg_form.removeClass('show-1 show-2 show-3 show-4').addClass('show-3-2');
      } else {
        $reg_form.removeClass('show-1 show-2 show-3-2 show-4').addClass('show-3');
      }
    }
  });
  $('.popup-num-4').on('click', function(){
    if ( !$(this).hasClass('show-4') && $(this).hasClass('can_click') ) {
      $reg_form.removeClass('show-1 show-2 show-3 show-3-2').addClass('show-4');
    }
  });


});