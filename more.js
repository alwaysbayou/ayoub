var h = $('div')[0].scrollHeight;
$('#more').click(function(e) {
    e.stopPropagation();
    $('div').animate({
        'height': h
    })
});
$(document).click(function() {
    $('div').animate({
        'height': '50px'
    })
})
