<template>

  <div class="fixed inset-0 backdrop-blur-sm transition-all bg-black/50 flex items-center justify-center p-4 z-5000000">
        <div class="bg-gray-800 rounded-xl p-6 max-w-md w-full">
            
           <RouterLink to="/"><img src="../assets/app_logo.png" alt="App logo" class="h-30 w-65 object-scale-down mx-auto block"/></RouterLink> <br><!-- dodati logo sliku, centrirati i promijeniti dimenzije-->
            <h2 class="text-2xl text-center font-bold mb-4 text-white">Log in to Media Record:</h2>
            
            <input placeholder="E-mail..." type="text" 
                class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400">
            <input placeholder="Password..." type="password" 
                class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400">
            
                <div class="flex justify-between items-center">
                <RouterLink to="/signup" class="text-sm text-slate-400 hover:text-emerald-400 hover:underline cursor-pointer">
                    Don't have an account? Sign up
                </RouterLink>

                <RouterLink to="/main">
                <button class="px-4 py-2 bg-gradient-to-br from-violet-700 to-emerald-500 text-white rounded-lg transition-all shadow-lg cursor-pointer
                    hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
                    Log in
                </button>
                </RouterLink>
            </div>

        </div>
    </div>

</template>