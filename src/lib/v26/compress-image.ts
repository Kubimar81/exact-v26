export async function compressScreenshot(file: File): Promise<{ mime: "image/jpeg"; data: string; preview: string; name: string }> {
  const bitmap = await createImageBitmap(file);
  const max = 1280;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const w = Math.max(1, Math.round(bitmap.width * scale));
  const h = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Nie można przetworzyć obrazu.");
  ctx.drawImage(bitmap, 0, 0, w, h);
  bitmap.close();
  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Kompresja nie powiodła się."))), "image/jpeg", 0.74);
  });
  const preview = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Nie udało się odczytać pliku."));
    reader.readAsDataURL(blob);
  });
  const data = preview.split(",")[1] ?? "";
  if (data.length > 2_400_000) throw new Error("Screen jest za duży — wytnij kadr meczu i spróbuj ponownie.");
  return { mime: "image/jpeg", data, preview, name: file.name || "screen.jpg" };
}
