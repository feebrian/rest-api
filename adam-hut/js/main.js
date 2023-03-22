function showAllData(){
  $.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;
    $.each(menu, function(i, data){
      $('#daftar-menu').append('<div class="col-md-4"><div class="card"><img src="img/pizza/' + data.gambar +  '" class="card-img-top" alt="' + data.gambar +  '"><div class="card-body"><h5 class="card-title">' + data.nama +  '</h5><p class="card-text">' + data.deskripsi +  '</p><h6><i>Rp. ' + data.harga +  '</i></h6><a href="#" class="btn btn-primary">Order Now</a></div></div></div>');
    });
  });
}

showAllData(); 

$('.nav-link').on('click', function (data) {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');

  let kategori = $(this).html();

  $('h1').html(kategori);

  if (kategori == "Home") {
    showAllData();
  }

  $.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;
    let content = '';
    
    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content += '<div class="col-md-4"><div class="card"><img src="img/pizza/' + data.gambar +  '" class="card-img-top" alt="' + data.gambar +  '"><div class="card-body"><h5 class="card-title">' + data.nama +  '</h5><p class="card-text">' + data.deskripsi +  '</p><h6><i>Rp. ' + data.harga +  '</i></h6><a href="#" class="btn btn-primary">Order Now</a></div></div></div>';
      }
    });

    $('#daftar-menu').html(content);

  });

});