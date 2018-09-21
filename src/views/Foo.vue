<template>
    <div>
        <button v-on:click='inc'>Console</button>
        <p v-text="count"></p>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
    export default {
        name: 'Foo',
        computed: {
            ...mapState({
                count: state => state.count,
            }),
            ...mapGetters([
                'getCount'
            ])
        },
        methods: {
            ...mapMutations([
                'setCount'
            ]),
            inc: function() {
                this.setCount();
                console.log(this.getCount);
            },
        }
    }
</script>
