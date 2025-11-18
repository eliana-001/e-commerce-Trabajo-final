// src/pages/Menu/menu.jsx
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Cart from "../../components/ProductCard/ProductCard/workspaces/e-commerce-Trabajo-final/src/pages/Menu/menu.jsx";
import "./menu.css";

const MENU_ITEMS = [
    { id: 1, name: "Sushi de salmón", category: "Sushi", price: 9.5, description: "Rollos frescos con salmón, arroz y alga nori.", img: "https://source.unsplash.com/400x300/?salmon-sushi" },
    { id: 2, name: "Nigiri mixto", category: "Sushi", price: 8.0, description: "Variedad de nigiris con pescado fresco.", img: "https://source.unsplash.com/400x300/?nigiri" },
    { id: 3, name: "Ramen tonkotsu", category: "Ramen", price: 12.0, description: "Caldo cremoso de hueso, chashu y huevo marinado.", img: "https://source.unsplash.com/400x300/?ramen" },
    { id: 4, name: "Ramen vegetariano", category: "Ramen", price: 10.0, description: "Caldo vegetal con fideos, setas y pak choi.", img: "https://source.unsplash.com/400x300/?vegetarian-ramen" },
    { id: 5, name: "Bento clásico", category: "Bento", price: 13.5, description: "Arroz, tempura, ensalada y una porción de proteína.", img: "https://source.unsplash.com/400x300/?bento" },
    { id: 6, name: "Gyozas (6 unidades)", category: "Entrantes", price: 6.0, description: "Empanadillas japonesas rellenas y doradas.", img: "https://source.unsplash.com/400x300/?gyoza" },
    { id: 7, name: "Edamame", category: "Entrantes", price: 4.5, description: "Vainas de soja al dente con sal marina.", img: "https://source.unsplash.com/400x300/?edamame" },
    { id: 8, name: "Té verde", category: "Bebidas", price: 2.5, description: "Té japonés tradicional, caliente o frío.", img: "https://source.unsplash.com/400x300/?green-tea" },
    { id: 9, name: "Sake (200ml)", category: "Bebidas", price: 7.0, description: "Sake suave servido frío o templado.", img: "https://source.unsplash.com/400x300/?sake" },
];

const CATEGORIES = ["Todos", ...Array.from(new Set(MENU_ITEMS.map((i) => i.category)))];

export default function Menu() {
    const [category, setCategory] = useState("Todos");
    const [query, setQuery] = useState("");
    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart") || "[]");
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const filtered = MENU_ITEMS.filter((item) => {
        const matchCat = category === "Todos" || item.category === category;
        const q = query.trim().toLowerCase();
        const matchQuery =
            !q ||
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q);
        return matchCat && matchQuery;
    });

    const addToCart = (item) => {
        setCart((prev) => {
            const found = prev.find((p) => p.id === item.id);
            if (found) return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
            return [...prev, { ...item, qty: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <div className="menu-container">
            <Header />
            <div className="menu-top">
                <h1 className="menu-title">Menú Japonés</h1>
                <div className="menu-controls">
                    <input
                        aria-label="Buscar"
                        placeholder="Buscar plato..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="menu-search"
                    />
                    <Cart cart={cart} removeFromCart={removeFromCart} />
                </div>
            </div>

            <div className="menu-categories">
                {CATEGORIES.map((c) => (
                    <button
                        key={c}
                        onClick={() => setCategory(c)}
                        className={`menu-cat-btn ${c === category ? "active" : ""}`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="menu-grid">
                {filtered.map((item) => (
                    <div key={item.id} className="menu-card">
                        <img src={item.img} alt={item.name} className="menu-img" />
                        <div className="menu-card-body">
                            <div className="menu-name-row">
                                <div>
                                    <div className="menu-item-name">{item.name}</div>
                                    <div className="menu-small">{item.category}</div>
                                </div>
                                <div className="menu-price">{item.price.toFixed(2)}€</div>
                            </div>
                            <div className="menu-desc">{item.description}</div>
                            <button onClick={() => addToCart(item)} className="menu-add-btn">
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
