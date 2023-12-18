function showTooltip(event) {
    var tooltip = document.createElement('span');


    tooltip.style.position = 'absolute';
    tooltip.style.top = event.pageY + 10 + 'px';
    tooltip.style.left = event.pageX + 10 + 'px';


    document.body.appendChild(tooltip);


    var redRectangle = document.createElement('div');
    var yellowRectangle = document.createElement('div');
    var greenRectangle = document.createElement('div');


    redRectangle.style.width = '25px';
    redRectangle.style.height = '25px';
    redRectangle.style.backgroundColor = 'red';
    redRectangle.style.display = 'inline-block';
    redRectangle.style.marginRight = '10px';

    yellowRectangle.style.width = '25px';
    yellowRectangle.style.height = '25px';
    yellowRectangle.style.backgroundColor = 'yellow';
    yellowRectangle.style.display = 'inline-block';
    yellowRectangle.style.marginRight = '10px';

    greenRectangle.style.width = '25px';
    greenRectangle.style.height = '25px';
    greenRectangle.style.backgroundColor = 'green';
    greenRectangle.style.display = 'inline-block';


    tooltip.appendChild(redRectangle);
    tooltip.appendChild(yellowRectangle);
    tooltip.appendChild(greenRectangle);


    this.addEventListener('mouseout', function () {
        tooltip.remove();
    });
}

var img = document.getElementById('verde');
img.addEventListener('mouseover', showTooltip);