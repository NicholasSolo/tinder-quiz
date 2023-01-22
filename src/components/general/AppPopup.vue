<template>
  <div class="app-popup">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-popup {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .5);
  overflow-y: scroll;

  .content {
    border-radius: 20px;
    background: url("~@/assets/img/bg-pop.png") center no-repeat;
    background-size: cover;
    @media screen and (max-width:660px) {
      width: 95%;
    }
  }
}
</style>
