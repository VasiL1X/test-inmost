import axios from 'axios'

export default {
    actions: {
        async allDrinks({commit}, {filters}) {
            commit('setListsToShow');
            commit('cleanDrinksList', []); 

            async function getOneCategory(index) {
                if (index >= filters.length)
                    return;
                try {
                    const {
                        data: {
                            drinks: List
                        }
                    } = await  axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + filters[index]);
                    commit('updateDrinksList', {List, 'title' : filters[index]});
                    getOneCategory.call(this, index + 1)
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
            getOneCategory.call(this,0);
        },
        updateListsToShow({commit}) {
            commit('raiseListsToShow');
        }
    },
    mutations: {
        updateDrinksList(state, drinksList) {
            state.drinksList.push(drinksList)
        },
        cleanDrinksList(state) {
            state.drinksList = []
        },
        setListsToShow(state) {
            state.listsToShow = 1
        },
        raiseListsToShow(state) {
            state.listsToShow += 1
        }
    },
    state: {
        drinksList: [],
        listsToShow: 1
    },
    getters: {
        getDrinksList(state) {
            return state.drinksList
        },
        getListsToShow(state) {
            return state.listsToShow
        }
    }
}