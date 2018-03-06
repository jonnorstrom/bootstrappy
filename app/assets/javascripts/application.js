// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require rails-ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function() {
  $('.new_pony').on('submit', function(e) {
    e.preventDefault();
    $form = $(this);
    var url = $form.attr('action');
    var data = $form.serialize();
    var method = $form.attr('method');

    $.ajax({
      url: url,
      data: data,
      method: method,
      dataType: "json"
    }).success(function(resp){
      $('.existing-ponies').append(resp['pony']);
      setTimeout(function(){
        $('.create_pony_submit').prop('disabled', false)
        $form[0].reset();
      }, 5)
    })
  })

  $('body').on('click', function(e) {
    var htmlElement = $(e.target)

    var targetClass = htmlElement.attr('class')
    if (targetClass == 'delete-pony') {
      e.preventDefault();


      var url = htmlElement.attr('href');

      $.ajax({
        url: url,
        method: "delete",
        dataType: 'json'
      }).success(function(resp){
        htmlElement.parent().hide()
      });
    }

  })
})
