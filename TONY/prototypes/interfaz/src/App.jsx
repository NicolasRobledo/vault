import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// --- Component Imports (Conceptual - you'd create these files) ---
// import Header from './components/Header';
// import FeaturedSection from './components/FeaturedSection';
// import MainContent from './components/MainContent';
// import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';

// A simple Navbar component placeholder
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div className="container-fluid">
      <a className="navbar-brand fw-bold" href="#">L</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* Placeholder for menu items like Products, Labels, News, etc. */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><a className="nav-link" href="#">PRODUCTS</a></li>
          <li className="nav-item"><a className="nav-link" href="#">LABELS</a></li>
          <li className="nav-item"><a className="nav-link" href="#">NEWS</a></li>
          <li className="nav-item"><a className="nav-link" href="#">OUR COMPANIES</a></li>
          <li className="nav-item"><a className="nav-link" href="#">ONLINE SERVICES</a></li>
        </ul>
        {/* Search and User icons placeholder */}
        <div className="d-flex">
          <button className="btn btn-outline-dark me-2">Search</button>
          <button className="btn btn-dark">Log In</button>
        </div>
      </div>
    </div>
  </nav>
);

// Main Application Component
function App() {
  return (
    <div className="App">
      {/* 1. Navigation Bar */}
      <Navbar />

      <main className="container mt-4">
        
        {/* 2. Featured Title/Hero Section */}
        <section className="bg-dark text-white p-5 mb-5" style={{ minHeight: '300px' }}>
          <h1 className="display-4 fw-bold">Featured Title</h1>
          <p className="lead" style={{ maxWidth: '600px' }}>
            Curabitur volutpat sagittis, in neque habitasse. Vitae ut leo lorem in turpis.
          </p>
          {/* Placeholder for the featured image (diagonal lines) */}
          <div className="position-absolute top-0 end-0 bottom-0 start-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,.1) 0px, rgba(255,255,255,.1) 2px, transparent 2px, transparent 4px)', zIndex: 0 }}></div>
        </section>

        {/* 3. Main Content Grid (3 columns: Main 1, Main 2, Sidebar) */}
        <div className="row">
          
          {/* Main Content Column (Large) - Takes 8 of 12 columns on medium/large screens */}
          <div className="col-md-8">
            
            {/* Top Row of Articles (1 Article + 1 Sidebar Item) */}
            <div className="row mb-4">
              {/* Article 1 */}
              <div className="col-lg-8">
                <article>
                  <span className="text-muted small">February 27, 2021 | <strong className="text-primary">LABELS</strong></span>
                  <div className="ratio ratio-16x9 bg-light mb-3">
                    {/* Placeholder for image/video */}
                    <div className="d-flex align-items-center justify-content-center text-secondary">
                        [Image Placeholder]
                    </div>
                  </div>
                  <h2>Vitae ut leo lorem in turpis. Quam curabitur.</h2>
                  <p className="text-muted">
                    Curabitur volutpat sagittis, in neque habitasse. Vitae ut leo lorem in turpis. Quam curabitur.
                  </p>
                  <div className="border-top border-bottom py-2">
                    <button className="btn btn-sm btn-outline-secondary">Details</button>
                  </div>
                </article>
              </div>

              {/* Small Sidebar Item (next to Article 1) */}
              <div className="col-lg-4 d-none d-lg-block">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <span className="badge bg-secondary mb-2">LABELS</span>
                    <h5 className="card-title">Vehicuñis viverra aliquet sit</h5>
                    <p className="card-text small text-muted">
                      Accumsan. Penatibus sed mauris.
                    </p>
                    <a href="#" className="card-link small">Read More &rarr;</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section - Two Columns (Articles 2 & 3) */}
            <div className="row mb-4">
              {/* Article 2 */}
              <div className="col-md-6">
                <article>
                  <span className="text-muted small">February 27, 2021 | <strong className="text-primary">LABELS</strong></span>
                  <div className="ratio ratio-4x3 bg-light mb-2">
                    <div className="d-flex align-items-center justify-content-center text-secondary">
                        [Image Placeholder]
                    </div>
                  </div>
                  <h3>curabitur volutpat at sed proin.</h3>
                  <p className="text-muted small">Vitae ut leo lorem in turpis. Quam curabitur.</p>
                </article>
              </div>

              {/* Article 3 */}
              <div className="col-md-6">
                <article>
                  <span className="text-muted small">February 27, 2021 | <strong className="text-primary">LABELS</strong></span>
                  <div className="ratio ratio-4x3 bg-light mb-2">
                    <div className="d-flex align-items-center justify-content-center text-secondary">
                        [Image Placeholder]
                    </div>
                  </div>
                  <h3>sagittis, in neque habitasse</h3>
                  <p className="text-muted small">Vitae ut leo lorem in turpis. Quam curabitur.</p>
                </article>
              </div>
            </div>
            
            {/* Bottom Section - Two Columns (Articles 4 & 5) */}
            <div className="row mb-5">
              {/* Article 4 */}
              <div className="col-md-6">
                <article>
                  <span className="text-muted small">February 27, 2021 | <strong className="text-primary">LABELS</strong></span>
                  <div className="ratio ratio-4x3 bg-light mb-2">
                    <div className="d-flex align-items-center justify-content-center text-secondary">
                        [Image Placeholder]
                    </div>
                  </div>
                  <h3>curabitur volutpat at sed proin.</h3>
                </article>
              </div>

              {/* Article 5 */}
              <div className="col-md-6">
                <article>
                  <span className="text-muted small">February 27, 2021 | <strong className="text-primary">LABELS</strong></span>
                  <div className="ratio ratio-4x3 bg-light mb-2">
                    <div className="d-flex align-items-center justify-content-center text-secondary">
                        [Image Placeholder]
                    </div>
                  </div>
                  <h3>sagittis, in neque habitasse</h3>
                </article>
              </div>
            </div>
          </div>

          {/* Right Sidebar Column - Takes 4 of 12 columns on medium/large screens */}
          <div className="col-md-4">
            <aside>
              <h4 className="border-bottom pb-2 mb-3">Popular</h4>
              
              {/* Small Ad/Box 1 */}
              <div className="bg-light p-3 mb-3 border">
                <span className="badge bg-info">LABELS</span>
                <p className="small mt-2 mb-0">Ad section placeholder with content.</p>
              </div>

              {/* Small Ad/Box 2 */}
              <div className="bg-light p-3 mb-3 border">
                <span className="badge bg-warning">NEWS</span>
                <p className="small mt-2 mb-0">Another small ad/content block.</p>
              </div>
              
              {/* More content (e.g., social icons, small lists) */}
              <div className="d-flex justify-content-around mt-4">
                <button className="btn btn-outline-dark rounded-circle" style={{ width: '40px', height: '40px' }}>&hearts;</button>
                <button className="btn btn-outline-dark rounded-circle" style={{ width: '40px', height: '40px' }}>&rarr;</button>
                <button className="btn btn-outline-dark rounded-circle" style={{ width: '40px', height: '40px' }}>&#x2190;</button>
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      {/* 4. Footer Section */}
      <footer className="bg-dark text-white mt-5 p-4 border-top">
        <div className="container">
          <div className="row">
            {/* Footer Links Column 1 */}
            <div className="col-md-4">
              <h6 className="text-uppercase mb-3">Quick Links</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-white-50 text-decoration-none">Maecenas quis porta</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Vivamus eget</a></li>
              </ul>
            </div>
            {/* Footer Links Column 2 */}
            <div className="col-md-4">
              <h6 className="text-uppercase mb-3">Services</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-white-50 text-decoration-none">Online Services</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Support</a></li>
              </ul>
            </div>
            {/* Footer Social Icons */}
            <div className="col-md-4 text-center text-md-end">
              <h6 className="text-uppercase mb-3">Follow Us</h6>
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <button className="btn btn-outline-light rounded-circle" style={{ width: '35px', height: '35px' }}>F</button>
                <button className="btn btn-outline-light rounded-circle" style={{ width: '35px', height: '35px' }}>T</button>
                <button className="btn btn-outline-light rounded-circle" style={{ width: '35px', height: '35px' }}>I</button>
              </div>
            </div>
          </div>
          <p className="text-center text-muted small mt-4 mb-0">&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
