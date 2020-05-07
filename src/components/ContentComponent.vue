<template>
    <div class="content" @scroll="onScroll" ref="content">
        <div class="content__inner" ref="contentInner">
            <div class="content__category" v-for="(category, i) in drinksList" :key="category.id" :id="'category__number-' + i">
                <div class="category__title">
                    <h3 class="category__title-text">{{category.title}}</h3>
                </div>
                <ul class="category__body">
                    <li class="category__item" v-for="item in category.List" :key="item.id" :id="item.idDrink">
                        <div class="category__item-img">
                            <img class="item__image" :src="item.strDrinkThumb" alt="">
                        </div>
                        <div class="category__item-text">
                            <span class="category__item-name">{{item.strDrink}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'getDrinksList',
            'getListsToShow'
        ]),
        drinksList() {
            return this.getDrinksList.slice(0, this.getListsToShow)
        }
    },
    methods: {
        ...mapActions([
            'updateListsToShow'
        ]),
        onScroll(event) {
            let inner = this.$refs.contentInner,
                targetHeigth = event.target.offsetHeight
            let scrollTop = event.target.scrollTop,
                innerHeigth = inner.offsetHeight
            if (innerHeigth - scrollTop  == targetHeigth) {
                if (this.getListsToShow == this.getDrinksList.length) {
                    console.log('end of lists')
                } else {
                    this.updateListsToShow();
                }
                
            }

        }
    },
    updated() {
        for (let i = 1; i < this.getDrinksList.length; i++) {
            if(this.$refs.content.offsetHeight > this.$refs.contentInner.offsetHeight) {
                this.updateListsToShow();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .content {
        padding: 0 50px;
        height: 100%;
        overflow-y: auto;
    }
    .category {
        &__title {
            padding-bottom: 10px;
            border-bottom: 1px solid #D0D0D0;
            &-text {
                font-weight: 400;
                font-size: 24px;
                line-height: 28px;
                color: #818181;
            }
        }
        &__body {
            padding-top: 30px;
            display: flex;
            flex-wrap: wrap;
            list-style: none;
        }
        &__item {
            text-align: center;
            width: 225px;
            flex-basis: 20%;
            margin-bottom: 50px;
            &-text {
                padding: 20px 5px 0;
            }
            &-name {
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
            }
        }
    }
    .item__image {
        width: 150px;
        height: 150px;
    }
    @media (max-width: 1390px) {
        .category__item {
            flex-basis: 25%;
        }
    }
    @media (max-width: 1223px) {
        .category__item {
            flex-basis: 33.333%;
        }
    }
    @media (max-width: 1123px) {
        .category__item {
            flex-basis: 50%;
        }
    }
</style>