<template>
  <div class="resources-page">
    <NavigationBar />
    
    <!-- Animated Background -->
    <div class="floating-particles">
      <div class="particle" v-for="i in 25" :key="i" :style="getParticleStyle(i)"></div>
    </div>
    
    <main class="resources-main">
      <div class="resources-container">
        <!-- Header -->
        <div class="resources-header fade-in">
          <h1>Mental Health Resources 🌱</h1>
          <p>Tools, guides, and support for your wellness journey</p>
        </div>

        <!-- Emergency Help -->
        <section class="emergency-section fade-in-up" :style="{ animationDelay: '0.3s' }">
          <div class="emergency-card">
            <div class="emergency-icon pulse">🆘</div>
            <div class="emergency-content">
              <h2>Immediate Support</h2>
              <p>If you're in crisis or need immediate help, these resources are available 24/7:</p>
              <div class="crisis-contacts">
                <div class="contact-item fade-in-right" :style="{ animationDelay: '0.4s' }">
                  <span class="contact-icon">📞</span>
                  <strong>Mental Health Crisis Line:</strong> 0800 123 456
                </div>
                <div class="contact-item fade-in-right" :style="{ animationDelay: '0.5s' }">
                  <span class="contact-icon">🤝</span>
                  <strong>Suicide Prevention:</strong> 0800 567 567
                </div>
                <div class="contact-item fade-in-right" :style="{ animationDelay: '0.6s' }">
                  <span class="contact-icon">🚑</span>
                  <strong>Emergency Services:</strong> 111
                </div>
              </div>
              <p class="emergency-note fade-in" :style="{ animationDelay: '0.7s' }">
                <strong>Remember:</strong> Reaching out for help is a sign of strength.
              </p>
            </div>
          </div>
        </section>

        <!-- Resource Categories -->
        <section class="categories-section fade-in" :style="{ animationDelay: '0.8s' }">
          <h2>Wellness Resources</h2>
          <p class="section-subtitle">Explore tools and techniques for your mental fitness journey</p>
          <div class="categories-grid">
            <div v-for="(category, index) in resourceCategories" :key="category.id" 
                 class="category-card fade-in-up" :style="{ animationDelay: `${0.9 + (index * 0.1)}s` }">
              <div class="category-icon">{{ category.emoji }}</div>
              <h3>{{ category.title }}</h3>
              <p>{{ category.description }}</p>
              <ul class="resource-list">
                <li v-for="resource in category.resources" :key="resource">
                  <span class="resource-icon">✓</span>
                  {{ resource }}
                </li>
              </ul>
              <button class="btn explore-btn" @click="exploreCategory(category)">
                Explore Resources
              </button>
            </div>
          </div>
        </section>

        <!-- Guided Practices -->
        <section class="practices-section fade-in" :style="{ animationDelay: '1.3s' }">
          <div class="section-header">
            <h2>Guided Practices</h2>
            <p>Short exercises to center yourself and build resilience</p>
          </div>
          <div class="practices-grid">
            <div v-for="(practice, index) in guidedPractices" :key="practice.id" 
                 class="practice-card slide-in-up" :style="{ animationDelay: `${1.4 + (index * 0.1)}s` }">
              <div class="practice-header">
                <span class="practice-emoji">{{ practice.emoji }}</span>
                <span class="practice-duration">{{ practice.duration }}</span>
              </div>
              <h3>{{ practice.title }}</h3>
              <p>{{ practice.description }}</p>
              <div class="practice-benefits">
                <span class="benefit-tag">Calming</span>
                <span class="benefit-tag">Mindful</span>
                <span class="benefit-tag">Beginner-friendly</span>
              </div>
              <button class="btn practice-btn glow-hover" @click="startPractice(practice)">
                Begin Practice
              </button>
            </div>
          </div>
        </section>

        <!-- Recommended Reading -->
        <section class="reading-section fade-in" :style="{ animationDelay: '1.8s' }">
          <div class="section-header">
            <h2>Recommended Reading</h2>
            <p>Books that can support your mental health journey</p>
          </div>
          <div class="books-grid">
            <div v-for="(book, index) in recommendedBooks" :key="book.id" 
                 class="book-card slide-in-right" :style="{ animationDelay: `${1.9 + (index * 0.1)}s` }">
              <div class="book-cover">{{ book.emoji }}</div>
              <div class="book-content">
                <h3>{{ book.title }}</h3>
                <p class="book-author">by {{ book.author }}</p>
                <p class="book-description">{{ book.description }}</p>
                <div class="book-tags">
                  <span class="tag" v-for="tag in book.tags" :key="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Wellness Tip -->
        <section class="wellness-tip fade-in" :style="{ animationDelay: '2.3s' }">
          <div class="tip-content">
            <span class="tip-icon">💡</span>
            <p><strong>Daily Wellness Tip:</strong> Take three deep breaths before starting any new task today. This simple practice can help center your mind and reduce stress.</p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'

const router = useRouter()

const resourceCategories = ref([
  {
    id: 1,
    emoji: '😴',
    title: 'Sleep & Relaxation',
    description: 'Improve your sleep quality and relaxation techniques',
    resources: [
      'Sleep meditation guides',
      'Bedtime routine templates',
      'Relaxation exercises',
      'Sleep hygiene tips'
    ]
  },
  {
    id: 2,
    emoji: '💪',
    title: 'Stress Management',
    description: 'Tools to manage and reduce stress effectively',
    resources: [
      'Stress tracking worksheets',
      'Coping strategy guides',
      'Breathing techniques',
      'Mindfulness exercises'
    ]
  },
  {
    id: 3,
    emoji: '🎯',
    title: 'Goal Setting',
    description: 'Set and achieve meaningful personal goals',
    resources: [
      'SMART goal templates',
      'Progress trackers',
      'Motivation techniques',
      'Accountability systems'
    ]
  },
  {
    id: 4,
    emoji: '🤝',
    title: 'Social Connection',
    description: 'Build and maintain healthy relationships',
    resources: [
      'Communication guides',
      'Boundary setting worksheets',
      'Social anxiety tools',
      'Community resources'
    ]
  }
])

const guidedPractices = ref([
  {
    id: 1,
    emoji: '🌬️',
    title: 'Box Breathing',
    duration: '5 min',
    description: 'A simple breathing technique to calm your nervous system'
  },
  {
    id: 2,
    emoji: '🧘',
    title: 'Body Scan Meditation',
    duration: '10 min',
    description: 'Progressive relaxation through body awareness'
  },
  {
    id: 3,
    emoji: '📝',
    title: 'Gratitude Practice',
    duration: '7 min',
    description: 'Cultivate positivity through gratitude reflection'
  },
  {
    id: 4,
    emoji: '💭',
    title: 'Loving-Kindness',
    duration: '8 min',
    description: 'Develop compassion for yourself and others'
  }
])

const recommendedBooks = ref([
  {
    id: 1,
    emoji: '📚',
    title: 'The Mindful Way Through Depression',
    author: 'Mark Williams et al.',
    description: 'Learn mindfulness-based cognitive therapy techniques to navigate difficult emotions',
    tags: ['Mindfulness', 'CBT', 'Self-Help']
  },
  {
    id: 2,
    emoji: '📖',
    title: 'The Happiness Trap',
    author: 'Russ Harris',
    description: 'How to stop struggling and start living with Acceptance and Commitment Therapy',
    tags: ['ACT', 'Psychology', 'Resilience']
  },
  {
    id: 3,
    emoji: '📘',
    title: 'Daring Greatly',
    author: 'Brené Brown',
    description: 'Embrace vulnerability and build resilience in your personal and professional life',
    tags: ['Vulnerability', 'Courage', 'Growth']
  },
  {
    id: 4,
    emoji: '📗',
    title: 'The Body Keeps the Score',
    author: 'Bessel van der Kolk',
    description: 'Understanding trauma and pathways to healing through body awareness',
    tags: ['Trauma', 'Healing', 'Neuroscience']
  }
])

const getParticleStyle = (index) => {
  const size = Math.random() * 15 + 5
  const duration = Math.random() * 15 + 10
  const delay = Math.random() * 5
  const color = `rgba(79, 185, 175, ${Math.random() * 0.15 + 0.05})`
  
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

const exploreCategory = (category) => {
  alert(`Exploring ${category.title} resources...\n\nThis would open detailed resources for ${category.title.toLowerCase()} in a real application.`)
}

const startPractice = (practice) => {
  alert(`Starting ${practice.title}...\n\nTake a moment to find a comfortable position. We'll guide you through this ${practice.duration} practice.`)
}
</script>

<style scoped>
.resources-page {
  position: relative;
  min-height: 100vh;
  background: url('../assets/images/Background.png') center/cover no-repeat, #fefefe;
  font-family: 'Playfair Display', serif;
  overflow-x: hidden;
}

/* Animated Background */
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
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

.fade-in-right {
  opacity: 0;
  transform: translateX(30px);
  animation: fadeInRight 0.8s ease forwards;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-up {
  opacity: 0;
  transform: translateY(50px);
  animation: slideInUp 0.8s ease forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
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

.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.resources-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
}

.resources-header {
  text-align: center;
  margin-bottom: 50px;
}

.resources-header h1 {
  font-family: 'IM Fell English SC', serif;
  color: #2c5530;
  font-size: 2.8rem;
  margin-bottom: 15px;
}

.resources-header p {
  color: #4a7c59;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.emergency-section {
  margin-bottom: 60px;
}

.emergency-card {
  background: linear-gradient(135deg, rgba(255, 235, 238, 0.9), rgba(255, 205, 210, 0.9));
  border: 3px solid #f44336;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.emergency-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f44336' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.3;
}

.emergency-icon {
  font-size: 5rem;
  flex-shrink: 0;
}

.emergency-content {
  flex: 1;
}

.emergency-content h2 {
  color: #c62828;
  margin-bottom: 15px;
  font-family: 'IM Fell English SC', serif;
  font-size: 2rem;
}

.emergency-content p {
  color: #333;
  margin-bottom: 25px;
  line-height: 1.6;
}

.crisis-contacts {
  margin: 25px 0;
}

.contact-item {
  margin-bottom: 15px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  border-left: 4px solid #f44336;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(10px);
  background: rgba(255, 255, 255, 1);
}

.contact-icon {
  font-size: 1.5rem;
}

.emergency-note {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  border-left: 4px solid #4fb9af;
  color: #2c5530;
}

.categories-section {
  margin-bottom: 60px;
}

.categories-section h2 {
  font-family: 'IM Fell English SC', serif;
  color: #2c5530;
  margin-bottom: 10px;
  text-align: center;
  font-size: 2.2rem;
}

.section-subtitle {
  color: #4a7c59;
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 40px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.category-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(79, 185, 175, 0.15);
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
}

.category-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
  display: inline-block;
  animation: gentleFloat 3s ease-in-out infinite;
}

@keyframes gentleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.category-card h3 {
  color: #2c5530;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.category-card p {
  color: #666;
  margin-bottom: 25px;
  line-height: 1.5;
}

.resource-list {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
}

.resource-list li {
  padding: 10px 0;
  border-bottom: 1px solid #e0f2e1;
  color: #4a7c59;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease;
}

.resource-list li:hover {
  transform: translateX(5px);
  color: #2c5530;
}

.resource-list li:last-child {
  border-bottom: none;
}

.resource-icon {
  color: #4fb9af;
  font-weight: bold;
}

.explore-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.explore-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 185, 175, 0.3);
}

.practices-section,
.reading-section {
  margin-bottom: 60px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-family: 'IM Fell English SC', serif;
  color: #2c5530;
  margin-bottom: 10px;
  font-size: 2.2rem;
}

.section-header p {
  color: #4a7c59;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.practices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.practice-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.practice-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(79, 185, 175, 0.15);
}

.practice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.practice-emoji {
  font-size: 2.5rem;
  animation: gentleFloat 3s ease-in-out infinite;
}

.practice-duration {
  background: #e8f5e9;
  color: #4a7c59;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.practice-card h3 {
  color: #2c5530;
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.practice-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.practice-benefits {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.benefit-tag {
  background: #f1f8e9;
  color: #4a7c59;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.practice-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.practice-btn.glow-hover::before {
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

.practice-btn.glow-hover:hover::before {
  opacity: 1;
}

.practice-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 185, 175, 0.3);
}

.practice-btn.glow-hover:hover {
  box-shadow: 
    0 8px 20px rgba(79, 185, 175, 0.3),
    0 0 25px rgba(79, 185, 175, 0.5);
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.book-card {
  background: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(79, 185, 175, 0.15);
}

.book-cover {
  font-size: 4rem;
  flex-shrink: 0;
  animation: gentleFloat 3s ease-in-out infinite;
}

.book-content {
  flex: 1;
}

.book-card h3 {
  color: #2c5530;
  margin-bottom: 10px;
  line-height: 1.3;
  font-size: 1.3rem;
}

.book-author {
  color: #4a7c59;
  font-style: italic;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.book-description {
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
  font-size: 0.95rem;
}

.book-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: #e8f5e9;
  color: #4a7c59;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.wellness-tip {
  background: linear-gradient(135deg, rgba(79, 185, 175, 0.1), rgba(139, 195, 74, 0.1));
  padding: 25px;
  border-radius: 15px;
  border-left: 4px solid #4fb9af;
  margin-top: 40px;
}

.tip-content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.tip-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  animation: gentleFloat 3s ease-in-out infinite;
}

.tip-content p {
  color: #2c5530;
  line-height: 1.6;
  margin: 0;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .resources-main {
    padding: 20px 15px;
  }
  
  .resources-header h1 {
    font-size: 2.2rem;
  }
  
  .emergency-card {
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 25px;
  }
  
  .emergency-icon {
    font-size: 4rem;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  
  .categories-grid,
  .practices-grid,
  .books-grid {
    grid-template-columns: 1fr;
  }
  
  .book-card {
    flex-direction: column;
    text-align: center;
  }
  
  .tip-content {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
}
</style>