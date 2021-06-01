// Import Modules
import { KidsOnBroomsActor } from "./actor/actor.js";
import { KidsOnBroomsActorSheet } from "./actor/actor-sheet.js";
import { KidsOnBroomsItem } from "./item/item.js";
import { KidsOnBroomsItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.kidsonbrooms = {
    KidsOnBroomsActor,
    KidsOnBroomsItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = KidsOnBroomsActor;
  CONFIG.Item.entityClass = KidsOnBroomsItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("kidsonbrooms", KidsOnBroomsActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("kidsonbrooms", KidsOnBroomsItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});