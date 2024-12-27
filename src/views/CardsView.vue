<template>
  <div class="">
    <h1 class="mb-2 text-center">集點卡</h1>
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
        <!-- <button
          class="mt-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          @click="addPoint(card)"
        >
          增加點數
        </button> -->
      </RouterLink>
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

const progressStyle = (card) => {
  const width = (card.currentPoints / card.totalPoints) * 100;
  return { width: `${width}%` };
};

// function addPoint(card) {
//   const cardIndex = cards.value.findIndex((c) => c.id === card.id);
//   if (cardIndex !== -1
//       && cards.value[cardIndex].currentPoints < cards.value[cardIndex].totalPoints) {
//     const updatedCard = {
//       ...cards.value[cardIndex],
//       currentPoints: cards.value[cardIndex].currentPoints + 1,
//       logs: [
//         ...cards.value[cardIndex].logs,
//         {
//           id: cards.value[cardIndex].logs.length + 1,
//           date: new Date().toISOString().slice(0, 10), // 今天的日期
//           points: 1,
//           note: '手動增加點數',
//         },
//       ],
//     };

//     // 更新 cards 陣列
//     cards.value.splice(cardIndex, 1, updatedCard);
//   }
// }
</script>

<style scoped>
</style>
