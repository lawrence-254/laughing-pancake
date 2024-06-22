import { StreamClient } from "@stream-io/node-sdk";
import dotenv from "dotenv";

dotenv.config();

const apiSecret = process.env.STREAM_API_SECRET;
const apiKey = process.env.STREAM_API_KEY;

if (!apiSecret || !apiKey) {
    throw new Error("Missing Stream API key or secret in environment variables");
}

export const client = new StreamClient(apiKey, apiSecret);
