import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('cardsStore', () => {
  const cards = ref([
    {
      id: 1,
      cardName: '我的健康習慣卡',
      totalPoints: 10,
      currentPoints: 3,
      reward: '免費健身課程',
      createdAt: '2023/9/19',
      logs: [
        {
          id: 1,
          date: '2023-10-01',
          note: '跑步30分鐘',
        },
        {
          id: 2,
          date: '2023-10-02',
          note: '參加瑜伽課',
        },
      ],
    },
    {
      id: 2,
      cardName: '讀書進步卡',
      totalPoints: 5,
      currentPoints: 2,
      reward: '新書一本',
      createdAt: '2023/10/03',
      logs: [
        {
          id: 1,
          date: '2023-10-03',
          note: '讀了一章書',
        },
        {
          id: 2,
          date: '2023-10-04',
          note: '寫了讀書心得',
        },
      ],
    },
    {
      id: 3,
      cardName: '環保行動卡',
      totalPoints: 8,
      currentPoints: 2,
      reward: '不鏽鋼吸管一套',
      createdAt: '2023/10/10',
      logs: [
        {
          id: 1,
          date: '2023-10-11',
          note: '騎腳踏車代步',
        },
        {
          id: 2,
          date: '2023-10-12',
          note: '自備環保杯',
        },
      ],
    },
    {
      id: 4,
      cardName: '工作效率卡',
      totalPoints: 12,
      currentPoints: 5,
      reward: '下午茶大放送',
      createdAt: '2023/10/15',
      logs: [
        {
          id: 1,
          date: '2023-10-16',
          note: '一次處理三封重要信件',
        },
        {
          id: 2,
          date: '2023-10-17',
          note: '完成專案報告初稿',
        },
      ],
    },
    {
      id: 5,
      cardName: '趣味挑戰卡',
      totalPoints: 6,
      currentPoints: 1,
      reward: '桌遊聚會一次',
      createdAt: '2023/10/18',
      logs: [
        {
          id: 1,
          date: '2023-10-19',
          note: '挑戰新桌遊規則教學',
        },
      ],
    },
  ]);

  // 新增集點卡
  function addCard(newCardData) {
    // 先簡單幫它設定一個遞增的 id
    const newId = cards.value.length
      ? cards.value[cards.value.length - 1].id + 1
      : 1;
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const today = `${year}/${month}/${day}`;
    const card = {
      id: newId,
      cardName: newCardData.cardName,
      totalPoints: newCardData.totalPoints,
      currentPoints: 0,
      reward: newCardData.reward,
      createdAt: today,
      logs: [],
    };
    // push 到 cards 裡
    cards.value.push(card);
  }

  // 新增集點
  function addLogToCard(cardId, newLogData) {
    const card = cards.value.find((c) => c.id === cardId);
    if (!card) return;

    // 找出最後一筆 log id + 1
    let newLogId = 1;
    if (card.logs.length > 0) {
      newLogId = card.logs[card.logs.length - 1].id + 1;
    }

    // 寫進 logs
    card.logs.push({
      id: newLogId,
      date: newLogData.date,
      points: newLogData.points,
      note: newLogData.note,
    });

    // 順便更新 currentPoints
    card.currentPoints += newLogData.points;
  }

  // 取得單一卡片資料
  function getCardById(id) {
    return cards.value.find((card) => card.id === Number(id));
  }

  return {
    cards,
    addCard,
    getCardById,
    addLogToCard,
  };
});
