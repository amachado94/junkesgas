script link_to="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"
script
	$(document).ready(function(){
  		$("#flip").click(function(){
    		$("#panel").slideToggle("slow");
  		});
	});
 