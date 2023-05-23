function showDiv(divId) {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-button');
    }

    var selectedButton = document.getElementById(divId + 'Button');
    selectedButton.classList.add('active-button');

    var divs = document.getElementsByClassName('basic-details');
    for (var j = 0; j < divs.length; j++) {
        divs[j].classList.add('d-none');
    }
    var selectedDiv = document.getElementById(divId);
    selectedDiv.classList.remove('d-none');
}