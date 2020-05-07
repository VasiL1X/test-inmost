import axios from 'axios'

export default {
    actions: {
        async allFilters({commit}) {
            try {
                const {
                    data: {
                        drinks: List
                    }
                } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
                commit('updateFilters', List); 
            } catch (error) {
                console.log(error.message)
            }
            return Promise.resolve()
        }
    },
    mutations: {
        updateFilters(state, filters) {
            state.filters = filters
        }
    },
    state: {
        filters: [{}],
    },
    getters: {
        getFilters(state) {
            return state.filters
        },
    }
}