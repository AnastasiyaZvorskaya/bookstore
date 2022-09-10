let selectedBook = undefined;

function selectBook(element) {
    let book1 = element.parentNode.getElementsByClassName('title')[0].innerHTML;
    let form = document.getElementById('formComment');
    if (selectedBook == book1) {
        form.style.display = "none";
        selectedBook = undefined;
    } else {
        form.style.display = "block";
        selectedBook = book1;

        form.book.value = book1;
        form.quantity.value = "";
        form.name.value = "";
        form.address.value = "";
        form.date.value = "";
        form.comment.value = "";
    }
    console.log(book1);
}
document.forms.publish.onsubmit = function() {
    console.dir(this);
    let book = this.book.value;
    let quantity = this.quantity.value;
    let name = this.name.value;
    let address = this.address.value;
    let date = this.date.value;
    let comment = this.comment.value;
    let newDiv = document.createElement("div");
    newDiv.innerHTML += `<div class="result"><h3>BOOKSTORE:</h3><p><span class="result_text"> ${name},</span> thanks for the order!</p><p>Book <span class="result_text">"${book}"</span" will be delivered on <span class="result_text"> ${date} </span> to <span class="result_text">${address}.</span></p></div>`;
    document.body.appendChild(newDiv);
    return false;
}

/*  */
$(document).ready(function () {

(function($) { "use strict";

	//Switch dark/light
	
	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});
	
})(jQuery); 
})