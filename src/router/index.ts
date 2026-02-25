import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import SplashPage from '../views/SplashPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import ForgotPasswordPage from '../views/ForgotPasswordPage.vue'
import ForgotPassword2Page from '../views/ForgotPassword2Page.vue'
import ChangePasswordPage from '../views/ChangePasswordPage.vue'
import ChangePassword2Page from '../views/ChangePassword2Page.vue'
import MenuHomePage from '../views/MenuHomePage.vue'
import CardsPage from '../views/CardsPage.vue'
import MenuSearchPage from '../views/MenuSearchPage.vue'
import MenuTransferPage from '../views/MenuTransferPage.vue'
import TransferSuccessfullyPage from '../views/TransferSuccessfullyPage.vue'
import MenuSettingsPage from '../views/MenuSettingsPage.vue'
import StatisticsPage from '../views/StatisticsPage.vue'
import HelpPage from '../views/HelpPage.vue'
import ChatAIPage from '../views/ChatAIPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '/splash',
    name: 'Splash',
    component: SplashPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPasswordPage
  },
  {
    path: '/forgot-password-2',
    name: 'ForgotPassword2',
    component: ForgotPassword2Page
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePasswordPage
  },
  {
    path: '/change-password-2',
    name: 'ChangePassword2',
    component: ChangePassword2Page
  },
  {
    path: '/menu',
    name: 'MenuHome',
    component: MenuHomePage
  },
  {
    path: '/cards',
    name: 'Cards',
    component: CardsPage
  },
  {
    path: '/menu-search',
    name: 'MenuSearch',
    component: MenuSearchPage
  },
  {
    path: '/transfer',
    name: 'MenuTransfer',
    component: MenuTransferPage
  },
  {
    path: '/transfer-success',
    name: 'TransferSuccessfully',
    component: TransferSuccessfullyPage
  },
  {
    path: '/menu-settings',
    name: 'MenuSettings',
    component: MenuSettingsPage
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: StatisticsPage
  },
  {
    path: '/help',
    name: 'Help',
    component: HelpPage
  },
  {
    path: '/chat-ai',
    name: 'ChatAI',
    component: ChatAIPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
