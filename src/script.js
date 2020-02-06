$(document).ready(function () {

    function teste (type) {
        alert('Click do teste do ' + type + ' registrado!!!');
    };

    // Adicionando texto inicial no mag-faq-title
    $('.mag-faq-title').text('Cartão de crédito e débito');

    // Adicionando a cor branca para o primeiro icone da seção do mag-faq
    $('.mag-faq .mag-icon-and-text').first().css('color', '#fff');

    $('.mag-faq .mag-icon-and-text').on('click', function() {
        const content = $(this).find('i').data('content');
        $('.mag-faq-title').text(content);

        // Deixando todos os mag-icon-and-text cinza
        $('.mag-faq .mag-icon-and-text').css('color', '#a8a8a8');

        $(this).css('color', '#fff');
         // Deixando a cor do texto em branco
         $(this).css('color', '#fff');
    });

   
    
});