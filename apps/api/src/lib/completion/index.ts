import type { ZodType, z } from "zod";
import { OpenAI } from "openai";
import { ChatCompletionCreateParamsNonStreaming } from "openai/resources/chat/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export type CompletionResult<T extends ZodType> = z.infer<T> | null;

export type CompletionProps = ChatCompletionCreateParamsNonStreaming;

export const completionFunction = async <T>(
  props: CompletionProps
): Promise<T> => {
  try {
    const completion = await openai.chat.completions.create({
      ...props,
    });

    const data = completion.choices[0]?.message?.function_call?.arguments;

    if (!data) throw new Error("No message returned");

    const json = JSON.parse(data);

    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const completion = async (props: CompletionProps): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      ...props,
    });

    const text = completion.choices[0]?.message.content;

    if (!text) throw new Error("No message returned");

    return text;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
