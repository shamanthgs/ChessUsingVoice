import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const test = async () => {
  const response = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });
  console.log(response.usage?.total_tokens, "usage");
  console.log(response.choices[0].message, "response");
};

test();
