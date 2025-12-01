<template>
  <div class="community-page">
    <NavigationBar />
    
    <!-- Animated Background -->
    <div class="floating-particles">
      <div class="particle" v-for="i in 20" :key="i" :style="getParticleStyle(i)"></div>
    </div>
    
    <main class="community-main">
      <div class="community-container">
        <!-- Header -->
        <div class="community-header fade-in">
          <h1>Mindful Community 🌿</h1>
          <p>Share your journey, find support, and grow together</p>
        </div>

        <!-- Create Post -->
        <div class="create-post-section slide-in-up" :style="{ animationDelay: '0.3s' }">
          <div class="post-editor">
            <div class="user-avatar">
              {{ userInitial }}
            </div>
            <div class="editor-content">
              <textarea 
                v-model="newPost.content" 
                placeholder="What's on your mind? Share a thought, tip, or ask for advice..."
                class="post-textarea"
                maxlength="280"
              ></textarea>
              <div class="editor-actions">
                <div class="char-count">{{ newPost.content.length }}/280</div>
                <div class="action-buttons">
                  <button 
                    class="btn post-btn glow-hover" 
                    @click="createPost"
                    :disabled="!newPost.content.trim()"
                  >
                    Share with Community
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="post-tips slide-in-right" :style="{ animationDelay: '0.5s' }">
            <p><strong>Remember:</strong> This is a safe space. Be kind, supportive, and respectful to everyone.</p>
          </div>
        </div>

        <!-- Feed Filters -->
        <div class="feed-filters fade-in" :style="{ animationDelay: '0.6s' }">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            :class="['filter-btn', { active: activeFilter === filter.id }]"
            @click="setFilter(filter.id)"
          >
            <span class="filter-icon">{{ filter.emoji }}</span>
            {{ filter.label }}
          </button>
        </div>

        <!-- Posts Feed -->
        <div class="posts-feed">
          <div v-if="filteredPosts.length === 0" class="empty-state fade-in" :style="{ animationDelay: '0.7s' }">
            <div class="empty-icon">💭</div>
            <h3>No posts yet</h3>
            <p>Be the first to share something with the community!</p>
            <button class="btn post-btn glow-hover" @click="focusNewPost">
              Share Your First Post
            </button>
          </div>

          <div 
            v-for="(post, index) in filteredPosts" 
            :key="post.id" 
            class="post-card fade-in-up"
            :style="{ animationDelay: `${0.8 + (index * 0.1)}s` }"
          >
            <div class="post-header">
              <div class="user-info">
                <div class="user-avatar small">
                  {{ getInitial(post.author) }}
                </div>
                <div class="user-details">
                  <div class="username">@{{ post.author.toLowerCase().replace(' ', '') }}</div>
                  <div class="post-time">{{ formatTime(post.timestamp) }}</div>
                </div>
              </div>
              <div class="post-category" :class="post.category">
                <span class="category-icon">{{ getCategoryEmoji(post.category) }}</span>
                {{ post.category }}
              </div>
            </div>

            <div class="post-content">
              <p>{{ post.content }}</p>
            </div>

            <!-- Post Interactions -->
            <div class="post-actions">
              <button 
                class="action-btn like-btn"
                :class="{ active: post.liked }"
                @click="toggleLike(post)"
              >
                <span class="action-icon">💖</span>
                <span class="action-count">{{ post.likes }}</span>
                <span class="action-label">{{ post.liked ? 'Liked' : 'Send Support' }}</span>
              </button>
              
              <button class="action-btn reply-btn" @click="focusReply(post)">
                <span class="action-icon">💬</span>
                <span class="action-count">{{ post.replies.length }}</span>
                <span class="action-label">Share Support</span>
              </button>
            </div>

            <!-- Replies Section -->
            <div v-if="post.showReplies || post.replies.length > 0" class="replies-section">
              <div class="replies-header">
                <h4>Community Support 💫</h4>
                <span class="replies-count">{{ post.replies.length }} supportive {{ post.replies.length === 1 ? 'reply' : 'replies' }}</span>
              </div>
              
              <div v-for="reply in post.replies" :key="reply.id" class="reply-card">
                <div class="user-avatar tiny">
                  {{ getInitial(reply.author) }}
                </div>
                <div class="reply-content">
                  <div class="reply-header">
                    <span class="username">@{{ reply.author.toLowerCase().replace(' ', '') }}</span>
                    <span class="reply-time">{{ formatTime(reply.timestamp) }}</span>
                  </div>
                  <p>{{ reply.content }}</p>
                </div>
              </div>

              <!-- Reply Input -->
              <div class="reply-input">
                <input 
                  v-model="post.newReply" 
                  type="text" 
                  placeholder="Share a supportive thought or encouragement..."
                  @keypress.enter="addReply(post)"
                  class="reply-textfield"
                >
                <button 
                  class="btn reply-btn glow-hover" 
                  @click="addReply(post)"
                  :disabled="!post.newReply?.trim()"
                >
                  Share Support
                </button>
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

const userInitial = "U"
const userName = "User"

const newPost = ref({
  content: ''
})

const activeFilter = ref('all')

const filters = [
  { id: 'all', label: 'All Posts', emoji: '🌿' },
  { id: 'tips', label: 'Tips & Advice', emoji: '💡' },
  { id: 'support', label: 'Support', emoji: '🤝' },
  { id: 'celebration', label: 'Celebrations', emoji: '🎉' },
  { id: 'question', label: 'Questions', emoji: '❓' }
]

const posts = ref([
  // ... (same as your existing posts data)
])

const getParticleStyle = (index) => {
  const size = Math.random() * 15 + 5
  const duration = Math.random() * 15 + 10
  const delay = Math.random() * 5
  const color = `rgba(79, 185, 175, ${Math.random() * 0.2 + 0.1})`
  
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

const filteredPosts = computed(() => {
  if (activeFilter.value === 'all') {
    return posts.value
  }
  return posts.value.filter(post => post.category === activeFilter.value)
})

const getCategoryEmoji = (category) => {
  const emojis = {
    'tips': '💡',
    'support': '🤗',
    'celebration': '🎉',
    'question': '❓'
  }
  return emojis[category] || '💬'
}

const focusNewPost = () => {
  document.querySelector('.post-textarea')?.focus()
}

// ... (rest of your existing JavaScript functions remain the same)

</script>

<style scoped>
.community-page {
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

.slide-in-right {
  opacity: 0;
  transform: translateX(30px);
  animation: slideInRight 0.8s ease forwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.community-main {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
}

.community-header {
  text-align: center;
  margin-bottom: 40px;
}

.community-header h1 {
  font-family: 'IM Fell English SC', serif;
  color: #2c5530;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.community-header p {
  color: #4a7c59;
  font-size: 1.1rem;
}

.create-post-section {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  margin-bottom: 30px;
  border: 2px solid #e0f2e1;
  transition: transform 0.3s ease;
}

.create-post-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 25px rgba(79, 185, 175, 0.15);
}

.post-tips {
  margin-top: 15px;
  padding: 15px;
  background: #f1f8e9;
  border-radius: 10px;
  border-left: 4px solid #4fb9af;
}

.post-tips p {
  margin: 0;
  color: #4a7c59;
  font-size: 0.9rem;
}

.post-editor {
  display: flex;
  gap: 15px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.user-avatar:hover {
  transform: scale(1.05);
}

.user-avatar.small {
  width: 40px;
  height: 40px;
  font-size: 1rem;
}

.user-avatar.tiny {
  width: 32px;
  height: 32px;
  font-size: 0.8rem;
}

.editor-content {
  flex: 1;
}

.post-textarea {
  width: 100%;
  height: 100px;
  border: 2px solid #e0f2e1;
  border-radius: 10px;
  padding: 15px;
  font-size: 1rem;
  font-family: inherit;
  resize: none;
  background: #f8fdf8;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.post-textarea:focus {
  outline: none;
  border-color: #4fb9af;
  background: white;
  box-shadow: 0 0 0 3px rgba(79, 185, 175, 0.1);
}

.editor-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.char-count {
  color: #4a7c59;
  font-size: 0.9rem;
}

.post-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.post-btn.glow-hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
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

.post-btn.glow-hover:hover::before {
  opacity: 1;
}

.post-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(79, 185, 175, 0.3);
}

.post-btn.glow-hover:hover {
  box-shadow: 
    0 5px 15px rgba(79, 185, 175, 0.3),
    0 0 20px rgba(79, 185, 175, 0.5);
}

.post-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.feed-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  background: white;
  border: 2px solid #e0f2e1;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #4a7c59;
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-btn.active,
.filter-btn:hover {
  background: #4fb9af;
  color: white;
  border-color: #4fb9af;
  transform: translateY(-2px);
}

.filter-icon {
  font-size: 1.1rem;
}

.posts-feed {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #4a7c59;
  background: white;
  border-radius: 15px;
  border: 2px solid #e0f2e1;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  animation: gentlePulse 3s ease-in-out infinite;
}

@keyframes gentlePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.post-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  transition: all 0.3s ease;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 25px rgba(79, 185, 175, 0.15);
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.user-info {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.user-details .username {
  font-weight: 600;
  color: #2c5530;
  margin-bottom: 4px;
}

.user-details .post-time {
  color: #4a7c59;
  font-size: 0.8rem;
}

.post-category {
  background: #e8f5e9;
  color: #4a7c59;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.category-icon {
  font-size: 1rem;
}

.post-category.tips {
  background: #e3f2fd;
  color: #1976d2;
}

.post-category.support {
  background: #f3e5f5;
  color: #7b1fa2;
}

.post-category.celebration {
  background: #fff8e1;
  color: #ff8f00;
}

.post-category.question {
  background: #ffebee;
  color: #c62828;
}

.post-content {
  margin-bottom: 20px;
}

.post-content p {
  color: #333;
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
}

.post-actions {
  display: flex;
  gap: 10px;
  border-top: 1px solid #e0f2e1;
  padding-top: 15px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #4a7c59;
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.action-btn:hover {
  background: #f8fdf8;
  transform: translateY(-2px);
}

.action-btn.active {
  color: #e91e63;
}

.action-icon {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.action-btn:hover .action-icon {
  transform: scale(1.1);
}

.action-count {
  font-weight: 500;
}

.action-label {
  font-size: 0.8rem;
}

.replies-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e0f2e1;
}

.replies-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.replies-header h4 {
  color: #2c5530;
  margin: 0;
}

.replies-count {
  color: #4a7c59;
  font-size: 0.9rem;
}

.reply-card {
  display: flex;
  gap: 12px;
  margin-bottom: 15px;
  padding: 15px;
  background: #f8fdf8;
  border-radius: 10px;
  border: 1px solid #e0f2e1;
  transition: transform 0.3s ease;
}

.reply-card:hover {
  transform: translateX(5px);
  background: #f1f8e9;
}

.reply-content {
  flex: 1;
}

.reply-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.reply-header .username {
  font-weight: 600;
  color: #2c5530;
  font-size: 0.9rem;
}

.reply-header .reply-time {
  color: #4a7c59;
  font-size: 0.7rem;
}

.reply-content p {
  color: #333;
  line-height: 1.5;
  font-size: 0.9rem;
  margin: 0;
}

.reply-input {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.reply-textfield {
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #e0f2e1;
  border-radius: 20px;
  font-size: 0.9rem;
  background: white;
  transition: all 0.3s ease;
}

.reply-textfield:focus {
  outline: none;
  border-color: #4fb9af;
  box-shadow: 0 0 0 3px rgba(79, 185, 175, 0.1);
}

.reply-btn {
  background: #4fb9af;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.reply-btn:hover:not(:disabled) {
  background: #3da89e;
  transform: translateY(-2px);
}

.reply-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .community-main {
    padding: 20px 15px;
  }
  
  .post-header {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  
  .post-category {
    align-self: flex-start;
  }
  
  .editor-actions {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
  
  .post-btn {
    width: 100%;
  }
  
  .reply-input {
    flex-direction: column;
  }
  
  .feed-filters {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 10px;
  }
}
</style>

