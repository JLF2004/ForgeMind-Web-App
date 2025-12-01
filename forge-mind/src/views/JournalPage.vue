<template>
  <div class="journal-page">
    <NavigationBar />
    
    <!-- Animated Background -->
    <div class="floating-particles">
      <div class="particle" v-for="i in 20" :key="i" :style="getParticleStyle(i)"></div>
    </div>
    
    <main class="journal-main">
      <div class="journal-container">
        <!-- Journal Header -->
        <div class="journal-header fade-in">
          <h1>My Personal Journal 📖</h1>
          <p>Your private space for thoughts, reflections, and personal growth</p>
          <div class="journal-stats slide-in-up" :style="{ animationDelay: '0.3s' }">
            <div class="stat">
              <span class="stat-number">{{ journalEntries.length }}</span>
              <span class="stat-label">Total Entries</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ getStreakDays() }}</span>
              <span class="stat-label">Day Streak 🔥</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ getTotalWords() }}</span>
              <span class="stat-label">Words Written</span>
            </div>
          </div>
        </div>

        <!-- New Entry -->
        <div class="new-entry-section slide-in-up" :style="{ animationDelay: '0.5s' }">
          <div class="section-header">
            <h2>New Journal Entry</h2>
            <p class="section-subtitle">Write freely, without judgment. This is your safe space.</p>
          </div>
          <div class="entry-form">
            <div class="form-group">
              <input 
                type="text" 
                v-model="newEntry.title" 
                placeholder="Entry title (optional)" 
                class="title-input"
                @focus="showWritingTips = true"
              >
              <div v-if="showWritingTips" class="writing-tips fade-in">
                <h4>Writing Tips 💭</h4>
                <ul>
                  <li>Start with "Today I feel..."</li>
                  <li>Write as if you're talking to a trusted friend</li>
                  <li>Focus on feelings, not just events</li>
                  <li>End with something you're grateful for</li>
                </ul>
              </div>
            </div>
            
            <div class="form-group">
              <textarea 
                v-model="newEntry.content" 
                placeholder="What's on your mind today? Write freely... This is a judgment-free space."
                class="content-textarea"
                @input="updateWordCount"
              ></textarea>
              <div class="textarea-footer">
                <div class="word-count">{{ wordCount }} {{ wordCount === 1 ? 'word' : 'words' }}</div>
                <div class="writing-prompts">
                  <button class="prompt-btn" @click="getPrompt">
                    <span class="prompt-icon">💡</span>
                    Need inspiration?
                  </button>
                </div>
              </div>
            </div>
            
            <div class="entry-actions">
              <button class="btn mood-btn" @click="showMoodSelector = !showMoodSelector">
                <span class="mood-icon">{{ selectedMood.emoji }}</span>
                Add Mood
              </button>
              <div v-if="showMoodSelector" class="mood-selector fade-in">
                <button 
                  v-for="mood in moods" 
                  :key="mood.id"
                  class="mood-option"
                  :class="{ selected: selectedMood.id === mood.id }"
                  @click="selectMood(mood)"
                >
                  {{ mood.emoji }}
                </button>
              </div>
            </div>
            
            <button class="btn save-btn glow-hover" @click="saveEntry" :disabled="!newEntry.content">
              <span class="btn-icon">💾</span>
              Save Journal Entry
            </button>
          </div>
        </div>

        <!-- Past Entries -->
        <div class="past-entries-section fade-in" :style="{ animationDelay: '0.8s' }">
          <div class="section-header">
            <h2>Your Journal History</h2>
            <p class="section-subtitle">Reflect on your journey and growth</p>
          </div>
          
          <div v-if="journalEntries.length === 0" class="empty-state fade-in">
            <div class="empty-icon">📝</div>
            <h3>Your journal is empty</h3>
            <p>Start your writing journey today. Your first entry is waiting to be written.</p>
            <button class="btn start-btn" @click="getPrompt">
              Write Your First Entry
            </button>
          </div>

          <div class="entries-list">
            <div v-for="(entry, index) in journalEntries" 
                 :key="entry.id" 
                 class="entry-card fade-in-up"
                 :style="{ animationDelay: `${0.9 + (index * 0.1)}s` }">
              <div class="entry-header">
                <div class="entry-meta">
                  <h3>{{ entry.title || 'Untitled Reflection' }}</h3>
                  <span class="entry-date">{{ formatDate(entry.date) }}</span>
                </div>
                <div class="entry-mood" v-if="entry.mood">
                  <span class="mood-display">{{ entry.mood.emoji }}</span>
                  <span class="mood-label">{{ entry.mood.label }}</span>
                </div>
              </div>
              
              <div class="entry-preview">
                <p>{{ entry.content.substring(0, 200) }}...</p>
              </div>
              
              <div class="entry-footer">
                <div class="entry-stats">
                  <span class="stat">{{ entry.content.split(' ').length }} words</span>
                  <span class="stat">{{ formatTime(entry.date) }}</span>
                </div>
                <div class="entry-actions">
                  <button class="btn read-btn" @click="viewEntry(entry)">
                    <span class="btn-icon">👁️</span>
                    Read
                  </button>
                  <button class="btn reflect-btn" @click="reflectOnEntry(entry)">
                    <span class="btn-icon">💭</span>
                    Reflect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Journal Benefits -->
        <div class="benefits-section fade-in" :style="{ animationDelay: '2s' }">
          <div class="benefits-card">
            <h3>Why Journaling Helps 🌿</h3>
            <div class="benefits-grid">
              <div class="benefit">
                <span class="benefit-icon">🧠</span>
                <h4>Clarity & Insight</h4>
                <p>Gain perspective on your thoughts and emotions</p>
              </div>
              <div class="benefit">
                <span class="benefit-icon">💪</span>
                <h4>Stress Relief</h4>
                <p>Release worries and reduce anxiety through writing</p>
              </div>
              <div class="benefit">
                <span class="benefit-icon">🎯</span>
                <h4>Goal Setting</h4>
                <p>Track progress and celebrate achievements</p>
              </div>
              <div class="benefit">
                <span class="benefit-icon">🌟</span>
                <h4>Self-Discovery</h4>
                <p>Learn more about yourself and your patterns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

const newEntry = ref({
  title: '',
  content: '',
  mood: null
})

const showWritingTips = ref(false)
const showMoodSelector = ref(false)
const wordCount = ref(0)

const moods = [
  { id: 1, emoji: '😢', label: 'Sad', color: '#2196F3' },
  { id: 2, emoji: '😐', label: 'Neutral', color: '#9E9E9E' },
  { id: 3, emoji: '😊', label: 'Happy', color: '#FFC107' },
  { id: 4, emoji: '🤩', label: 'Excited', color: '#E91E63' },
  { id: 5, emoji: '😰', label: 'Anxious', color: '#FF5722' },
  { id: 6, emoji: '😴', label: 'Tired', color: '#673AB7' },
  { id: 7, emoji: '😌', label: 'Peaceful', color: '#4CAF50' },
  { id: 8, emoji: '🤔', label: 'Thoughtful', color: '#607D8B' }
]

const selectedMood = ref(moods[1])

const journalEntries = ref([])

const writingPrompts = [
  "What are three things that brought you joy today?",
  "What challenge did you overcome recently? How did it make you feel?",
  "What would you tell your younger self about resilience and growth?",
  "What are you looking forward to this week? What excites you?",
  "What's something you've learned about yourself lately that surprised you?",
  "Describe a moment when you felt truly peaceful. What made it special?",
  "What does self-care mean to you right now? How can you practice it more?",
  "What's one boundary you want to set or strengthen? Why is it important?",
  "Write about a recent accomplishment, no matter how small. How did it feel?",
  "What emotions have been present for you this week? Where do you feel them in your body?"
]

const getParticleStyle = (index) => {
  const size = Math.random() * 15 + 5
  const duration = Math.random() * 15 + 10
  const delay = Math.random() * 5
  const color = `rgba(79, 185, 175, ${Math.random() * 0.1 + 0.05})`
  
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

const updateWordCount = () => {
  const words = newEntry.value.content.trim().split(/\s+/).filter(word => word.length > 0)
  wordCount.value = newEntry.value.content.trim() ? words.length : 0
}

const getStreakDays = () => {
  // Simple streak calculation - in a real app, this would check consecutive days
  const entriesThisWeek = journalEntries.value.filter(entry => {
    const entryDate = new Date(entry.date)
    const today = new Date()
    const diffTime = Math.abs(today - entryDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 7
  })
  return entriesThisWeek.length > 0 ? entriesThisWeek.length : 0
}

const getTotalWords = () => {
  return journalEntries.value.reduce((total, entry) => {
    return total + (entry.content.split(' ').length || 0)
  }, 0)
}

const saveEntry = () => {
  if (!newEntry.value.content.trim()) return
  
  const entry = {
    id: Date.now(),
    title: newEntry.value.title,
    content: newEntry.value.content,
    mood: selectedMood.value,
    date: new Date()
  }
  
  journalEntries.value.unshift(entry)
  
  // Save to localStorage
  localStorage.setItem('journalEntries', JSON.stringify(journalEntries.value))
  
  // Reset form
  newEntry.value = { title: '', content: '', mood: null }
  selectedMood.value = moods[1]
  wordCount.value = 0
  showWritingTips.value = false
  
  // Show success message
  alert('Journal entry saved successfully! 🌱\n\nYour thoughts are safe here. Remember, regular journaling builds self-awareness and resilience.')
}

const getPrompt = () => {
  const randomPrompt = writingPrompts[Math.floor(Math.random() * writingPrompts.length)]
  newEntry.value.content = randomPrompt + '\n\n'
  updateWordCount()
  showWritingTips.value = true
}

const selectMood = (mood) => {
  selectedMood.value = mood
  showMoodSelector.value = false
}

const viewEntry = (entry) => {
  // In a real app, this would open a modal or navigate to entry detail
  const moodText = entry.mood ? `\n\nMood: ${entry.mood.emoji} ${entry.mood.label}` : ''
  alert(`Entry from ${formatDate(entry.date)}${moodText}\n\n${entry.content}`)
}

const reflectOnEntry = (entry) => {
  const reflectionPrompts = [
    "Looking back, what stands out to you about this entry?",
    "How have your feelings about this changed since you wrote it?",
    "What would you say to yourself when you wrote this entry?",
    "What growth or learning can you see from this experience?"
  ]
  const randomReflection = reflectionPrompts[Math.floor(Math.random() * reflectionPrompts.length)]
  
  newEntry.value.content = `Reflecting on my entry from ${formatDate(entry.date)}:\n\n${randomReflection}\n\n`
  newEntry.value.title = `Reflection: ${entry.title || 'Previous Entry'}`
  updateWordCount()
  document.querySelector('.title-input')?.focus()
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  })
}

const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}

onMounted(() => {
  // Load entries from localStorage
  const savedEntries = localStorage.getItem('journalEntries')
  if (savedEntries) {
    try {
      journalEntries.value = JSON.parse(savedEntries)
    } catch (e) {
      console.error('Error loading journal entries:', e)
      journalEntries.value = []
    }
  }
})
</script>

<style scoped>
.journal-page {
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

.journal-main {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
}

.journal-header {
  text-align: center;
  margin-bottom: 50px;
}

.journal-header h1 {
  font-family: 'IM Fell English SC', serif;
  color: #2c5530;
  font-size: 2.8rem;
  margin-bottom: 15px;
}

.journal-header p {
  color: #4a7c59;
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.journal-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
}

.stat {
  text-align: center;
  padding: 20px;
  min-width: 120px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  transition: transform 0.3s ease;
}

.stat:hover {
  transform: translateY(-5px);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: #4fb9af;
  margin-bottom: 5px;
}

.stat-label {
  color: #4a7c59;
  font-size: 0.9rem;
  font-weight: 500;
}

.new-entry-section {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  margin-bottom: 50px;
  border: 2px solid #e0f2e1;
  transition: transform 0.3s ease;
}

.new-entry-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(79, 185, 175, 0.15);
}

.section-header {
  margin-bottom: 30px;
}

.section-header h2 {
  font-family: 'IM Fell English SC', serif;
  color: #2c5530;
  margin-bottom: 10px;
  font-size: 2rem;
}

.section-subtitle {
  color: #4a7c59;
  font-size: 1.1rem;
}

.form-group {
  margin-bottom: 25px;
  position: relative;
}

.title-input {
  width: 95%;
  padding: 18px 20px;
  border: 2px solid #e0f2e1;
  border-radius: 15px;
  font-size: 1.1rem;
  font-family: 'Playfair Display', serif;
  background: #f8fdf8;
  transition: all 0.3s ease;
}

.title-input:focus {
  outline: none;
  border-color: #4fb9af;
  background: white;
  box-shadow: 0 0 0 3px rgba(79, 185, 175, 0.1);
}

.writing-tips {
  margin-top: 15px;
  padding: 20px;
  background: #f1f8e9;
  border-radius: 10px;
  border-left: 4px solid #4fb9af;
}

.writing-tips h4 {
  color: #2c5530;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.writing-tips ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.writing-tips li {
  padding: 8px 0;
  color: #4a7c59;
  display: flex;
  align-items: center;
  gap: 10px;
}

.writing-tips li:before {
  content: "•";
  color: #4fb9af;
  font-weight: bold;
}

.content-textarea {
  width: 95%;
  min-height: 250px;
  padding: 20px;
  border: 2px solid #e0f2e1;
  border-radius: 15px;
  font-size: 1.1rem;
  font-family: 'Playfair Display', serif;
  resize: vertical;
  background: #f8fdf8;
  line-height: 1.6;
  transition: all 0.3s ease;
}

.content-textarea:focus {
  outline: none;
  border-color: #4fb9af;
  background: white;
  box-shadow: 0 0 0 3px rgba(79, 185, 175, 0.1);
}

.textarea-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.word-count {
  color: #4a7c59;
  font-size: 0.9rem;
  font-weight: 500;
}

.prompt-btn {
  background: transparent;
  border: none;
  color: #4fb9af;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 15px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.prompt-btn:hover {
  background: #f8fdf8;
  transform: translateY(-2px);
}

.prompt-icon {
  font-size: 1.2rem;
}

.entry-actions {
  margin-bottom: 25px;
}

.mood-btn {
  background: white;
  color: #4fb9af;
  border: 2px solid #4fb9af;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.mood-btn:hover {
  background: #4fb9af;
  color: white;
  transform: translateY(-2px);
}

.mood-icon {
  font-size: 1.2rem;
}

.mood-selector {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  padding: 15px;
  background: #f8fdf8;
  border-radius: 15px;
  border: 2px solid #e0f2e1;
  flex-wrap: wrap;
}

.mood-option {
  font-size: 1.5rem;
  background: white;
  border: 2px solid #e0f2e1;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mood-option:hover {
  transform: scale(1.1);
  border-color: #4fb9af;
}

.mood-option.selected {
  background: #4fb9af;
  color: white;
  border-color: #4fb9af;
  transform: scale(1.1);
}

.save-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  border: none;
  padding: 16px 35px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1.1rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.save-btn.glow-hover::before {
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

.save-btn.glow-hover:hover::before {
  opacity: 1;
}

.save-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 185, 175, 0.3);
}

.save-btn.glow-hover:hover {
  box-shadow: 
    0 8px 20px rgba(79, 185, 175, 0.3),
    0 0 25px rgba(79, 185, 175, 0.5);
}

.save-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-icon {
  font-size: 1.3rem;
}

.past-entries-section {
  margin-bottom: 60px;
}

.empty-state {
  text-align: center;
  padding: 60px 40px;
  background: white;
  border-radius: 20px;
  border: 2px dashed #e0f2e1;
  margin-bottom: 40px;
}

.empty-icon {
  font-size: 5rem;
  margin-bottom: 20px;
  animation: gentlePulse 3s ease-in-out infinite;
}

@keyframes gentlePulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

.empty-state h3 {
  color: #2c5530;
  margin-bottom: 15px;
}

.empty-state p {
  color: #4a7c59;
  margin-bottom: 30px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.start-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 185, 175, 0.3);
}

.entries-list {
  display: grid;
  gap: 25px;
}

.entry-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.entry-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(79, 185, 175, 0.15);
}

.entry-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(to bottom, #4fb9af, #8bc34a);
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.entry-meta h3 {
  color: #2c5530;
  margin: 0 0 8px 0;
  font-size: 1.4rem;
}

.entry-date {
  color: #4a7c59;
  font-size: 0.9rem;
  display: block;
}

.entry-mood {
  background: #f8fdf8;
  padding: 8px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #e0f2e1;
}

.mood-display {
  font-size: 1.2rem;
}

.mood-label {
  color: #4a7c59;
  font-size: 0.9rem;
  font-weight: 500;
}

.entry-preview {
  margin-bottom: 25px;
}

.entry-preview p {
  color: #666;
  line-height: 1.6;
  margin: 0;
  font-size: 1.1rem;
}

.entry-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e0f2e1;
  padding-top: 20px;
}

.entry-stats {
  display: flex;
  gap: 20px;
}

.entry-stats .stat {
  color: #4a7c59;
  font-size: 0.9rem;
  background: none;
  box-shadow: none;
  border: none;
  padding: 0;
  min-width: auto;
}

.entry-stats .stat:hover {
  transform: none;
}

.entry-actions {
  display: flex;
  gap: 10px;
}

.read-btn, .reflect-btn {
  background: transparent;
  color: #4fb9af;
  border: 2px solid #4fb9af;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.read-btn:hover, .reflect-btn:hover {
  background: #4fb9af;
  color: white;
  transform: translateY(-2px);
}

.benefits-section {
  margin-top: 60px;
}

.benefits-card {
  background: linear-gradient(135deg, rgba(79, 185, 175, 0.1), rgba(139, 195, 74, 0.1));
  padding: 40px;
  border-radius: 20px;
  border-left: 6px solid #4fb9af;
}

.benefits-card h3 {
  font-family: 'IM Fell English SC', serif;
  color: #2c5530;
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.8rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.benefit {
  text-align: center;
  padding: 25px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(79, 185, 175, 0.1);
  transition: transform 0.3s ease;
}

.benefit:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 15px;
  display: inline-block;
  animation: gentleFloat 3s ease-in-out infinite;
}

@keyframes gentleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.benefit h4 {
  color: #2c5530;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.benefit p {
  color: #4a7c59;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .journal-main {
    padding: 20px 15px;
  }
  
  .journal-header h1 {
    font-size: 2.2rem;
  }
  
  .journal-stats {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  
  .stat {
    width: 100%;
    max-width: 200px;
  }
  
  .new-entry-section {
    padding: 25px;
  }
  
  .entry-header {
    flex-direction: column;
    gap: 15px;
  }
  
  .entry-footer {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }
  
  .entry-actions {
    justify-content: center;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>