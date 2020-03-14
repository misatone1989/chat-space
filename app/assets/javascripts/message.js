$(function(){

    function buildHTML(message){
        if ( message.image ) {
            var html =
            `<div class="message">
                <div class="main_chat__message__list__contents">
                <div class="main_chat__message__list__user__name">
                ${message.user_name}
                </div>
                <div class="main_chat__message__list__date">
                    ${message.created_at}
                </div>
                <div class="main_chat__message__list__message">
                <p class="lower-message__image">
                    ${message.content}
                </p>
                </div>
                <img src=${message.image} >
                </div>
                </div>
                <div>`
            return html;
        } else {
            var html =
            `<div class="message">
             <div class="main_chat__message__list__contents">
             <div class="main_chat__message__list__user__name">
             ${message.user_name}
             </div>
             <div class="main_chat__message__list__date">
             ${message.created_at}
             </div>
             <div class="main_chat__message__list__message">
             <p class="main_chat__message__list__content">
             ${message.content}
             </p>
             </div>
             </div>
             </div>`
            return html;
        };
    }

  $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })

       .done(function(data){
         var html = buildHTML(data);
         $('.main_chat__message__list').append(html);  
         $('.main_chat__message__list').animate({ scrollTop: $('.main_chat__message__list')[0].scrollHeight});    
         $('form')[0].reset();
         $('.form__submit').prop('disabled', false);
        })

       .fail(function() {
            alert("メッセージ送信に失敗しました");
            $('.form__submit').prop('disabled', false);
       })
  })
})  
