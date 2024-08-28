<template>
    <div>

        <h3>列表渲染</h3>
        <p v-for="(item, index) in names">{{ item }}-{{ index }}</p>
        <div v-for="item in result" :key="item.id">
            <p>{{ item.title }}</p>
            <img :src="item.avator" alt="">
            <p v-for="(v, k, i) of result">{{ v }}-{{ k }}-{{ i }}</p>
        </div>

    </div>
</template>



<script>

export default {
    data() {
        return {
            names: ["w", "y", "z"],
            result: [
                {
                    "id": 1,
                    "title": "111",
                    "avator": "https://pic.qyer.com/avatar/002/25/77/30/200?v=1560226451"
                },
                {
                    "id": 2,
                    "title": "222",
                    "avator": "https://pic.qyer.com/avatar/002/25/77/30/200?v=1560226451"
                },
                {
                    "id": 3,
                    "title": "333",
                    "avator": "https://pic.qyer.com/avatar/002/25/77/30/200?v=1560226451"
                }
            ]
        }
    }
}

</script>