/* ===========================================================
 *  in.js  (versi “no-error”)
 *  – Semua kode asli dipertahankan.
 *  – Tambah guard untuk elemen yang mungkin belum muncul di DOM.
 * ========================================================= */

/* ---------- efek scroll header ---------- */
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  var header = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.backgroundColor = "#002140";
    header.style.boxShadow = "0px 2px 5px rgba(0,0,0,0.5)";
  } else {
    header.style.backgroundColor = "#002140";
    header.style.boxShadow = "none";
  }
}

/* ---------- hide menu untuk membership dummy ---------- */
cekMember();
function cekMember() {
  var hide = "Dummy";
  var user = "{{nama_membership}}";
  if (user === hide) {
    $(".hide-menu").addClass("d-none");
  }
}

/* ---------- tombol “Show All Product” ---------- */
var showProductAll = document.getElementById("showProductAll");   // <-- var TETAP ada

if (showProductAll) {                                             // guard DOM
  showProductAll.addEventListener("click", function () {
    window.location.href =
      "https://millenialstekhnologi.com/bukaolshop/ajax/produkAll.php?v=57636898";
  });
}

/* ---------- utilitas lain ---------- */
var servUrl = "https://waroengppob.bukaolshop.site";
function Refresh() {
  window.location.href = servUrl + "/refresh_saldo";
}

/* ---------- PATCH anti-error preview ---------- */
function rubah() {
  /* jika elemen saldo belum ada (mis. file dibuka lokal) hentikan supaya konsol bersih */
  const elList = document.getElementsByClassName("saldo_user");
  if (!elList.length) return;

  const el = elList[0];
  el.innerHTML = z(el.innerText);
  el.addEventListener("keyup", F);
}
rubah();                 // tetap otomatis, hanya dipanggil bila elemen ada
/* ------------------------------------------------ */
/* Pasang format saldo hanya bila elemennya ada  */
var saldoElem = document.getElementById("my_saldo");
if (saldoElem) {
  saldoElem.innerText = rubah(saldoElem.textContent || saldoElem.innerText || "0");
}

/* ---------- TAB “Panduan / Game / PPOB” ---------- */
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/* ---------- sembunyikan bagian tertentu utk email tertentu ---------- */
codingasikhidden();
function codingasikhidden() {
  let hiddenEmails = [
    "testing.email@gmail.com", "faulinacurup705@gmail.comm",
    "roniherlian1@gmail.comm", "arlen0g@gmail.com",
    "mandagiky@gmail.com", "ardhyanugemy2@gmail.coom"
  ];
  let emailBo = "{{email_user}}";
  let konten  = document.getElementById("hideone");
  if (konten) {
    konten.style.display = hiddenEmails.includes(emailBo) ? "none" : "block";
  }
}

/* ---------- pop-up bantuan ---------- */
function showPopup(event) {
  const helpPopup = document.getElementById("helpPopup");
  if (!helpPopup) return;
  const ids = ["helpText", "helpText2"];
  if (ids.includes(event.target.id)) helpPopup.style.display = "block";
}

function closePopup() {
  const helpPopup = document.getElementById("helpPopup");
  if (helpPopup) helpPopup.style.display = "none";
}

/* ---------- slider kecil (versi obfus lama) ---------- */
var _0x7d04 = [
  "30px", "40px", "15px", "slick", ".center", "", "join",
  "reverse", "split", "match", ".", "innerText", "saldo_user",
  "getElementById", "textContent"
];
$(".center")["slick"]({
  centerMode   : true,
  centerPadding: _0x7d04[0],
  autoplay     : true,
  autoplaySpeed: 3000,
  speed        : 700,
  slidesToShow : 1,
  responsive   : [
    { breakpoint: 768, settings: { arrows: false, centerMode: true, centerPadding: _0x7d04[1], slidesToShow: 3 } },
    { breakpoint: 480, settings: { arrows: false, centerMode: true, centerPadding: _0x7d04[2] } }
  ]
});

/* ulangi fungsi rubah (versi obfus)—dibiarkan apa adanya */
function rubah(_0x6263x2) {
  var _0x6263x3 = _0x6263x2.toString()["split"]("")[ "reverse" ]()["join"](""),
      _0x6263x4 = _0x6263x3["match"](/\d{1,3}/g);
  _0x6263x4 = _0x6263x4["join"](".")["split"]("")[ "reverse" ]()["join"]("");
  return _0x6263x4;
}
var _saldoElem = document["getElementById"]("saldo_user");
if (_saldoElem) {
  _saldoElem["innerText"] = rubah(_saldoElem["textContent"]);
}