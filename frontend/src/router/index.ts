import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/Register.vue')
  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import('../views/login/Reset.vue')
  },
  {
    path: '/class',
    name: 'class',
    component: () => import('../views/class/Class.vue')
  },
  {
    path: '/memoirs',
    name: 'memoirs',
    component: () => import('../views/memoirs/Memoirs.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my/My.vue')
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('../views/note/Note.vue')
  },
  {
    path: '/add-note',
    name: 'addNote',
    component: () => import('../views/note/AddNote.vue')
  },
  {
    path: '/note-detail',
    name: 'noteDetail',
    component: () => import('../views/note/Detail.vue')
  },
  {
    path: '/document',
    name: 'document',
    component: () => import('../views/document/Document.vue')
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import('../views/activities/Activities.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
