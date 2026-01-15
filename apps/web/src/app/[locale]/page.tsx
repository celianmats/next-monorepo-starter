"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { toast } from "sonner";

export default function Home() {
  const t = useTranslations("HomePage");
  const { setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => setTheme("light")}
          className="rounded bg-slate-200 px-4 py-2 dark:bg-slate-800"
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="rounded bg-slate-200 px-4 py-2 dark:bg-slate-800"
        >
          Dark
        </button>
        <button
          onClick={() => toast.success("Hello World!")}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Toast
        </button>
      </div>
    </main>
  );
}
