import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignUpPage.vue'
import SuccessPage from '@/views/SuccessPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ServicesPage from '@/views/ServicesPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import JournalPage from '@/views/JournalPage.vue'
import ResourcesPage from '@/views/ResourcesPage.vue'
import CommunityPage from '@/views/CommunityPage.vue'
import SubscriptionPage from '@/views/SubscriptionPage.vue' 

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/signup', name: 'Signup', component: SignupPage },
  { path: '/success', name: 'Success', component: SuccessPage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/services', name: 'Services', component: ServicesPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/dashboard', name: 'Dashboard', component: DashboardPage },
  { path: '/journal', name: 'Journal', component: JournalPage },
  { path: '/resources', name: 'Resources', component: ResourcesPage },
  { path: '/community', name: 'Community', component: CommunityPage },
  { path: '/subscription', name: 'Subscription', component: SubscriptionPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router


