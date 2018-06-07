$(function() {

	//responsive hamburger menu
	$(".navIcon").click(function() {
		if ($(".menu ul").hasClass("hidden-sm")) {
			setTimeout(function(){
			$(".menu ul").removeClass("hidden-sm");
			$(".b-wrapper div").removeClass("navButton");
			$(".menu ul").addClass("toggle-menu");
			$(".b-wrapper div").addClass("navButton-open")
			}, 200)
		}
		else{
			setTimeout(function(){
			$(".menu ul").removeClass("toggle-menu");
			$(".b-wrapper div").removeClass("navButton-open");
			$(".menu ul").addClass("hidden-sm");
			$(".b-wrapper div").addClass("navButton")
			}, 200)
			
		}
	});
	//owl carousel slider
	$(".slider").owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		smartSpeed: 1500,
		navText: ["<img class='img-responsive' src='img/arrow-left.png'>","<img class='img-responsive' src='img/arrow-right.png'>"],
		dots: false
	});
	//slider button make "active"
	$(".owl-prev").click(function(){
		$(".owl-prev img").attr("src", "img/arrow-left-active.png");
		$(".owl-next img").attr("src", "img/arrow-right.png");
	});	
	$(".owl-next").click(function(){
		$(".owl-prev img").attr("src", "img/arrow-left.png");
		$(".owl-next img").attr("src", "img/arrow-right-active.png");
	})

	$(".dotsA").click(function(){
			$(".in span").removeClass("hidden-art");
			$(".in p").removeClass("hidden-art");
			$(".in a").removeClass("dotsA");
			$(".in a").addClass("hide");
		});
		



	//create random numbers for chart height
	function random(){
	 	return Math.round((Math.random()*10+12));
	}
	//create chart
	var ctx = document.getElementById('mycanvas').getContext('2d');
	var ctx1 = document.getElementById('canvas2').getContext('2d');
		var chart = new Chart(ctx, {
		    // The type of chart we want to create
		type: 'bar',
    data: {
        labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00","16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        datasets: [
	        {
            label: 'bez fronty',
            backgroundColor: '#ffc59b',	
            data: [2, 4, 6, 8, 10, 12, 11, 9, 7, 9, random(), random(), random(), random(), random(), random()]
	        },
	        {
            label: 'možnost fronty',
            backgroundColor: '#f88b6b',
            data: [6, 8, 10, 14, 12, 16, 18, 16, 17, 17, random(), random(), random(), random(), random(), random()]
	        },
	        {
           label: 'pravděpodobné čekání ve frontě',
            backgroundColor: '#e54d21',
            data: [8, 12, 28, 14, 18, 22, 24, 16, 14, 19, random(), random(), random(), random(), random(), random()]
	        }
        ]
    },
    options: {
    	cornerRadius: 30,
    	maintainAspectRatio: false,
    	responsive: true,
    	legend:{
				position: 'bottom',
				labels:{
				usePointStyle: true
				}
				},
        scales: {
        		xAxes: [{
								categoryPercentage: 1.0,
								barPercentage: 1,
								gridLines: {
								drawBorder: false,
								display:false
								},
								ticks: {
										padding:0,
										autoSkip: false,
										maxRotation: 90,
										minRotation: 90
										}
								}],
            yAxes: [{
                gridLines: {
									drawBorder: false,
									display:false
									},
									ticks: {
									padding:0,
									display: false,

									}
            }]
        }
    }
		});
		var chart1 = new Chart(ctx1, {
		    // The type of chart we want to create
		type: 'bar',
    data: {
        labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00","16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        datasets: [
	        {
            label: 'bez fronty',
            backgroundColor: '#ffc59b',	
            data: [2, 4, 6, 8, 10, 12, 11, 9, 7, 9, random(), random(), random(), random(), random(), random()]
	        },
	        {
            label: 'možnost fronty',
            backgroundColor: '#f88b6b',
            data: [6, 8, 10, 14, 12, 16, 18, 16, 17, 17, random(), random(), random(), random(), random(), random()]
	        },
	        {
           label: 'pravděpodobné čekání ve frontě',
            backgroundColor: '#e54d21',
            data: [8, 12, 28, 14, 18, 22, 24, 16, 14, 19, random(), random(), random(), random(), random(), random()]
	        }
        ]
    },
    options: {
    	maintainAspectRatio: false,
    	responsive: true,
    	barValueSpacing: 2,
    	legend:{
				position: 'bottom',
				labels:{
				usePointStyle: true
				}
				},
        scales: {
        		xAxes: [{
								categoryPercentage: 1.0,
								barPercentage: 1,
								gridLines: {
								drawBorder: false,
								display:false
								},
								ticks: {
										padding:0,
										autoSkip: false,
										maxRotation: 90,
										minRotation: 90
										}
								}],
            yAxes: [{
                gridLines: {
									drawBorder: false,
									display:false
									},
									ticks: {
									padding:0,
									display: false,

									}
            }]
        }
    }
		});
	

});
