/*
TODO: this needs to be rewritten so that:
* When used on checkboxes, the toggle content hides and shows depending on the state of the checkbox
* When used on radios, the toggle content shows based on the state of the radio button
* Hide/show content has to be done differently
*/

//
// Toggled content
//

function showHideToggledContent() {
	$(".js-has-toggle").each(
		function () {
			var $toggle = $(this);
			var dataTarget = $toggle.attr("data-target");
			
			$toggle.on('click', function(){
				// Hide other targets in this group
				var $toggleGroup = $(this).closest('.js-toggle-group');
				var $toggles = $toggleGroup.find('.js-has-toggle');
				$toggles.each(function(){
					var myTarget = $(this).attr("data-target");
					var $myTarget = $('#' + myTarget);
					$myTarget.hide();
				});
				// Show the target
				var $dataTarget = $('#' + dataTarget);
				$dataTarget.show();
			});
		}
	);
}

//
// Animated jump links
//

function animateScroll() {
	$('a.js-animate-scroll').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('body').addClass('is-scrolling');
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500, function(){
				$('body').removeClass('is-scrolling');
			});
		}
	});
}

//
// Accordion
//

function accordion() {
	$(".accordion").each(
		function () {
			var $accordion = $(this);
			var $expand = $accordion.find('.accordion__expand');
			var $collapse = $accordion.find('.accordion__collapse');
			
			$expand.on('click', function(event){
				var $target = $(this).closest('.accordion__row');
				//$target.removeClass('is-collapsed').addClass('is-expanded');
				$target.toggleClass('is-collapsed is-expanded');
				event.preventDefault();
			});
			
			$collapse.on('click', function(event){
				var $target = $(this).closest('.accordion__row');
				$target.toggleClass('is-collapsed is-expanded');
				event.preventDefault();
			});
		}
	);
	
	$('.accord').each(function(){
		var $accord = $(this);
		// var $expand = $accordion.find('.accord__btn__expand');
		// var $collapse = $accordion.find('.accordion__collapse');
		var $accordButtons = $accord.find('.accord__head__buttons');
		
		$accordButtons.on('click', function(event){
			var $target = $(this).closest('.accord__row');
			//$target.removeClass('is-collapsed').addClass('is-expanded');
			$target.toggleClass('is-collapsed');
			// alert('clicked!');
			event.preventDefault();
		});
	});
}

function initPage(){

	// your functions go here

	console.log('page loaded');
    
  showHideToggledContent();
  animateScroll();
  accordion();

};
  //
  // Collapsable slats
  //

  /*
  Markup:
  <ul class="slat-list collapse-slat">
    <li class="is-collapsed">
      <header>
        <h2>Heading here</h2>
        <b class="pointer"><span class="icon icon-next"></span></b>
      </header>
      <div class="content">
        Content here...
      </div>
    </li>
  </ul>
  */

/*
  $collapseslats = $('.collapse-slat > li').addClass('is-collapsed');
  $('.collapse-slat > .is-open').removeClass('is-collapsed');
  $collapsetoggle = $collapseslats.find('> header');

  $collapsetoggle.click(function(){
    $slat = $(this).parent('li');
    if ($slat.hasClass('is-collapsed')) {
      $slat.removeClass('is-collapsed');
    } else {
      $slat.addClass('is-collapsed');
    }
    return false;
  });
  
*/

//
  // Show/hide more links
  //

  /*
  Markup:
  <div id="UniqueName" class="more-content is-hidden">
    Content here...
  </div>
  <a class="more-link" href="#UniqueName">
    <span class="showtext">Show this</span>
    <span class="hidetext is-hidden">Hide this</span>
  </a>
  */

/*
  $morelinks = $('.more-link');

  // Handle the showing
  $morelinks.click(function(){
    $targetcontent = $(this).attr('href'); // Get the target
    // If the target is hidden
    if ($($targetcontent).hasClass('is-hidden')) {
      // Show it
      $($targetcontent).removeClass('is-hidden');
      // Hide the "show" text
      $(this).find('.showtext').addClass('is-hidden');
      // Show the "hide" text
      $(this).find('.hidetext').removeClass('is-hidden');
    // If the taret is showing
    } else {
      // Hide it
      $($targetcontent).addClass('is-hidden');
      // Hide the "hide" text
      $(this).find('.hidetext').addClass('is-hidden');
      // Show the "show" text
      $(this).find('.showtext').removeClass('is-hidden');
    }
    return false;
  });
  
*/