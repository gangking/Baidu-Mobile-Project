/**
 * Created by Administrator on 2018/3/23 0023.
 */
$(function () {
    console.log('�ֻ��ٶ�');
    $(window).on('resize', function () {
        var width = $(window).width();
        fontSize = 100 / 290 * width;//1080��ʾ�����ͼ�ߴ磨�߶ȣ�
        $('html').css('font-size', fontSize);
    }).trigger('resize');
})