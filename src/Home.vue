<template>
  <section class="home">
    <nav class="menu">
      <ul class="menu-list">
        <li
          v-if="masters.length"
          v-for="master in masters"
          :key="master.folder"
          :class="['menu-item', { active: master.folder === folder }]" 
          @click="folder = master.folder"
        >
          {{ master.name }}
          <span class="delete-button" @click="deleteMaster(master['.key'])">удалить</span>
        </li>
        <li class="menu-item" @click="showModal = true">Добавить мастера</li>
      </ul>
    </nav>
    <cloudinary-upload :folder="folder" class="content"></cloudinary-upload>
    <div class="add-master-modal" v-if="showModal">
      <label>
        Мастер
        <input class="add-master-input" v-model="newMaster.name">
      </label>
      <label>
        Папка
        <input class="add-master-input" v-model="newMaster.folder">
      </label>
      <div class="button-wrapper">
        <button class="add-master-button" @click="setMaster">Сохранить</button>
        <button class="add-master-button" @click="showModal = false">Закрыть</button>
      </div>
    </div>
  </section>
</template>

<script>
import {db} from './firebase';

export default {
  name: 'app',
  data () {
    return {
      folder: '',
      masters: [],
      newMaster: {
        name: '',
        folder: ''
      },
      showModal: false
    }
  },
  firebase: {
    masters: db.ref('masters')
  },
  methods: {
    setMaster() {
      this.$firebaseRefs.masters.push(this.newMaster);
      this.showModal = false;
    },
    deleteMaster(key) {
      this.$firebaseRefs.masters.child(key).remove()
        .then(() => this.folder = DEFAULT_FOLDER)
    }
  },
  watch: {
    masters() {
      this.folder = this.masters[0] && this.masters[0].folder;
    }
  }
}
</script>

<style lang="scss">
.home {
    display: flex;
    width: 100%;
}
.menu {
  flex-basis: 300px;
  background-color: #DDD;
  flex-shrink: 0;

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
    position: relative;

    .delete-button {
      position: absolute;
      right: 10px;
      display: none;
    }

    &:hover .delete-button {
      display: inline;
    }

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
