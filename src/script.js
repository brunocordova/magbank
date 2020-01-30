$(document).ready(function () {

    function teste (type) {
        alert('Click do teste do ' + type + ' registrado!!!');
    };

    $('.mag-faq .mag-icon-and-text i').on('click', function() {
        const content = $(this).data('content');
        alert(content);
    });
});