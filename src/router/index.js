import { createRouter, createWebHistory } from 'vue-router'
import BookList from '../views/BookList.vue'
import BookDetail from '../views/BookDetail.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'bookList' }
  },
  {
    path: '/books',
    name: 'bookList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: { default: BookList }
  },
  {
    path: '/books/:bookId([0-9]+)',
    name: 'bookDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: { default: BookDetail }
  },
  {
    path: '/404',
    name: 'notFound',
    components: {
      default: NotFoundPage
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'notFound' },
    hidden: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
