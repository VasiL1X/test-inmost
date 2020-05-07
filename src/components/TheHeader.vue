<template>
    <header class="header">
        <div class="header__inner">
            <h3 class="header__title">
                Coctail DB
            </h3>
            <div class="header__logo-wrapper">
                <img class="header__logo" src="../assets/logo.svg" alt="Coctail DB">
            </div>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .header {
        box-shadow: 0px 4px 4px -2px rgba(0,0,0,0.25);
        &__inner {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0;
        }
        &__title {
        font-family: 'Seaweed Script', cursive;
        font-weight: 400;
        font-size: 30px;
        line-height: 41px;
        letter-spacing: 0.51em;
        color: #FF8A00;
        margin-right: 15px;
        }
        &__logo {
            width: 50px;
            height: auto;
            &-wrapper {
                height: 50px;
            }
        }
    }
</style>