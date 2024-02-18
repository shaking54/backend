$(function(){

    $('#submit').click(function(){
		
		var search_topic = $('#doc').val();
		// var search_topic = document.all[0].innerText;
		// $('#summary').html(search_topic);
		if (search_topic){
                chrome.runtime.sendMessage(
					{doc: search_topic},
					function(response) {
						result = response.farewell;	
						$('#summary').html(result.doc);
					});
		}
		
    });
});