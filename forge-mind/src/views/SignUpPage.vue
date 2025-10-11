<template>
  <div class="auth-page">
    <!-- Form -->
    <div class="form-container">
      <h2>Start Your Journey</h2>
      <p>Create an account to build mental resilience</p>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="confirm password" placeholder="Confirm Password" required />
        <button type="submit" class="btn primary">Create Account</button>
      </form>

    <p> Already have an account?<router-link to="/login" class="link"> Login </router-link></p>

      <!-- Back to home -->
      <router-link to="/" class="back-home">← Back to Home</router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 0 20px;
}

.form-container {
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  text-align: center;
  fill-opacity: #C5E8C8, 50% ;
}

h2 {
  margin-bottom: 25px;
  font-size: 2rem;
  font-weight: 600;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 14px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
}

input:focus {
  border-color: #1e88e5;
}

.btn.primary {
  background-color: #1e88e5;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.btn.primary:hover {
  background-color: #1565c0;
}

.link {
  margin-top: 18px;
  color: #1e88e5;
  text-decoration: none;
  font-size: 0.95rem;
}

.link:hover {
  text-decoration: underline;
}

.back-home {
  margin-top: 20px;
  color: #555;
  font-size: 0.9rem;
  text-decoration: none;
}

.back-home:hover {
  text-decoration: underline;
}
</style>



