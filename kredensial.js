// kredensial.js
// Konfigurasi global untuk custom page Bukaolshop (hanya URL olshop)

(function (global) {
  'use strict';

  // ==============================
  // 1. SETTING YANG BISA DIUBAH
  // ==============================
  const APP_CONFIG = {
    // Base URL olshop utama
    // >>> CUKUP GANTI DI SINI SAJA KALAU PINDAH DOMAIN / SUBDOMAIN <<<
    OLSHOP_BASE_URL: "https://frdigital.pusatdigi.co"
  };

  // =====================================
  // 2. PASANG KE window.APP_CONFIG GLOBAL
  // =====================================
  if (!global.APP_CONFIG) {
    global.APP_CONFIG = APP_CONFIG;
  } else {
    Object.assign(global.APP_CONFIG, APP_CONFIG);
  }

  // =====================================
  // 3. ALIAS SINGKAT UNTUK DIPAKAI DI SCRIPT
  // =====================================
  // Di script lain kamu cukup pakai:
  //   urlOlshop  → base URL olshop

  global.urlOlshop = global.APP_CONFIG.OLSHOP_BASE_URL;

})(window);
