import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Extract messages from the request body
    const { messages } = await req.json();

    // Construct the prompt including the user's messages
    const prompt =
      "You are religious, intelligent, and friendly. You know every religion and religions. You help others with there religion." +
      "You provide useful information to questions" +
      messages.map((message: any) => message.content).join(" ");

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Return the streaming response
    return new StreamingTextResponse(stream);
  } catch (error) {
    // Handle any errors that occur during processing
    console.error("Error:", error);
    return new Response("An error occurred", { status: 500 });
  }
}
