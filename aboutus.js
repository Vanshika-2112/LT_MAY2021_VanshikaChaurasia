$(window).on('load', function()
{
  add_onscroll_effect($('.scrolleffect1'), 'open', 767, 200);
  add_onscroll_effect($('.scrolleffect2'), 'open', 767, 200);
});
$(window).on('scroll', function()
{	
	add_onscroll_effect($('.scrolleffect1'), 'open', 767, 200);
  add_onscroll_effect($('.scrolleffect2'), 'open', 767, 200);
});
function add_onscroll_effect(obj, trigger_class, win_width=0, scarto=0)
{
	if ( $(window).width() < win_width ) return;
	if ( obj.length == 0 ) return;

	var currOffset 	= 0,
		win_scroll 	= $(window).scrollTop();

	obj.each(function(index)
	{
		currOffset = ( $(this).offset().top - scarto );

		if ( win_scroll > currOffset )
		{
			$(this).addClass(trigger_class);
		}
	});
}