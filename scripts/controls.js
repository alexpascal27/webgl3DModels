var MouseControls = (function(MouseControls) {
    "use strict";

    // Check for double inclusion (more than one mouse control)
    if (MouseControls.addMouseHandler)
        return MouseControls;

    MouseControls.addMouseHandler = function (domObject, orbit) {
        var previousLocationX = null,
            previousLocationY = null,
            isMouseDown = false;

        function mouseDownHandler(e) {
            // Store location of mouse when its down (so we can work out change in x,y)
            previousLocationX = e.clientX;
            previousLocationY = e.clientY;
            isMouseDown = true;
        }

        function mouseMoveHandler(e) {
            // If mouse is not down, don't need to orbit
            if (!isMouseDown)
                return;

            // Change in X and Y
            let deltaX = e.clientX - previousLocationX;
            let deltaY = e.clientY - previousLocationY;

            if (orbit!=null)
                orbit(deltaX, deltaY);

            // Update the previous x location to constantly orbit not just after mouse is released
            previousLocationX = e.clientX;
            previousLocationY = e.clientY;
        }

        function mouseUpHandler(e) {
            // Change the boolean to make sure the orbit doesn't happen unless the mouse is down and dragged
            isMouseDown = false;
        }

        domObject.addEventListener("mousedown", mouseDownHandler);
        domObject.addEventListener("mousemove", mouseMoveHandler);
        domObject.addEventListener("mouseup", mouseUpHandler);
    };
    return MouseControls;
}(MouseControls || {}));