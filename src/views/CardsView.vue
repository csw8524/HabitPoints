<template>
  <div class="pb-12">
    <h1 class="mb-2 text-center">我的集點卡</h1>
    <div
      v-for="card in cardsStore.cards"
      :key="card.id"
      class="w-3/4 bg-white shadow-lg rounded-lg p-5 space-y-4 my-4 mx-auto"
    >
      <RouterLink
        :to="{ name: 'Card', params: { id: card.id } }"
      >
        <h2 class="text-lg text-black font-bold">{{ card.cardName }}</h2>
        <p class="text-gray-700">{{ card.currentPoints }} / {{ card.totalPoints }}</p>
        <div class="w-full bg-gray-200 rounded-full h-2.5 mr-4">
          <div class="bg-blue-600 h-2.5 rounded-full" :style="progressStyle(card)"></div>
        </div>
      </RouterLink>
    </div>
  </div>
  <!-- 集點按鈕 -->
  <div @click="showModal" class="flex items-center fixed bottom-12 right-8">
    <button
      class="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center"
    >
      +
    </button>
  </div>

  <!-- 新增集點卡的表單彈窗 -->
  <div v-if="isModalVisible" @click.self="hideModal"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center" >
    <div class="bg-white p-6 rounded-lg shadow-lg w-80" @click.stop>
      <h2 class="text-lg font-bold mb-4">新增集點卡</h2>
      <form @submit.prevent="addNewCard">
        <div class="mb-4">
          <label class="block text-gray-700">名稱</label>
          <input v-model="newCard.cardName"
            type="text" class="w-full border border-gray-300 p-2 rounded" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">點數數量</label>
          <input v-model.number="newCard.totalPoints"
            type="number" min="1"
            class="w-full border border-gray-300 p-2 rounded" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">目標獎勵</label>
          <input v-model="newCard.reward"
            type="text" class="w-full border border-gray-300 p-2 rounded" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">備註</label>
          <textarea v-model="newCard.note"
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
import useCardsStore from '@/stores/cards';

const cardsStore = useCardsStore();

const isModalVisible = ref(false);

const newCard = ref({
  cardName: '',
  totalPoints: 0,
  reward: '',
  note: '',
});

const showModal = () => {
  isModalVisible.value = true;
};

const hideModal = () => {
  isModalVisible.value = false;
};

const addNewCard = () => {
  cardsStore.addCard({
    cardName: newCard.value.cardName,
    totalPoints: newCard.value.totalPoints,
    reward: newCard.value.reward,
  });

  hideModal();
  // 清空表單
  newCard.value = {
    cardName: '',
    totalPoints: 0,
    reward: '',
    note: '',
  };
};

const progressStyle = (card) => {
  const width = (card.currentPoints / card.totalPoints) * 100;
  return { width: `${width}%` };
};
</script>

<style scoped>
</style>
