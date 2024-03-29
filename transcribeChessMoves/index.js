import OpenAI from "openai";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const audioFilePath = path.join(
  __dirname,
  "sample-audio",
  "Test Chess Moves.m4a"
);

export const transcribe = async () => {
  const fsReadStream = fs.createReadStream(audioFilePath);

  const response = await openai.audio.transcriptions.create({
    file: fsReadStream,
    model: "whisper-1",
    prompt: process.env.TRANSCRIBE_PROMPT,
    response_format: "verbose_json",
  });

  console.log(response.text, "response");
};

transcribe();
