<template>
  <div class="contact-page">
    <NavigationBar />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title fade-in">We're Here To Support You</h1>
        <p class="hero-subtitle fade-in" :style="{ animationDelay: '0.3s' }">Get in touch with any questions or to learn more</p>
      </div>
    </section>

    <!-- Main Content -->
    <main class="main-content">
      <div class="contact-container">
        <!-- Left Section -->
        <div class="contact-left">
          <h2 class="section-title fade-in">A Safe Space to Share</h2>
          <p class="support-text fade-in" :style="{ animationDelay: '0.2s' }">Reach out with questions, thoughts, or just to connect</p>

          <!-- Contact Form -->
          <div class="contact-form fade-in-up" :style="{ animationDelay: '0.4s' }">
            <h3 class="form-title">Share Your Thoughts</h3>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="fullName" class="form-label">Your Name</label>
                <input type="text" id="fullName" class="form-input" placeholder="How would you like us to call you?" required>
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" id="email" class="form-input" placeholder="Where can we reach you?" required>
              </div>
              <div class="form-group">
                <label for="message" class="form-label">Your Message</label>
                <textarea id="message" class="form-textarea" rows="6" placeholder="Share what's on your mind... There's no judgment here." required></textarea>
              </div>
              <button type="submit" class="send-btn glow-hover">
                <span class="btn-icon">💫</span>
                Send with Care
              </button>
            </form>
          </div>
        </div>

        <!-- Right Section -->
        <div class="contact-right">
          <div class="contact-info-section slide-in-right" :style="{ animationDelay: '0.5s' }">
            <h3 class="info-title">Send Us A Message</h3>
            <div class="contact-method">
              <strong>Email:</strong> <span class="contact-detail">support@forgemind.com</span>
            </div>
            <p class="response-time">We respond within 24 hours</p>
            <div class="comfort-message">
              <p>Whether you're curious about where to start or have a specific question, we're here to help. Your journey is important to us.</p>
            </div>
          </div>

          <!-- Social Links Section -->
          <div class="social-section slide-in-right" :style="{ animationDelay: '0.6s' }">
            <h4>Follow us on:</h4>
            <div class="social-icons">
              <a href="#" class="social-icon instagram" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="social-icon tiktok" aria-label="TikTok">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
              </a>
              <a href="#" class="social-icon facebook" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <p class="contact-email">support@forgemind.com</p>
            <p>021 624 7739</p>
          </div>

          <!-- Emergency Resources -->
          <div class="emergency-resources slide-in-right" :style="{ animationDelay: '0.7s' }">
            <h4>Immediate Support</h4>
            <p>If you need urgent help, please contact:</p>
            <div class="resource-item">
              <span class="resource-icon">🆘</span>
              <span>Mental Health Crisis Line: 0800 123 456</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Affirmation Section -->
      <section class="affirmation-section fade-in" :style="{ animationDelay: '0.9s' }">
        <div class="affirmation-content">
          <p class="affirmation">"Reaching out is not a sign of weakness. It's an act of courage and self-care."</p>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer fade-in" :style="{ animationDelay: '1s' }">
      <div class="footer-content">
        <div class="footer-section">
          <h4 class="footer-title">Follow us on:</h4>
          <div class="social-links">
            <a href="#" class="social-icon instagram bounce-in" aria-label="Instagram" :style="{ animationDelay: '1.2s' }">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="social-icon facebook bounce-in" aria-label="Facebook" :style="{ animationDelay: '1.3s' }">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="social-icon tiktok bounce-in" aria-label="TikTok" :style="{ animationDelay: '1.4s' }">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">Please contact us on:</h4>
          <div class="contact-info">
            <p class="contact-item slide-in-right" :style="{ animationDelay: '1.5s' }">
              <span class="contact-emoji">📧</span>
              support@forgemind.com
            </p>
            <p class="contact-item slide-in-right" :style="{ animationDelay: '1.6s' }">
              <span class="contact-emoji">📞</span>
              021 624 7739
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue';

const handleSubmit = () => {
  // Handle form submission logic here
  alert('Thank you for reaching out. We\'ve received your message and will respond with care within 24 hours.');
};
</script>

<style scoped>
.contact-page {
  position: relative;
  min-height: 100vh;
  background: url('../assets/images/Background.png') center/cover no-repeat, #fefefe;
  color: #2c3e50;
  overflow-x: hidden;
}

/* Add overlay for better text readability */
.contact-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(254, 254, 254, 0.2);
  z-index: 0;
}

/* Make sure NavigationBar is above the overlay */
.navigation-bar {
  position: relative;
  z-index: 10;
}

/* Make sure main content and footer are above the overlay */
.main-content, .footer {
  position: relative;
  z-index: 1;
}

/* Animation Classes */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  animation: slideInRight 0.8s ease forwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.bounce-in {
  opacity: 0;
  transform: scale(0.8);
  animation: bounceIn 0.8s ease forwards;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Hero Section */
.hero {
  position: relative;
  text-align: center;
  padding: 80px 20px;
  overflow: hidden;

}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-family: 'IM Fell English SC', serif;
  font-size: 2.8rem;
  font-weight: 400;
  margin-bottom: 15px;
  color: #2c5530;
  letter-spacing: 1px;
}

.hero-subtitle {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: #4a7c59;
  margin: 0;
  font-weight: 400;
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

/* Left Section */
.contact-left {
  padding-right: 20px;
}

.section-title {
  font-family: 'IM Fell English SC', serif;
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 10px;
  color: #2c5530;
}

.support-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: #4a7c59;
  margin-bottom: 30px;
  font-weight: 400;
}

.contact-form {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e0f2e1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}

.form-title {
  font-family: 'IM Fell English SC', serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 25px;
  color: #2c5530;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
  position: relative;
}

.form-label {
  display: block;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 0.95rem;
  color: #4a7c59;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0f2e1;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  background: #f8fdf8;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #4fb9af;
  background: white;
  box-shadow: 0 0 0 3px rgba(79, 185, 175, 0.1);
  transform: translateY(-2px);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #a8d5ba;
  font-family: 'Playfair Display', serif;
}

.send-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  border: none;
  padding: 14px 40px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px auto 0;
  font-family: 'Playfair Display', serif;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.send-btn.glow-hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 25px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
  background: linear-gradient(135deg, 
    rgba(79, 185, 175, 0.8) 0%,
    rgba(79, 185, 175, 0.9) 25%,
    rgba(79, 185, 175, 1) 50%,
    rgba(79, 185, 175, 0.9) 75%,
    rgba(79, 185, 175, 0.8) 100%
  );
}

.send-btn.glow-hover:hover::before {
  opacity: 1;
}

.send-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(79, 185, 175, 0.4);
}

.send-btn.glow-hover:hover {
  box-shadow: 
    0 8px 25px rgba(79, 185, 175, 0.4),
    0 0 30px rgba(79, 185, 175, 0.6);
}

.btn-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.send-btn:hover .btn-icon {
  transform: rotate(20deg);
}

/* Right Section */
.contact-right {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-info-section {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e0f2e1;
  text-align: left;
  transition: transform 0.3s ease;
}

.contact-info-section:hover {
  transform: translateY(-5px);
}

.info-title {
  font-family: 'IM Fell English SC', serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: #2c5530;
}

.contact-method {
  margin-bottom: 20px;
  line-height: 1.5;
  font-family: 'Playfair Display', serif;
}

.contact-detail {
  color: #4fb9af;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.contact-detail:hover {
  color: #3da89e;
  text-decoration: underline;
}

.response-time {
  font-family: 'Playfair Display', serif;
  font-size: 0.9rem;
  color: #4a7c59;
  margin-bottom: 20px;
  font-style: italic;
}

.comfort-message {
  background: #f1f8e9;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #4fb9af;
  margin-top: 20px;
  transition: transform 0.3s ease;
}

.comfort-message:hover {
  transform: translateX(5px);
}

.comfort-message p {
  margin: 0;
  color: #2c5530;
  line-height: 1.6;
  font-size: 0.95rem;
  font-family: 'Playfair Display', serif;
}

/* Social Links Section */
.social-section {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e0f2e1;
  text-align: center;
  transition: transform 0.3s ease;
}

.social-section:hover {
  transform: translateY(-5px);
}

.social-section h4 {
  font-family: 'IM Fell English SC', serif;
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 15px;
  color: #2c5530;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f8fdf8;
  color: #4a7c59;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.social-icon.instagram:hover {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  color: white;
}

.social-icon.facebook:hover {
  background: #1877f2;
  color: white;
}

.social-icon.tiktok:hover {
  background: #000000;
  color: white;
}

.contact-email {
  color: #4fb9af;
  font-weight: 500;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  margin: 10px 0;
  transition: color 0.3s ease;
}

.contact-email:hover {
  color: #3da89e;
  text-decoration: underline;
  cursor: pointer;
}

/* Emergency Resources */
.emergency-resources {
  background: #fff3e0;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #ffcc80;
  transition: transform 0.3s ease;
}

.emergency-resources:hover {
  transform: translateY(-5px);
}

.emergency-resources h4 {
  font-family: 'IM Fell English SC', serif;
  color: #e65100;
  margin-bottom: 15px;
  font-size: 1.3rem;
  font-weight: 400;
}

.emergency-resources p {
  font-family: 'Playfair Display', serif;
  color: #666;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.resource-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e65100;
  font-weight: 500;
  font-family: 'Playfair Display', serif;
  transition: transform 0.3s ease;
}

.resource-item:hover {
  transform: translateX(5px);
}

.resource-icon {
  font-size: 1.3rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Affirmation Section */
.affirmation-section {
  margin-top: 80px;
  text-align: center;
}

.affirmation-content {
  background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
  padding: 40px;
  border-radius: 20px;
  border-left: 6px solid #4fb9af;
  transition: transform 0.3s ease;
}

.affirmation-content:hover {
  transform: translateY(-5px);
}

.affirmation {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-style: italic;
  color: #2c5530;
  margin: 0;
  line-height: 1.6;
}

/* Footer */
.footer {
  background: linear-gradient(135deg, #2c5530, #1e3b23);
  color: white;
  padding: 40px 20px 20px;
  margin-top: 60px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 30px;
}

.footer-section {
  text-align: center;
}

.footer-title {
  font-family: 'IM Fell English SC', serif;
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 15px;
  color: #c5e8c8;
}

.social-links {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.social-links .social-icon {
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  color: #c5e8c8;
}

.social-links .social-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
  color: #e8f5e9;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-emoji {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.contact-item:hover .contact-emoji {
  transform: scale(1.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-left {
    padding-right: 0;
  }

  .contact-form {
    padding: 25px 20px;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .hero {
    padding: 50px 20px;
  }
  
  .contact-form {
    padding: 20px 15px;
  }
  
  .footer-content {
    gap: 30px;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
  }
}
</style>