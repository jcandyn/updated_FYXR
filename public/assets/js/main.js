/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);

$(function() {
	var selectedClass = "";
	$(".filter").click(function(){
	selectedClass = $(this).attr("data-rel");
	$("#gallery").fadeTo(100, 0.1);
	$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
	setTimeout(function() {
	$("."+selectedClass).fadeIn().addClass('animation');
	$("#gallery").fadeTo(300, 1);
	}, 300);
	});
	});



	$('form').on('submit', (e) => {
		// e.preventDefault();

		const name = $('#name').val().trim();
		const email = $('#from-email').val().trim();
		const subject = $('#subject').val().trim();
		const text = $('#text').val().trim();

		const data = {
			name,
			email,
			subject,
			text
		};

		$.post('/contact', data, function() {
			console.log('Server recieved our data');
		});
	});