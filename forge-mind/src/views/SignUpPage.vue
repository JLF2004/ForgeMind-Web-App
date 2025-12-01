<template>
  <div class="signup-page">
    <!-- Main Content -->
    <div class="auth-container">
      <div class="auth-card">
        <h1 class="main-header">START YOUR JOURNEY</h1>
        <p class="subtitle">Create your account to build mental resilience</p>
        
        <form @submit.prevent="handleSignup" class="auth-form">
          <div class="form-group">
            <label>Full Name:</label>
            <input type="text" placeholder="Full Name" required v-model="formData.fullname">
          </div>
          <div class="form-group">
            <label>Email Address:</label>
            <input type="email" placeholder="Email Address" required v-model="formData.email">
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Password" required v-model="formData.password">
          </div>
          <div class="form-group">
            <label>Confirm Password:</label>
            <input type="password" placeholder="Confirm Password" required v-model="formData.confirmPassword">
          </div>
          <button type="submit" class="btn primary">Create Account</button>
        </form>

        <p class="auth-switch">
          Already have an account? <router-link to="/login" class="link">Sign In</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formData = ref({
  fullname: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const handleSignup = () => {
  // Validate passwords match
  if (formData.value.password !== formData.value.confirmPassword) {
    alert('Passwords do not match. Please try again.')
    return
  }

  // Validate password strength
  if (formData.value.password.length < 6) {
    alert('Password should be at least 6 characters long.')
    return
  }

  // Create user object
  const user = {
    fullname: formData.value.fullname,
    email: formData.value.email,
    password: formData.value.password,
    createdAt: new Date().toISOString()
  }

  // Save to localStorage
  localStorage.setItem('forgeMindUser', JSON.stringify(user))
  
  // Redirect to success page instead of showing popup
  router.push('/success')
}
</script>

<style scoped>
/* Your original CSS remains exactly the same */
.signup-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: url('../assets/images/Background.png') center/cover no-repeat,
  #fefefe;
  color: #2c3e50;
}

/* Add overlay for better text readability */
.signup-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(254, 254, 254, 0.2); /* White overlay with transparency */
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
  align-items: center;
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
  gap: 25px;
  margin-bottom: 30px;
  align-items: left;
  width: 100%;

}

.form-group {
  text-align: left;


}

.form-group label {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
  display: block;

}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #C5E8C8;
 background: #C5E8C8;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  margin-top: 5px;
  box-sizing: border-box;
 
}

.form-group input:focus {
  outline: none;
  background: #f8f8f8;
}

.btn.primary {
  font-family: 'Playfair Display', serif;
  background: #4FB9AF;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 0;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  display: block;
  margin: 30px auto 0 auto;
  width: fit-content;
  min-width: 200px;
  align-items: center;
}

.btn.primary:hover {
  background: #333;
  border-color: #333;
}

.auth-switch {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: #555;
  margin-top: 20px auto 0;
  text-align: center;
  width: 100%;
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
}

@media (max-width: 480px) {
  .main-header {
    font-size: 1.8rem;
  }
  
  .auth-card {
    padding: 30px 20px;
  }
}
</style>

