<template>
  <h1 class="mb-2 text-center">我的獎勵</h1>
  <div v-for="reward in rewards" :key="reward.id"
    class="w-3/4 bg-white shadow-lg rounded-lg p-5 space-y-4 my-4 mx-auto"
  >
    <p>{{ reward.title }}</p>
    <p class="text-right text-xs">{{ reward.cardName }}</p>
  </div>
  <div v-for="reward in redeemedRewards" :key="reward.id"
    class="w-3/4 bg-gray-300 text-gray-500 shadow-lg rounded-lg p-5 space-y-4 my-4 mx-auto"
  >
    <p>{{ reward.title }}</p>
    <p class="text-right text-xs">{{ reward.cardName }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useRewardsStore from '@/stores/rewards';

const rewardsStore = useRewardsStore();
// 過濾出未兌換的獎勵
const rewards = computed(() => rewardsStore.rewards.filter((reward) => !reward.isRedeemed));
// 過濾出兌換過的獎勵
const redeemedRewards = computed(() => rewardsStore.rewards.filter((reward) => reward.isRedeemed));
</script>

<style scoped>
</style>
