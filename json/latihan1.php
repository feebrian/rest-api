<?php 

// $mahasiswa = [
//   ["nama" => "Adam Febrian Aditama",
//   "nis" => "16028",
//   "email" => "adamaditama@gmail.com"],
//   ["nama" => "Adam Febrian Aditama",
//   "nis" => "16028",
//   "email" => "adamaditama@gmail.com"]
// ];

$konek = mysqli_connect("localhost", "root", "", "phpbasic");
$query = "SELECT * FROM mahasiswa";
$execute = mysqli_query($konek, $query);

while ($row = mysqli_fetch_assoc($execute)){
  $data = json_encode($row);
  var_dump($data);
}


?>