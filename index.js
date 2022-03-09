//Refrences
const womenInGarden = document.getElementById("women-in-garden");
const springFlowers = document.getElementById("spring-flowers");
const impressionSunrise = document.getElementById("impression-sunrise");
const camilleMonetChild = document.getElementById("camille-monet-child");
const promenade = document.getElementById("promenade");
const poplarsGiverny = document.getElementById("poplars-giverny");
const irisesInGarden = document.getElementById("irises-in-garden");
const waterLilyPond = document.getElementById("water-lily-pond");

const monetContent = document.getElementById("monet-content");
const selectedArtwork = document.getElementById("selected-artwork");
const artworkSrc = document.getElementById("artwork-src");
const title = document.getElementById("title");
const info = document.getElementById("info");
const close = document.getElementById("close");
const yearId = document.getElementById("year");

let artwork = [
  {
    title: "Women in the garden",
    year: "1866",
    id: "women-in-garden",
  },
  {
    title: "Spring flowers",
    year: "1864",
    id: "spring-flowers",
  },
  {
    title: "Impression, sunrise",
    year: "1872",
    id: "impression-sunrise",
  },
  {
    title: "Camille Monet and a Child in the garden",
    year: "1875",
    id: "camille-monet-child",
  },
  {
    title: "The Promenade, Woman with a Parasol",
    year: "1875",
    id: "promenade",
  },
  {
    title: "Poplars at Giverny",
    year: "1887",
    id: "poplars-giverny",
  },
  {
    title: "Irises in Monet'ts Garden",
    year: "1900",
    id: "irises-in-garden",
  },
  {
    title: "Water-lily pond",
    year: "1900",
    id: "water-lily-pond",
  },
];

//Display artworks on front page
const artworks = document.getElementById("artworks");
const loopArtworks = (start, end) => {
  var list = document.createElement("div");
  list.innerHTML = "";

  artwork.slice(start, end).forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("artwork");
    div.innerHTML = `<p class="medium-par" id=${item.id}>
            ${item.title}
            </p>
            <p class="small-par">${item.year}</p>`;
    list.appendChild(div);
  });
  return list;
};

const artworksDiv = () => {
  const colOne = loopArtworks(0, 4);
  const colTwo = loopArtworks(4, 8);
  artworks.append(colOne);
  artworks.append(colTwo);
};
artworksDiv();

//Display content on click
const activeWork = (target, src, titleHTML, text, year) => {
  target.addEventListener("click", function (e) {
    //Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    //fadein and show elements
    selectedArtwork.classList.add("fadein", "show");
    close.classList.add("show");
    //Remove fadeout if exists
    if (selectedArtwork.classList.contains("fadeout")) {
      selectedArtwork.classList.remove("fadeout");
    }

    //Add parameters
    artworkSrc.src = src;
    title.innerHTML = titleHTML;
    info.innerHTML = `<p class="medium-par">${text}</p>`;
    yearId.innerText = year;

    //Close element + fadeout
    close.addEventListener("click", function (e) {
      selectedArtwork.classList.remove("fadein");
      selectedArtwork.classList.add("fadeout");
      setTimeout(function () {
        selectedArtwork.classList.remove("show");
      }, 700);
      close.classList.remove("show");
    });
  });
};
activeWork(
  womenInGarden,
  "./media/womenInTheGarden.jpg",
  `
    <h3>Women in the </h3>
    <h1>garden</h1>
    `,
  "Women in the Garden (French: Femmes au jardin) is an oil painting begun in 1866 by Claude Monet when he was 26. It is a large work painted en plein air; the size of the canvas necessitated Monet painting its upper half with the canvas lowered into a trench he had dug, so that he could maintain a single point of view for the entire work. The setting is the garden of a property he was renting. His companion and future wife Camille Doncieux posed for the figures. Monet finished the work indoors, and used magazine illustrations to render fashionable clothing.",
  "1866"
);
activeWork(
  springFlowers,
  "./media/springFlowers.jpg",
  `
  <h1>Spring</h1>
  <h1>flowers</h1>
  `,
  "This early work reveal’s Monet’s fascination with capturing the transitory effects that became the primary focus of his later innovations. Painted with almost scientific accuracy, this still life has a freshness and immediacy derived partly from its composition. Isolated against a dark background, the fully mature peonies, potted hydrangeas, and basketed lilacs spill downward and outward from the geraniums at the rear. At the same time, Monet’s energetic brushwork conveys the sparkling play of light on leaves and petals.",
  "1864"
);
activeWork(
  impressionSunrise,
  "./media/impressionSunrise.jpg",
  `
    <h4 class="title-smaller">impression,</h4>
    <h1 class="title-smaller">sunrise</h1>
    `,
  "Impression, Sunrise (French: Impression, soleil levant).  Shown at what would later be known as the “Exhibition of the Impressionists” in April 1874, the painting is attributed to giving rise to the name of the Impressionist movement. Impression, Sunrise depicts the port of Le Havre, Monet’s hometown, and is his most famous painting of the harbor. Impression, Sunrise is displayed at the Musée Marmottan Monet in Paris. Monet visited his hometown of Le Havre in the Northwest of France in 1872 and proceeded to create a series of works depicting the port of Le Havre. ",
  "1872"
);

activeWork(
  camilleMonetChild,
  "./media/madameMonetAndChild.jpg",
  `
    <h5>Madame Monet</h5>
    <h3>and a child</h3>
    <h5>in the garden</h5>
    `,
  "Camille, Monet’s first wife, is shown with a child in the garden of their house in Argenteuil, near Paris, where they lived between 1872 and 1877. Today, Claude Monet is primarily known as a landscape painter, but in the beginning of his artistic career, he used to concentrate on portraits. No one else appeares in Monet’s paintings as often as Camille. In those year, portraits of women were mostly ordered by bourgeois clients, but among progressive painters, the artistic structure became more important than the identity of the portrayed person.",
  "1875"
);
activeWork(
  promenade,
  "./media/thePromenade.jpg",
  `
    <h5 class="title-smaller">The promenade,</h5>
    <h3>woman</h3>
    <h5 class="title-smaller">with a parasol</h5>
    `,
  "Woman with a Parasol – Madame Monet and Her Son, sometimes known as The Stroll (French: La Promenade) is an oil-on-canvas painting by Claude Monet from 1875. The Impressionist work depicts his wife Camille Monet and their son Jean Monet in the period from 1871 to 1877 while they were living in Argenteuil, capturing a moment on a stroll on a windy summer’s day. The work is a genre painting of an everyday family scene, not a formal portrait. The work was painted outdoors, en plein air, and quickly, probably in a single period of a few hours . It measures 100 × 81 centimetres (39 × 32 in).",
  "1875"
);
activeWork(
  poplarsGiverny,
  "./media/poplarsAtGiverny.jpg",
  `
    <h4>poplars at</h4>
    <h1>giverny</h1>
    `,
  "Another of Monet’s series of paintings, the Poplar paintings were painted in the summer and fall of 1891. The poplars trees were located on the banks of a river a few miles up the river from Monet’s home in Giverny, France, in a marsh. Monet had to reach his painting studio, which was floating outside along the bank of the trees, by going upriver in a small boat. The trees that were the subject of the paintings were actually put up for sale by the city of Limetz, who owned them, and Monet actually bought the trees so he could continue his paintings of them. After his series was finished, he sold the trees to a lumber company who wanted them for harvest.",
  "1887"
);
activeWork(
  irisesInGarden,
  "./media/irisesInMonetsGarden.jpg",
  `
    <h5>Irises</h5>
    <h3>in monet's</h3>
    <h5>garden</h5>
      `,
  "It is one of many works by the artist of his garden at Giverny over the last thirty years of his life. The painting shows rows of irises in various shades of purple and pink set diagonally across the picture plane. The flowers are under trees that in allowing dappled light through change the tone of their colours. Beyond the trees is a glimpse of Monet’s house.",
  "1900"
);
activeWork(
  waterLilyPond,
  "./media/waterLilyPond.jpg",
  `
    <h4>water-lily</h4>
    <h1>Pond</h1>
      `,
  "Water Lily Pond is rich in color and tones. Some of this riot of color is present in the earlier painting The Artist’s Garden at Vetheuil, hinting at the extraordinary use of color employed in Monet’s later work. The bottom half of the painting shows a vast mixture of flowers of different colors. By the time Monet painted this painting, the flowers and foliage are dominating nearly the entire canvas. The later painting uses a wider variety of colors that clash together to increase the drama. Each flower is painted with less detail but becomes a splash of color.",
  "1900"
);
