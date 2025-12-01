<template>
  <div class="success-page">
    <div class="success-container">
      <!-- Success Icon with animation -->
      <div class="success-icon" :class="{ 'animated': iconAnimated }" @animationend="onIconAnimationEnd">
        <i class="fas fa-check-circle"></i>
      </div>
      
      <!-- Success Message with fade-in -->
      <h1 class="fade-in" :style="{ '--delay': '0.3s' }">Welcome to ForgeMind! 🎉</h1>
      <p class="success-message fade-in" :style="{ '--delay': '0.5s' }">Your account has been created successfully</p>
      
      <!-- Mental Health Quote (Dynamic) with typing animation -->
      <div class="quote-section fade-in" :style="{ '--delay': '0.7s' }">
        <p class="quote typing-animation">"{{ currentQuote.text }}"</p>
        <p class="quote-author fade-in" :style="{ '--delay': '2s' }">- {{ currentQuote.author }}</p>
      </div>

      <!-- Action Buttons with bounce animation -->
      <div class="action-buttons">
        <router-link 
          to="/about" 
          class="btn primary bounce-in"
          :style="{ '--delay': '1s' }"
        >
          Start Your Journey
        </router-link>
        <router-link 
          to="/" 
          class="btn secondary bounce-in"
          :style="{ '--delay': '1.2s' }"
        >
          Back to Home
        </router-link>
      </div>

      <!-- Floating particles for background effect -->
      <div class="floating-particles">
        <div class="particle" v-for="i in 15" :key="i" :style="getParticleStyle(i)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
    author: "Unknown"
  },
  {
    text: "It's okay to not be okay. It's okay to take a break. It's okay to ask for help.",
    author: "Unknown"
  },
  {
    text: "You are stronger than you think, more capable than you imagine, and worth more than you know.",
    author: "Unknown"
  },
  {
    text: "Every day may not be good, but there is something good in every day.",
    author: "Alice Morse Earle"
  },
  {
    text: "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
    author: "Noam Shpancer"
  },
  {
    text: "Self-care is how you take your power back.",
    author: "Lalah Delia"
  }
]

const currentQuote = ref({})
const iconAnimated = ref(false)

onMounted(() => {
  // Select a random quote when the component loads
  currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)]
  
  // Trigger icon animation after a short delay
  setTimeout(() => {
    iconAnimated.value = true
  }, 300)
})

const getParticleStyle = (index) => {
  const size = Math.random() * 20 + 5
  const duration = Math.random() * 15 + 10
  const delay = Math.random() * 5
  const color = `rgba(79, 185, 175, ${Math.random() * 0.3 + 0.1})`
  
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

const onIconAnimationEnd = () => {
  // You can add additional logic here if needed
  console.log('Icon animation completed')
}
</script>

<style scoped>
.success-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: url('../assets/images/Background.png') center/cover no-repeat, #fefefe;
  color: #2c3e50;
  font-family: 'Playfair Display', serif;
  overflow: hidden;
}

/* Add overlay for better text readability */
.success-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(254, 254, 254, 0.2);
  z-index: 0;
}

.success-container {
  text-align: center;
  max-width: 450px;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #f8fdff 0%, #e8f5e9 100%);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

/* Success Icon with animation */
.success-icon {
  font-size: 4rem;
  color: #4fb9af;
  margin-bottom: 20px;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.3s ease;
}

.success-icon.animated {
  animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,
             pulse 2s 0.6s infinite ease-in-out;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Fade-in animation */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 2rem;
}

.success-message {
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 30px;
}

/* Quote section with typing animation */
.quote-section {
  background: white;
  padding: 25px;
  border-radius: 8px;
  margin: 30px 0;
  border-left: 4px solid #4fb9af;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  min-height: 120px;
}

.quote {
  font-style: italic;
  color: #2c3e50;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 10px;
  overflow: hidden;
  white-space: normal;
  word-wrap: break-word;
}

.quote.typing-animation {
  opacity: 0;
  animation: typing 1.5s ease forwards;
  animation-delay: 0.7s;
}

@keyframes typing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.quote-author {
  color: #7f8c8d;
  font-weight: 500;
}

/* Action buttons with bounce animation */
.action-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
}

.btn {
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  display: block;
  width: fit-content;
  min-width: 200px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
}

.btn.bounce-in {
  animation: bounceIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateY(-10px) scale(1.05);
  }
  80% {
    transform: translateY(5px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.btn.primary {
  background-color: #4fb9af;
  color: white;
}

.btn.primary:hover {
  background-color: #3da89e;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 6px 20px rgba(79, 185, 175, 0.3);
}

.btn.secondary {
  background-color: transparent;
  color: #4fb9af;
  border: 2px solid #4fb9af;
}

.btn.secondary:hover {
  background-color: #4fb9af;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 185, 175, 0.3);
}

/* Floating particles background */
.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  background: var(--color, rgba(79, 185, 175, 0.2));
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
  25% {
    opacity: 0.7;
  }
  50% {
    transform: translate(var(--x-end, 100px), var(--y-end, 100px));
    opacity: 0.4;
  }
  75% {
    opacity: 0.6;
  }
}

/* Confetti effect on load */
@keyframes confettiRain {
  0% {
    opacity: 0;
    transform: translateY(-100px) rotate(0deg);
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(1000px) rotate(720deg);
  }
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .success-container {
    padding: 30px 20px;
    margin: 20px;
  }
  
  h1 {
    font-size: 1.7rem;
  }
  
  .success-icon {
    font-size: 3.5rem;
  }
  
  .action-buttons {
    width: 100%;
  }
  
  .btn {
    min-width: 180px;
    width: 100%;
    max-width: 250px;
  }
}
</style>