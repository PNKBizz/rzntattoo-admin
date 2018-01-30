<template>
  <div id="app">
    <nav class="menu">
      <ul class="menu-list">
        <li
          v-if="masters.length"
          v-for="master in masters"
          :key="master.folder"
          :class="['menu-item', { active: master.folder === folder }]" 
          @click="folder = master.folder"
        >{{ master.name }}</li>
        <li class="menu-item" @click="showModal = true">Добавить мастера</li>
      </ul>
    </nav>
    <cloudinary-upload :folder="folder" class="content"></cloudinary-upload>
    <div class="add-master-modal" v-if="showModal">
      <label>
        Мастер
        <input class="add-master-input" v-model="mewMaster.name">
      </label>
      <label>
        Папка
        <input class="add-master-input" v-model="mewMaster.folder">
      </label>
      <div class="button-wrapper">
        <button class="add-master-button" @click="setMaster">Сохранить</button>
        <button class="add-master-button" @click="showModal = false">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      folder: 'shwed',
      mewMaster: {
        name: '',
        folder: ''
      },
      masters: [],
      showModal: false
    }
  },
  methods: {
    setMaster() {
      axios.post('/api/setMaster', this.mewMaster)
        .then(res => {
          this.masters = res.data;
          this.mewMaster = {};
        })
        .catch(console.log)
    }
  },
  mounted() {
    axios.get('/api/getMasters')
      .then(res => this.masters = res.data)
      .catch(console.log)
  }
}
</script>

<style lang="scss">
body { margin: 0; }
#app {
  display: flex;
  min-height: 100vh;
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

    &.active {
      background-color: black;
    }
  }
}

.content {
  flex-grow: 1;
}

.add-master {
  &-modal {
    width: 50vw;
    position: fixed;
    padding: 20px;
    top: 20vh;
    left: 25vw;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: .7);
  }

  &-input {
    border-color: transparent;
    border-bottom-color: #777;
    background-color: transparent;
    margin: 10px;
    font-size: 15px;
    transition: border-color .3s;

    &:focus {
        border-bottom-color: #fff;
        outline: none;
    }
  }

  &-button {
    border: 1px solid white;
    background-color: transparent;
    color: white;
    padding: 10px;
    margin: 20px 10px 0 0;
    cursor: pointer;

    &:hover {
        background-color: #333;
    }
  }
}
</style>
