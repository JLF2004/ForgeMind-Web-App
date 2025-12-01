<template>
  <div class="home-page">
    <!-- Logo in top-right corner with fade-in animation -->
    <div class="logo-container fade-in-logo">
      <img src="@/assets/images/ForgeMind-Logo.png" alt="FORGEMIND Logo" class="corner-logo">
    </div>

   <!-- Hero Section -->
    <section class="hero">
      <!-- Main Header with typewriter effect -->
      <h1 class="main-header typewriter">FORGE YOUR STRONGEST MIND</h1>
      
      <!-- Subtitle with fade-in-up animation -->
      <p class="subtitle fade-in-up" :style="{ animationDelay: '1.2s' }">
        Daily mental fitness workouts to build resilience, clarity, and emotional strength.
      </p>
      
      <!-- Divider with grow animation -->
      <div class="divider grow-in" :style="{ animationDelay: '1.8s' }"></div>
      
      <!-- Button with bounce animation -->
      <router-link to="/signup" class="btn primary bounce-in" :style="{ animationDelay: '2s' }">
        Start Your Journey
      </router-link>
    </section>
    
    <!-- Floating particles background -->
    <div class="floating-particles">
      <div class="particle" v-for="i in 25" :key="i" :style="getParticleStyle(i)"></div>
    </div>
    
   <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section slide-in-left" :style="{ animationDelay: '2.5s' }">
          <h4>Follow us on:</h4>
          <div class="social-icons">
            <a href="#" class="social-link" aria-label="Instagram" :style="{ animationDelay: '2.7s' }">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-link" aria-label="Facebook" :style="{ animationDelay: '2.8s' }">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-link" aria-label="TikTok" :style="{ animationDelay: '2.9s' }">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div class="footer-section slide-in-right" :style="{ animationDelay: '3s' }">
          <h4>Please contact us on:</h4>
          <div class="contact-info">
            <p class="fade-in" :style="{ animationDelay: '3.2s' }">
              <i class="fas fa-envelope contact-icon"></i>
              support@forgemind.com
            </p>
            <p class="fade-in" :style="{ animationDelay: '3.4s' }">
              <i class="fas fa-phone contact-icon"></i>
              021 624 7739
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Generate random floating particles
const getParticleStyle = (index) => {
  const size = Math.random() * 15 + 5
  const duration = Math.random() * 20 + 10
  const delay = Math.random() * 5
  const colors = ['rgba(79, 185, 175, 0.15)', 'rgba(197, 232, 200, 0.1)', 'rgba(139, 195, 74, 0.1)']
  const color = colors[Math.floor(Math.random() * colors.length)]
  
  return {
    '--size': `${size}px`,
    '--duration': `${duration}s`,
    '--delay': `${delay}s`,
    '--color': color,
    '--x-start': `${Math.random() * 100}%`,
    '--y-start': `${Math.random() * 100}%`,
    '--x-end': `${Math.random() * 100}%`,
    '--y-end': `${Math.random() * 100}%`,
    left: `calc(${Math.random() * 100}% - ${size / 2}px)`,
    top: `calc(${Math.random() * 100}% - ${size / 2}px)`,
  }
}

// Optional: Add scroll animation for elements
onMounted(() => {
  // Add scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // Observe elements for scroll animations
  document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el)
  })
})
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
  overflow-x: hidden;
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

/* Floating particles background */
.floating-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  background: var(--color, rgba(79, 185, 175, 0.1));
  border-radius: 50%;
  width: var(--size, 10px);
  height: var(--size, 10px);
  animation: float var(--duration, 15s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}

@keyframes float {
  0%, 100% {
    transform: translate(var(--x-start, 0), var(--y-start, 0));
    opacity: 0.3;
  }
  50% {
    transform: translate(var(--x-end, 100px), var(--y-end, 100px));
    opacity: 0.6;
  }
}

/* Animation Classes */
.fade-in-logo {
  opacity: 0;
  animation: fadeIn 1s ease 0.5s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 3px solid #4FB9AF; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 1px; /* Adjust as needed */
  animation: 
    typing 2.5s steps(30, end),
    blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #4FB9AF; }
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards;
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

.grow-in {
  opacity: 0;
  transform: scaleX(0);
  animation: growIn 1s ease forwards;
}

@keyframes growIn {
  from {
    opacity: 0;
    transform: scaleX(0);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}

.bounce-in {
  opacity: 0;
  transform: scale(0.8);
  animation: bounceIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  60% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideInLeft 1s ease forwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  animation: slideInRight 1s ease forwards;
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

/* Hover animations */
.btn.primary {
  position: relative;
  overflow: hidden;
}

.btn.primary::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

.btn.primary:hover::after {
  animation: ripple 1s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  20% {
    transform: scale(25, 25);
    opacity: 0.3;
  }
  100% {
    transform: scale(50, 50);
    opacity: 0;
  }
}

/* Social icon hover animations */
.social-link {
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(79, 185, 175, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.social-link:hover::before {
  width: 100%;
  height: 100%;
}

.social-link i {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.social-link:hover i {
  transform: rotate(360deg) scale(1.1);
}

/* Pulsing effect for contact icons */
.contact-icon {
  animation: gentlePulse 3s ease-in-out infinite;
}

@keyframes gentlePulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
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
  animation: gentleFloat 6s ease-in-out infinite;
}

@keyframes gentleFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(5px) rotate(-1deg);
  }
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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
  animation: colorShift 5s ease-in-out infinite;
}

@keyframes colorShift {
  0%, 100% {
    color: #000;
  }
  50% {
    color: #4FB9AF;
  }
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
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
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
  transition: all 0.3s ease;
}

.contact-info p:hover {
  color: #000;
  transform: translateX(5px);
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
    white-space: normal;
    border-right: none;
    animation: none;
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
    margin-top: 40px;
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
  
  .typewriter {
    animation: none;
    border-right: none;
    white-space: normal;
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
    margin-top: 30px;
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
  
  .floating-particles {
    display: none; /* Hide particles on very small screens for performance */
  }
}
</style>



