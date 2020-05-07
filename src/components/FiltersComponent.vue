<template>
    <div class="filters">
        <div class="filters__inner">
            <div class="filters__list">
                <ul class="filters__list-inner">
                    <li 
                        class="filters__list-item"
                        v-for="(item, i) in getFilters"
                        :key="item.id">
                        <input 
                            class="filters__list-checkbox" 
                            type="checkbox" 
                            :id="'filters__checkbox-' + i"
                            :value="item.strCategory"
                            v-model="checkedFilters"
                            >    
                        <label class="filters__list-label" :for="'filters__checkbox-' + i">{{item.strCategory}}</label>
                    </li>
                </ul>
            </div>
            <button class="filters__apply-btn" @click="allDrinks({'filters': checkedFilters})">apply</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            checkedFilters: []
        }
    },
    computed: {
        ...mapGetters([
            'getFilters'
        ])
    },
    methods: {
        ...mapActions([
            'allFilters',
            'allDrinks'
        ]),
        setDefaultFilters() {
            for (let filter of this.getFilters) {
                this.checkedFilters.push(filter.strCategory)
            }
        }
    },
    async mounted() {
        await this.allFilters();
        this.setDefaultFilters();
        this.allDrinks({'filters': this.checkedFilters})

    }

}
</script>

<style lang="scss" scoped>
    .filters {
        padding: 17px 15px 10px 14px;
        &__inner {
            padding: 20px;
        }
        &__list {
            &-inner {
                list-style: none;
            }
            &-item {
                position: relative;
                display: flex;
                margin-bottom: 20px;
            }
            &-checkbox {
                position: absolute;
                z-index: -1;
                opacity: 0;
                &:checked + .filters__list-label {
                    &::before {
                        background-image: url(../assets/images/checked-checkbox.svg);
                    }
                }
            }
            &-label {
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                color: #818181;
                position: relative;
                padding-left: 30px;
                &::before {
                    content: '';
                    background-image: url(../assets/images/checkbox.svg);
                    background-size: auto;
                    background-position: center center;
                    background-repeat: no-repeat;
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                }
            }
        }
        &__apply-btn {
            width: 180px;
            padding: 10px;
            font-size: 16px;
            font-weight: 700;
            line-height: 19px;
            color: #fff;
            text-align: center;
            text-transform: uppercase;
            background: #4E4E4E;
            border-radius: 10px;
            border: none;
            outline: none;
            cursor: pointer;
            transition: background .5s;
            &:hover {
                background: rgb(117, 117, 117);
            }
        }
    }
</style>