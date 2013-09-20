$(function() {

    var app = {};

    var url1 = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';

     $.ajax({
            url: url1,
            data: {   
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            dataType: 'jsonp',
            success: showInTheaters
    });

    var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';

    $("#txtbox").keypress(function(e) {  
        var txtboxEl = $("#txtbox").val();
        
        if(e.which == 13) {
            
            if(txtboxEl == "")
            {
                alert("Fill box to search!");
            }
            else
            {
             $.ajax({
                url: server,
                data: {  
                    q: txtboxEl,
                    apiKey: 'hcrurhsttexasrgfm2y6yahm'
                },
                dataType: 'jsonp',
                success: showMovies
            });
            }

        }
    });
    

    var url1 = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';

    $("#intheaters-btn").click(function() {
        $.ajax({
            url: url1,
            data: {   
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            dataType: 'jsonp',
            success: showInTheaters
        });

    });
    
    var url2 = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json';

    $("#boxoffice-btn").click(function() {
        $.ajax({
            url: url2,
            data: {   
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            dataType: 'jsonp',
            success: showBoxOffice
        });
    
    });

    

    var url3 = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json';

    $("#opening-btn").click(function() {
        $.ajax({
            url: url3,
            data: {   
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            dataType: 'jsonp',
            success: showOpening
        });

    });

    var url4 = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json';

    $("#upcoming-btn").click(function() {
        $.ajax({
            url: url4,
            data: {   
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            dataType: 'jsonp',
            success: showUpComing
            
        });

    });


    function getTemplate(template_id, context) {
        var template, $template, markup;
        template = $('#' + template_id);
        $template = Handlebars.compile(template.html());
        markup = $template(context);
        return markup;

    }

    function showMovies(response, title) {

        clearField();
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                $('#list').append(getTemplate('tpl-movie-item', movie));
        }
        $('#titlehead').append("Searched Movies");
        $("#txtbox").val("");
    }

    function showBoxOffice(response) {
        
        clearField();
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                $('#list').append(getTemplate('tpl-movie-item', movie));
        }
        $('#titlehead').append("Box Office Movies");        
    }

    function showInTheaters(response) {
        
        clearField();

        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                $('#list').append(getTemplate('tpl-movie-item', movie));
        }
        $('#titlehead').append("In Theaters Movies");
       
    }

    function showOpening(response) {
        
        clearField();
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                $('#list').append(getTemplate('tpl-movie-item', movie));
        }
        $('#titlehead').append("Opening Movies");

    }

    function showUpComing(response) {
        
        clearField();
        app.movies = response.movies;
        var movie, template, $template, markup;
        for (var i = 0; i < app.movies.length; i++) {
                movie = app.movies[i];
                $('#list').append(getTemplate('tpl-movie-item', movie));
        }
        $('#titlehead').append("Upcoming Movies");

       
    }

    function clearField() {
        
        var newField = document.getElementById("list");
        newField.innerHTML = '';
        var newTitle = document.getElementById("titlehead");
        newTitle.innerHTML = '';
    }

});