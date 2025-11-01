const arrPPOB = [
  {
    href: "https://waroengppob.pusatdigi.com/digital/242539",
    identity: null,
    name: "Pulsa",
    img: "https://images.bukaolshop.com/hosting/67730/aac8ce19e177296759.png",
  },
  {
    href: null,
    identity: "pulsareg",
    name: "Paket Data",
    img: "https://images.bukaolshop.com/hosting/67730/5c6a360740df580462.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/288369",
    identity: null,
    name: "SMS & Tlp",
    img: "https://images.bukaolshop.com/hosting/67730/eff65feb2c94451666.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/242575",
    identity: null,
    name: "Token Pln",
    img: "https://images.bukaolshop.com/hosting/67730/826e0827245a654342.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/245010",
    identity: null,
    name: "Streaming",
    img: "https://images.bukaolshop.com/hosting/67730/0f596dc5e7aa349240.png",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/isiulang/wifiid.html",
    identity: null,
    name: "Wifi ID",
    img: "https://images.bukaolshop.com/hosting/67730/d7d8e866d33b568843.png",
  },
  {
    href: "https://millenialstekhnologi.com/bukaolshop/ajax/jxetoll.php",
    identity: null,
    name: "E-Toll",
    img: "https://images.bukaolshop.com/hosting/67730/fce6f7cc6c23297418.png",
  },
  {
    href: "https://waroengppob.bukaolshop.site/digital/242587",
    identity: null,
    name: "E-Wallet",
    img: "https://images.bukaolshop.com/hosting/67730/9a935b93d562186487.png",
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
    img: "https://images.bukaolshop.com/hosting/67730/387d1b9cb9ad643760.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/328355",
    identity: null,
    name: "Free Fire",
    hot: "HOT",
    img: "https://images.bukaolshop.com/hosting/67730/34beab405f38841154.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/328356",
    identity: null,
    name: "Pubg Mobile",
    img: "https://images.bukaolshop.com/hosting/67730/285fd6de7404382452.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/242645",
    identity: null,
    name: "Hago",
    img: "https://images.bukaolshop.com/hosting/67730/4dd6cde0970e594822.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/242652",
    identity: null,
    name: "Lord Mobile",
    img: "https://images.bukaolshop.com/hosting/67730/9708cc1cc849307075.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/242551",
    identity: null,
    name: "Call Of Duty",
    img: "https://images.bukaolshop.com/hosting/67730/d0b0a6a4afa0251414.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/288439",
    identity: null,
    name: "Garena Undawn",
    img: "https://images.bukaolshop.com/hosting/67730/e52dcf198a61579349.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/250115",
    identity: null,
    name: "FC Mobile",
    img: "https://images.bukaolshop.com/hosting/67730/6cc6a8e96a98397910.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/293706",
    identity: null,
    name: "Valorant",
    img: "https://images.bukaolshop.com/hosting/67730/7eda16a165a6807833.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/250116",
    identity: null,
    name: "Sausageman",
    img: "https://images.bukaolshop.com/hosting/67730/6d5b70cefe8e159632.png",
  },
  {
    href: "https://waroengppob.bukaolshop.site/digital/242681",
    identity: null,
    name: "Genshin Impact",
    img: "https://images.bukaolshop.com/hosting/67730/9f6957305184274865.png",
  },
  {
    href: "https://waroengppob.pusatdigi.com/digital/242640",
    identity: null,
    name: "ArenaOfValor",
    img: "https://images.bukaolshop.com/hosting/67730/5daf9eef5545357507.png",
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
    img: "https://images.bukaolshop.com/hosting/67730/50311d311766907995.png",
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
