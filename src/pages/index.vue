<script setup lang="ts">
const config = useRuntimeConfig()
const estimateItem: Ref<any> = ref(null)

async function getEstimate () {
  const { data, error } = await useFetch<any>(
    `${config.public.API_ENDPOINT}/estimate`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        fixpart: 'door,floor',
      }),
    },
  )
  if (error.value) {
    // eslint-disable-next-line no-console
    console.error(error.value)
  } else {
    estimateItem.value = data.value
  }
}
</script>

<template>
  <div>
    <button @click="getEstimate">
      Get Estimate
    </button>
    <pre>{{ estimateItem }}</pre>
  </div>
</template>
