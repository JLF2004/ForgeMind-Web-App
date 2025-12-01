<template>
  <div class="navigation-bar">
    <div class="nav-content">
      <!-- Left side - Logo -->
      <div class="logo-container">
        <img src="@/assets/images/Alter Logo.png" alt="Alter ForgeMind" class="logo">
      </div>

      <!-- Center - Navigation Links -->
      <div class="nav-links">
        <router-link to="/" class="nav-link">HOME</router-link>
        <span class="nav-separator">|</span>
        <router-link to="/about" class="nav-link">ABOUT</router-link>
        <span class="nav-separator">|</span>
        <router-link to="/services" class="nav-link">SERVICES</router-link>
        <span class="nav-separator">|</span>
        <router-link to="/community" class="nav-link">COMMUNITY</router-link>
        <span class="nav-separator">|</span>
       <router-link to="/resources" class="nav-link">RESOURCES</router-link>
        <span class="nav-separator">|</span>
       <router-link to="/dashboard" class="nav-link">DASHBOARD</router-link>
        <span class="nav-separator">|</span>
         <router-link to="/journal" class="nav-link">JOURNAL</router-link>
        <span class="nav-separator">|</span>
        <router-link to="/contact" class="nav-link">CONTACT</router-link>
      </div>

      <!-- Right side - Start Your Journey Button -->
      <router-link to="/signup" class="start-journey-btn">
        START YOUR JOURNEY
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.navigation-bar {
  width: 100%;
  padding: 15px 40px;
  border-bottom: 2px solid #000;
  background: #fff;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo */
.logo-container {
  flex-shrink: 0;
}

.logo {
  height: 40px; /* Adjust based on your logo size */
  width: auto;
}

/* Navigation Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0;
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  font-weight: 600;
}

.nav-link {
  padding: 0 15px;
  color: #000;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.nav-link:hover {
  opacity: 0.7;
}

.nav-link.router-link-active {
  text-decoration: underline;
}

.nav-separator {
  color: #000;
}

/* Start Your Journey Button */
.start-journey-btn {
  font-family: 'Playfair Display', serif;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background: #4FB9AF;
  padding: 10px 20px;
  border: 1px solid #4FB9AF;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.start-journey-btn:hover {
  background: white;
  color: #000;
}

/* Responsive design */
@media (max-width: 1024px) {
  .nav-links {
    font-size: 12px;
  }
  
  .nav-link {
    padding: 0 10px;
  }
  
  .start-journey-btn {
    font-size: 11px;
    padding: 8px 16px;
  }
}

@media (max-width: 768px) {
  .navigation-bar {
    padding: 12px 20px;
  }
  
  .nav-content {
    flex-direction: column;
    gap: 15px;
  }
  
  .logo {
    height: 35px;
  }
  
  .nav-links {
    order: 2;
  }
  
  .start-journey-btn {
    order: 3;
  }
}

@media (max-width: 480px) {
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }
  
  .nav-link {
    padding: 0 8px;
  }
  
  .start-journey-btn {
    font-size: 10px;
    padding: 6px 12px;
  }
}
</style>