<template>
  <div id="app">
    <nav class="menu">
      <ul class="menu-list">
        <li class="menu-item" @click="folder = 'shwed'">Швед</li>
        <li class="menu-item" @click="folder = 'misha'">Миша</li>
        <li class="menu-item" @click="folder = 'yan'">Ян</li>
        <li class="menu-item" @click="folder = 'nos'">Нос</li>
      </ul>
    </nav>
    <cloudinary-upload :folder="folder" class="content"></cloudinary-upload>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      folder: 'shwed'
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  min-height: 100vw;
}

.menu {
  flex-basis: 300px;
  background-color: #DDD;

  &-list {
    list-style: none;
    padding: 0;
  }

  &-item {
    background-color: #999;
    color: white;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
  }
}

.content {
  flex-grow: 1;
}
</style>
