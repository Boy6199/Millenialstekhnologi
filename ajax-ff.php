<?php



// Mengatur aturan CORS
header("Access-Control-Allow-Origin: *"); // Mengizinkan semua domain. Anda bisa menggantinya dengan domain spesifik seperti "http://example.com"
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Metode HTTP yang diizinkan
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Header yang diizinkan

// Menangani permintaan OPTIONS (preflight request)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Respon untuk permintaan OPTIONS tanpa memproses lebih lanjut
    http_response_code(204);
    exit();
}

// Konten atau logika aplikasi Anda di sini

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kembali</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div id="content"></div>

    <script>
       $(document).ready(function() {
    var url = "https://raw.githubusercontent.com/Boy6199/Millenialstekhnologi/main/ff.html";
    $("#content").load(url, function(response, status, xhr) {
        if (status == "error") {
            console.log("Error: " + xhr.status + " " + xhr.statusText);
        } else {
            // Lakukan inisialisasi animasi atau elemen dinamis di sini
            initializeAnimations();
        }
    });
});
    </script>
</body>
</html>
