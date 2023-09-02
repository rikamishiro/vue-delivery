<script setup lang="ts">
    import Produtos from './components/Produtos.vue';
    import PedidosItens from './components/PedidosItens.vue';
</script>

<template>
    <div class="flex w-full h-screen">
        <div class="w-2/3 bg-slate-200">
            <Suspense>
                <template>
                    <Produtos/>
                </template>
                <template #fallback>
                    Loading...
                </template>
            </Suspense>

        </div>
        <div class="w-1/3 bg-slate-300">
            <PedidosItens/>
        </div>
    </div>
</template>