<template>
    <div class="products">
        <item v-for="item of items" :key="item.id" :prod="item"  />     
    </div>
</template>

<script>
import item from './catalogItem.vue'
export default {
    data() {
        return {
            url: '/catalogData.json',
            items: [],
        }
    },
    components: {
        item
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.items = data})
    }
}
</script>