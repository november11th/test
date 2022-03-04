import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/plugin";

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on: any, config: any) => {
  addMatchImageSnapshotPlugin(on, config);
};
