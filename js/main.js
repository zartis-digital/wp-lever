jQuery(document).ready(function($){

    $('.lever .lever-job-title').click( function() {
        if( $(this).closest('.lever-job').hasClass('active') ) {
            $('.lever-job').removeClass('active');
        } else {
            $('.lever-job').removeClass('active');
            $(this).closest('.lever-job').addClass('active');
        }
    });

});