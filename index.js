    let selectResult = document.getElementById('select-result');
    let boxCard = document.getElementsByClassName("box-card");
    let title = document.getElementsByClassName("title");

    for(let i=0 ; i<boxCard.length; i++) {
        boxCard[i].onclick = function() {
            selectResult.innerHTML = title[i].innerHTML;
        }
    }

    
