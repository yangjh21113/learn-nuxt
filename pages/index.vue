<template>
	<div class="box">hello</div>
	<div class="text-[43px] text-[red]" @click="changeName">{{ store.name }}</div>
	<NuxtIcon name="arrow-right" class="text-[100px]" />
</template>
<script lang="ts" setup>
import { useStore } from '../store/index'

const store = useStore()
function changeName(): void {
	store.name = 'new Name'
}
</script>
<style lang="scss" scoped>
@import url(../assets/css/common.scss);
</style>
