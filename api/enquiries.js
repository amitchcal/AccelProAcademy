import { put } from "@vercel/blob";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  try {
    const payload = typeof request.body === "string" ? JSON.parse(request.body) : request.body || {};
    const name = payload.name?.trim();
    const email = payload.email?.trim().toLowerCase();
    const message = payload.message?.trim();
    const phone = payload.phone?.trim().slice(0, 40) || "";
    const programme = payload.programme?.trim().slice(0, 120) || "";

    // Honeypot submissions are acknowledged without storing spam.
    if (payload.website) {
      return response.status(201).json({ message: "Thank you. Your enquiry has been received." });
    }
    if (!name || name.length > 100) {
      return response.status(400).json({ error: "Please enter your name." });
    }
    if (!email || !emailPattern.test(email) || email.length > 180) {
      return response.status(400).json({ error: "Please enter a valid email address." });
    }
    if (!message || message.length < 15 || message.length > 2000) {
      return response.status(400).json({ error: "Please share at least 15 characters about what you need." });
    }
    if (!process.env.BLOB_STORE_ID && !process.env.BLOB_READ_WRITE_TOKEN) {
      throw new Error("Vercel Blob storage is not configured.");
    }

    const createdAt = new Date().toISOString();
    const pathname = `submissions/enquiries/${createdAt.slice(0, 10)}/${crypto.randomUUID()}.json`;
    await put(pathname, JSON.stringify({ name, email, phone, programme, message, createdAt }), {
      access: "private",
      contentType: "application/json",
      addRandomSuffix: false,
    });

    return response.status(201).json({ message: "Thank you. Your enquiry has been received." });
  } catch (error) {
    console.error("enquiry", error);
    return response.status(500).json({ error: "Your enquiry could not be saved. Please try again." });
  }
}
