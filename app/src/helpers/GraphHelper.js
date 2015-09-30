$(document).ready(function(){
	handleClick();
});

function handleClick() {
	/* Toggle the search modal */
	$(".searchIcon").on("click", function(e){
		$(".searchIcon").toggleClass("searchIcon_active");
		$(".searchModal").toggleClass("searchModal_active");
	});

	/* Toggle the mobile navigation menu */
	$(".navigation__icon").on("click", function(e){
		$(".navigation__list").toggleClass("navigation__list_active");
		$(".navigation__icon").toggleClass("navigation__icon_active");
	});

	
	$(document).click(function(event) { 

		/* close search modal when clicking off of the element */
    if($(event.target).parents(".searchModal").length == 0
    	&& !$(event.target).hasClass("searchIcon")
    	&& !$(event.target).hasClass("searchModal")) {

    	$(".searchModal").removeClass("searchModal_active");
    	$(".searchIcon").removeClass("searchIcon_active");
    }     
	})
}