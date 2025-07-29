export default function GenerateImages() {
  let rawImages = [];
  for (let x = 70; x < 82; x++) {
    let player = {}
    let url = `https://cdn.nba.com/headshots/nba/latest/1040x760/16301${x}.png`;
    player["imageURL"] = url
    player["constantID"] = x
    rawImages.push(player);
  }
  return rawImages
}
