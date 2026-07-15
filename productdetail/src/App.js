import { useEffect, useState } from 'react';
import './App.css';

const product = {
  name: 'Aura Smartwatch',
  brand: 'NovaTech',
  price: 249,
  rating: 4.8,
  reviews: 128,
  description:
    'A featherlight smartwatch designed for focused training, calm notifications, and all-day comfort.',
  colors: ['Midnight', 'Silver', 'Rose Gold'],
  images: [
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  ],
  features: [
    'Heart-rate and sleep tracking',
    'Up to 7 days of battery life',
    'Water-resistant for daily wear',
  ],
  highlights: [
    'On-device GPS for runs and walks',
    'Bright AMOLED display with quick-glance widgets',
    'Custom watch faces and haptic notifications',
  ],
  specs: [
    { label: 'Display', value: '1.8" AMOLED' },
    { label: 'Battery', value: '7 days' },
    { label: 'Compatibility', value: 'iOS & Android' },
  ],
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="app-shell loading-state" role="status" aria-live="polite">
        <div className="loading-card">
          <p className="loading-title">Loading product details</p>
          <div className="loading-pill" />
          <div className="loading-line short" />
          <div className="loading-line" />
          <div className="loading-line" />
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Featured release</p>
          <h1>{product.name}</h1>
        </div>
        <button type="button" className="ghost-button">
          Save for later
        </button>
      </header>

      <main className="product-layout">
        <section className="gallery-card" aria-label="Product images">
          <img src={product.images[activeImage]} alt={`${product.name} view ${activeImage + 1}`} className="main-image" />
          <div className="thumbnail-row" role="list">
            {product.images.map((image, index) => (
              <button
                type="button"
                key={image}
                className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        </section>

        <section className="info-card">
          <div className="product-meta">
            <p className="brand">{product.brand}</p>
            <div className="rating-row" aria-label={`Rated ${product.rating} out of 5`}>
              <span className="stars">★★★★★</span>
              <span>{product.rating}</span>
              <span className="reviews">({product.reviews} reviews)</span>
            </div>
          </div>

          <h2>{product.name}</h2>
          <p className="description">{product.description}</p>

          <div className="price-row">
            <div>
              <p className="price">${product.price}</p>
              <p className="subtext">Free shipping and 30-day returns</p>
            </div>
            <div className="color-options" aria-label="Available colors">
              {product.colors.map((color) => (
                <span key={color} className="color-pill">
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div className="actions">
            <button type="button" className="primary-button">
              Add to bag
            </button>
            <button type="button" className="secondary-button">
              Explore features
            </button>
          </div>

          <div className="feature-list">
            <h3>Why customers love it</h3>
            <ul>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <section className="detail-grid" aria-label="Additional product details">
        <article className="info-panel">
          <h3>Highlights</h3>
          <ul>
            {product.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="info-panel">
          <h3>Specifications</h3>
          <div className="spec-list">
            {product.specs.map((spec) => (
              <div key={spec.label} className="spec-item">
                <span>{spec.label}</span>
                <strong>{spec.value}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
