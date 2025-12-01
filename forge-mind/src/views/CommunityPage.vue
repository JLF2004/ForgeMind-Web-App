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
                ref="postTextarea"
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
                <div class="user-avatar small" :style="{ background: post.avatarColor }">
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
              
              <button class="action-btn reply-btn" @click="toggleReplies(post)">
                <span class="action-icon">💬</span>
                <span class="action-count">{{ post.replies.length }}</span>
                <span class="action-label">{{ post.showReplies ? 'Hide Replies' : 'Show Replies' }}</span>
              </button>
            </div>

            <!-- Replies Section -->
            <div v-if="post.showReplies" class="replies-section">
              <div class="replies-header">
                <h4>Community Support 💫</h4>
                <span class="replies-count">{{ post.replies.length }} supportive {{ post.replies.length === 1 ? 'reply' : 'replies' }}</span>
              </div>
              
              <div v-for="reply in post.replies" :key="reply.id" class="reply-card">
                <div class="user-avatar tiny" :style="{ background: reply.avatarColor }">
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

const userInitial = ref("U")
const userName = ref("User")
const postTextarea = ref(null)

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

// Mock community posts data
const posts = ref([
  {
    id: 1,
    author: 'Alex Morgan',
    content: 'Just completed my first 30-day mindfulness challenge! The morning breathing exercises have completely transformed how I start my day. Any tips for maintaining consistency?',
    category: 'celebration',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    likes: 24,
    liked: false,
    replies: [
      {
        id: 101,
        author: 'Maya Chen',
        content: 'Amazing achievement Alex! I found that setting a specific time each day helped me stay consistent. Keep going! 🌟',
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
        avatarColor: getRandomColor()
      },
      {
        id: 102,
        author: 'David Park',
        content: 'Congratulations! Try pairing your mindfulness practice with an existing habit like making coffee. Works wonders for consistency!',
        timestamp: new Date(Date.now() - 45 * 60 * 1000),
        avatarColor: getRandomColor()
      }
    ],
    showReplies: false,
    newReply: '',
    avatarColor: getRandomColor()
  },
  {
    id: 2,
    author: 'Sophia Williams',
    content: 'Remember that anxiety doesn\'t define you. Today I practiced "box breathing" during a stressful meeting and it made such a difference. 4 seconds in, 4 hold, 4 out, 4 hold.',
    category: 'tips',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    likes: 42,
    liked: true,
    replies: [
      {
        id: 201,
        author: 'Jamal Rivera',
        content: 'Thank you for sharing this technique! Just tried it during my commute and felt immediate calm.',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        avatarColor: getRandomColor()
      }
    ],
    showReplies: false,
    newReply: '',
    avatarColor: getRandomColor()
  },
  {
    id: 3,
    author: 'Emma Thompson',
    content: 'Struggling with negative self-talk today. Could use some gentle reminders about self-compassion. How do you practice kindness toward yourself on difficult days?',
    category: 'support',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    likes: 18,
    liked: false,
    replies: [
      {
        id: 301,
        author: 'Carlos Ruiz',
        content: 'Emma, I hear you. On tough days, I write myself a compassionate letter as if I were comforting a dear friend. Be gentle with yourself 💚',
        timestamp: new Date(Date.now() - 20 * 60 * 60 * 1000),
        avatarColor: getRandomColor()
      },
      {
        id: 302,
        author: 'Priya Patel',
        content: 'I keep a "kindness jar" where I write down things I appreciate about myself. On hard days, I read them. You\'re doing better than you think!',
        timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000),
        avatarColor: getRandomColor()
      }
    ],
    showReplies: false,
    newReply: '',
    avatarColor: getRandomColor()
  },
  {
    id: 4,
    author: 'Liam Johnson',
    content: 'Has anyone tried the 5-4-3-2-1 grounding technique? I find it super helpful for panic attacks. What are your favorite grounding methods?',
    category: 'question',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    likes: 31,
    liked: false,
    replies: [
      {
        id: 401,
        author: 'Sarah Miller',
        content: '5-4-3-2-1 is my go-to! I also love "butterfly hugs" - crossing arms and tapping shoulders alternately. Sending calm vibes 🦋',
        timestamp: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000),
        avatarColor: getRandomColor()
      }
    ],
    showReplies: false,
    newReply: '',
    avatarColor: getRandomColor()
  },
  {
    id: 5,
    author: 'Jordan Lee',
    content: 'Today I managed to notice my stress building and took a 5-minute walk instead of reacting immediately. Small progress still counts!',
    category: 'celebration',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    likes: 56,
    liked: true,
    replies: [],
    showReplies: false,
    newReply: '',
    avatarColor: getRandomColor()
  }
])

// Generate random colors for avatars
function getRandomColor() {
  const colors = [
    'linear-gradient(135deg, #4fb9af, #8bc34a)',
    'linear-gradient(135deg, #FF6B6B, #FF8E53)',
    'linear-gradient(135deg, #4776E6, #8E54E9)',
    'linear-gradient(135deg, #00C9FF, #92FE9D)',
    'linear-gradient(135deg, #FF5E62, #FF9966)',
    'linear-gradient(135deg, #7F00FF, #E100FF)',
    'linear-gradient(135deg, #00DBDE, #FC00FF)',
    'linear-gradient(135deg, #FF9A9E, #FAD0C4)'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

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

const getInitial = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

const formatTime = (timestamp) => {
  const now = new Date()
  const diff = now - timestamp
  
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  
  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days}d ago`
  
  return timestamp.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

const focusNewPost = () => {
  if (postTextarea.value) {
    postTextarea.value.focus()
  }
}

const createPost = () => {
  if (!newPost.value.content.trim()) {
    alert('Please write something to share!')
    return
  }
  
  // Create new post
  const post = {
    id: posts.value.length + 1,
    author: userName.value,
    content: newPost.value.content,
    category: 'support', // Default category
    timestamp: new Date(),
    likes: 0,
    liked: false,
    replies: [],
    showReplies: false,
    newReply: '',
    avatarColor: 'linear-gradient(135deg, #4fb9af, #8bc34a)' // Your brand color
  }
  
  // Add to beginning of posts array
  posts.value.unshift(post)
  
  // Clear the textarea
  newPost.value.content = ''
  
  // Show success message
  alert('Your post has been shared with the community! 🌟')
}

const setFilter = (filter) => {
  activeFilter.value = filter
}

const toggleLike = (post) => {
  post.liked = !post.liked
  post.likes += post.liked ? 1 : -1
  
  // Optional: Save like to localStorage
  const likes = JSON.parse(localStorage.getItem('communityLikes') || '{}')
  likes[post.id] = post.liked
  localStorage.setItem('communityLikes', JSON.stringify(likes))
}

const toggleReplies = (post) => {
  post.showReplies = !post.showReplies
  if (!post.newReply) {
    post.newReply = ''
  }
}

const addReply = (post) => {
  if (!post.newReply.trim()) {
    alert('Please write a supportive message!')
    return
  }
  
  const reply = {
    id: post.replies.length + 1,
    author: userName.value,
    content: post.newReply,
    timestamp: new Date(),
    avatarColor: 'linear-gradient(135deg, #4fb9af, #8bc34a)'
  }
  
  post.replies.push(reply)
  post.newReply = ''
  
  // Optional: Save replies to localStorage
  const replies = JSON.parse(localStorage.getItem('communityReplies') || '{}')
  replies[post.id] = post.replies
  localStorage.setItem('communityReplies', JSON.stringify(replies))
}

// Load user data on mounted
onMounted(() => {
  // Load user name from localStorage if available
  const userData = localStorage.getItem('forgeMindUser')
  if (userData) {
    try {
      const user = JSON.parse(userData)
      userName.value = user.fullname || 'User'
      userInitial.value = getInitial(userName.value)
    } catch (error) {
      console.error('Error loading user data:', error)
    }
  }
  
  // Load saved likes
  const savedLikes = JSON.parse(localStorage.getItem('communityLikes') || '{}')
  posts.value.forEach(post => {
    if (savedLikes[post.id]) {
      post.liked = savedLikes[post.id]
    }
  })
  
  // Load saved replies
  const savedReplies = JSON.parse(localStorage.getItem('communityReplies') || '{}')
  posts.value.forEach(post => {
    if (savedReplies[post.id]) {
      post.replies = savedReplies[post.id]
    }
  })
})
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

