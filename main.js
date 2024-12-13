import fs from "fs/promises";

const HOST = "<RAPIDAPI_HOST>";
const API_KEY = "<RAPIDAPI_KEY>";

const fetchFeed = async (username) => {
  const result = await fetch(`https://instagram-fast.p.rapidapi.com/feed/${username}`, {
    headers: {
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": API_KEY,
    },
  }).then(e => e.json());
  return result;
};


const USERNAME = process.argv[2];
if (!USERNAME) {
  // console.log("Usage: node main.js <username>");
  throw new Error("Usage: node main.js <username>");
}



const feed = await fetchFeed(USERNAME);
await fs.writeFile(`feed_${USERNAME}.json`, JSON.stringify(feed, null, 2), "utf8");
