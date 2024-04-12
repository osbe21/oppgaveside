import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SignupView from '@/views/SignupView.vue'
import UploadView from '@/views/UploadView.vue'
import AllDocumentsView from '@/views/AllDocumentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Hjemside',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Logg Inn',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'Lag Bruker',
      component: SignupView
    },
    {
      path: '/profile',
      name: 'Min Profil',
      component: ProfileView
    },
    {
      path: '/upload',
      name: 'Last Opp',
      component: UploadView
    },
    {
      path: '/alldocuments',
      name: 'Alle Tekster',
      component: AllDocumentsView
    }
  ]
})

export default router
