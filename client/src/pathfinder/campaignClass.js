class campaign {
  constructor(campaignObject) {
    this._id = campaignObject._id;
    this.title = campaignObject.title;
    this.GM = campaignObject.GM;
    this.description = campaignObject.description;
    this.maps = campaignObject.maps;
    this.characters = campaignObject.characters;
  }

  /**
   * Takes in an mapId and checks to see if it is in the campaign
   * @param {String} mapId  Id of the map you want to find
   * @returns {Object} returns object with index and map Object
   */
  async getMapAndIndexById(mapId) {
    const index = this.maps.findIndex((map) => map._id == mapId);
    let map;
    if (index > -1) map = this.maps[index];
    return { index, map };
  }

  /**
   * Takes in an characterId and checks to see if it is in the campaign
   * @param {String} characterId  Id of the map you want to find
   * @returns {Object} returns object with index and character Object
   */
  getCharacterAndIndexById(characterId) {
    const index = this.characters.findIndex((char) => char._id == characterId);
    let character;
    if (index > -1) character = this.characters[index];
    return { index, character };
  }

  /**
   * examines a chatacter object and return the proper character sheet String
   * @param {Object} character the Character object
   * @returns {String} The String representing the character sheet for this Character
   */
  getCharacterSheet(character) {
    if (character.characterLink) return this.characters.characterLink;
    if (character.characterFilename) return '/pdf/' + this.characters.characterFilename;
    if (character.characterText) return this.characters.characterText;

    return undefined;
    //throw new Error('No Proper Character Details');
  }

  // async getCampaignData() {
  //   if (!this.description) return await this.setCampaignData();
  //   return this;
  // }
}

export default campaign;
