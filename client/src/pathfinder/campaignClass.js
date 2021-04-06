class campaign {
  constructor(campaignObject) {
    this._id = campaignObject._id;
    this.title = campaignObject.title;
    this.GM = campaignObject.GM;
    this.description = campaignObject.description;
    this.maps = campaignObject.maps;
  }
  // async getCampaignData() {
  //   if (!this.description) return await this.setCampaignData();
  //   return this;
  // }
}

export default campaign;
