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


	$("a.external").click(function() {
      url = $(this).attr("href");
      window.open(url, '_blank');
      return false;
   });

	$('#trigger-menu').on('click', function(){
		$('#menu-mobile').toggleClass('activo');
	});


	$(".card").flip({
	  axis: "y",
	  reverse: true,
	  trigger: "hover",
	  speed:500
	});

});





