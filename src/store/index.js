import Vue from 'vue'
import Vuex from 'vuex'
import filters from './modules/filters'
import drinks from './modules/drinks'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        filters,
        drinks    
    }
})