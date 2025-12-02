<template>
  <div class="login-page">
    <!-- Main Content -->
    <div class="auth-container">
      <div class="auth-card">
        <h1 class="main-header">WELCOME BACK</h1>
        <p class="subtitle">Sign in to continue your mental fitness<br>journey</p>
        
        <form @submit.prevent="handleLogin" class="auth-form">
          <div class="form-group">
            <label>Email Address:</label>
            <input type="email" placeholder="Email Address" required v-model="formData.email">
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Password" required v-model="formData.password">
          </div>
          
          <div class="auth-actions">
            <button type="submit" class="btn primary">Sign In</button>
            
            <div class="divider-section">
              <div class="divider">~or continue with~</div>
            </div>

            <div class="social-auth">
              <button type="button" class="btn social google" @click="handleGoogleLogin">
                <i class="fab fa-google social-icon"></i>
                Continue with Google
              </button>
              <button type="button" class="btn social facebook" @click="handleFacebookLogin">
                <i class="fab fa-facebook-f social-icon"></i>
                Continue with Facebook
              </button>
            </div>

            <p class="auth-switch">
              Don't have an account? <router-link to="/signup" class="link">Sign Up</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>

    <!-- Social Login Confirmation Modal -->
    <div v-if="showSocialModal" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">{{ modalTitle }}</h3>
          <button class="modal-close" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="modal-icon">
            <i :class="modalIcon"></i>
          </div>
          <p class="modal-message">{{ modalMessage }}</p>
          <p class="modal-details">
            {{ modalDetails }}
          </p>
          <div class="modal-features">
            <div class="feature-item">
              <i class="fas fa-shield-alt"></i>
              <span>Secure & encrypted connection</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-user-check"></i>
              <span>One-click sign in</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-sync-alt"></i>
              <span>Auto-sync with your account</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="modal-btn secondary" @click="closeModal">
            Cancel
          </button>
          <button class="modal-btn primary" @click="confirmSocialLogin">
            Continue to {{ socialProvider }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form data
const formData = ref({
  email: '',
  password: ''
})

// Social login modal state
const showSocialModal = ref(false)
const socialProvider = ref('')
const modalTitle = ref('')
const modalMessage = ref('')
const modalDetails = ref('')
const modalIcon = ref('')

// Regular login
const handleLogin = () => {
  // Handle login logic
  console.log('Login data:', formData.value)
  
  // Simulate API call
  setTimeout(() => {
    alert('Login successful! Welcome back to ForgeMind.')
    router.push('/dashboard')
  }, 500)
}

// Google login handler
const handleGoogleLogin = () => {
  socialProvider.value = 'Google'
  modalTitle.value = 'Continue with Google'
  modalMessage.value = 'You will be redirected to Google to sign in securely.'
  modalDetails.value = 'This will allow ForgeMind to access your basic profile information (name and email) for account creation and login.'
  modalIcon.value = 'fab fa-google modal-provider-icon'
  showSocialModal.value = true
}

// Facebook login handler
const handleFacebookLogin = () => {
  socialProvider.value = 'Facebook'
  modalTitle.value = 'Continue with Facebook'
  modalMessage.value = 'You will be redirected to Facebook to sign in securely.'
  modalDetails.value = 'This will allow ForgeMind to access your basic profile information (name, email, and profile picture) for account creation and login.'
  modalIcon.value = 'fab fa-facebook-f modal-provider-icon'
  showSocialModal.value = true
}

// Confirm social login
const confirmSocialLogin = () => {
  const provider = socialProvider.value.toLowerCase()
  
  // Show loading state
  const loadingMessage = `Connecting to ${socialProvider.value}...`
  alert(loadingMessage)
  
  // Simulate social login API call
  setTimeout(() => {
    // In a real app, you would:
    // 1. Redirect to OAuth URL or use Firebase/Auth0 SDK
    // 2. Handle the callback
    // 3. Get user data and create/login account
    
    console.log(`Social login with ${socialProvider.value} initiated`)
    
    // Mock successful login
    const successMessage = `Successfully connected with ${socialProvider.value}! Welcome to ForgeMind. Excited for you to start your mental fitness journey with us!`
    alert(successMessage)
    
    // Close modal and redirect
    closeModal()
    router.push('/dashboard')
    
    // In real implementation, you might use:
    // if (provider === 'google') {
    //   window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?...'
    // } else if (provider === 'facebook') {
    //   window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth?...'
    // }
    
  }, 1000)
}

// Close modal
const closeModal = () => {
  showSocialModal.value = false
  socialProvider.value = ''
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && showSocialModal.value) {
    closeModal()
  }
})
</script>

<style scoped>
.login-page {
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
}

/* Add overlay for better text readability */
.login-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(254, 254, 254, 0.2);
  z-index: 0;
}

.auth-container {
  width: 100%;
  max-width: 500px;
  padding: 40px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.auth-card {
  background: white;
  padding: 60px 40px;
  text-align: center;
  width: 100%;
}

.main-header {
  font-family: 'IM Fell English SC', serif;
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  margin: 0 0 20px 0;
  line-height: 1.1;
  color: #1a1a1a;
  letter-spacing: 1px;
}

.subtitle {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  text-align: center;
  margin: 0 auto 40px auto;
  line-height: 1.6;
  color: #555;
  font-weight: 400;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  align-items: left;
  width: 100%;
}

.form-group {
  text-align: left;
  padding: 15px;
  border-radius: 5px;
}

.form-group label {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 6px;
  display: block;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #C5E8C8;
  background: #C5E8C8;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  margin-top: 4px;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  background: #f8f8f8;
}

/* Button container to center everything */
.auth-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.btn.primary {
  font-family: 'Playfair Display', serif;
  background: #4FB9AF;
  color: white;
  padding: 15px 40px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  width: fit-content;
  min-width: 200px;
}

.btn.primary:hover {
  background: #333;
}

/* Divider Section */
.divider-section {
  width: 100%;
  margin: 10px 0;
}

.divider {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin: 20px 0;
}

/* Social Auth - Side by side */
.social-auth {
  display: flex;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  justify-content: center;
}

.btn.social {
  font-family: 'Playfair Display', serif;
  background: white;
  border: 2px solid #000;
  padding: 12px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  justify-content: center;
}

.btn.social:hover {
  background: #f8f8f8;
}

.social-icon {
  font-size: 1.1rem;
}

.btn.social.google .social-icon {
  color: #DB4437; /* Google red */
}

.btn.social.facebook .social-icon {
  color: #4267B2; /* Facebook blue */
}

.auth-switch {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: #555;
  text-align: center;
  width: 100%;
  margin: 0;
}

.link {
  color: #4FB9AF;
  text-decoration: underline;
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
}

/* NEW MODAL STYLES - Added to your existing CSS */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-container {
  background: white;
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  animation: slideUp 0.4s ease;
}

@keyframes slideUp {
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
  padding: 25px 30px;
  border-bottom: 1px solid #e0e6ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #f8fdf8, #e8f5e9);
  border-radius: 20px 20px 0 0;
}

.modal-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
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

.modal-icon {
  text-align: center;
  margin-bottom: 25px;
}

.modal-icon i {
  font-size: 4rem;
  color: #4FB9AF;
}

.modal-provider-icon.fab.fa-google {
  color: #DB4437;
}

.modal-provider-icon.fab.fa-facebook-f {
  color: #4267B2;
}

.modal-message {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  text-align: center;
  color: #2c5530;
  margin-bottom: 20px;
  line-height: 1.6;
}

.modal-details {
  text-align: center;
  color: #5d7c6d;
  margin-bottom: 30px;
  line-height: 1.6;
  padding: 0 10px;
}

.modal-features {
  background: #f8fdf8;
  border-radius: 10px;
  padding: 20px;
  margin-top: 25px;
  border-left: 4px solid #4fb9af;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 12px 0;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.feature-item:hover {
  background: #e8f5e9;
}

.feature-item i {
  color: #4fb9af;
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
}

.modal-footer {
  display: flex;
  gap: 15px;
  padding: 25px 30px;
  border-top: 1px solid #e0e6ed;
}

.modal-btn {
  flex: 1;
  padding: 15px 25px;
  border-radius: 10px;
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
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
  box-shadow: 0 5px 15px rgba(79, 185, 175, 0.3);
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
  .auth-container {
    padding: 20px;
  }

  .auth-card {
    padding: 40px 30px;
  }

  .main-header {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .social-auth {
    flex-direction: column;
    max-width: 300px;
  }
  
  /* Modal responsive */
  .modal-container {
    width: 95%;
  }
  
  .modal-header {
    padding: 20px;
  }
  
  .modal-body {
    padding: 20px;
  }
  
  .modal-footer {
    padding: 20px;
    flex-direction: column;
  }
  
  .modal-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .main-header {
    font-size: 1.8rem;
  }
  
  .auth-card {
    padding: 30px 20px;
  }
  
  .btn.social {
    font-size: 0.85rem;
    padding: 10px 15px;
  }
  
  .modal-title {
    font-size: 1.3rem;
  }
  
  .modal-message {
    font-size: 1.1rem;
  }
}
</style>

