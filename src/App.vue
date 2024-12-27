<template>
  <div class="w-full h-full pt-4 flex">
    <!-- 電腦版側邊欄選單 -->
    <div
      class="hidden md:flex flex-col fixed top-0 left-0
        h-full w-64 bg-white border-r border-gray-300 shadow-md"
    >
      <div class="flex flex-col py-4">
        <RouterLink
          to="/"
          class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
        >
          <i class="fas fa-home text-lg"></i>
          <span class="ml-3">首頁</span>
        </RouterLink>
        <RouterLink
          to="/cards"
          class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
        >
          <i class="fas fa-gift text-lg"></i>
          <span class="ml-3">集點卡</span>
        </RouterLink>
        <RouterLink
          to="/rewards"
          class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
        >
          <i class="fas fa-trophy text-lg"></i>
          <span class="ml-3">獎勵</span>
        </RouterLink>
        <RouterLink
          to="/profile"
          class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
        >
          <i class="fas fa-user text-lg"></i>
          <span class="ml-3">個人資料</span>
        </RouterLink>
      </div>
    </div>
    <div class="flex-1 md:ml-64">
      <RouterView />
    </div>
    <!-- 手機版底部選單 -->
    <div
      class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md md:hidden"
    >
      <div class="flex justify-around items-center py-2">
        <RouterLink to="/" class="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <i class="fas fa-home text-xl"></i>
          <span class="text-xs">首頁</span>
        </RouterLink>
        <RouterLink
          to="/cards"
          class="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <i class="fas fa-gift text-xl"></i>
          <span class="text-xs">集點卡</span>
        </RouterLink>
        <RouterLink
          to="/rewards"
          class="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <i class="fas fa-trophy text-xl"></i>
          <span class="text-xs">獎勵</span>
        </RouterLink>
        <RouterLink
          to="/profile"
          class="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <i class="fas fa-user text-xl"></i>
          <span class="text-xs">個人資料</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

</style>
