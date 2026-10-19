import { lazy } from "react";
// Like React.lazy, but if the chunk fails to load (stale/dev-server hiccup) it reloads once automatically.
export const lazyRetry = (load) => lazy(() =>
  load().then((m) => { sessionStorage.removeItem("chunk-retried"); return m; }).catch((e) => {
    if (!sessionStorage.getItem("chunk-retried")) { sessionStorage.setItem("chunk-retried", "1"); window.location.reload(); return new Promise(() => {}); }
    sessionStorage.removeItem("chunk-retried"); throw e;
  }));
