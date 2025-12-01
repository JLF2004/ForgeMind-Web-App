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
              <button class="btn social google">
                <i class="fab fa-google social-icon"></i>
                Continue with Google
              </button>
              <button class="btn social facebook">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formData = ref({
  email: '',
  password: ''
})

const handleLogin = () => {
  // Handle login logic
  console.log('Login data:', formData.value)
  router.push('/services')
}
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
}
</style>




