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
    <div  @click="showModal" class="flex items-center fixed bottom-12 right-8">
      <button
        class="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center"
      >
        +
      </button>
    </div>
  </div>

  <!-- 新增集點卡的表單彈窗 -->
  <div v-if="isModalVisible" @click.self="hideModal"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center" >
    <div class="bg-white p-6 rounded-lg shadow-lg w-80" @click.stop>
      <h2 class="text-lg font-bold mb-4">新增集點</h2>
      <form @submit.prevent="addNewPoint">
        <div class="mb-4">
          <label class="block text-gray-700">備註</label>
          <textarea v-model="newPoint.note"
            class="w-full border border-gray-300 p-2 rounded"></textarea>
        </div>
        <div class="flex justify-end">
          <button type="button" @click="hideModal"
            class="bg-gray-500 text-white px-4 py-2 rounded mr-2">取消</button>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">確認</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import useCardsStore from '@/stores/cards';

const route = useRoute();
const cardsStore = useCardsStore();

// 取 URL 上的卡片 id
const cardId = route.params.id;

const isModalVisible = ref(false);

const newPoint = ref({
  note: '',
});

const showModal = () => {
  isModalVisible.value = true;
};

const hideModal = () => {
  isModalVisible.value = false;
};

const addNewPoint = () => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const today = `${year}/${month}/${day}`;

  cardsStore.addLogToCard(Number(cardId), {
    date: today,
    points: 1,
    note: newPoint.value.note,
  });

  hideModal();
  newPoint.value.note = '';
};

// 利用 store 提供的 getCardById() 把資料找出來
const currentCard = cardsStore.getCardById(cardId);

const remainingPoints = currentCard.totalPoints - currentCard.logs.length;
</script>

<style scoped>
</style>
