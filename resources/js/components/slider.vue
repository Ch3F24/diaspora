<template>

    <div class="grid grid-cols-2 md:flex text-white" v-if="category">
        <div class="w-5/12 space-y-8">
            <h3 v-if="category.sub_title" class="text-2xl font-bold italic">{{ category.sub_title }}</h3>
            <p v-if="category.description">{{ category.description }}</p>

            <div>
                <p class="uppercase text-roman text-xl mb-4" v-if="equipmentTitle">{{ equipmentTitle }}</p>
                <div class="columns-2 space-y-4 mb-6">
                    <p v-if="equipmentSubTitle">{{ equipmentSubTitle }}</p>
                    <p v-if="equipmentNews">{{ equipmentNews }}</p>
                </div>

                <svg-vue icon="hunglish" class="w-28" v-if="equipmentHunglish"></svg-vue>

                <p v-if="equipmentHunglish">{{ equipmentHunglish }}</p>
            </div>

        </div>
        <div class="lg:order-first w-6/12 pr-8 mr-auto" v-if="category.equipments">
<!--            <flickity ref="flickity" :options="flickityOptions" class="w-4/5 h-full slider">-->
            <flickity ref="flickity" :options="flickityOptions" class="w-full slider">
                <div class="carousel-cell flex items-center justify-center h-full" v-for="equipment in category.equipments" :key="equipment.id">
                    <svg-vue v-if="equipment.svg" :icon="equipment.svg" class="hidden  transition transition-opacity duration-500"></svg-vue>
                    <img v-if="equipment.cover" class="hidden transition transition-opacity opacity-0 duration-300" :src="equipment.cover.default" alt="">
                    <img v-else class="hidden transition transition-opacity opacity-0 duration-300" src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="">
                </div>
            </flickity>
        </div>
        <Transition name="fade"  v-if="category.equipments">
            <div class="col-start-8 col-end-12 space-y-8 md:hidden" v-if="loaded">
                    <p class="uppercase text-roman text-xl">{{ equipmentTitle }}</p>
                    <div class="columns-2 space-y-4">
                        <p>{{ equipmentSubTitle }}</p>
                        <p>{{ equipmentNews }}</p>
                    </div>
                    <p>{{ equipmentHunglish }}</p>
        <!--            <p>{{ $equipment->purpose }}</p>-->
            </div>
        </Transition>
    </div>
</template>

<script>
import Flickity from 'vue-flickity';
export default {
    name: "slider",
    components: {Flickity},
    props: {
        equipmentsProp: String,
        categoryProp: String
    },
    data() {
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: true,
                pageDots: false,
                wrapAround: true

                // any options from Flickity can be used
            },
            equipments: null,
            category: null,
            loaded: true,
            index: 0
        }
    },
    created() {

    },
    mounted() {
        this.category = JSON.parse(this.categoryProp)
        this.equipments = this.category.equipments
        let _this = this
        this.$nextTick(() => {
            this.setContent()
            this.svgSwap()
            this.index = this.$refs.flickity.selectedIndex();
            this.$refs.flickity.on('change', function (e) {
                _this.svgSwap();
                _this.index = e;
            });
        });
    },
    methods: {
        svgSwap() {
            let element = this.$refs.flickity.selectedElement();

            if (element.hasChildNodes()) {
                let img = element.querySelector('img');
                if (element.classList.contains('loaded')) {
                    console.log('loaded');
                } else {
                    if(element.querySelector('svg')) {
                        element.classList.add('loaded');
                        element.children[0].classList.remove('hidden');

                        setTimeout(function () {
                            element.children[0].style.opacity = 0;
                            element.children[1].classList.remove('hidden');
                            // element.children[0].remove();
                        },2100)
                        setTimeout(function () {
                            // element.children[0].style.opacity = 0;
                            element.children[1].style.opacity = '100%';
                            element.children[0].remove();
                        },2300)
                    } else {
                        img.style.opacity = '100%';
                        img.classList.remove('hidden');

                    }
                }
            }

        },
        setContent(){
            let index = this.$refs.flickity.selectedIndex();
            console.log(this.category.equipments[index].title)
        },
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    },
    computed: {
        equipmentTitle() {
            return this.category.equipments[this.index].title
        },
        equipmentSubTitle() {
            return this.category.equipments[this.index].sub_title
        },
        equipmentNews() {
            return this.category.equipments[this.index].news
        },
        equipmentHunglish() {
            return this.category.equipments[this.index].hunglish
        },
    }
}
</script>

<style scoped>

@import '~flickity/dist/flickity.min.css';
.carousel-cell {
    width: 100%;
    margin-right: 1rem;
}
.slider {
    max-height: 70vh;
    height: 100%;
}
</style>
