<template>
  <div class="dashboard-page">
    <NavigationBar />
    
    <main class="dashboard-main">
      <!-- Welcome Section -->
      <section class="welcome-section">
        <h1>Welcome back, {{ userName }}! 👋</h1>
        <p>Ready for today's mental fitness workout?</p>
        <div class="daily-mood">
          <h3>How are you feeling today?</h3>
          <div class="mood-options">
            <button v-for="mood in moods" :key="mood.emoji" class="mood-btn" @click="selectMood(mood)">
              {{ mood.emoji }}
            </button>
          </div>
        </div>
      </section>

      <!-- Daily Workouts -->
      <section class="workouts-section">
        <h2>Today's Mental Workouts</h2>
        <div class="workouts-grid">
          <div class="workout-card" v-for="workout in dailyWorkouts" :key="workout.id">
            <div class="workout-icon">{{ workout.emoji }}</div>
            <h3>{{ workout.title }}</h3>
            <p>{{ workout.description }}</p>
            <button class="start-btn" @click="startWorkout(workout)">Start</button>
            <div class="workout-duration">{{ workout.duration }}</div>
          </div>
        </div>
      </section>

      <!-- Progress Tracking -->
      <section class="progress-section">
        <h2>Your Progress</h2>
        <div class="progress-stats">
          <div class="stat-card">
            <div class="stat-number">{{ streakDays }}</div>
            <div class="stat-label">Day Streak 🔥</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ completedWorkouts }}</div>
            <div class="stat-label">Workouts Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ mindfulnessMinutes }}</div>
            <div class="stat-label">Mindfulness Minutes</div>
          </div>
        </div>
      </section>

      <!-- Journal Prompt -->
      <section class="journal-section">
        <h2>Daily Journal Prompt</h2>
        <div class="journal-prompt">
          <p>"{{ dailyPrompt }}"</p>
          <button class="journal-btn" @click="openJournal">Write in Journal</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'

const router = useRouter()
const userName = "User" // This would come from user data

const moods = [
  { emoji: '😢', name: 'Struggling' },
  { emoji: '😐', name: 'Neutral' },
  { emoji: '😊', name: 'Good' },
  { emoji: '🤩', name: 'Great' }
]

const dailyWorkouts = [
  {
    id: 1,
    emoji: '📝',
    title: 'Gratitude Journal',
    description: 'Reflect on three things you are grateful for today',
    duration: '5 min'
  },
  {
    id: 2,
    emoji: '🎯',
    title: 'Mindful Breathing',
    description: 'Focus on your breath and center your thoughts',
    duration: '3 min'
  },
  {
    id: 3,
    emoji: '💭',
    title: 'Positive Affirmations',
    description: 'Repeat empowering statements to build confidence',
    duration: '4 min'
  }
]

const streakDays = ref(7)
const completedWorkouts = ref(23)
const mindfulnessMinutes = ref(145)

const dailyPrompt = ref("What's one small victory you had today, no matter how small?")

const selectMood = (mood) => {
  console.log('Selected mood:', mood.name)
  // Save mood selection to user profile
}

const startWorkout = (workout) => {
  router.push(`/workout/${workout.id}`)
}

const openJournal = () => {
  router.push('/journal')
}
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fdf8 0%, #e8f5e9 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.dashboard-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.welcome-section {
  text-align: center;
  margin-bottom: 50px;
}

.welcome-section h1 {
  color: #2c5530;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.welcome-section p {
  color: #4a7c59;
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.daily-mood {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  max-width: 500px;
  margin: 0 auto;
}

.mood-options {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.mood-btn {
  font-size: 2rem;
  background: none;
  border: 2px solid #e0f2e1;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mood-btn:hover {
  border-color: #4fb9af;
  transform: scale(1.1);
}

.workouts-section {
  margin-bottom: 50px;
}

.workouts-section h2 {
  color: #2c5530;
  margin-bottom: 30px;
  text-align: center;
}

.workouts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.workout-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  text-align: center;
  position: relative;
  border: 2px solid #e0f2e1;
}

.workout-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.workout-card h3 {
  color: #2c5530;
  margin-bottom: 10px;
}

.workout-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.start-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(79, 185, 175, 0.3);
}

.workout-duration {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #e8f5e9;
  color: #4a7c59;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.progress-section {
  margin-bottom: 50px;
}

.progress-section h2 {
  color: #2c5530;
  margin-bottom: 30px;
  text-align: center;
}

.progress-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  text-align: center;
  border: 2px solid #e0f2e1;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #4fb9af;
  margin-bottom: 10px;
}

.stat-label {
  color: #4a7c59;
  font-weight: 500;
}

.journal-section {
  text-align: center;
}

.journal-section h2 {
  color: #2c5530;
  margin-bottom: 20px;
}

.journal-prompt {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  max-width: 600px;
  margin: 0 auto;
}

.journal-prompt p {
  font-size: 1.3rem;
  font-style: italic;
  color: #2c5530;
  margin-bottom: 25px;
  line-height: 1.6;
}

.journal-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.journal-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(79, 185, 175, 0.3);
}

@media (max-width: 768px) {
  .dashboard-main {
    padding: 20px 15px;
  }
  
  .welcome-section h1 {
    font-size: 2rem;
  }
  
  .mood-options {
    gap: 10px;
  }
  
  .mood-btn {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
}
</style>