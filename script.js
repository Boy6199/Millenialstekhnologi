const arrPPOB = [
  {
    href: "https://waroengppob.pusatdigi.com/digital/242539",
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
    href: "https://waroengppob.pusatdigi.com/digital/288369",
    identity: null,
    name: "SMS & Tlp",
    img: "https://millenialstekhnologi.com/bukaolshop/img/smstelf.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/242575",
    identity: null,
    name: "Token Pln",
    img: "https://millenialstekhnologi.com/bukaolshop/img/token.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/245010",
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

function createMenuItem(item, index = null, isGame = false) {
  const anchor = document.createElement("a");
  const wrapper = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("p");

  if (isGame) {
    const conWrap = document.createElement("div");
    const wrapProduk = document.createElement("div");
    const hotText = document.createElement("span");

    wrapProduk.classList.add("wrapProdukGame");
    conWrap.classList.add("conWrapProdukGame");
    img.src = item.img;
    img.alt = item.name;

    name.textContent = item.name;
    name.classList.add("name", `name${index}`);
    wrapper.classList.add("game", `game${index}`);
    img.classList.add("wrapImgHot", `wrapImgHot${index}`);

    hotText.classList.add("hot-absolute", `style-hot${index}`);
    hotText.innerText = item.hot || "";

    wrapProduk.appendChild(img);
    wrapProduk.appendChild(hotText);
    conWrap.appendChild(wrapProduk);
    wrapper.appendChild(conWrap);
    wrapper.appendChild(name);
  } else {
    img.src = item.img;
    img.alt = item.name;
    name.textContent = item.name;
    name.classList.add("name");
    wrapper.classList.add("app-list");
    wrapper.appendChild(img);
    wrapper.appendChild(name);
  }

  if (item.identity !== null) {
    anchor.setAttribute("data-bs-toggle", "offcanvas");
    anchor.setAttribute("data-bs-target", `#${item.identity}`);
    anchor.setAttribute("aria-controls", item.identity);
  }

  if (item.href !== null) anchor.href = item.href;
  anchor.appendChild(wrapper);
  return anchor;
}

// Loop melalui setiap objek dalam array arrPPOB
arrPPOB.forEach((item) => {
  gameListDiv.appendChild(createMenuItem(item));
});

const arrGame = [
  {
    href: "https://waroengppob.pusatdigi.com/digital/328267",
    identity: null,
    name: "Mobile Legends",
    hot: "HOT",
    img: "https://millenialstekhnologi.com/tokogaming/logoml.webp",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/328355",
    identity: null,
    name: "Free Fire",
    hot: "HOT",
    img: "https://millenialstekhnologi.com/logo/ff1.webp",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/328356",
    identity: null,
    name: "Pubg Mobile",
    img: "https://millenialstekhnologi.com/logo/pubg1.webp",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/242645",
    identity: null,
    name: "Hago",
    img: "https://millenialstekhnologi.com/bukaolshop/img/hago.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/242652",
    identity: null,
    name: "Lord Mobile",
    img: "https://millenialstekhnologi.com/bukaolshop/img/lordmobile.jpg",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/242551",
    identity: null,
    name: "Call Of Duty",
    img: "https://millenialstekhnologi.com/logo/cod1.webp",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/288439",
    identity: null,
    name: "Garena Undawn",
    img: "https://millenialstekhnologi.com/logo/undawn1.webp",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/250115",
    identity: null,
    name: "FC Mobile",
    img: "https://millenialstekhnologi.com/logo/fc1.webp",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/293706",
    identity: null,
    name: "Valorant",
    img: "https://millenialstekhnologi.com/bukaolshop/img/valorant.webp",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/250116",
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
    href: "https://waroengppob.pusatdigi.com/digital/242640",
    identity: null,
    name: "ArenaOfValor",
    img: "https://millenialstekhnologi.com/logo/arena1.webp",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/328343",
    identity: null,
    name: "Higgs Games",
    hot: "HOT",
    img: "https://images.bukaolshop.com/hosting/67730/7f47a47a64aa532230.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/328351",
    identity: null,
    name: "RD Koin",
    hot: "HOT",
    img: "https://images.bukaolshop.com/hosting/67730/4ac17ff00e7d490325.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/328352",
    identity: null,
    name: "Bos Party",
    img: "https://images.bukaolshop.com/hosting/67730/a070320be1b2756446.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/328354",
    identity: null,
    name: "Domino Bearfish",
    img: "https://images.bukaolshop.com/hosting/67730/da48c6e4c2db44004.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/294898",
    identity: null,
    name: "Lihat Semua",
    img: "https://millenialstekhnologi.com/bukaolshop/img/menulain.webp",
  },
];

const gameListDiv2 = document.getElementById("gameList");

// Loop melalui setiap objek dalam array arrGame
arrGame.forEach((item, index) => {
  gameListDiv2.appendChild(createMenuItem(item, index, true));
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
  {
    href: "https://waroengppob.pusatdigi.com/digital/96384",
    name: "Data By U",
    img: "https://cdn.jsdelivr.net/gh/Boy6199/Millenialstekhnologi@main/byu-logo.webp",
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
