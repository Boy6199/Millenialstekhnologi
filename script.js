const arrPPOB = [
  {
    href: "https://millenialstekhnologi.com/bukaolshop/isiulang/ajaxpulsa.html",
    identity: null,
    name: "Pulsa",
    img: "https://millenialstekhnologi.com/bukaolshop/img/pulsa.png",
  },
  {
    href: null,
    identity: "pulsareg",
    name: "Paket Data",
    img: "https://millenialstekhnologi.com/bukaolshop/img/data.png",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/isiulang/ajaxsms.html",
    identity: null,
    name: "SMS & Tlp",
    img: "https://millenialstekhnologi.com/bukaolshop/img/smstelf.png",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/isiulang/tokenpln.html",
    identity: null,
    name: "Token Pln",
    img: "https://millenialstekhnologi.com/bukaolshop/img/token.png",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/isiulang/streamingmenu.html",
    identity: null,
    name: "Streaming",
    img: "https://millenialstekhnologi.com/bukaolshop/img/streaming.png",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/isiulang/wifiid.html",
    identity: null,
    name: "Wifi ID",
    img: "https://millenialstekhnologi.com/bukaolshop/img/wifiid.png",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/ajax/jxetoll.php",
    identity: null,
    name: "E-Toll",
    img: "https://millenialstekhnologi.com/bukaolshop/img/etoll.png",
  },
  {
    href: "https://waroengppob.bukaolshop.site/digital/242587",
    identity: null,
    name: "E-Wallet",
    img: "https://millenialstekhnologi.com/bukaolshop/img/ewallet.png",
  },
];

const gameListDiv = document.getElementById("prabayar");

// Loop melalui setiap objek dalam array arrPPOB
arrPPOB.forEach((game) => {
  // Membuat elemen img baru
  const imgElement = document.createElement("img");
  imgElement.src = game.img;
  imgElement.alt = game.name;

  // Membuat elemen p baru untuk menampilkan nama game
  const nameElement = document.createElement("p");
  nameElement.textContent = game.name;
  nameElement.classList.add("name");

  // Membuat elemen div baru untuk mengelompokkan gambar dan nama
  const gameElement = document.createElement("div");
  gameElement.classList.add("app-list");
  gameElement.appendChild(imgElement);
  gameElement.appendChild(nameElement);

  // Membuat elemen a baru
  const aElement = document.createElement("a");

  // Jika identity tidak null, tambahkan atribut data-bs-toggle, data-bs-target, dan aria-controls
  if (game.identity !== null) {
    aElement.setAttribute("data-bs-toggle", "offcanvas");
    aElement.setAttribute("data-bs-target", `#${game.identity}`);
    aElement.setAttribute("aria-controls", `#${game.identity}`);
  }

  if (game.href !== null) {
    aElement.href = game.href;
  }

  aElement.appendChild(gameElement);

  // Menambahkan elemen aElement ke dalam elemen div gameListDiv
  gameListDiv.appendChild(aElement);
});

const arrGame = [
  {
    href: "https://millenialstekhnologi.com/bukaolshop/ajaxgame/ajax-ml.html",
    identity: null,
    name: "Mobile Legends",
    hot: "HOT",
    img: "https://millenialstekhnologi.com/tokogaming/logoml.webp",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/ajaxgame/ajax-ff.html",
    identity: null,
    name: "Free Fire",
    hot: "HOT",
    img: "https://millenialstekhnologi.com/logo/ff1.webp",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/game/pubg.html",
    identity: null,
    name: "Pubg Mobile",
    img: "https://millenialstekhnologi.com/logo/pubg1.webp",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/game/hago.html",
    identity: null,
    name: "Hago",
    img: "https://millenialstekhnologi.com/bukaolshop/img/hago.png",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/game/lordmobile.html",
    identity: null,
    name: "Lord Mobile",
    img: "https://millenialstekhnologi.com/bukaolshop/img/lordmobile.jpg",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/game/cod.html",
    identity: null,
    name: "Call Of Duty",
    img: "https://millenialstekhnologi.com/logo/cod1.webp",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/game/undawn.html",
    identity: null,
    name: "Garena Undawn",
    img: "https://millenialstekhnologi.com/logo/undawn1.webp",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/game/fcm.html",
    identity: null,
    name: "FC Mobile",
    img: "https://millenialstekhnologi.com/logo/fc1.webp",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/game/valorant.html",
    identity: null,
    name: "Valorant",
    img: "https://millenialstekhnologi.com/bukaolshop/img/valorant.webp",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/game/sausage.html",
    identity: null,
    name: "Sausageman",
    img: "https://millenialstekhnologi.com/logo/sausageman1.webp",
  },
  {
    href: "https://waroengppob.bukaolshop.site/digital/242681",
    identity: null,
    name: "Genshin Impact",
    img: "https://millenialstekhnologi.com/logo/genshin1.webp",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/game/aov.html",
    identity: null,
    name: "ArenaOfValor",
    img: "https://millenialstekhnologi.com/logo/arena1.webp",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/288416",
    identity: null,
    name: "Higgs Games",
    hot: "HOT",
    img: "https://millenialstekhnologi.com/logo/hdi2.webp",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/ajaxgame/ajax-royal.php",
    identity: null,
    name: "Royal Dream",
    hot: "HOT",
    img: "https://millenialstekhnologi.com/bukaolshop/img/royal6.jpg",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/game/bossdm.php?v=19191928",
    identity: null,
    name: "Bos Domino",
    img: "https://millenialstekhnologi.com/logo/bos1.webp",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/game/bearfish.php",
    identity: null,
    name: "Domino Bearfish",
    img: "https://millenialstekhnologi.com/logo/bfc4.webp",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/ajaxgame/jx-listgame.php?v=638068088",
    identity: null,
    name: "Lihat Semua",
    img: "https://millenialstekhnologi.com/bukaolshop/img/menulain.webp",
  },
];

const gameListDiv2 = document.getElementById("gameList");

// Loop melalui setiap objek dalam array arrGame
arrGame.forEach(function (game, index) {
  // Membuat elemen img baru
  const imgElement = document.createElement("img");
  const wrapImg = document.createElement("div");
  //img gundo
  wrapImg.classList.add("wrapImgHot", `wrapImgHot${index}`);
  const textHot = document.createElement("span");

  textHot.classList.add("hot-absolute", `style-hot${index}`);

  imgElement.src = game.img;
  imgElement.alt = game.name;
  if (!game.hot) {
    textHot.innerText = "";
  } else {
    textHot.innerText = game.hot;
  }
  // Membuat elemen p baru untuk menampilkan nama game
  const nameElement = document.createElement("p");
  nameElement.textContent = game.name;
  nameElement.classList.add("name", `name${index}`);

  // Membuat elemen div baru untuk mengelompokkan gambar dan nama
  const gameElement = document.createElement("div");

  gameElement.classList.add("game", `game${index}`);

  const conWrapProdukGame = document.createElement("div");
  conWrapProdukGame.classList.add("conWrapProdukGame");

  const wrapProdukGame = document.createElement("div");
  wrapProdukGame.classList.add("wrapProdukGame");
  conWrapProdukGame.appendChild(wrapProdukGame);

  gameElement.appendChild(conWrapProdukGame);
  wrapImg.appendChild(imgElement);
  wrapImg.appendChild(textHot);
  wrapProdukGame.appendChild(wrapImg);
  gameElement.appendChild(nameElement);

  // Membuat elemen a baru
  const aElement = document.createElement("a");

  // Jika identity tidak null, tambahkan atribut data-bs-toggle, data-bs-target, dan aria-controls
  if (game.identity !== null) {
    aElement.setAttribute("data-bs-toggle", "offcanvas");
    aElement.setAttribute("data-bs-target", `#${game.identity}`);
    aElement.setAttribute("aria-controls", `#${game.identity}`);
  }

  if (game.href !== null) {
    aElement.href = game.href;
  } else {
    aElement.href = "#";
  }

  aElement.appendChild(gameElement);

  // Menambahkan elemen aElement ke dalam elemen div gameListDiv
  gameListDiv2.appendChild(aElement);
});

// Function to populate data
function populateData(arr, id) {
  const container = document.getElementById(id);
  container.innerHTML = ""; // Clear previous content

  arr.forEach((item) => {
    const anchor = document.createElement("a");
    anchor.href = item.href;

    const appList = document.createElement("div");
    appList.classList.add("app-list");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = "";

    const nameParagraph = document.createElement("p");
    nameParagraph.classList.add("name");
    nameParagraph.textContent = item.name;

    appList.appendChild(img);
    appList.appendChild(nameParagraph);
    anchor.appendChild(appList);
    container.appendChild(anchor);
  });
}

const arrpulsareg = [
  {
    href: "https://waroengppob.pusatdigi.com/digital/233336",
    name: "Data Tsel",
    img: "https://cdn.jsdelivr.net/gh/Boy6199/Millenialstekhnologi@main/tsel7.png",
  },
  {
    href: "https://waroengppob.bukaolshop.site/digital/96379",
    name: "Data Xl",
    img: "https://cdn.jsdelivr.net/gh/Boy6199/Millenialstekhnologi@main/xl7.png",
  },
  {
    href: "https://waroengppob.bukaolshop.site/digital/96380",
    name: "Data Axis",
    img: "https://cdn.jsdelivr.net/gh/Boy6199/Millenialstekhnologi@main/axis7.png",
  },
  {
    href: "https://waroengppob.bukaolshop.site/digital/96381",
    name: "Data Indosat",
    img: "https://cdn.jsdelivr.net/gh/Boy6199/Millenialstekhnologi@main/indosat7.png",
  },
  {
    href: "https://waroengppob.bukaolshop.site/digital/96382",
    name: "Data Three",
    img: "https://cdn.jsdelivr.net/gh/Boy6199/Millenialstekhnologi@main/three7.png",
  },
  {
    href: "https://waroengppob.bukaolshop.site/digital/96383",
    name: "Data SmartFren",
    img: "https://cdn.jsdelivr.net/gh/Boy6199/Millenialstekhnologi@main/smartfren7.png",
  },

 
];

// Memuat data arrpulsareg ke elemen dengan ID pulsareg2
populateData(arrpulsareg, "pulsareg2");

function moveProdukChip(a) {
  a = document.querySelectorAll(".game12, .game13, .game14, .game15");
  a.forEach((name) => {
    name.remove();
  });
}
