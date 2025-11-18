import React, { useMemo, useState } from "react";
import './ProductCard.css';

export default function ProductCard({ cart = [], removeFromCart = () => {} }) {
  const [open, setOpen] = useState(false);

  const totals = useMemo(() => {
    const items = cart.reduce((s, it) => s + (it.qty || 1), 0);
    const price = cart.reduce((s, it) => s + (it.price * (it.qty || 1)), 0);
    return { items, price };
  }, [cart]);

  return (
    <div className="pcart-root">
      <button
        className="pcart-toggle"
        aria-label="Abrir carrito"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        title="Carrito"
      >
        <svg className="pcart-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <path d="M7 4h-2l-1 2H1v2h2l3.6 7.59-1.35 2.45A1 1 0 0 0 6 20h12v-2H6.42a.25.25 0 0 1-.23-.15L7.1 16h7.45a1 1 0 0 0 .95-.68l1.58-5.06A1 1 0 0 0 16.1 8H7.16" />
        </svg>
        <span className="pcart-badge">{totals.items}</span>
      </button>

      {open && (
        <div className="pcart-panel" role="dialog" aria-label="Panel de carrito">
          <div className="pcart-head">
            <strong>Tu carrito</strong>
            <button className="pcart-close" onClick={() => setOpen(false)} aria-label="Cerrar">×</button>
          </div>

          {cart.length === 0 ? (
            <div className="pcart-empty">Tu carrito está vacío.</div>
          ) : (
            <div className="pcart-items">
              {cart.map((it) => (
                <div className="pcart-item" key={it.id}>
                  <img src={it.img} alt={it.name} className="pcart-thumb" />
                  <div className="pcart-meta">
                    <div className="pcart-name">{it.name}</div>
                    <div className="pcart-sub">{it.qty} × {it.price.toFixed(2)}€</div>
                  </div>
                  <div className="pcart-right">
                    <div className="pcart-lineprice">{(it.price * (it.qty || 1)).toFixed(2)}€</div>
                    <button className="pcart-remove" onClick={() => removeFromCart(it.id)} aria-label={`Eliminar ${it.name}`}>
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pcart-footer">
            <div className="pcart-total">
              <span>Total:</span>
              <strong>{totals.price.toFixed(2)}€</strong>
            </div>
            <div className="pcart-actions">
              <button className="pcart-checkout" disabled={cart.length === 0}>Ir a pagar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
