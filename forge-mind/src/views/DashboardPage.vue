<template>
  <div class="dashboard-page">
    <NavigationBar />
    
    <!-- Animated Background -->
    <div class="floating-particles">
      <div class="particle" v-for="i in 30" :key="i" :style="getParticleStyle(i)"></div>
    </div>
    
    <main class="dashboard-main">
      <!-- Welcome Section -->
      <section class="welcome-section fade-in">
        <div class="welcome-content">
          <h1>Welcome, {{ userName }}! 🌱</h1>
          <p class="welcome-subtitle">Ready for today's mental fitness workout?</p>
          
          <div class="daily-checkin slide-in-up" :style="{ animationDelay: '0.3s' }">
            <h3>How are you feeling today?</h3>
            <p class="checkin-subtitle">Check in with yourself - it's an important first step</p>
            
            <div class="mood-options">
              <button 
                v-for="mood in moods" 
                :key="mood.id" 
                class="mood-btn"
                :class="{ selected: selectedMood?.id === mood.id }"
                @click="selectMood(mood)"
              >
                <span class="mood-emoji">{{ mood.emoji }}</span>
                <span class="mood-label">{{ mood.label }}</span>
              </button>
            </div>
            
            <div v-if="selectedMood" class="mood-message fade-in">
              <p>{{ selectedMood.message }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Daily Workouts -->
      <section class="workouts-section fade-in" :style="{ animationDelay: '0.6s' }">
        <div class="section-header">
          <h2>Today's Mental Workouts</h2>
          <p class="section-subtitle">Choose what resonates with you today</p>
        </div>
        
        <div class="workouts-grid">
          <div 
            v-for="(workout, index) in dailyWorkouts" 
            :key="workout.id" 
            class="workout-card fade-in-up"
            :style="{ animationDelay: `${0.7 + (index * 0.1)}s` }"
          >
            <div class="workout-icon">{{ workout.emoji }}</div>
            <div class="workout-content">
              <div class="workout-header">
                <h3>{{ workout.title }}</h3>
                <span class="workout-duration">{{ workout.duration }}</span>
              </div>
              <p class="workout-description">{{ workout.description }}</p>
              <div class="workout-benefits">
                <span class="benefit-tag" v-for="benefit in workout.benefits" :key="benefit">{{ benefit }}</span>
              </div>
            </div>
            <button class="btn start-btn glow-hover" @click="startWorkout(workout)">
              <span class="btn-icon">🎯</span>
              Begin Practice
            </button>
          </div>
        </div>
      </section>

      <!-- Progress Tracking -->
      <section class="progress-section fade-in" :style="{ animationDelay: '1.1s' }">
        <div class="section-header">
          <h2>Your Progress Journey</h2>
          <p class="section-subtitle">Celebrate your commitment to mental fitness</p>
        </div>
        
        <div class="progress-stats">
          <div class="stat-card fade-in-up" :style="{ animationDelay: '1.2s' }">
            <div class="stat-icon">🔥</div>
            <div class="stat-content">
              <div class="stat-number">{{ streakDays }}</div>
              <div class="stat-label">Day Streak</div>
            </div>
            <p class="stat-message">You're building amazing consistency!</p>
          </div>
          
          <div class="stat-card fade-in-up" :style="{ animationDelay: '1.3s' }">
            <div class="stat-icon">✅</div>
            <div class="stat-content">
              <div class="stat-number">{{ completedWorkouts }}</div>
              <div class="stat-label">Workouts Completed</div>
            </div>
            <p class="stat-message">Every practice counts toward growth</p>
          </div>
          
          <div class="stat-card fade-in-up" :style="{ animationDelay: '1.4s' }">
            <div class="stat-icon">🧠</div>
            <div class="stat-content">
              <div class="stat-number">{{ mindfulnessMinutes }}</div>
              <div class="stat-label">Mindfulness Minutes</div>
            </div>
            <p class="stat-message">Cultivating presence and awareness</p>
          </div>
        </div>

        <div class="progress-visualization fade-in" :style="{ animationDelay: '1.5s' }">
          <h3>Weekly Activity</h3>
          <div class="week-chart">
            <div 
              v-for="day in weeklyActivity" 
              :key="day.day" 
              class="day-bar"
              :class="{ active: day.active }"
              :style="{ height: `${day.value}%` }"
            >
              <span class="day-label">{{ day.day }}</span>
              <span class="day-value">{{ day.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Journal Prompt -->
      <section class="journal-section fade-in" :style="{ animationDelay: '1.8s' }">
        <div class="journal-prompt">
          <div class="prompt-header">
            <h2>Daily Journal Prompt</h2>
            <span class="prompt-icon">💭</span>
          </div>
          <p class="prompt-content">"{{ dailyPrompt }}"</p>
          <div class="prompt-actions">
            <button class="btn journal-btn" @click="openJournal">
              <span class="btn-icon">📝</span>
              Write in Journal
            </button>
            <button class="btn skip-btn" @click="getNewPrompt">
              <span class="btn-icon">🔄</span>
              New Prompt
            </button>
          </div>
        </div>
      </section>

      <!-- Wellness Tip -->
      <section class="wellness-tip fade-in" :style="{ animationDelay: '2.1s' }">
        <div class="tip-content">
          <div class="tip-icon">🌿</div>
          <div class="tip-text">
            <h3>Today's Wellness Tip</h3>
            <p>Take a 2-minute "micro-break" every hour to stretch, breathe deeply, or simply look out a window. These small pauses can significantly reduce mental fatigue.</p>
          </div>
        </div>
      </section>

      <!-- Affirmation -->
      <section class="affirmation-section fade-in" :style="{ animationDelay: '2.4s' }">
        <div class="affirmation-content">
          <p class="affirmation">"Progress, not perfection. Every small step forward is a victory in your mental fitness journey."</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'

const router = useRouter()
const userName = ref("User") // Changed to ref

const selectedMood = ref(null)

const moods = [
  { 
    id: 1, 
    emoji: '😢', 
    label: 'Struggling',
    message: 'It\'s okay to not be okay. Take it slow today, and be gentle with yourself.'
  },
  { 
    id: 2, 
    emoji: '😐', 
    label: 'Neutral',
    message: 'Sometimes neutral is exactly where we need to be. Honor your current state.'
  },
  { 
    id: 3, 
    emoji: '😊', 
    label: 'Good',
    message: 'Wonderful! Celebrate this good feeling and carry it with you.'
  },
  { 
    id: 4, 
    emoji: '🤩', 
    label: 'Great',
    message: 'Amazing! Let this positive energy fuel your day.'
  },
  { 
    id: 5, 
    emoji: '😰', 
    label: 'Anxious',
    message: 'Anxiety is a messenger. Take some deep breaths and remember this moment will pass.'
  },
  { 
    id: 6, 
    emoji: '😴', 
    label: 'Tired',
    message: 'Rest is productive too. Listen to what your body needs today.'
  }
]

const dailyWorkouts = [
  {
    id: 1,
    emoji: '📝',
    title: 'Gratitude Journal',
    description: 'Reflect on three things you are grateful for today',
    duration: '5 min',
    benefits: ['Positivity', 'Mindfulness', 'Reflection']
  },
  {
    id: 2,
    emoji: '🌬️',
    title: 'Mindful Breathing',
    description: 'Focus on your breath and center your thoughts',
    duration: '3 min',
    benefits: ['Calm', 'Focus', 'Grounding']
  },
  {
    id: 3,
    emoji: '💭',
    title: 'Positive Affirmations',
    description: 'Repeat empowering statements to build confidence',
    duration: '4 min',
    benefits: ['Confidence', 'Self-worth', 'Empowerment']
  },
  {
    id: 4,
    emoji: '🧘',
    title: 'Body Awareness',
    description: 'Connect with your body and release tension',
    duration: '6 min',
    benefits: ['Relaxation', 'Body Connection', 'Stress Relief']
  }
]

const streakDays = ref(7)
const completedWorkouts = ref(23)
const mindfulnessMinutes = ref(145)

const dailyPrompt = ref("What's one small victory you had today, no matter how small?")

const weeklyActivity = [
  { day: 'M', value: 80, label: '8 min', active: false },
  { day: 'T', value: 60, label: '6 min', active: false },
  { day: 'W', value: 90, label: '9 min', active: false },
  { day: 'T', value: 70, label: '7 min', active: false },
  { day: 'F', value: 85, label: '8.5 min', active: false },
  { day: 'S', value: 50, label: '5 min', active: false },
  { day: 'S', value: 95, label: '9.5 min', active: true }
]

const getParticleStyle = (index) => {
  const size = Math.random() * 20 + 5
  const duration = Math.random() * 20 + 10
  const delay = Math.random() * 5
  const colors = ['rgba(79, 185, 175, 0.15)', 'rgba(139, 195, 74, 0.1)', 'rgba(79, 185, 175, 0.1)']
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

const selectMood = (mood) => {
  selectedMood.value = mood
  // Save mood selection to user profile
  localStorage.setItem('dailyMood', JSON.stringify({
    mood: mood,
    date: new Date().toDateString()
  }))
  
  // Show gentle notification
  console.log('Mood recorded:', mood.label)
}

const startWorkout = (workout) => {
  const messages = {
    1: "Let's begin your gratitude practice. Take a moment to find a comfortable space.",
    2: "Time to center yourself with mindful breathing. Find a quiet spot if you can.",
    3: "Ready to build confidence with positive affirmations. Speak kindly to yourself.",
    4: "Let's connect with your body and release tension. Get comfortable."
  }
  
  alert(`${messages[workout.id]}\n\nWe'll start your ${workout.title} now.`)
  
  // In real app: router.push(`/workout/${workout.id}`)
}

const openJournal = () => {
  router.push('/journal')
}

const getNewPrompt = () => {
  const prompts = [
    "What's one thing you'd like to let go of today?",
    "Describe a moment this week when you felt proud of yourself.",
    "What does 'self-care' mean to you right now?",
    "Write about something that made you smile recently.",
    "What's a small step you can take toward a goal today?",
    "How have you grown or changed in the last month?",
    "What's something you need to hear today?",
    "Describe your ideal peaceful moment."
  ]
  
  dailyPrompt.value = prompts[Math.floor(Math.random() * prompts.length)]
}

onMounted(() => {
  // Load user name from localStorage
  const userData = localStorage.getItem('forgeMindUser')
  if (userData) {
    try {
      const user = JSON.parse(userData)
      if (user.fullname) {
        userName.value = user.fullname
      } else if (user.email) {
        // Use email as fallback, or extract name from email
        userName.value = user.email.split('@')[0]
      }
    } catch (error) {
      console.error('Error parsing user data:', error)
    }
  }
  
  // Optional: Redirect to login if no user data found
  if (!userData) {
    // Uncomment if you want to protect the dashboard
    // router.push('/login')
  }
  
 // RESET mood selection on every login/signup
localStorage.removeItem('dailyMood')
selectedMood.value = null
})
</script>

<style scoped>
.dashboard-page {
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

.slide-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.8s ease forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
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

.dashboard-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
}

.welcome-section {
  text-align: center;
  margin-bottom: 60px;
}

.welcome-content h1 {
  font-family: 'IM Fell English SC', serif;
  color: #2c5530;
  font-size: 2.8rem;
  margin-bottom: 15px;
}

.welcome-subtitle {
  color: #4a7c59;
  font-size: 1.3rem;
  margin-bottom: 40px;
}

.daily-checkin {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  max-width: 800px;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.daily-checkin:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(79, 185, 175, 0.15);
}

.daily-checkin h3 {
  color: #2c5530;
  margin-bottom: 10px;
  font-size: 1.6rem;
}

.checkin-subtitle {
  color: #4a7c59;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.mood-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
}

.mood-btn {
  background: white;
  border: 2px solid #e0f2e1;
  padding: 20px 15px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.mood-btn:hover {
  border-color: #4fb9af;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(79, 185, 175, 0.1);
}

.mood-btn.selected {
  background: #4fb9af;
  border-color: #4fb9af;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(79, 185, 175, 0.2);
}

.mood-emoji {
  font-size: 2.5rem;
}

.mood-label {
  font-weight: 500;
  font-size: 1rem;
}

.mood-message {
  padding: 20px;
  background: #f1f8e9;
  border-radius: 15px;
  border-left: 4px solid #4fb9af;
  animation: slideInUp 5s ease;
}

.mood-message p {
  color: #2c5530;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.workouts-section {
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

.section-subtitle {
  color: #4a7c59;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.workouts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.workout-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.workout-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(79, 185, 175, 0.15);
}

.workout-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
}

.workout-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
  animation: gentleFloat 3s ease-in-out infinite;
}

@keyframes gentleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.workout-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.workout-header h3 {
  color: #2c5530;
  margin: 0;
  font-size: 1.4rem;
}

.workout-duration {
  background: #e8f5e9;
  color: #4a7c59;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
}

.workout-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
  flex: 1;
}

.workout-benefits {
  display: flex;
  gap: 8px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.benefit-tag {
  background: #f1f8e9;
  color: #4a7c59;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.start-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  border: none;
  padding: 14px 25px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.start-btn.glow-hover::before {
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

.start-btn.glow-hover:hover::before {
  opacity: 1;
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 185, 175, 0.3);
}

.start-btn.glow-hover:hover {
  box-shadow: 
    0 8px 20px rgba(79, 185, 175, 0.3),
    0 0 25px rgba(79, 185, 175, 0.5);
}

.btn-icon {
  font-size: 1.2rem;
}

.progress-section {
  margin-bottom: 60px;
}

.progress-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  text-align: center;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: inline-block;
}

.stat-content {
  margin-bottom: 15px;
}

.stat-number {
  font-size: 2.8rem;
  font-weight: bold;
  color: #4fb9af;
  line-height: 1;
  margin-bottom: 5px;
}

.stat-label {
  color: #4a7c59;
  font-size: 1rem;
  font-weight: 500;
}

.stat-message {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
  font-style: italic;
}

.progress-visualization {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
}

.progress-visualization h3 {
  color: #2c5530;
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.5rem;
}

.week-chart {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
  padding: 20px 0;
  border-bottom: 2px solid #e0f2e1;
}

.day-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 12%;
  position: relative;
  height: 200px; /* Add a fixed height for the container */
}

.day-bar.active .bar-fill {
  background: linear-gradient(to top, #4fb9af, #8bc34a);
  height: var(--bar-height, 60%); /* Use variable for dynamic height */
}

.bar-fill {
  width: 100%;
  height: 60%; /* Add a default height */
  min-height: 30px; /* Ensure minimum visibility */
  background: linear-gradient(to top, #c5e8c8, #a8d5ba);
  border-radius: 8px 8px 0 0;
  transition: height 0.5s ease, background 0.3s ease;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */
}

.day-label {
  color: #4a7c59;
  font-weight: 500;
  font-size: 0.9rem;
  position: absolute;
  bottom: -25px;
  white-space: nowrap; /* Prevent text wrapping */
}

.day-value {
  position: absolute;
  top: -25px;
  color: #2c5530;
  font-weight: 500;
  font-size: 0.8rem;
  opacity: 100; /* Start hidden */
  transition: opacity 0.3s ease;
  background: white;
  padding: 2px 6px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.day-bar:hover .day-value {
  opacity: 100; /* Show on hover */
}

/* Optional: Add hover effect to bars */
.day-bar:hover .bar-fill {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.journal-section {
  margin-bottom: 60px;
}

.journal-prompt {
  background: linear-gradient(135deg, rgba(79, 185, 175, 0.1), rgba(139, 195, 74, 0.1));
  padding: 40px;
  border-radius: 20px;
  border-left: 6px solid #4fb9af;
  text-align: center;
}

.prompt-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.prompt-header h2 {
  font-family: 'IM Fell English SC', serif;
  color: #2c5530;
  margin: 0;
  font-size: 1.8rem;
}

.prompt-icon {
  font-size: 2.5rem;
  animation: gentleFloat 3s ease-in-out infinite;
}

.prompt-content {
  font-size: 1.4rem;
  font-style: italic;
  color: #2c5530;
  margin-bottom: 35px;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.prompt-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.journal-btn, .skip-btn {
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.journal-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  border: none;
}

.journal-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 185, 175, 0.3);
}

.skip-btn {
  background: transparent;
  color: #4fb9af;
  border: 2px solid #4fb9af;
}

.skip-btn:hover {
  background: #4fb9af;
  color: white;
  transform: translateY(-2px);
}

.wellness-tip {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  margin-bottom: 40px;
}

.tip-content {
  display: flex;
  gap: 25px;
  align-items: flex-start;
}

.tip-icon {
  font-size: 3rem;
  flex-shrink: 0;
  animation: gentleFloat 3s ease-in-out infinite;
}

.tip-text h3 {
  color: #2c5530;
  margin-bottom: 10px;
  font-size: 1.4rem;
}

.tip-text p {
  color: #666;
  line-height: 1.6;
  margin: 0;
  font-size: 1.1rem;
}

.affirmation-section {
  text-align: center;
}

.affirmation-content {
  background: linear-gradient(135deg, rgba(79, 185, 175, 0.1), rgba(139, 195, 74, 0.1));
  padding: 40px;
  border-radius: 20px;
  border-left: 6px solid #4fb9af;
}

.affirmation {
  font-size: 1.5rem;
  font-style: italic;
  color: #2c5530;
  margin: 0;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .dashboard-main {
    padding: 20px 15px;
  }
  
  .welcome-content h1 {
    font-size: 2.2rem;
  }
  
  .mood-options {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .progress-stats {
    grid-template-columns: 1fr;
  }
  
  .workouts-grid {
    grid-template-columns: 1fr;
  }
  
  .tip-content {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
  .prompt-actions {
    flex-direction: column;
  }
  
  .journal-btn, .skip-btn {
    width: 100%;
    justify-content: center;
  }
  
  .week-chart {
    height: 150px;
  }
  
  .day-bar {
    width: 13%;
  }
}
</style>