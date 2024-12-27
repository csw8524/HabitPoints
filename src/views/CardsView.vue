<template>
  <div class="pb-12">
    <h1 class="mb-2 text-center">我的集點卡</h1>
    <div
      v-for="card in cards"
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

const cards = ref([
  {
    id: 1,
    cardName: '我的健康習慣卡',
    totalPoints: 10,
    currentPoints: 3,
    reward: '免費健身課程',
    logs: [
      {
        id: 1, date: '2023-10-01', points: 1, note: '跑步30分鐘',
      },
      {
        id: 2, date: '2023-10-02', points: 2, note: '參加瑜伽課',
      },
    ],
  },
  {
    id: 2,
    cardName: '讀書進步卡',
    totalPoints: 5,
    currentPoints: 2,
    reward: '新書一本',
    logs: [
      {
        id: 1, date: '2023-10-03', points: 1, note: '讀了一章書',
      },
      {
        id: 2, date: '2023-10-04', points: 1, note: '寫了讀書心得',
      },
    ],
  },
  {
    id: 3,
    cardName: '環保行動卡',
    totalPoints: 8,
    currentPoints: 5,
    reward: '不鏽鋼吸管一套',
    logs: [
      {
        id: 1, date: '2023-10-05', points: 1, note: '回收塑膠瓶',
      },
      {
        id: 2, date: '2023-10-06', points: 2, note: '購買環保購物袋',
      },
      {
        id: 3, date: '2023-10-07', points: 2, note: '步行上班',
      },
    ],
  },
  {
    id: 4,
    cardName: '語言學習卡',
    totalPoints: 20,
    currentPoints: 12,
    reward: '語言學習軟體月費免費',
    logs: [
      {
        id: 1, date: '2023-10-08', points: 3, note: '完成一個語言交換',
      },
      {
        id: 2, date: '2023-10-09', points: 5, note: '通過語言能力測試',
      },
      {
        id: 3, date: '2023-10-10', points: 4, note: '完成一本外語書籍',
      },
    ],
  },
  {
    id: 5,
    cardName: '日常運動卡',
    totalPoints: 15,
    currentPoints: 15,
    reward: '運動裝備折扣券',
    logs: [
      {
        id: 1, date: '2023-10-11', points: 5, note: '參加馬拉松',
      },
      {
        id: 2, date: '2023-10-12', points: 5, note: '完成健身房訓練',
      },
      {
        id: 3, date: '2023-10-13', points: 5, note: '參加自行車遠足',
      },
    ],
  },
]);

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
  const card = {
    id: cards.value.length + 1,
    cardName: newCard.value.cardName,
    totalPoints: newCard.value.totalPoints,
    currentPoints: 0,
    reward: newCard.value.reward,
    logs: [],
  };
  cards.value.push(card);
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
