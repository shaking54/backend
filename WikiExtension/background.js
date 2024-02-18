var serverhost = 'http://127.0.0.1:5000';

	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
		  
		
			var url = serverhost + '/templateNer/';		
						
			console.log(request);
						
			//var url = "http://127.0.0.1:8000/wiki/get_wiki_summary/?topic=%22COVID19%22"	
			fetch(url, {
				method: "POST",
				body: JSON.stringify({
				  doc: request.doc
				}),
				headers: {
				  "Content-type": "application/json"
				}
			  })
				.then((response) => response.json())
				.then(response => sendResponse({farewell: response}))
				.then((json) => console.log(json));
				
			return true;  // Will respond asynchronously.
		  
	});

	