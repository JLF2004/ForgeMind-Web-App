<template>
  <div class="journal-page">
    <NavigationBar />
    
    <main class="journal-main">
      <div class="journal-container">
        <!-- Journal Header -->
        <div class="journal-header">
          <h1>My Journal 📖</h1>
          <p>Your private space for thoughts, reflections, and growth</p>
        </div>

        <!-- New Entry -->
        <div class="new-entry-section">
          <h2>New Journal Entry</h2>
          <div class="entry-form">
            <input type="text" v-model="newEntry.title" placeholder="Entry title (optional)" class="title-input">
            <textarea v-model="newEntry.content" placeholder="What's on your mind today? Write freely..." class="content-textarea"></textarea>
            <div class="entry-actions">
              <button class="btn save-btn" @click="saveEntry" :disabled="!newEntry.content">
                Save Entry
              </button>
              <button class="btn prompt-btn" @click="getPrompt">
                Get Writing Prompt
              </button>
            </div>
          </div>
        </div>

        <!-- Past Entries -->
        <div class="past-entries-section">
          <h2>Past Entries</h2>
          <div class="entries-list">
            <div v-for="entry in journalEntries" :key="entry.id" class="entry-card">
              <div class="entry-header">
                <h3>{{ entry.title || 'Untitled' }}</h3>
                <span class="entry-date">{{ formatDate(entry.date) }}</span>
              </div>
              <p class="entry-preview">{{ entry.content.substring(0, 150) }}...</p>
              <button class="btn read-btn" @click="viewEntry(entry)">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

const newEntry = ref({
  title: '',
  content: ''
})

const journalEntries = ref([])

const writingPrompts = [
  "What are three things that brought you joy today?",
  "What challenge did you overcome recently?",
  "What would you tell your younger self?",
  "What are you looking forward to this week?",
  "What's something you've learned about yourself lately?",
  "Describe a moment when you felt truly peaceful.",
  "What does self-care mean to you right now?",
  "What's one boundary you want to set or strengthen?"
]

const saveEntry = () => {
  if (!newEntry.value.content.trim()) return
  
  const entry = {
    id: Date.now(),
    title: newEntry.value.title,
    content: newEntry.value.content,
    date: new Date()
  }
  
  journalEntries.value.unshift(entry)
  // Save to localStorage
  localStorage.setItem('journalEntries', JSON.stringify(journalEntries.value))
  
  // Reset form
  newEntry.value = { title: '', content: '' }
  
  alert('Journal entry saved successfully!')
}

const getPrompt = () => {
  const randomPrompt = writingPrompts[Math.floor(Math.random() * writingPrompts.length)]
  newEntry.value.content = randomPrompt + '\n\n'
}

const viewEntry = (entry) => {
  // In a real app, this would open a modal or navigate to entry detail
  alert(`Entry from ${formatDate(entry.date)}:\n\n${entry.content}`)
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

onMounted(() => {
  // Load entries from localStorage
  const savedEntries = localStorage.getItem('journalEntries')
  if (savedEntries) {
    journalEntries.value = JSON.parse(savedEntries)
  }
})
</script>

<style scoped>
.journal-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fdf8 0%, #e8f5e9 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.journal-main {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.journal-header {
  text-align: center;
  margin-bottom: 50px;
}

.journal-header h1 {
  color: #2c5530;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.journal-header p {
  color: #4a7c59;
  font-size: 1.1rem;
}

.new-entry-section {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  margin-bottom: 40px;
  border: 2px solid #e0f2e1;
}

.new-entry-section h2 {
  color: #2c5530;
  margin-bottom: 20px;
}

.title-input {
  width: 100%;
  padding: 15px;
  border: 2px solid #e0f2e1;
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
  background: #f8fdf8;
}

.title-input:focus {
  outline: none;
  border-color: #4fb9af;
}

.content-textarea {
  width: 100%;
  height: 200px;
  padding: 15px;
  border: 2px solid #e0f2e1;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  background: #f8fdf8;
  line-height: 1.6;
}

.content-textarea:focus {
  outline: none;
  border-color: #4fb9af;
}

.entry-actions {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.save-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
}

.save-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(79, 185, 175, 0.3);
}

.save-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.prompt-btn {
  background: white;
  color: #4fb9af;
  border: 2px solid #4fb9af;
}

.prompt-btn:hover {
  background: #4fb9af;
  color: white;
}

.past-entries-section h2 {
  color: #2c5530;
  margin-bottom: 20px;
}

.entries-list {
  display: grid;
  gap: 20px;
}

.entry-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  transition: all 0.3s ease;
}

.entry-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(79, 185, 175, 0.15);
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.entry-header h3 {
  color: #2c5530;
  margin: 0;
  flex: 1;
}

.entry-date {
  color: #4a7c59;
  font-size: 0.9rem;
  white-space: nowrap;
  margin-left: 15px;
}

.entry-preview {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.read-btn {
  background: transparent;
  color: #4fb9af;
  border: 2px solid #4fb9af;
  padding: 8px 20px;
  font-size: 0.9rem;
}

.read-btn:hover {
  background: #4fb9af;
  color: white;
}

@media (max-width: 768px) {
  .journal-main {
    padding: 20px 15px;
  }
  
  .entry-header {
    flex-direction: column;
    gap: 10px;
  }
  
  .entry-date {
    margin-left: 0;
  }
  
  .entry-actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>