<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref(null)

const userSignUp = async () => {
  error.value = null
// provjera da su dvije upisane lozinke iste
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match! Try again'
    return
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
    await updateProfile(userCredential.user, { displayName: name.value })
// ulaz u aplikaciju kada se registrira korisnik 
    router.push('/main') 
  } catch (err) {
    error.value = err.message
  }
}
</script>


<template>
  <div class="fixed inset-0 backdrop-blur-sm transition-all bg-black/50 flex items-center justify-center p-4 z-5000000">
    <div class="bg-gray-800 rounded-xl p-6 max-w-md w-full">
      <RouterLink to="/">
        <img
          src="../assets/app_logo.png"
          alt="App logo"
          class="h-30 w-65 object-scale-down mx-auto block"/>
      </RouterLink>
      <br>
      <h2 class="text-2xl font-bold mb-4 text-white text-center">
        Create your Media Record account:
      </h2>

      <input v-model="name"
        placeholder="Name..."
        type="name"
        class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
      />
      <input v-model="email"
        placeholder="E-mail..."
        type="email"
        class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
      />
      <input v-model="password"
        placeholder="Password..."
        type="password"
        class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
      />
      <input v-model="confirmPassword"
        placeholder="Confirm password..."
        type="password"
        class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
      />

         <!--error message ako se lozinke ne podudaraju-->  
        <p v-if="error" class="mb-4 text-sm text-emerald-500">{{ error }}</p>

      <div class="flex justify-between items-center">
        <RouterLink
          to="/login"
          class="text-sm text-slate-400 hover:text-emerald-400 hover:underline cursor-pointer">
          Already have an account? Log in
        </RouterLink>  

          <button @click="userSignUp"
            class="px-4 py-2 bg-gradient-to-br from-violet-700 to-emerald-500 text-white rounded-lg transition-all shadow-lg cursor-pointer hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
            Sign up
          </button>
      </div>
    </div>
  </div>
</template>