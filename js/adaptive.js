/**
 * Created by Administrator on 2018/3/23 0023.
 */
$(function () {
    console.log('手机百度');
    $(window).on('resize', function () {
        var width = $(window).width();
        fontSize = 100 / 290 * width;//1080表示，设计图尺寸（高度）
        $('html').css('font-size', fontSize);
    }).trigger('resize');
})