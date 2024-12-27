<template>
  <div class="flex flex-col items-center">
    <h1 class="mb-2 text-center">{{currentCard.cardName}}</h1>

    <div
      class="flex items-end"
    >
      <img class="w-48 mr-4" src="https://fakeimg.pl/192x144/">
      <p class="inline-block">
        {{ currentCard.currentPoints }}/{{ currentCard.totalPoints }}
      </p>
    </div>
    <p class="text-gray-500">
        建立日期：{{ currentCard.createdAt }}
    </p>
    <p class="text-gray-500">
        目標獎勵：{{ currentCard.reward }}
    </p>
    <!-- 點數渲染 -->
    <div  class="w-full p-4 flex flex-wrap justify-start">
      <div v-for="log in currentCard.logs" :key="log.id"
        class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mr-4 mb-4"
      >
        <div class="w-8 h-8 bg-red-500 rounded-full"></div>
      </div>
      <div v-for="n in remainingPoints" :key="'remaining-' + n"
        class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mr-4"
      >
      </div>
    </div>
    <!-- 集點按鈕 -->
    <div class="flex items-center fixed bottom-12 right-8">
      <button
        class="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup>

import { useRoute } from 'vue-router';
import useCardsStore from '@/stores/cards';

const route = useRoute();
const cardsStore = useCardsStore();

// 取 URL 上的卡片 id
const cardId = route.params.id;

// 利用 store 提供的 getCardById() 把資料找出來
const currentCard = cardsStore.getCardById(cardId);

const remainingPoints = currentCard.totalPoints - currentCard.logs.length;
</script>

<style scoped>
</style>
