<template>
    <div class="home">
        <div class="header__wrapper" ref="header">
            <div class="container">
                <header-elem/>
            </div>
        </div>
        <div class="home__content">
            <div class="container">
                <div class="home__content-wrapper">
                    <div class="filters__wrapper">
                        <filter-elem/>
                    </div>
                    <div class="content__wrapper">
                        <content-elem/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderElem from './TheHeader'
import FilterElem from './FiltersComponent'
import ContentElem from './ContentComponent'

export default {
    components: {
        HeaderElem,
        FilterElem,
        ContentElem
    }
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1460px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.home {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
}
.header__wrapper {
    flex: 0 0 auto;
}
.home__content {
    flex: 1 0 auto;
    height: 100%;
    &-wrapper {
        display: flex;
        height: 100%;
    }
}
.filters__wrapper {
    max-width: 249px;
    width: 100%;
    border-right: 1px solid #D0D0D0;
}
.content__wrapper {
    padding-top: 40px;
    padding-bottom: 70px;
}
</style>
