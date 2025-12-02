<template>
  <div class="services-page">
    <NavigationBar />
    
    <!-- Main Content -->
    <main class="main-content">
      <!-- Services Intro -->
      <section class="services-intro">
        <h2 class="section-title fade-in">Our Mental Fitness Offerings</h2>
        <p class="intro-text fade-in" :style="{ animationDelay: '0.3s' }">Bridging the gap between self-help and therapy</p>
      </section>

      <!-- Services Sections -->
      <div class="services-container">
        <!-- Core Mental Workouts -->
        <section class="service-section slide-in-left" :style="{ animationDelay: '0.4s' }">
          <div class="service-content">
            <div class="service-icon">🧠</div>
            <h3 class="service-title">Core Mental Workouts</h3>
            <p class="service-description">
              Guided journaling, mood tracking, visualization, and goal-setting exercises. Perfect for building daily mental fitness habits
            </p>
            <button class="learn-more-btn" @click="openModal('core')">Learn More</button>
          </div>
        </section>

        <!-- Divider -->
        <div class="divider grow-in" :style="{ animationDelay: '0.6s' }"></div>

        <!-- Creative & Therapeutic Activities -->
        <section class="service-section slide-in-left" :style="{ animationDelay: '0.7s' }">
          <div class="service-content">
            <div class="service-icon">🎨</div>
            <h3 class="service-title">Creative & Therapeutic Activity Workouts</h3>
            <p class="service-description">
              Hands-on workshops like pottery, art therapy, gardening, and music sessions. Engage your senses and find flow through creative expression.
            </p>
            <button class="learn-more-btn" @click="openModal('creative')">Learn More</button>
          </div>
        </section>

        <!-- Divider -->
        <div class="divider grow-in" :style="{ animationDelay: '0.9s' }"></div>

        <!-- Therapist-Enhanced Workouts -->
        <section class="service-section slide-in-left" :style="{ animationDelay: '1s' }">
          <div class="service-content">
            <div class="service-icon">👩‍⚕️</div>
            <h3 class="service-title">Therapist-Enhanced Workouts</h3>
            <p class="service-description">
              Live 1-on-1 sessions, group therapy, and personalized plans with certified therapists. For those ready to deepen their practice.
            </p>
            <button class="learn-more-btn" @click="openModal('therapist')">Learn More</button>
          </div>
        </section>

        <!-- Divider -->
        <div class="divider grow-in" :style="{ animationDelay: '1.2s' }"></div>

        <!-- Social & Community Workouts -->
        <section class="service-section slide-in-left" :style="{ animationDelay: '1.3s' }">
          <div class="service-content">
            <div class="service-icon">👥</div>
            <h3 class="service-title">Social & Community Workouts</h3>
            <p class="service-description">
              Group reflections, shared journaling, and peer support circles. Build accountability and connection through community.
            </p>
            <button class="learn-more-btn" @click="openModal('social')">Learn More</button>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer fade-in" :style="{ animationDelay: '1.5s' }">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Follow us on:</h4>
          <div class="social-icons">
            <a href="#" class="social-link bounce-in" aria-label="Instagram" :style="{ animationDelay: '1.7s' }">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-link bounce-in" aria-label="Facebook" :style="{ animationDelay: '1.8s' }">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-link bounce-in" aria-label="TikTok" :style="{ animationDelay: '1.9s' }">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div class="footer-section">
          <h4>Please contact us on:</h4>
          <div class="contact-info">
            <p class="contact-item slide-in-right" :style="{ animationDelay: '2s' }">
              <i class="fas fa-envelope contact-icon"></i>
              support@forgemind.com
            </p>
            <p class="contact-item slide-in-right" :style="{ animationDelay: '2.1s' }">
              <i class="fas fa-phone contact-icon"></i>
              021 624 7739
            </p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Service Modals -->
    <!-- Core Mental Workouts Modal -->
    <div v-if="modalType === 'core'" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">🧠 Core Mental Workouts</h3>
          <button class="modal-close" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <p class="modal-text">
            <strong>Build daily mental fitness habits</strong> through structured exercises designed to strengthen your emotional resilience.
          </p>
          <div class="modal-features">
            <div class="feature-item">
              <span class="feature-icon">📝</span>
              <span>Guided Journaling & Reflection</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📊</span>
              <span>Mood & Progress Tracking</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🎯</span>
              <span>Goal Setting & Visualization</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">⏱️</span>
              <span>20-minute Daily Exercises</span>
            </div>
          </div>
          <div class="modal-quote">
            <p>"Consistent small steps lead to meaningful change."</p>
          </div>
          <p class="modal-instruction">
            Perfect for anyone looking to establish a regular mental fitness routine. No prior experience needed.
          </p>
        </div>
        <div class="modal-footer">
          <button class="modal-btn secondary" @click="closeModal">Continue Browsing</button>
          <button class="modal-btn primary" @click="beginJourney('core')">
            Begin My Journey
          </button>
        </div>
      </div>
    </div>

    <!-- Creative & Therapeutic Activities Modal -->
    <div v-if="modalType === 'creative'" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">🎨 Creative & Therapeutic Activities</h3>
          <button class="modal-close" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <p class="modal-text">
            <strong>Engage your senses</strong> through hands-on creative workshops that promote mindfulness, reduce stress, and unlock self-expression.
          </p>
          <div class="modal-features">
            <div class="feature-item">
              <span class="feature-icon">🏺</span>
              <span>Therapeutic Pottery & Clay Work</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🖌️</span>
              <span>Art Therapy & Painting Sessions</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🌱</span>
              <span>Mindful Gardening & Plant Care</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🎵</span>
              <span>Music & Sound Healing Workshops</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📓</span>
              <span>Creative Writing & Poetry Circles</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🧶</span>
              <span>Knitting & Fiber Arts for Mindfulness</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🕯️</span>
              <span>Candle Making & Scent Therapy</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🥘</span>
              <span>Therapeutic Cooking & Baking Classes</span>
            </div>
          </div>
          <div class="modal-quote">
            <p>"Creativity is intelligence having fun." - Albert Einstein</p>
          </div>
          <p class="modal-instruction">
            Perfect for those who learn by doing. No artistic skill required—just an open mind and willingness to explore.
          </p>
        </div>
        <div class="modal-footer">
          <button class="modal-btn secondary" @click="closeModal">Keep Exploring</button>
          <button class="modal-btn primary" @click="exploreWorkshops('creative')">
            Explore Workshops
          </button>
        </div>
      </div>
    </div>

    <!-- Therapist-Enhanced Workouts Modal -->
    <div v-if="modalType === 'therapist'" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">👩‍⚕️ Therapist-Enhanced Workouts</h3>
          <button class="modal-close" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <p class="modal-text">
            <strong>Deepen your practice</strong> with professional guidance from certified mental health experts.
          </p>
          <div class="modal-features">
            <div class="feature-item">
              <span class="feature-icon">👨‍⚕️</span>
              <span>Personal 1-on-1 Sessions</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">👥</span>
              <span>Supportive Group Therapy</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📋</span>
              <span>Customized Treatment Plans</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🛡️</span>
              <span>Confidential & Safe Space</span>
            </div>
          </div>
          <div class="modal-quote">
            <p>"Asking for help is a sign of strength, not weakness."</p>
          </div>
          <p class="modal-instruction">
            For those ready to explore deeper emotional work with professional support. All therapists are licensed and vetted.
          </p>
        </div>
        <div class="modal-footer">
          <button class="modal-btn secondary" @click="closeModal">Not Now</button>
          <button class="modal-btn primary" @click="connectForSupport('therapist')">
            Connect for Support
          </button>
        </div>
      </div>
    </div>

    <!-- Social & Community Workouts Modal -->
    <div v-if="modalType === 'social'" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">👥 Social & Community Workouts</h3>
          <button class="modal-close" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <p class="modal-text">
            <strong>Build connections</strong> through shared experiences and mutual support with others on similar journeys.
          </p>
          <div class="modal-features">
            <div class="feature-item">
              <span class="feature-icon">💬</span>
              <span>Group Reflection Circles</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📖</span>
              <span>Shared Journaling Experiences</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🤗</span>
              <span>Peer Support Networks</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🌟</span>
              <span>Accountability Partnerships</span>
            </div>
          </div>
          <div class="modal-quote">
            <p>"We grow stronger together."</p>
          </div>
          <p class="modal-instruction">
            Perfect for those seeking connection, accountability, and shared growth in their mental fitness journey.
          </p>
        </div>
        <div class="modal-footer">
          <button class="modal-btn secondary" @click="closeModal">Maybe Later</button>
          <button class="modal-btn primary" @click="joinCommunity('social')">
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

const modalType = ref(null)

const openModal = (type) => {
  modalType.value = type
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  modalType.value = null
  document.body.style.overflow = 'auto'
}

const beginJourney = (type) => {
  // For Core Mental Workouts
  alert("🌱 Let's begin your mental fitness journey! We'll guide you through setting up your first core workout routine.")
  closeModal()
  // In real app: router.push('/onboarding/core')
}

const exploreWorkshops = (type) => {
  // For Creative & Therapeutic Activities
  alert("🎨 Wonderful! You'll receive our monthly workshop calendar and can sign up for upcoming creative sessions that interest you.")
  closeModal()
  // In real app: router.push('/workshops')
}

const connectForSupport = (type) => {
  // For Therapist-Enhanced Workouts
  alert("🤝 Thank you for reaching out. A member of our team will contact you within 24 hours to discuss your needs and connect you with the right support.")
  closeModal()
  // In real app: router.push('/therapist-connect')
}

const joinCommunity = (type) => {
  // For Social & Community Workouts
  alert("👋 Welcome to our community! You'll receive an invitation to our next group session and access to our private community space.")
  closeModal()
  // In real app: router.push('/community-join')
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalType.value) {
    closeModal()
  }
})
</script>

<style scoped>
/* Updated color for Creative & Therapeutic Activities section */
.service-section:nth-child(3) {
  background: #E6F3FF; /* Light blue for Creative Activities */
}

/* Updated colors for other sections to maintain sequence */
.service-section:nth-child(1) {
  background: #C5E8C8; /* Green for Core Mental Workouts */
}

.service-section:nth-child(5) {
  background: #F6F6F6; /* Light gray for Therapist-Enhanced Workouts */
}

.service-section:nth-child(7) {
  background: #FFD6B3; /* Peach for Social & Community Workouts */
}

/* Add a specific color for the new section on hover effect */
.service-section:nth-child(3):hover .learn-more-btn {
  animation: gentlePulseBlue 3s infinite;
}

@keyframes gentlePulseBlue {
  0%, 100% {
    box-shadow: 0 4px 15px rgba(66, 133, 244, 0.3);
  }
  50% {
    box-shadow: 0 4px 20px rgba(66, 133, 244, 0.5);
  }
}

.service-section:nth-child(3) .learn-more-btn {
  background: #4285F4;
}

.service-section:nth-child(3) .learn-more-btn:hover {
  background: #3367D6;
  box-shadow: 0 8px 20px rgba(66, 133, 244, 0.4);
}

/* Rest of the existing styles remain the same */
.services-page {
  position: relative;
  min-height: 100vh;
  background: url('../assets/images/Background.png') center/cover no-repeat, #fefefe;
  color: #2c3e50;
  overflow-x: hidden;
}

/* Add overlay for better text readability */
.services-page::before {
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

.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideInLeft 0.8s ease forwards;
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

.slide-in-right {
  opacity: 0;
  transform: translateX(20px);
  animation: slideInRight 0.8s ease forwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse animation for service sections */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(79, 185, 175, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(79, 185, 175, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(79, 185, 175, 0);
  }
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
}

.services-intro {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-family: 'IM Fell English SC', serif;
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.intro-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  text-align: center;
  color: #555;
  margin: 0;
}

/* Services Container */
.services-container {
  max-width: 800px;
  margin: 0 auto;
}

.service-section {
  padding: 40px;
  border-radius: 15px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  opacity: 0; /* Will be animated in */
}

.service-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.service-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.service-section:hover::before {
  left: 100%;
}

.service-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: inline-block;
  transition: transform 0.3s ease;
}

.service-section:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.service-description {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #555;
}

.learn-more-btn {
  font-family: 'Playfair Display', serif;
  background: #4FB9AF;
  color: white;
  padding: 14px 35px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  animation: gentlePulse 3s infinite;
}

.learn-more-btn:hover {
  background: #3da89e;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 185, 175, 0.4);
}

.learn-more-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
  z-index: -1;
}

.learn-more-btn:hover::before {
  left: 100%;
}

@keyframes gentlePulse {
  0%, 100% {
    box-shadow: 0 4px 15px rgba(79, 185, 175, 0.3);
  }
  50% {
    box-shadow: 0 4px 20px rgba(79, 185, 175, 0.5);
  }
}

/* Divider */
.divider {
  width: 100%;
  height: 2px;
  background: #000;
  margin: 40px 0;
  transform-origin: left center;
}

/* Footer */
.footer {
  background: #C5E8C8;
  padding: 40px 20px;
  border-top: 2px solid #000;
  opacity: 0; /* Will be animated in */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
}

.footer-section {
  text-align: center;
}

.footer-section h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
}

.contact-info {
  font-family: 'Playfair Display', serif;
  text-align: left;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 10px 0;
  font-size: 1.1rem;
  opacity: 0; /* Will be animated in */
}

.contact-icon {
  color: #000;
  font-size: 1.2rem;
  width: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}

.contact-item:hover .contact-icon {
  transform: scale(1.2);
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
  opacity: 0; /* Will be animated in */
}

.social-link:hover {
  background: #333;
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeInOverlay 0.3s ease;
}

@keyframes fadeInOverlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-container {
  background: white;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUpModal 0.4s ease;
}

@keyframes slideUpModal {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  border-bottom: 2px solid #e0f2e1;
  background: linear-gradient(135deg, #f8fdf8, #e8f5e9);
  border-radius: 15px 15px 0 0;
}

.modal-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c5530;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #4a7c59;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.modal-close:hover {
  background: #e8f5e9;
  color: #2c5530;
  transform: rotate(90deg);
}

.modal-body {
  padding: 30px;
}

.modal-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #2c5530;
  margin-bottom: 25px;
  text-align: center;
  line-height: 1.6;
}

.modal-features {
  background: #f8fdf8;
  border-radius: 10px;
  padding: 20px;
  margin: 25px 0;
  border-left: 4px solid #4fb9af;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px 0;
  padding: 10px;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.feature-item:hover {
  background: #e8f5e9;
}

.feature-icon {
  font-size: 1.5rem;
  min-width: 40px;
  text-align: center;
}

.modal-quote {
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
  border-radius: 10px;
  border-left: 4px solid #4fb9af;
}

.modal-quote p {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: #2c5530;
  font-size: 1.1rem;
  margin: 0;
}

.modal-instruction {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: #4a7c59;
  font-style: italic;
  text-align: center;
  line-height: 1.6;
  padding: 20px;
  background: #f1f8e9;
  border-radius: 10px;
  border-left: 4px solid #4fb9af;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  padding: 25px 30px;
  border-top: 2px solid #e0f2e1;
  gap: 15px;
}

.modal-btn {
  flex: 1;
  padding: 15px 25px;
  border-radius: 10px;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.modal-btn.primary {
  background: #4fb9af;
  color: white;
}

.modal-btn.primary:hover {
  background: #3da89e;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(79, 185, 175, 0.4);
}

.modal-btn.secondary {
  background: transparent;
  color: #4fb9af;
  border: 2px solid #4fb9af;
}

.modal-btn.secondary:hover {
  background: #4fb9af;
  color: white;
  transform: translateY(-2px);
}

/* Responsive design */
@media (max-width: 768px) {
  .main-content {
    padding: 40px 20px;
  }

  .section-title {
    font-size: 2rem;
  }

  .intro-text {
    font-size: 1.2rem;
  }

  .service-title {
    font-size: 1.5rem;
  }

  .service-description {
    font-size: 1.1rem;
  }

  .service-section {
    padding: 30px 20px;
  }

  .footer-content {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  .contact-info {
    text-align: center;
  }

  .modal-footer {
    flex-direction: column;
  }

  .modal-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .service-section {
    padding: 25px 15px;
  }

  .service-icon {
    font-size: 2.5rem;
  }

  .modal-header {
    padding: 20px;
  }

  .modal-body {
    padding: 20px;
  }

  .modal-title {
    font-size: 1.3rem;
  }
}
</style>