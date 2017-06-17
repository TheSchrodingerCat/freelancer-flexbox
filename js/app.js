
(function main(){

	//modal
	function modal(){
		var myBoxes = Array.from(document.getElementsByClassName("cajita"));
		var modal = document.getElementById("box-portfolio-modal");

		var bodyModal, title, line1, line2, myLine, star, textContent, textModal, close, textClose;
		myBoxes.forEach(function(box){
			box.addEventListener("click",function(){

				modal.innerHTML = "";

				//titulo del proyecto
				title = document.createElement("div");

				line1 = document.createElement("div");
				line1.classList.add("linea");
				myLine = document.createElement("hr");
				myLine.classList.add("my-line");

				line1.appendChild(myLine);

				star = document.createElement("i");
				star.classList.add("fa");
				star.classList.add("fa-star");
				star.setAttribute("aria-hidden","true");

				line2 = document.createElement("div");
				line2.classList.add("linea");
				myLine = document.createElement("hr");
				myLine.classList.add("my-line");

				line2.appendChild(myLine);

				title.appendChild(line1);
				title.appendChild(star);
				title.appendChild(line2);


				//texto debajo de la foto
				textContent = document.createElement("div");
				textModal = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptas sed reiciendis ipsum atque error voluptatem vel natus quia architecto asperiores minima cumque distinctio ipsa perspiciatis exercitationem, iure temporibus non.");
				textContent.appendChild(textModal);

				bodyModal = document.createElement("div");
				bodyModal.classList.add("modal-body");
				bodyModal.innerHTML = title.innerHTML + "<br>" + box.innerHTML + "<br>" + textContent.innerHTML;
				modal.appendChild(bodyModal);
				modal.classList.remove("hide");

				close = document.createElement("span");
				close.classList.add("close");
				textClose = document.createTextNode("X");

				//esto no funciona, no se ve la imagen no se por qué
				//img = document.createElement("img");
				//img.setAttribute("src","https://www.iconfinder.com/data/icons/virtual-notebook/16/button_close-128.png");
				//img.setAttribute("class","img-responsive");

				close.appendChild(textClose);
				modal.appendChild(close);

				close.addEventListener("click",function(){
					modal.classList.add("hide");
				})

			});
		});
	}
	modal();
})();
