<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
$data = file_get_contents('data/pizza.json');
$menu = json_decode($data, true);

$menu = $menu["menu"];

?>
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Adam Hut</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>

  <!-- navbar -->
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="img/logo.png" alt="logo" width="120">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="#">Home</a>
        </div>
      </div>
  </nav>

  <div class="container">
    <div class="row my-3">
      <div class="col">
        <h1>All Menu</h1>
      </div>
    </div>

    <div class="row">
      <?php $i = 0; ?>
      <?php foreach ($menu as $m) : ?>
        <div class="col-md-4">
          <div class="card">
            <img src="img/pizza/<?= $menu[$i]["gambar"] ?>" class="card-img-top" alt="<?= $menu[$i]["gambar"] ?>">
            <div class="card-body">
              <h5 class="card-title"><?= $menu[$i]["nama"] ?></h5>
              <p class="card-text"><?= $menu[$i]["deskripsi"] ?></p>
              <h6><i>Rp. <?= $menu[$i]["harga"] ?></i></h6>
              <a href="#" class="btn btn-primary">Order Now</a>
            </div>
          </div>
        </div>
        <?php $i++; ?>
      <?php endforeach; ?>
    </div>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>

</html>