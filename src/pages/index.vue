<script setup lang="ts">
import { ref } from 'vue'
import { EstimateResponse } from 'types/estimate'
const estimate: Ref<EstimateResponse | {} | null | undefined> = ref()
const getEstimate = async () => {
  const { data } = await useFetch('/api/estimate', {
    method: 'POST',
    body: JSON.stringify({ fixpart: ['door', 'floor'] }),
  })
  estimate.value = data.value
}
</script>

<template>
  <div>
    <UButton @click="getEstimate">
      Get Estimate
    </UButton>
    <pre>{{ estimate }}</pre>
  </div>
</template>
