$(document).ready(function () {

    function teste (type) {
        alert('Click do teste do ' + type + ' registrado!!!');
    };

    //Adicionando texto inicial no mag-faq-title
    $('.mag-faq-title').text('Cartão de crédito e débito');

    $('.mag-faq .mag-icon-and-text i').on('click', function() {
        const content = $(this).data('content');
        $('.mag-faq-title').text(content);
    });
});