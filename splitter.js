$(function () {
    var isDragging = false;
    var previous_x_pos = 0;
    var panel1 = $(".splitter_panel1");
    var panel2 = $(".splitter_panel2");     
    var panel1MinWidth = parseInt($(".splitter_panel1").css("min-width"), 10);
    var splitterWidth = parseInt($(".vertical_splitter").css("width"), 10);
    $(".vertical_splitter").mousedown(function (e) {
        previous_x_pos = e.pageX;
        isDragging = true;
    });

    $(window).mousemove(function (e) {
        if (isDragging == false) {
            return;
        }
        var offset = e.pageX - previous_x_pos;
        previous_x_pos = e.pageX;
        move(0 - offset);
    });

    $(window).mouseup(function (e) {
        isDragging = false;
    })

    function move(offset) {        
        if ((panel1.width() == panel1MinWidth) && offset > 0)
            return;
        var containerWidth = $(".splitter_container").width();           
        var panel2NewWidth = (panel2.width() + offset);
        if ((panel1MinWidth + panel2NewWidth) >= containerWidth) {
            panel2.width((containerWidth - panel1MinWidth - splitterWidth) / containerWidth * 100 + "%");
        }
        else
            panel2.width(panel2NewWidth / containerWidth * 100 + "%");
        // console.log("panel1.width:" + panel1.width());
        // console.log("panel1.width:" + panel2.width());
        // console.log("container.width:" + containerWidth);
    }
});