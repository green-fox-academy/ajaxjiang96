const WarApp = require('./war-app');
const BattleApp = require('./battle-app');

const battle = new BattleApp();
const war = new WarApp();

battle.main();
war.main();
