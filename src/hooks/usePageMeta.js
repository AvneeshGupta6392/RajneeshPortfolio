import { useEffect } from "react";
// Pass a falsy title to skip (used when a page is embedded as a section on Home).
export default function usePageMeta(title, description) {
  useEffect(() => {
    if (!title) return;
    document.title = `${title} | Rajneesh Kumar Gupta, Rootpure Advisor`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
}
