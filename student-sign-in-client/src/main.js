import { createApp } from 'vue'
import App from './App.vue'
import StudentService from '@/services/StudentService.js'



let app = createApp(App)

app.config.globalProperties.$student_api = StudentService    // renamed $student_service tp $student_api in video 12

app.mount('#app')
