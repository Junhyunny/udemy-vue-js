function getRandomDamager(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      gameResult: "",
      battleLogs: [],
    };
  },
  computed: {
    getPlayerHealth() {
      if (this.playerHealth < 0) {
        this.playerHealth = 0;
      }
      return {
        width: `${this.playerHealth}%`,
      };
    },
    getMonsterHealth() {
      if (this.monsterHealth < 0) {
        this.monsterHealth = 0;
      }
      return {
        width: `${this.monsterHealth}%`,
      };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.gameResult = "Draw";
      } else if (value <= 0) {
        this.gameResult = "Monster Win";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.gameResult = "Draw";
      } else if (value <= 0) {
        this.gameResult = "Player Win";
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomDamager(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage("Player", "Moster Attacked", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomDamager(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage("Monster", "Player Attacked", attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomDamager(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("Player", "Monster Special Attacked", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomDamager(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("Player", "Heal", healValue);
      this.attackPlayer();
    },
    startNewGame() {
      this.gameResult = "";
      this.currentRound = 0;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    surrender() {
      this.gameResult = "Monster Win";
    },
    addLogMessage(who, what, value) {
      this.battleLogs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
}).mount("#game");
