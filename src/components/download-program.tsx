import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

async function saveFile(href: string, filename: string) {
  const res = await fetch(href);
  if (!res.ok) throw new Error("Nie udało się pobrać pliku");
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2500);
}

export function DownloadProgramButtons({ size = "lg" }: { size?: "default" | "lg" }) {
  const [busy, setBusy] = useState<"rar" | "zip" | null>(null);
  const [err, setErr] = useState("");
  async function grab(kind: "rar" | "zip") {
    setErr(""); setBusy(kind);
    try {
      if (kind === "rar") await saveFile("/exact-v26.rar?v=20260827", "exact-v26.rar");
      else await saveFile("/exact-v26.zip?v=20260827", "exact-v26.zip");
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Pobieranie nieudane");
    } finally { setBusy(null); }
  }
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-3">
        <Button size={size} onClick={() => void grab("rar")} disabled={Boolean(busy)}>
          <Download className="size-4" />{busy === "rar" ? "Pobieranie…" : "Pobierz RAR"}
        </Button>
        <Button size={size} variant="outline" onClick={() => void grab("zip")} disabled={Boolean(busy)}>
          <Download className="size-4" />{busy === "zip" ? "Pobieranie…" : "Pobierz ZIP"}
        </Button>
      </div>
      {err ? <p className="text-sm text-danger">{err}</p> : null}
    </div>
  );
}
