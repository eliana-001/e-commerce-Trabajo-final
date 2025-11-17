
import '/workspaces/e-commerce-Trabajo-final/src/pages/Home/home.css';


export default function Home() {
    return (
        <div className="container">
            <main>
                <section className="hero">
                    <div className="hero-left">
                        <h1>A Bowl of Love from Japanese Cuisine for You</h1>
                        <p className="lead">Sabores intensos, aromas envolventes y una experiencia que combina tradición y modernidad.</p>
                        <div className="btn-row">
                            <button className="order-btn">Order Now</button>
                            <button className="secondary-btn">See Menu</button>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="illustration-wrap">
                            <img src="/workspaces/e-commerce-Trabajo-final/src/assets/img/descarga.jpg" alt="ramen" />
                        </div>
                    </div>
                </section>
            </main>
            <div className="Menu">
                <h2>Nuestro Menú</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <img src="/src/assets/menu/ramen.jpg" alt="Ramen" />
                        <h3>Ramen Clásico</h3>
                        <p>Delicioso ramen con caldo rico y fideos frescos.</p>
                        <span className="price">$12.99</span>
                    </div>
                    <div className="menu-item">
                        <img src="/src/assets/menu/sushi.jpg" alt="Sushi" />
                        <h3>Sushi Variado</h3>
                        <p>Selección de sushi fresco y sabroso.</p>
                        <span className="price">$15.99</span>
                    </div>
                    <div className="menu-item">
                        <img src="/src/assets/menu/teriyaki.jpg" alt="Teriyaki" />
                        <h3>Pollo Teriyaki</h3>
                        <p>Jugoso pollo glaseado con salsa teriyaki.</p>
                        <span className="price">$13.99</span>
                    </div>
                </div>  
            </div>
            <div className="AboutUs">
                <h2>Sobre Nosotros</h2>
                <p>En nuestro restaurante, nos apasiona llevar la auténtica cocina asiatica a tu mesa. Utilizamos ingredientes frescos y técnicas tradicionales para ofrecerte platos que deleitan el paladar y celebran la rica cultura culinaria de Japón. Ya sea que busques un ramen reconfortante o sushi exquisito, estamos aquí para brindarte una experiencia gastronómica inolvidable.</p>
            </div>
        </div>
    );
}