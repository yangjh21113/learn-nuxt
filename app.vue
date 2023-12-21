<template>
	<NuxtPage />
</template>
<script lang="ts" setup>
import { APIs } from './service/apiList'
import type AxiosRequestError from './service/error'
import $api from './service/webRequest'

$api.get(APIs.login)
	.then(() => {
		//
	})
	.catch((err: AxiosRequestError) => {
		console.dir(err)
	})
</script>
<style>
@import url('ant-design-vue/dist/reset.css');
</style>
