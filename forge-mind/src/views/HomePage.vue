<template>
  <div class="home-page">
    <!-- Logo in top right -->
    <div class="logo-container">
      <img src="@/assets/forgemind-logo.png" alt="ForgeMind Logo" class="logo" />
    </div>

  <!-- Main Content -->
    <div class="content">
      <h1>Forge Your Strongest Mind</h1>
      <p>Daily mental fitness workouts to build resilience, clarity, and emotional strength.</p>
       <router-link to="/signup" class="btn primary">Start Your Journey</router-link>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/footer.vue'
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
  text-align: center;
  position: relative;
  padding: 0 20px;
}

.logo-container {
  position: absolute;
  top: 20px;
  right: 30px;
}

.logo {
  width: 130px;
  height: auto;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -40px; /* centers text better */
}

h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 15px;
}

p {
  color: #555;
  font-size: 1.2rem;
  margin-bottom: 35px;
  max-width: 500px;
}

.btn.primary {
  padding: 14px 36px;
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn.primary:hover {
  background-color: #1565c0;
}
</style>



