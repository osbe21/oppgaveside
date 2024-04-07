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
      component: HomeView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/signup',
      component: SignupView
    },
    {
      path: '/profile',
      component: ProfileView
    },
    {
      path: '/upload',
      component: UploadView
    },
    {
      path: '/alldocuments',
      component: AllDocumentsView
    }
  ]
})

export default router
