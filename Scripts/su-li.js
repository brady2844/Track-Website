function onLoginBtnClick (){
	if($('.login').css('display') == 'none')
	{
		$('.form').addClass('animated flipInY');
		$('.sign-up').hide();
		$('.login').show();	
		setTimeout(function() {
				$('.form').removeClass('animated flipInY');
		}, 1000);
	}

}

function onSignupBtnClick (){
	if($('.sign-up').css('display') == 'none')
	{
			$('.form').addClass('animated flipInY');
			$('.sign-up').show();
			$('.login').hide();	
			setTimeout(function() {
					$('.form').removeClass('animated flipInY');
			}, 1000);
	}

}