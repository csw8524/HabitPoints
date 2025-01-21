import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('rewardsStore', () => {
  const rewards = ref([
    {
      id: 1,
      title: 'SPA兌換券',
      cardName: '健身集點卡',
      isRedeemed: true,
      createdAt: '2022-09-01',
    },
    {
      id: 2,
      title: '買一個喜歡的東西',
      cardName: '打掃集點卡',
      isRedeemed: false,
      createdAt: '2024-09-01',
    },
    {
      id: 3,
      title: '看一場電影',
      cardName: '閱讀集點卡',
      isRedeemed: true,
      createdAt: '2024-10-01',
    },
    {
      id: 4,
      title: '看一場電影',
      cardName: '閱讀集點卡',
      isRedeemed: false,
      createdAt: '2024-11-11',
    },
  ]);

  // 兌換獎勵
  function redeemReward(rewardId) {
    const rewardTarget = rewards.value.find((reward) => reward.id === rewardId);
    rewardTarget.isRedeemed = true;
  }

  return {
    rewards,
    redeemReward,
  };
});
