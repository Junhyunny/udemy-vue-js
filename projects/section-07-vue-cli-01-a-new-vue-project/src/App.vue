<template>
  <section>
    <h2>My Friends</h2>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <li v-for="friend in friends" :key="friend.id">
        <!-- <friend-contact :friend="friend" /> -->

        <!-- props name change automatically cabap case to camel case -->
        <friend-contact
          :id="friend.id"
          :name="friend.name"
          :phone-number="friend.phone"
          :email-address="friend.email"
          :is-favorite="friend.isFavorite"
          @toggle-favorite="toggleFavoriteStatus"
          @delete="deleteFriend"
        />

        <!-- <FriendContact :friend="friends[0]" /> -->
        <!-- <FriendContact :friend="friends[1]" /> -->
      </li>
    </ul>
  </section>
</template>

<script>
// import FriendContact from "./components/FriendContact.vue";

export default {
  //   components: {
  //     FriendContact,
  //   },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "010 1234 3456",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "010 5213 6612",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(value) {
      console.log("toggleFavoriteStatus", value);
      const friend = this.friends.find((friend) => friend.id === value);
      friend.isFavorite = !friend.isFavorite;
    },
    addContact(newFriend) {
      newFriend.id = Math.random().toString(36).substring(2, 12);
      newFriend.isFavorite = false;
      this.friends.push(newFriend);
    },
    deleteFriend(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin: 0.25rem;
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
