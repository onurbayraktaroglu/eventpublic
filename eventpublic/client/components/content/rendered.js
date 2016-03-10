windowResizeHandler = function() {
    $('body').removeClass('no-hidden');
    
    windowHeight = window.innerHeight;
    windowWidth = $(window).width();
    contentHeight = windowHeight - $('#header').height();
    contentWidth = $('#content').width();

    $('#leftSide').height(contentHeight);
    $('.closeLeftSide').height(contentHeight);
    $('#wrapper').height(contentHeight);
    $('#mapView').height(contentHeight);
    $('#content').height(contentHeight);
    setTimeout(function() {
        $('.commentsFormWrapper').width(contentWidth);
    }, 300);

    if (map) {
        google.maps.event.trigger(map, 'resize');
    }

    // Add custom scrollbar for left side navigation
    if(windowWidth > 767) {
        $('.bigNav').slimScroll({
            height : contentHeight - $('.leftUserWraper').height()
        });
    } else {
        $('.bigNav').slimScroll({
            height : contentHeight
        });
    }
    if($('.bigNav').parent('.slimScrollDiv').size() > 0) {
        $('.bigNav').parent().replaceWith($('.bigNav'));
        if(windowWidth > 767) {
            $('.bigNav').slimScroll({
                height : contentHeight - $('.leftUserWraper').height()
            });
        } else {
            $('.bigNav').slimScroll({
                height : contentHeight
            });
        }
    }

    // reposition of prices and area reange sliders tooltip
    var priceSliderRangeLeft = parseInt($('.priceSlider .ui-slider-range').css('left'));
    var priceSliderRangeWidth = $('.priceSlider .ui-slider-range').width();
    var priceSliderLeft = priceSliderRangeLeft + ( priceSliderRangeWidth / 2 ) - ( $('.priceSlider .sliderTooltip').width() / 2 );
    $('.priceSlider .sliderTooltip').css('left', priceSliderLeft);

    var areaSliderRangeLeft = parseInt($('.areaSlider .ui-slider-range').css('left'));
    var areaSliderRangeWidth = $('.areaSlider .ui-slider-range').width();
    var areaSliderLeft = areaSliderRangeLeft + ( areaSliderRangeWidth / 2 ) - ( $('.areaSlider .sliderTooltip').width() / 2 );
    $('.areaSlider .sliderTooltip').css('left', areaSliderLeft);
}

Template.home.onRendered(windowResizeHandler);
