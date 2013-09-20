$(function(){

    var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';

	$('#clck').click(function(){
       
           $.ajax({
            url: server,
            dataType: 'jsonp',
            data: {
                q: $('#txtbox').val(),
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            success: showMovies
       	
	       }); 
    })
        

       
    function showMovies(response) {

        console.log('response', response);
        var movies = response.movies;
       
		if($('#txtbox').val() == ""){
			
 			$('#bckgnd').append('<div class = "titles"><p>Fill the searchbox.</p></div>');
			$('.titles').fadeOut(1500, "linear");	
		}
		
		
            if(movies.length == 0){
	               
                $('.subbody').replaceWith('<div class = "subbody"></div>');
                $('#bckgnd').append('<div class = "titles"><p>No results found for' + ' ' + $('#txtbox').val() + '.</p></div>');
                $('.titles').fadeOut(2000, "linear");
            }

            else{

               	 $('.subbody').replaceWith('<div class = "subbody"></div>');
                 $('#bckgnd').append('<div class = "titles"><p>Search found'+ ' ' + movies.length + ' ' + 'results.</p></div>');
                 $('.titles').fadeOut(10000, "linear");
				
		        for (var i = 0; i < movies.length; i++) {
                var movie = movies[i];
		        
        	    	$('.subbody').append('<div class = "content"><a id = "header3" href = "' +movie.links.alternate + '" target = "_blank">' + movie.title + '</a>' + '<br><img id = "posters" src ="' + movie.posters.original + '"/>' + '<h4 id = "header4">Movie Information</h4>' + '<p id = "critics">"' + movie.critics_consensus + '"' + '</p>' + '<p>' + '<b>Rated:</b>' + ' ' + movie.mpaa_rating + '</p>' + '<p>' + '<b>Runtime:</b>' + ' ' + movie.runtime + ' ' + 'min</p>' + '<p>' + '<b>Released Date:</b>' + ' ' + movie.release_dates.dvd + '</p></div>');
		  
                }
               
            };              
		$("#txtbox").val("");
      }


});
