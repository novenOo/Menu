function aside() {
	$('.fa-bars').click(()=>{
         $('.bars').toggleClass('bar')
		$('aside').toggleClass('aside')
	})
}
aside()