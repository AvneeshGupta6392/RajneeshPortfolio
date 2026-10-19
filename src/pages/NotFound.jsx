import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
export default function NotFound() {
  usePageMeta("Page not found", "This page does not exist.");
  return <section className="page center"><h1>Page not found</h1><p>The page you wanted doesn't exist.</p><Link className="btn gold" to="/">Go home</Link></section>;
}
