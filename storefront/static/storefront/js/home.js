$("document").ready(function(){
	//let slides = $(".slides");
	let slides = $("#slides-container div");
	let numberOfSlides = slides.length;
	const goingSlide = $(".slides").first();
	var current = goingSlide.next();

	$("#slide1 .product-caption").css("display","block").animate({
		right: 0
	});

	setInterval(slidingDivs, 3000);
	setInterval(changingQuotes, 3000);

});

function slidingDivs(){
	if(current.prev().hasClass('show-slides')){
		current.prev().animate({
			top: 40,
			opacity: 0
		}, 500,
		function(){
			$("#"+current.prev()[0].id+" .product-caption").css("display","block").animate({
				right: -$("#slide1 .product-caption").width()
			});
			current.prev().removeClass('show-slides');
		});
	}
	//Enter animation
	if(current.length == 0){
		$(".slides").last().animate({
			top: 40,
			opacity: 0
		}, 500,
		function(){
			$("#"+$(".slides").last()[0].id+" .product-caption").css("display","block").animate({
				right: -$("#slide1 .product-caption").width()
			});
			$(".slides").last().removeClass('show-slides');
		});
		current = goingSlide;
	}
	current.animate({
		top: 0,
		opacity: 1
	}, 500,
	function(){
		$("#"+current[0].id+" .product-caption").css("display","block").animate({
			right: 0
		});
		current.addClass('show-slides');
		current = current.next();
	});
}	

function changingQuotes(){
	let currentQuotes = $(".each-quote");
	for(var i=0; i<currentQuotes.length; i++){
		if(currentQuotes[i].classList.contains('active')){
			currentQuotes[i].classList.remove('active');
			if(i+1 === currentQuotes.length){
				currentQuotes[0].classList.add('active');
			}else{
				currentQuotes[i+1].classList.add('active');
			}
			break;
		}
	}
}
