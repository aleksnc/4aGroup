
$(document).ready(function(){

        var x = -(e.pageX + this.offsetLeft) / 40;
        var y = -(e.pageY + this.offsetTop) / 40;
        var xr = -(e.pageX + this.offsetLeft) / 20;
        var yr = -(e.pageY + this.offsetTop) / 20;

        var xc = -(e.pageX + this.offsetLeft) / 30;
        var yc = -(e.pageY + this.offsetTop) / 30;

        $('.planet-earth').css({
            'top': y+70 + 'px ' ,
            'left': x+70 + 'px'});

        $('.rocketq').css({
            'top': yr+150 + 'px ' ,
            'left': xr+150 + 'px'});

        $('.cloud1').css({
            'top': yc+150 + 'px ' ,
            'left': xc+10 + 'px'});

        $('.cloud2').css({
            'top': yc/0.4+60 + 'px ' ,
            'left': xc/0.4+250 + 'px'});

        $('.cloud3').css({
            'top': yc/1+200 + 'px ' ,
            'left': xc/1+200 + 'px'});

        $('.cloud4').css({
            'top': yc/1.5+170 + 'px ' ,
            'left': xc/1.5+370 + 'px'});
    });
});