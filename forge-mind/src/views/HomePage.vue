<template>
  <div class="home-page">
    <!-- Logo in top-right corner -->
    <div class="logo-container">
      <img src="@/assets/images/ForgeMind-Logo.png" alt="FORGEMIND Logo" class="corner-logo">
    </div>

   <!-- Hero Section -->
    <section class="hero">
      <h1 class="main-header">FORGE YOUR STRONGEST MIND</h1>
      <p class="subtitle">Daily mental fitness workouts to build resilience, clarity, and emotional strength.</p>
      <div class="divider"></div>
      <router-link to="/signup" class="btn primary">Start Your Journey</router-link>
    </section>
    
   <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Follow us on:</h4>
          <div class="social-icons">
            <a href="#" class="social-link" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-link" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-link" aria-label="TikTok">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div class="footer-section">
          <h4>Please contact us on:</h4>
          <div class="contact-info">
            <p>
              <i class="fas fa-envelope contact-icon"></i>
              support@forgemind.com
            </p>
            <p>
              <i class="fas fa-phone contact-icon"></i>
              021 624 7739
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: url('../assets/images/Background.png') center/cover no-repeat,
  #fefefe;
  color: #2c3e50;
}

/* Add overlay for better text readability */
.home-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(254, 254, 254, 0.2); /* White overlay with transparency */
  z-index: 0;
}

/* Make sure content stays above the overlay */
.hero, .footer, .logo-container {
  position: relative;
  z-index: 1;
}

.logo-container {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.corner-logo {
  position: absolute;
  top: 20px;
  right: 60px;
  width: 300px;
  height: 250px;
}

.hero {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 80px 20px;
  margin-top: 200px;
}

/* Font Styles */
.main-header {
  font-family: 'IM Fell English SC', serif;
  font-size: 3.5rem;
  font-weight: 400;
  text-align: center;
  margin: 0 0 30px 0;
  line-height: 1.1;
  color: #1a1a1a;
  letter-spacing: 1px;
}

.subtitle {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  text-align: center;
  margin: 0 auto 40px auto;
  max-width: 600px;
  line-height: 1.6;
  color: #555;
  font-weight: 400;
}

.divider {
  width: 100px;
  height: 2px;
  background: #000;
  margin: 30px 0;
}

.btn.primary {
  font-family: 'Playfair Display', serif;
  background: #4FB9AF;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 0;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
}

.btn.primary:hover {
  background: #333;
  transform: translateY(-2px);
}

.footer {
  background: #C5E8C8;
  padding: 40px 20px;
  border-top: 2px solid #000;
  position: relative;
  z-index: 1;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-section {
  text-align: center;
}

.footer-section h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 15px;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #000;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.3rem;
}

.social-link:hover {
  background: #333;
  transform: translateY(-3px);
}

.contact-info {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  margin: 8px 0;
  color: #555;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 15px 0;
  font-size: 1.1rem;
  color: #555;
}

.contact-icon {
  color: #000;
  font-size: 1.2rem;
  width: 20px;
  text-align: center;
}

/* Responsive design */
@media (max-width: 768px) {
  .main-header {
    font-size: 2.5rem;
    margin: 0 0 20px 0;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .home-page {
    padding: 20px;
  }

  .footer-content {
    flex-direction: column;
    gap: 20px;
  }

  .corner-logo {
    width: 200px;
    height: 167px;
  }

    .hero {
    margin-top: 40px; /* Adjusted for smaller logo */
  }

  .contact-info {
    text-align: center;
  }

  .contact-info p {
    justify-content: center;
  }

  .social-icons {
    gap: 15px;
  }

  .social-link {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .main-header {
    font-size: 2rem;
  }
  
  .corner-logo {
    width: 150px;
    height: 125px;
  }

    .hero {
    margin-top: 30px; /* Adjusted for even smaller logo */
  }

    .logo-container {
    top: 10px;
    right: 10px;
  }

    .social-link {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
}
</style>



