$(document).ready(function(){
	
	$("#bio").click(function(){
		$(".box").hide();
		$("#edu").removeClass("active");
		$(".bio").show();
		$(this).addClass("active");
	})

	$("#edu").click(function(){
		$(".box").hide();
		$("#bio").removeClass("active");
		$(".cv").show();
		$(this).addClass("active");
	});


	// SEGUNDO SOCIO

	$("#bio2").click(function(){
		$(".box2").hide();
		$("#edu2").removeClass("active");
		$(".bio2").show();
		$(this).addClass("active");
	})

	$("#edu2").click(function(){
		$(".box2").hide();
		$("#bio2").removeClass("active");
		$(".cv2").show();
		$(this).addClass("active");
	});

// FIN SEGUNDO SOCIO

// TERCER SOCIO

	$("#bio3").click(function(){
		$(".box3").hide();
		$("#edu3").removeClass("active");
		$(".bio3").show();
		$(this).addClass("active");
	})

	$("#edu3").click(function(){
		$(".box3").hide();
		$("#bio3").removeClass("active");
		$(".cv3").show();
		$(this).addClass("active");
	});



	$('#trigger-menu').on('click', function(){
		$('#menu-mobile').toggleClass('activo');
	});


	/*$(".card").flip({
	  axis: "y",
	  reverse: true,
	  trigger: "hover",
	  speed:500
	});*/

	setTimeout(function(){ 
		$(".form").css("display","none");}, 22000);

	

});





