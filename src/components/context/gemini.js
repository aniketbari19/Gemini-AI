

const apiKey ='AIzaSyCgh6_qMMp42W7oFyvE3Pgqz7MNKdYJnHk';


import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  
  });
  return (response.text);
}

export default main;