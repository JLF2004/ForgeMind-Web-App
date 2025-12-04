<template>
  <div class="subscription-page">
    <NavigationBar />
    
    <!-- Animated Background -->
    <div class="floating-particles">
      <div class="particle" v-for="i in 20" :key="i" :style="getParticleStyle(i)"></div>
    </div>
    
    <main class="subscription-main">
      <div class="subscription-container">
        <!-- Header -->
        <div class="subscription-header fade-in">
          <h1>Choose Your Journey 🌱</h1>
          <p>Unlock your full potential with a plan that fits your mindfulness journey</p>
          <div class="header-badge">
            <span class="badge-icon">✨</span>
            <span>Cancel anytime • 7-day free trial on all plans</span>
          </div>
        </div>

        <!-- Toggle Switch for Billing -->
        <div class="billing-toggle-section fade-in" :style="{ animationDelay: '0.2s' }">
          <div class="toggle-container">
            <span class="toggle-label" :class="{ active: billingCycle === 'monthly' }">Monthly</span>
            <label class="switch">
              <input type="checkbox" v-model="billingCycle" true-value="yearly" false-value="monthly">
              <span class="slider"></span>
            </label>
            <span class="toggle-label" :class="{ active: billingCycle === 'yearly' }">
              Yearly
              <span class="discount-badge">Save 30%</span>
            </span>
          </div>
          <p class="toggle-note">Switch to yearly billing for the best value</p>
        </div>

        <!-- Plans Grid -->
        <div class="plans-grid">
          <!-- Free Plan -->
          <div class="plan-card slide-in-up" :style="{ animationDelay: '0.3s' }">
            <div class="plan-header">
              <div class="plan-icon">🌿</div>
              <h3>Free</h3>
              <p class="plan-description">Begin your mindfulness journey</p>
            </div>
            
            <div class="plan-price">
              <div class="price-amount">R 0</div>
              <div class="price-period">forever</div>
            </div>

            <ul class="plan-features">
              <li><span class="feature-icon">✓</span> Basic meditation library (10 sessions)</li>
              <li><span class="feature-icon">✓</span> Daily mood tracking</li>
              <li><span class="feature-icon">✓</span> Community access</li>
              <li><span class="feature-icon">✓</span> Weekly insights report</li>
              <li class="feature-disabled"><span class="feature-icon">✗</span> Advanced analytics</li>
              <li class="feature-disabled"><span class="feature-icon">✗</span> Personalized coaching</li>
              <li class="feature-disabled"><span class="feature-icon">✗</span> Offline downloads</li>
            </ul>

            <button class="plan-btn free-btn" @click="selectPlan('free')">
              Start Free Journey
            </button>
          </div>

          <!-- Premium Plan -->
          <div class="plan-card premium slide-in-up" :style="{ animationDelay: '0.4s' }">
            <div class="plan-badge">MOST POPULAR</div>
            <div class="plan-header">
              <div class="plan-icon">🌟</div>
              <h3>Premium</h3>
              <p class="plan-description">Elevate your practice</p>
            </div>
            
            <div class="plan-price">
              <div class="price-amount">
                {{ billingCycle === 'monthly' ? 'R 99' : 'R 831' }}
                <span class="price-yearly" v-if="billingCycle === 'yearly'">(R 69/month)</span>
              </div>
              <div class="price-period">{{ billingCycle === 'monthly' ? 'per month' : 'per year' }}</div>
            </div>

            <div class="plan-savings" v-if="billingCycle === 'yearly'">
              <span class="savings-icon">💰</span>
              Save R 357 over monthly
            </div>

            <ul class="plan-features">
              <li><span class="feature-icon">✓</span> Unlimited meditation library</li>
              <li><span class="feature-icon">✓</span> Advanced mood analytics</li>
              <li><span class="feature-icon">✓</span> Sleep stories & soundscapes</li>
              <li><span class="feature-icon">✓</span> Personalized daily plans</li>
              <li><span class="feature-icon">✓</span> Offline downloads</li>
              <li><span class="feature-icon">✓</span> Priority community support</li>
              <li><span class="feature-icon">✓</span> Weekly coaching sessions</li>
              <li><span class="feature-icon">✓</span> Family sharing (up to 3)</li>
            </ul>

            <button class="plan-btn premium-btn" @click="selectPlan('premium')">
              Start 7-Day Free Trial
            </button>
            <p class="trial-note">Then {{ billingCycle === 'monthly' ? 'R 99/month' : 'R 831/year' }}</p>
          </div>

          <!-- Ultimate Plan -->
          <div class="plan-card ultimate slide-in-up" :style="{ animationDelay: '0.5s' }">
            <div class="plan-header">
              <div class="plan-icon">💫</div>
              <h3>Ultimate</h3>
              <p class="plan-description">Transform your life</p>
            </div>
            
            <div class="plan-price">
              <div class="price-amount">
                {{ billingCycle === 'monthly' ? 'R 199' : 'R 1,671' }}
                <span class="price-yearly" v-if="billingCycle === 'yearly'">(R 139/month)</span>
              </div>
              <div class="price-period">{{ billingCycle === 'monthly' ? 'per month' : 'per year' }}</div>
            </div>

            <div class="plan-savings" v-if="billingCycle === 'yearly'">
              <span class="savings-icon">💰</span>
              Save R 717 over monthly
            </div>

            <ul class="plan-features">
              <li><span class="feature-icon">✨</span> Everything in Premium</li>
              <li><span class="feature-icon">✓</span> 1-on-1 weekly coaching</li>
              <li><span class="feature-icon">✓</span> AI-powered progress insights</li>
              <li><span class="feature-icon">✓</span> Unlimited family sharing</li>
              <li><span class="feature-icon">✓</span> Corporate wellness tools</li>
              <li><span class="feature-icon">✓</span> Custom meditation creation</li>
              <li><span class="feature-icon">✓</span> Early access to new features</li>
              <li><span class="feature-icon">✓</span> Dedicated success manager</li>
            </ul>

            <button class="plan-btn ultimate-btn" @click="selectPlan('ultimate')">
              Start 7-Day Free Trial
            </button>
            <p class="trial-note">Then {{ billingCycle === 'monthly' ? 'R 199/month' : 'R 1,671/year' }}</p>
          </div>
        </div>

        <!-- Comparison Table -->
        <div class="comparison-section fade-in" :style="{ animationDelay: '0.6s' }">
          <h2>Compare Plans</h2>
          <div class="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Free</th>
                  <th>Premium</th>
                  <th>Ultimate</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="feature in comparisonFeatures" :key="feature.name">
                  <td>{{ feature.name }}</td>
                  <td>
                    <span v-if="feature.free === true">✓</span>
                    <span v-else-if="feature.free === false">✗</span>
                    <span v-else>{{ feature.free }}</span>
                  </td>
                  <td>
                    <span v-if="feature.premium === true">✓</span>
                    <span v-else-if="feature.premium === false">✗</span>
                    <span v-else>{{ feature.premium }}</span>
                  </td>
                  <td>
                    <span v-if="feature.ultimate === true">✓</span>
                    <span v-else-if="feature.ultimate === false">✗</span>
                    <span v-else>{{ feature.ultimate }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="faq-section fade-in" :style="{ animationDelay: '0.7s' }">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-grid">
            <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
              <div class="faq-question" @click="toggleFaq(index)">
                <span>{{ faq.question }}</span>
                <span class="faq-icon">{{ expandedFaq === index ? '−' : '+' }}</span>
              </div>
              <div class="faq-answer" v-if="expandedFaq === index">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="cta-section fade-in" :style="{ animationDelay: '0.8s' }">
          <div class="cta-content">
            <h2>Ready to transform your mindfulness journey?</h2>
            <p>Join 50,000+ members who've found peace and clarity with ForgeMind</p>
            <button class="cta-btn" @click="scrollToPlans">
              Choose Your Plan
            </button>
          </div>
          <div class="testimonial">
            <div class="testimonial-content">
              "ForgeMind completely transformed my daily routine. The Premium plan gave me tools I didn't even know I needed!"
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">SM</div>
              <div class="author-info">
                <div class="author-name">Sarah M.</div>
                <div class="author-role">Premium Member • 2 years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Payment Modal -->
    <div v-if="showPaymentModal" class="payment-modal">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-content slide-in-up">
        <button class="modal-close" @click="closeModal">×</button>
        <h2>Complete Your Subscription</h2>
        <div class="modal-plan">
          <div class="modal-plan-icon">{{ selectedPlan.icon }}</div>
          <div class="modal-plan-info">
            <h3>{{ selectedPlan.name }} Plan</h3>
            <div class="modal-price">{{ selectedPlan.price }}</div>
            <div class="modal-period">{{ selectedPlan.period }}</div>
          </div>
        </div>
        
        <div class="payment-form">
          <div class="form-group">
            <label>Card Information</label>
            <div class="card-input">
              <input type="text" placeholder="1234 1234 1234 1234" v-model="cardNumber">
              <div class="card-details">
                <input type="text" placeholder="MM/YY" v-model="cardExpiry">
                <input type="text" placeholder="CVC" v-model="cardCvc">
              </div>
            </div>
          </div>
          
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" v-model="email">
          </div>
          
          <div class="security-note">
            <span class="security-icon">🔒</span>
            Your payment is secure and encrypted
          </div>
          
          <button class="confirm-btn" @click="processPayment" :disabled="processingPayment">
            {{ processingPayment ? 'Processing...' : `Start ${selectedPlan.trial ? '7-Day Free Trial' : 'Subscription'}` }}
          </button>
          
          <p class="terms-note">
            By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'

const billingCycle = ref('monthly')
const expandedFaq = ref(null)
const showPaymentModal = ref(false)
const processingPayment = ref(false)
const selectedPlan = ref({})
const cardNumber = ref('')
const cardExpiry = ref('')
const cardCvc = ref('')
const email = ref('')

const comparisonFeatures = [
  { name: 'Meditation Sessions', free: '10 basic', premium: 'Unlimited', ultimate: 'Unlimited + Custom' },
  { name: 'Daily Mood Tracking', free: true, premium: true, ultimate: true },
  { name: 'Advanced Analytics', free: false, premium: true, ultimate: true },
  { name: 'Sleep Stories', free: false, premium: true, ultimate: true },
  { name: 'Personal Coaching', free: false, premium: 'Weekly Group', ultimate: '1-on-1 Weekly' },
  { name: 'Offline Downloads', free: false, premium: true, ultimate: true },
  { name: 'Family Sharing', free: false, premium: 'Up to 3', ultimate: 'Unlimited' },
  { name: 'Priority Support', free: false, premium: true, ultimate: true },
  { name: 'Custom Content Creation', free: false, premium: false, ultimate: true },
  { name: 'Dedicated Manager', free: false, premium: false, ultimate: true }
]

const faqs = [
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely! You can cancel your subscription at any time. Your access will continue until the end of your current billing period.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 7-day free trial for all paid plans. If you\'re not satisfied within the first 30 days of paid subscription, we offer a full refund.'
  },
  {
    question: 'Can I switch between plans?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will take effect immediately with pro-rated billing.'
  },
  {
    question: 'Is there a family plan?',
    answer: 'Both Premium and Ultimate plans include family sharing. Premium allows up to 3 family members, while Ultimate offers unlimited sharing.'
  },
  {
    question: 'Do you offer student discounts?',
    answer: 'Yes! Students get 50% off all plans. Contact our support team with your student ID for verification.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and Apple Pay. We also accept direct EFT for South African customers.'
  }
]

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

const toggleFaq = (index) => {
  expandedFaq.value = expandedFaq.value === index ? null : index
}

const selectPlan = (planType) => {
  const planDetails = {
    free: {
      name: 'Free',
      icon: '🌿',
      price: 'R 0',
      period: 'forever',
      trial: false
    },
    premium: {
      name: 'Premium',
      icon: '🌟',
      price: billingCycle.value === 'monthly' ? 'R 99' : 'R 831',
      period: billingCycle.value === 'monthly' ? 'per month' : 'per year',
      trial: true
    },
    ultimate: {
      name: 'Ultimate',
      icon: '💫',
      price: billingCycle.value === 'monthly' ? 'R 199' : 'R 1,671',
      period: billingCycle.value === 'monthly' ? 'per month' : 'per year',
      trial: true
    }
  }
  
  selectedPlan.value = planDetails[planType]
  
  if (planType === 'free') {
    // For free plan, just show confirmation
    alert('🎉 Welcome to ForgeMind! Your free account is now active. Start your mindfulness journey today!')
    // In real app, you would redirect to dashboard
    // router.push('/dashboard')
  } else {
    showPaymentModal.value = true
  }
}

const closeModal = () => {
  if (!processingPayment.value) {
    showPaymentModal.value = false
    cardNumber.value = ''
    cardExpiry.value = ''
    cardCvc.value = ''
    email.value = ''
  }
}

const processPayment = () => {
  if (!cardNumber.value || !cardExpiry.value || !cardCvc.value || !email.value) {
    alert('Please fill in all payment details')
    return
  }
  
  processingPayment.value = true
  
  // Simulate payment processing
  setTimeout(() => {
    processingPayment.value = false
    showPaymentModal.value = false
    
    // Show success message
    alert(`🎉 Welcome to ForgeMind ${selectedPlan.value.name}! Your 7-day free trial has started. Check your email for confirmation.`)
    
    // Reset form
    cardNumber.value = ''
    cardExpiry.value = ''
    cardCvc.value = ''
    email.value = ''
    
    // In real app, you would redirect to dashboard
    // router.push('/dashboard')
  }, 2000)
}

const scrollToPlans = () => {
  const plansSection = document.querySelector('.plans-grid')
  if (plansSection) {
    plansSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.subscription-page {
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

.subscription-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
}

.subscription-header {
  text-align: center;
  margin-bottom: 50px;
}

.subscription-header h1 {
  font-family: 'IM Fell English SC', serif;
  color: #2c5530;
  font-size: 3rem;
  margin-bottom: 15px;
}

.subscription-header p {
  color: #4a7c59;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(79, 185, 175, 0.1);
  padding: 10px 20px;
  border-radius: 25px;
  color: #4a7c59;
  font-size: 0.9rem;
}

.badge-icon {
  font-size: 1.1rem;
}

/* Billing Toggle */
.billing-toggle-section {
  text-align: center;
  margin-bottom: 60px;
}

.toggle-container {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  background: white;
  padding: 15px 30px;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  margin-bottom: 15px;
}

.toggle-label {
  font-weight: 600;
  color: #4a7c59;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.toggle-label.active {
  color: #2c5530;
}

.discount-badge {
  background: linear-gradient(135deg, #FF6B6B, #FF8E53);
  color: white;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider:before {
  transform: translateX(30px);
}

.toggle-note {
  color: #4a7c59;
  font-size: 0.9rem;
}

/* Plans Grid */
.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.plan-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  border: 2px solid #e0f2e1;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(79, 185, 175, 0.15);
}

.plan-card.premium {
  border-color: #4fb9af;
  transform: scale(1.05);
}

.plan-card.premium:hover {
  transform: scale(1.05) translateY(-10px);
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  padding: 6px 20px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.plan-header {
  text-align: center;
  margin-bottom: 30px;
}

.plan-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.plan-header h3 {
  color: #2c5530;
  font-size: 2rem;
  margin-bottom: 10px;
}

.plan-description {
  color: #4a7c59;
  font-size: 1rem;
}

.plan-price {
  text-align: center;
  margin-bottom: 20px;
}

.price-amount {
  font-size: 3rem;
  font-weight: 700;
  color: #2c5530;
  line-height: 1;
  margin-bottom: 5px;
}

.price-yearly {
  font-size: 1rem;
  color: #4a7c59;
  font-weight: 400;
}

.price-period {
  color: #4a7c59;
  font-size: 1rem;
}

.plan-savings {
  text-align: center;
  background: rgba(255, 193, 7, 0.1);
  color: #ff9800;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.savings-icon {
  font-size: 1.1rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  flex-grow: 1;
}

.plan-features li {
  padding: 12px 0;
  color: #333;
  border-bottom: 1px solid #e0f2e1;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.plan-features li:last-child {
  border-bottom: none;
}

.feature-icon {
  color: #4fb9af;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 2px;
}

.feature-disabled {
  color: #ccc;
}

.feature-disabled .feature-icon {
  color: #ccc;
}

.plan-btn {
  width: 100%;
  padding: 18px;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.free-btn {
  background: #f8fdf8;
  color: #4a7c59;
  border: 2px solid #e0f2e1;
}

.free-btn:hover {
  background: #e0f2e1;
  transform: translateY(-2px);
}

.premium-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
}

.premium-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(79, 185, 175, 0.3);
}

.ultimate-btn {
  background: linear-gradient(135deg, #7F00FF, #E100FF);
  color: white;
}

.ultimate-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(127, 0, 255, 0.3);
}

.trial-note {
  text-align: center;
  color: #4a7c59;
  font-size: 0.9rem;
  margin: 0;
}

/* Comparison Table */
.comparison-section {
  margin-bottom: 80px;
}

.comparison-section h2 {
  text-align: center;
  color: #2c5530;
  margin-bottom: 40px;
  font-size: 2.2rem;
}

.comparison-table {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(79, 185, 175, 0.1);
  border: 2px solid #e0f2e1;
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
}

.comparison-table th {
  text-align: left;
  padding: 20px;
  background: #f8fdf8;
  color: #2c5530;
  font-weight: 600;
  border-bottom: 2px solid #e0f2e1;
}

.comparison-table th:first-child {
  border-radius: 10px 0 0 0;
}

.comparison-table th:last-child {
  border-radius: 0 10px 0 0;
}

.comparison-table td {
  padding: 20px;
  border-bottom: 1px solid #e0f2e1;
  color: #333;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.comparison-table td:first-child {
  font-weight: 500;
  color: #2c5530;
}

.comparison-table td:not(:first-child) {
  text-align: center;
  font-size: 1.2rem;
}

/* FAQ Section */
.faq-section {
  margin-bottom: 80px;
}

.faq-section h2 {
  text-align: center;
  color: #2c5530;
  margin-bottom: 40px;
  font-size: 2.2rem;
}

.faq-grid {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 15px;
}

.faq-item {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid #e0f2e1;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #4fb9af;
}

.faq-question {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  color: #2c5530;
  font-size: 1.1rem;
}

.faq-question:hover {
  background: #f8fdf8;
}

.faq-icon {
  font-size: 1.5rem;
  color: #4fb9af;
  font-weight: 300;
}

.faq-answer {
  padding: 0 20px 20px 20px;
  color: #4a7c59;
  line-height: 1.6;
  border-top: 1px solid #e0f2e1;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  border-radius: 20px;
  padding: 60px;
  color: white;
  text-align: center;
  margin-bottom: 60px;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: white;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-btn {
  background: white;
  color: #4fb9af;
  border: none;
  padding: 18px 40px;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

.testimonial {
  margin-top: 40px;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  text-align: left;
  backdrop-filter: blur(10px);
}

.testimonial-content {
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 20px;
  line-height: 1.6;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  background: white;
  color: #4fb9af;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.author-name {
  font-weight: 600;
  font-size: 1.1rem;
}

.author-role {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Payment Modal */
.payment-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 40px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1001;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #4a7c59;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: #f8fdf8;
}

.modal-content h2 {
  color: #2c5530;
  text-align: center;
  margin-bottom: 30px;
}

.modal-plan {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #f8fdf8;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;
}

.modal-plan-icon {
  font-size: 3rem;
}

.modal-plan-info h3 {
  color: #2c5530;
  margin: 0 0 5px 0;
}

.modal-price {
  font-size: 2rem;
  font-weight: 700;
  color: #4fb9af;
}

.modal-period {
  color: #4a7c59;
  font-size: 0.9rem;
}

.payment-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group label {
  display: block;
  color: #2c5530;
  margin-bottom: 8px;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  padding: 15px;
  border: 2px solid #e0f2e1;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #4fb9af;
  box-shadow: 0 0 0 3px rgba(79, 185, 175, 0.1);
}

.card-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-details {
  display: flex;
  gap: 10px;
}

.card-details input {
  flex: 1;
}

.security-note {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4a7c59;
  font-size: 0.9rem;
  justify-content: center;
}

.security-icon {
  font-size: 1.2rem;
}

.confirm-btn {
  background: linear-gradient(135deg, #4fb9af, #8bc34a);
  color: white;
  border: none;
  padding: 18px;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.confirm-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(79, 185, 175, 0.3);
}

.confirm-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.terms-note {
  text-align: center;
  color: #4a7c59;
  font-size: 0.8rem;
  margin-top: 20px;
}

.terms-note a {
  color: #4fb9af;
  text-decoration: none;
}

.terms-note a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .plans-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .plan-card.premium {
    transform: none;
  }
  
  .plan-card.premium:hover {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .subscription-main {
    padding: 20px 15px;
  }
  
  .subscription-header h1 {
    font-size: 2.2rem;
  }
  
  .subscription-header p {
    font-size: 1.1rem;
  }
  
  .plans-grid {
    gap: 20px;
  }
  
  .plan-card {
    padding: 25px 20px;
  }
  
  .price-amount {
    font-size: 2.5rem;
  }
  
  .cta-section {
    padding: 40px 20px;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .comparison-table {
    padding: 15px;
  }
  
  .comparison-table th,
  .comparison-table td {
    padding: 12px;
  }
  
  .modal-content {
    padding: 30px 20px;
    width: 95%;
  }
}

@media (max-width: 480px) {
  .toggle-container {
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }
  
  .switch {
    transform: rotate(90deg);
  }
  
  .comparison-table {
    font-size: 0.9rem;
  }
  
  .faq-question {
    font-size: 1rem;
    padding: 15px;
  }
}
</style>