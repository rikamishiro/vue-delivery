<template>
    <div class="flex p-4">
        <div class="text-2xl font-bold">
            Total:
        </div>
        <div class="flex flex-grow justify-end text-2xl font-bold">
            <h5>R$ {{ MoneyFormat.format(store.pedido.total) }}</h5>
        </div>
    </div>

    <hr class="mx-3 border-gray-500">

    <div v-for="item in store.pedido.itens" class="flex p-4">
        <div class="w-1/12 text-medium">
            {{ item.quantidade }}
        </div>
        <div class="text-medium">
            {{ item.produto.nome }}
        </div>
        <div class="flex flex-grow justify-end text-medium font-bold">
            R$ {{ MoneyFomar.format(item.produto.preco * item.quantidade) }}
        </div>
    </div>
    <div class="flex flex-grow justify-end p-4">
        <button class="w-24 h-10 text-md font-bold text-white bg-blue-400
                    hover:bg-blue-500 shadow rounded-md">
        Salvar
        </button>
    </div>
</template>

<script setup lang="ts">
    
    import { usePedidoStore } from '../../../stores/PedidoStore';

    const store = usePedidoStore();

</script>