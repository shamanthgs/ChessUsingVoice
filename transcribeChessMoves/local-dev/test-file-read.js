import {fileURLToPath} from 'url';
import fs from "fs";
import path, {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToRead = path.join(__dirname, "test.js");

const read = async () => {
  const fsReadStream = fs.createReadStream(fileToRead, { encoding: "utf8" });
  fsReadStream.on("data", (chunk) => {
    console.log(chunk);
  });
  fsReadStream.on("end", () => {
    console.log("end");
  });
  fsReadStream.on("error", (error) => {
    console.log(error);
  });
};

read();
