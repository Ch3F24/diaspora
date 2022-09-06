<template>

<!--    <div class="relative grid lg:grid-cols-7 h-full my-6 gap-x-4 text-white font-light" v-if="category" >-->
    <div class="relative lg:flex h-full my-6 text-white font-light" v-if="category" >
        <div class="lg:hidden">
<!--            <h3 v-if="category.sub_title" class="text-2xl italic mb-8">{{ category.sub_title }}</h3>-->
            <p v-if="category.description" class="text-diaspo leading-[1.6rem]">{{ category.description }}</p>
        </div>
<!--        <div class="col-span-full lg:col-span-4 my-12 lg:my-0 lg:mx-16">-->
<!--        <div class="lg:w-7/12 my-12 lg:my-0 lg:pr-20">-->
        <div class="lg:w-7/12 my-12 lg:my-0 mpr-8">
            <flickity ref="flickity" :options="flickityOptions" class="w-full slider h-full md:h-auto transition transition-opacity md:px-20" style=" opacity: 0">
                <div class="carousel-cell flex items-center justify-center h-full" v-for="(equipment,key) in category.equipments" :key="equipment.id">
                    <svg-vue v-if="equipment.svg && key === 0" :icon="equipment.svg" class="opacity-0 transition transition-opacity duration-500 md:max-h-[50vh] lg:max-h-[80vh]"></svg-vue>
                    <img loading="lazy" v-if="equipment.cover" :class="{'hidden opacity-0': key === 0}" class="transition transition-opacity duration-300 md:max-h-[50vh] lg:max-h-[80vh] h-full object-contain " :src="equipment.cover.default" alt="">
<!--                    <img :class="{'hidden opacity-0': key === 0}" class="transition transition-opacity duration-300 md:max-h-[50vh] lg:max-h-[60vh] h-full" src="https://tensorflow.org/images/surf.jpg" alt="">-->
<!--                    <svg-vue v-if="equipment.svg && key === 0" :icon="equipment.svg" class="opacity-0 transition transition-opacity duration-500 md:max-h-[50vh] lg:max-h-[60vh]"></svg-vue>-->
<!--                    <img v-else :class="{'hidden opacity-0': key === 0}" class="transition transition-opacity duration-300 md:max-h-[50vh] lg:max-h-screen" src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="">-->
                </div>
            </flickity>
        </div>
<!--        <div class=" lg:col-start-5 lg:col-end-8 lg:row-span-full">-->
        <div class=" lg:w-5/12 lg:col-end-8 lg:row-span-full">

            <div class="hidden lg:block mb-8">
<!--                <h3 v-if="category.sub_title" class="text-2xl font-light italic mb-8">{{ category.sub_title }}</h3>-->
                <p v-if="category.description" class="text-diaspo leading-[1.6rem]">{{ category.description }}</p>
            </div>

            <p class="uppercase text-roman text-diaspo font-light" v-if="equipmentTitle">{{ equipmentTitle }}</p>
            <p class="uppercase text-roman font-light text-sm" v-if="equipmentInventoryNumber">{{ equipmentInventoryNumber }}</p>
            <div class="space-y-4 mt-4 lg:mt-8 mb-8 lg:mb-12 text-sm">
                <p v-if="equipmentSubTitle" class="text-diaspo leading-[1.6rem]">{{ equipmentSubTitle }}</p>
                <p v-if="equipmentNews">{{ equipmentNews }}</p>
            </div>

            <svg-vue icon="hunglish" class="w-28" v-if="equipmentHunglish"></svg-vue>
            <p class="uppercase text-roman font-light mt-4 text-diaspo" v-if="equipmentHunglish">Hunglish</p>
            <p v-if="equipmentHunglish" class="text-left text-sm">{{ equipmentHunglish }}</p>
        </div>


    </div>


<!--    <div class="grid md:flex text-white" v-if="category">-->
<!--        <div class="w-full lg:w-5/12 space-y-8 order-first lg:order-none my-6">-->
<!--            <h3 v-if="category.sub_title" class="text-2xl font-bold italic">{{ category.sub_title }}</h3>-->
<!--            <p v-if="category.description">{{ category.description }}</p>-->

<!--            <div class="hidden lg:block">-->
<!--                <p class="uppercase text-roman text-xl mb-4" v-if="equipmentTitle">{{ equipmentTitle }}</p>-->
<!--                <div class="columns-2 space-y-4 mb-6">-->
<!--                    <p v-if="equipmentSubTitle">{{ equipmentSubTitle }}</p>-->
<!--                    <p v-if="equipmentNews">{{ equipmentNews }}</p>-->
<!--                </div>-->

<!--                <svg-vue icon="hunglish" class="w-28" v-if="equipmentHunglish"></svg-vue>-->

<!--                <p v-if="equipmentHunglish">{{ equipmentHunglish }}</p>-->
<!--            </div>-->

<!--        </div>-->
<!--        <div class="w-full lg:order-first lg:w-6/12 lg:pr-8 mr-auto" v-if="category.equipments">-->
<!--&lt;!&ndash;            <flickity ref="flickity" :options="flickityOptions" class="w-4/5 h-full slider">&ndash;&gt;-->
<!--            <flickity ref="flickity" :options="flickityOptions" class="w-full slider min-h-[50vh]">-->
<!--                <div class="carousel-cell flex items-center justify-center h-full" v-for="equipment in category.equipments" :key="equipment.id">-->
<!--                    <svg-vue v-if="equipment.svg" :icon="equipment.svg" class="hidden  transition transition-opacity duration-500"></svg-vue>-->
<!--                    <img v-if="equipment.cover" class="hidden transition transition-opacity opacity-0 duration-300" :src="equipment.cover.default" alt="">-->
<!--                    <img v-else class="hidden transition transition-opacity opacity-0 duration-300" src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="">-->
<!--                </div>-->
<!--            </flickity>-->
<!--        </div>-->

<!--        <div class="space-y-8 md:hidden mt-6" v-if="category.equipments">-->
<!--            <p class="uppercase text-roman text-xl mb-4" v-if="equipmentTitle">{{ equipmentTitle }}</p>-->
<!--            <div class="space-y-4">-->
<!--                <p v-if="equipmentSubTitle">{{ equipmentSubTitle }}</p>-->
<!--                <p v-if="equipmentNews">{{ equipmentNews }}</p>-->
<!--            </div>-->

<!--            <svg-vue icon="hunglish" class="w-28" v-if="equipmentHunglish"></svg-vue>-->

<!--            <p v-if="equipmentHunglish">{{ equipmentHunglish }}</p>-->
<!--        </div>-->
<!--    </div>-->
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
                wrapAround: true,
                adaptiveHeight: true,
                arrowShape: {
                    x0: 10,
                    x1: 60, y1: 50,
                    x2: 60, y2: 45,
                    x3: 15
                }

                // any options from Flickity can be used
            },
            equipments: null,
            category: null,
            loaded: false,
            index: 0,
            flickity: null
        }
    },
    created() {

    },
    mounted() {
        this.category = JSON.parse(this.categoryProp)
        this.equipments = this.category.equipments
        let _this = this
            // this.loaded = true

        this.$nextTick(() => {
            this.index = this.$refs.flickity.selectedIndex();
            this.svgSwap(this)
            // this.$refs.flickity.style.remove('min-height')
            const svg = document.querySelector('.slider svg');
            const height = svg.getBoundingClientRect().height + 'px'
            // this.loaded = true
            this.resizeViewport(null,height)
            //
            this.$refs.flickity.on('change', function (e) {
                _this.resizeViewport(e)
                _this.index = e;
            });
            this.$refs.flickity.reloadCells();
        });
    },
    methods: {
        resizeViewport(index = null,height = null) {
            let viewport = document.querySelector('.flickity-viewport');

            if (index !== null) {
                height = this.$refs.flickity.cells()[index].element.querySelector('img').offsetHeight + 'px';
            }

            viewport.style.height = height
        },
        svgSwap(__this) {
            let element = this.$refs.flickity.selectedElement();
            // this.$refs.flickity.style.opacity = '100%';

            if (element.hasChildNodes()) {
                let img = element.querySelector('img');
                if (element.classList.contains('loaded')) {
                    console.log('loaded');
                } else {
                    if(element.querySelector('svg')) {
                        element.classList.add('loaded');
                        setTimeout(function () {
                            __this.$refs.flickity.$el.style.opacity = '100%'
                            element.children[0].style.opacity = '100%';
                        },400)

                        setTimeout(function () {
                            element.children[0].style.opacity = 0;
                            // element.children[1].classList.remove('hidden');
                            // element.children[0].remove();
                        },3450)

                        setTimeout(function () {
                            // element.children[0].style.opacity = 0;
                            element.children[1].classList.remove('hidden');
                            // element.children[0].remove();
                        },3800)
                        setTimeout(function () {
                            // element.children[0].style.opacity = 0;
                            element.children[1].style.opacity = '100%';
                            element.children[0].remove();
                            __this.resizeViewport(0);
                        },4100)

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
        equipmentInventoryNumber() {
            return this.category.equipments[this.index].inventory_number
        },
    }
}
</script>

<style>

@import '~flickity/dist/flickity.min.css';
.carousel-cell {
    width: 100%;
    max-height: 60vh;
    margin-right: 1rem;
    min-height: 300px;
}
.carousel-cell svg {
    height: 300px;
}
@media (min-width: 1024px) {
    .carousel-cell {
        max-height: 70vh;
        min-height: 70vh;
    }
    .carousel-cell svg {
        height: 70vh;
    }
}
/*.slider {*/
/*    //max-height: 70vh;*/
/*    //height: 100%;*/
/*}*/
.flickity-resize .carousel-cell {
    min-height: 100%;
}
.flickity-viewport {
    height: 100%;
}
</style>
