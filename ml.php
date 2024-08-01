<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: aplication/json');
if (isset($_GET['combined'])) {
    $combined = $_GET['combined'];
    list($nomorUser, $nomorServer) = explode('-', $combined);
    $apiKey = '3a325e9a9861a66';
    $originalApiUrl = "https://cekid.solusimedia.my.id/v2/game/?code=MOBILE_LEGENDS&id={$nomorUser}&other={$nomorServer}&key={$apiKey}";
    $response = file_get_contents($originalApiUrl);
    echo $response;
} else {
 echo json_encode(['status' => 'error', 'message' => 'Parameter "combined" tidak ditemukan']);
}
?>
