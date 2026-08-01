import { mkdir, writeFile } from "node:fs/promises";

const assets = [
  ["atrium-hero.jpg", "https://novakinvest.rs/wp-content/uploads/2023/04/0_slika-6-scaled.jpg"],
  ["atrium-street.jpg", "https://novakinvest.rs/wp-content/uploads/2023/04/0_slika-2-2-scaled.jpg"],
  ["atrium-night.jpg", "https://novakinvest.rs/wp-content/uploads/2023/04/0_nocna-slika-1-1-scaled.jpg"],
  ["gunduliceva-33.jpg", "https://novakinvest.rs/wp-content/uploads/2022/12/oprojektu.jpg"],
  ["sremska-kamenica.webp", "https://novakinvest.rs/wp-content/uploads/2025/06/Vile-Kamenica-Projekat.webp"],
  ["petrovaradin.webp", "https://novakinvest.rs/wp-content/uploads/2025/06/Pozadina-za-karticu-projekti-scaled.webp"],
  ["temerinska-141.webp", "https://novakinvest.rs/wp-content/uploads/2025/11/Temerinska-141-PROJEKAT-scaled.webp"],
  ["keramika.jpg", "https://novakinvest.rs/wp-content/uploads/2022/11/keramikafinal.jpg"],
  ["podovi.jpg", "https://novakinvest.rs/wp-content/uploads/2022/11/podfinal.jpg"],
  ["stolarija.jpg", "https://novakinvest.rs/wp-content/uploads/2022/11/stolarija.jpg"],
  ["prozori.jpg", "https://novakinvest.rs/wp-content/uploads/2022/11/pvc.jpg"],
  ["petrovaradin-plan.webp", "https://novakinvest.rs/wp-content/uploads/2025/07/P1-1-640x640.webp"],
  ["petrovaradin-position.webp", "https://novakinvest.rs/wp-content/uploads/2025/07/P1-2-640x640.webp"],
];

await mkdir(new URL("../public/images/novak/", import.meta.url), { recursive: true });

const queue = [...assets];
const results = [];

async function worker() {
  while (queue.length) {
    const [name, url] = queue.shift();
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${name}: ${response.status}`);
    const bytes = new Uint8Array(await response.arrayBuffer());
    await writeFile(new URL(`../public/images/novak/${name}`, import.meta.url), bytes);
    results.push(`${name} (${Math.round(bytes.length / 1024)} KB)`);
  }
}

await Promise.all(Array.from({ length: 4 }, worker));
console.log(`Downloaded ${results.length} assets`);
console.log(results.sort().join("\n"));
