type SubmissionKind = "bookings" | "enquiries" | "newsletter";

export function hasPrivateBlobStorage() {
  return Boolean(process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN);
}

export async function savePrivateSubmission(kind: SubmissionKind, data: Record<string, string | boolean>) {
  if (!hasPrivateBlobStorage()) return false;

  const { put } = await import("@vercel/blob");
  const createdAt = new Date().toISOString();
  const pathname = `submissions/${kind}/${createdAt.slice(0, 10)}/${crypto.randomUUID()}.json`;
  await put(pathname, JSON.stringify({ ...data, createdAt }), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
  });
  return true;
}
