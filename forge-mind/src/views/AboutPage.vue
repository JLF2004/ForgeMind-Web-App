<template>
  <div class="about-page">
    <NavigationBar />
    
    <!-- Main Content -->
    <main class="main-content">
      <!-- Our Story Section -->
      <section class="section">
        <h2 class="section-title fade-in">OUR STORY</h2>
        <h3 class="section-subtitle fade-in" :style="{ animationDelay: '0.2s' }">Forging a New Path in Mental Wellness</h3>
        
        <!-- Three Blocks Side by Side -->
        <div class="blocks-container">
          <div class="content-block ethos-block slide-in" :style="{ animationDelay: '0.3s' }">
            <h4 class="content-heading">THE FORGEMIND ETHOS</h4>
            <p class="content-text">
              Forgemind is a mental health fitness web application that helps users develop and maintain strong mental wellness through planned, daily "workouts" that includes journaling, social interaction/support, clarity, self-reflection, and optional access to certified therapists and/or experts, as well as resilience over time.
              It approaches mental health in the same manner as physical fitness, consistently, proactively, and with quantifiable results.
              Our target audience are students, athletes, young professionals who are overwhelmed, emotionally drained and/or lacking structure in their mental self-care.
            </p>
          </div>

          <div class="content-block purpose-block slide-in" :style="{ animationDelay: '0.5s' }">
            <h4 class="content-heading">PURPOSE IN MOTION</h4>
            <p class="content-text">
              Our mission is to close the gap between self-help and therapy by providing doable, habit-forming practices that treats mental health in the same manner that physical fitness is treated: CONSISTENTLY, QUANTIFIABLY, and STIGMA-FREE.
              Forgemind provides a self-guided, therapists-supported, daily mental fitness tools to help those build emotional resilience with people looking for proactive emotional support, particularly students, young professionals and athletes wanting better consistency and mental clarity.
              Mental health should not only be treated during emergencies but should be exercised like a muscle.
              Our objective is to create an engaging mental fitness routine model that users may follow every day or every week, like a gym plan.
              To lessen loneliness and encourage accountability, provide community-driven aspects like group workouts and peer support.
            </p>
          </div>

          <div class="content-block vision-block slide-in" :style="{ animationDelay: '0.7s' }">
            <h4 class="content-heading">THE VISION WE FORGING</h4>
            <p class="content-text">
              To empower a generation to treat mental health with the same consistency, pride, and intentionality as physical health.
              Creating a world where daily emotional care is as common as brushing your teeth.
              ForgeMind, a platform that thousands use to develop emotional strength in the same manner that they do physical strength, aspire to become the industry standard for mental fitness.
              ForgeMind aims to become the "mental gym" of digital age, where people go first to train their minds rather than merely solve their problems.
              Creates a reliable network of professionals, routines, and resources to help individuals grow emotionally at every stage of life.
              Normalize daily emotional workouts in the same way people normalize physical exercise, meditation, or productivity routines.
              The global impact the business aspires to achieve is to reframe the narrative, change how society views mental health from a clinical and reactive concept to one that is proactive and empowering.
              To provide access to mental health, make tools accessible, culturally aware, and stigma-free so that individuals may use them anywhere, at any time.
            </p>
          </div>
        </div>
      </section>

      <!-- Animated Divider -->
      <div class="divider grow-in" :style="{ animationDelay: '0.9s' }"></div>

      <!-- Values Section -->
      <section class="values-section">
        <h2 class="section-title fade-in" :style="{ animationDelay: '1s' }">OUR VALUES</h2>
        <div class="values-grid">
          <div class="value-item fade-in-up" :style="{ animationDelay: '1.1s' }">
            <h3 class="value-title">EMPATHY</h3>
            <p class="value-text">Behind every insight, every feature, and every decision is a person.
              Empathy guides our design and our mission.
              People first, always.</p>
            <div class="value-icon">❤️</div>
          </div>
          <div class="value-item fade-in-up" :style="{ animationDelay: '1.2s' }">
            <h3 class="value-title">PURPOSE</h3>
            <p class="value-text">Create to IMPACT, not to IMPRESS.
              Every element we design exists to shape minds, not just prettier.
              Exists to move minds forward.</p>
            <div class="value-icon">🎯</div>
          </div>
          <div class="value-item fade-in-up" :style="{ animationDelay: '1.3s' }">
            <h3 class="value-title">INTEGRITY</h3>
            <p class="value-text">What we say, build and believe aligns.
              We earn trust not through marketing, but by living our mission.
              Trust is our foundation.</p>
            <div class="value-icon">🤝</div>
          </div>
          <div class="value-item fade-in-up" :style="{ animationDelay: '1.4s' }">
            <h3 class="value-title">RESILIENCE</h3>
            <p class="value-text">Failure isn't the opposite of growth, it's part of the forge.
              We reflect, learn, and reforge stronger mindsets.
              We grow stronger with every setback.</p>
            <div class="value-icon">💪</div>
          </div>
          <div class="value-item fade-in-up" :style="{ animationDelay: '1.5s' }">
            <h3 class="value-title">CRAFT</h3>
            <p class="value-text">Thoughts are raw materials.
              We refine them with discipline, creativity, and resilience, turning sparks into steel.
              Every mind is shaped with care.</p>
            <div class="value-icon">🛠️</div>
          </div>
          <div class="value-item fade-in-up" :style="{ animationDelay: '1.6s' }">
            <h3 class="value-title">PROGRESS</h3>
            <p class="value-text">The future isn't a place we go, it's something we BUILD.
              We embrace change and evolve quickly.
              We build for it, today.</p>
            <div class="value-icon">🚀</div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer fade-in" :style="{ animationDelay: '1.8s' }">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Follow us on:</h4>
          <div class="social-icons">
            <a href="#" class="social-link bounce-in" aria-label="Instagram" :style="{ animationDelay: '2s' }">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-link bounce-in" aria-label="Facebook" :style="{ animationDelay: '2.1s' }">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-link bounce-in" aria-label="TikTok" :style="{ animationDelay: '2.2s' }">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div class="footer-section">
          <h4>Please contact us on:</h4>
          <div class="contact-info">
            <p class="contact-item slide-in-right" :style="{ animationDelay: '2.3s' }">
              <i class="fas fa-envelope contact-icon"></i>
              support@forgemind.com
            </p>
            <p class="contact-item slide-in-right" :style="{ animationDelay: '2.4s' }">
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
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<style scoped>
.about-page {
  position: relative;
  min-height: 100vh;
  background: url('../assets/images/Background.png') center/cover no-repeat, #fefefe;
  color: #2c3e50;
  overflow-x: hidden;
}

/* Add overlay for better text readability */
.about-page::before {
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

.slide-in {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideIn 0.8s ease forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

/* Hover Animations */
.content-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.value-item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 25px rgba(79, 185, 175, 0.3);
}

.value-item:hover .value-icon {
  transform: scale(1.2) rotate(5deg);
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
}

.section {
  margin-bottom: 60px;
}

.section-title {
  font-family: 'IM Fell English SC', serif;
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
}

.section-subtitle {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #555;
}

/* Three Blocks Side by Side */
.blocks-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.content-block {
  padding: 30px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  border-radius: 8px;
  opacity: 0; /* Will be animated in */
}

.ethos-block {
  background: #C5E8C8; /* Green for ETHOS */
}

.purpose-block {
  background: #FFD6B3; /* New color for PURPOSE IN MOTION */
}

.vision-block {
  background: #C5E8C8; /* Green for VISION */
}

.content-heading {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  transition: all 0.3s ease;
}

.content-text {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
  flex: 1;
}

/* Divider */
.divider {
  width: 100%;
  height: 2px;
  background: #000;
  margin: 60px 0;
  transform-origin: left center;
}

/* Values Section */
.values-section {
  margin-top: 60px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.value-item {
  background: #4FB9AF;
  padding: 30px;
  text-align: center;
  transition: all 0.4s ease;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  opacity: 0; /* Will be animated in */
}

.value-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.value-item:hover::before {
  left: 100%;
}

.value-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: #000;
  transition: all 0.3s ease;
}

.value-text {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #000;
  margin-bottom: 15px;
}

.value-icon {
  font-size: 2rem;
  margin-top: 10px;
  transition: all 0.4s ease;
  display: inline-block;
}

/* Footer */
.footer {
  background: #C5E8C8;
  padding: 40px 20px;
  border-top: 2px solid #000;
  position: relative;
  z-index: 1;
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

/* Responsive design */
@media (max-width: 1024px) {
  .blocks-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 40px 20px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  .contact-info {
    text-align: center;
  }

  .contact-item {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.2rem;
  }

  .content-block {
    padding: 20px;
  }
  
  .value-item {
    padding: 20px;
  }
  
  .social-link {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
}
</style>