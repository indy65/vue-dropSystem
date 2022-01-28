<template>
  <div>
    <img class="m-auto" style="max-width:20%" src="../assets/chest.png" alt="" />
    <div class="row justify-content-center">
      <button class="col" v-on:click="createDrop">create drop</button>
      <button class="col" v-on:click="showGuns">show inventory</button>
    </div>
    <div v-if="inventory">
      <div
        style="
          margin: auto;
          border: solid black 1px;
          width: 20%;
          height: 136px;
          display: inline-block;
        "
        v-for="(gun, gunindex) in 16"
        :key="gun"
      >
        <div v-if="inventory[gunindex]">
          <p style="margin-left: 0.5rem">{{ inventory[gunindex].name }}</p>
          <img
            style="width: 6rem; heigth: 4rem"
            v-bind:src="inventory[gunindex].imageurl"
            alt=""
          />
          <p>{{ inventory[gunindex].quality }}</p>
          <button v-on:click="deleteGun(gunindex)">delete item</button>
        </div>
        <div v-else>
          <div style="border: solid white 1px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Drop from "../dropsystem.js";

export default {
  data() {
    return {
      inventory: [],
    };
  },
  methods: {
    createDrop() {
     
      if (this.inventory.length < 16) {
           let gun = new Drop();
        this.inventory.push(gun);
      }
    },
    showGuns() {
      console.log(this.inventory);
    },
    deleteGun(index){
this.inventory.splice(index,1)
    }
  },
};
</script>

<style>
p {
  padding: 0;
  margin: 0;
}
</style>