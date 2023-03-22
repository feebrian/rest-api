function searchMovies() {

    $('#movie-list').html('');
    $.ajax({
      url : 'http://www.omdbapi.com/',
      type : 'get',
      dataType : 'json',
      data : {
        'apikey' : 'da292d81',
        's' : $('#search-input').val()
      },
      success : function (result){
        if(result.Response == "True"){
          let movies = result.Search;
          
          $.each(movies, function(i, data){
            $('#movie-list').append(`
            <div class="col-md-3">
              <div class="card">
              <img src="`+ data.Poster +`" width="304" height="456" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">`+ data.Title +`</h5>
                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                <a href="#" class="card-link movie-details" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">See Detail</a>
              </div>
            </div>
            </div>
          `);
          });

          $('#search-input').val('');

        } else {
          $('#movie-list').html(`
          <div class="text-center">                    
            <h1>
              `+ result.Error +` 
            </h1> 
          </div>
          `);        
          
        }
      }
    });
  };

$('#search-button').on('click', function (){
  searchMovies();
});

$('#search-input').on('keyup', function (e){
  if (e.keyCode === 13) {
  searchMovies();
  }
});

$('#movie-list').on('click', '.movie-details', function () {

  $.ajax({
    url : 'http://www.omdbapi.com/',
    type : 'get',
    dataType : 'json',
    data : {
      'apikey' : 'da292d81',
      'i' : $(this).data('id')
    },
    success : function (result){
      if(result.Response === "True"){

        $('.modal-body').html(`
        <div class="row">
          <div class="col-md-4">
            <img src="`+ result.Poster +`" class="img-fluid" alt="`+ result. +`">
          </div>

          <div class="col-md-8">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          </div>
        </div>
        `);

      } else {

      }
    }
  });

});