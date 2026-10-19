import { MessageCircle } from "lucide-react";
import { products } from "../data/products.js";
import { wa } from "../config/siteConfig.js";
import usePageMeta from "../hooks/usePageMeta.js";
export default function Products({ embedded = false }) {
  const H = embedded ? "h2" : "h1";
  usePageMeta(embedded ? null : "Product Discovery", "Explore Rootpure products and ask Rajneesh Kumar Gupta about any of them on WhatsApp.");
  return (
    <section className="page products">
      <H>Product Discovery</H><div className="rule" />
      {products.length === 0 ? (
        <div className="empty"><p>The product catalogue is being prepared with verified Rootpure information.</p>
          <a className="btn gold" href={wa("Hello Rajneesh, please share details about Rootpure products.")} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Ask about products</a></div>
      ) : (
        <div className="pgrid">{products.map((p) => (
          <article className="pcard" key={p.id}>
            {p.image && <img src={p.image} alt={p.name} loading="lazy" />}
            <h2>{p.name}</h2><p>{p.description}</p>{p.price && <p className="price">{p.price}</p>}
            <a className="btn gold" href={wa(`Hello Rajneesh, I would like to know more about ${p.name}.`)} target="_blank" rel="noopener noreferrer">Inquire on WhatsApp</a>
          </article>))}</div>
      )}
    </section>
  );
}
