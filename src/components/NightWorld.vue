<script setup>
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore();


</script>


<template>
    NightWorld:夜の{{counter.user.name}}
    <button v-on:click="counter.incAge">年をとる</button>
    getAgeは：{{counter.getAge}}
</template>



<style>

</style>