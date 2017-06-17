
(function modal(){
	var myBoxes = Array.from(document.getElementsByClassName("cajita"));
	var modal = document.getElementById("box-portfolio-modal");

	var bodyModal, close, img;
	myBoxes.forEach(function(box){
		box.addEventListener("click",function(){

			modal.innerHTML = "";

			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");

			close = document.createElement("img");
			close.classList.add("close");

			img = document.createElement("img");
			img.setAttribute("src","https://www.iconfinder.com/data/icons/virtual-notebook/16/button_close-128.png");
			close.appendChild(img);

			modal.appendChild(close);

			close.addEventListener("click",function(){
				modal.classList.add("hide");
			})

		});
	})
})();