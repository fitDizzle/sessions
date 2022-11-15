function Listing(id, userId, clubId, sessionCount, sessionPrice, sessionTotal, active) {
  this.id = id;
  this.userId = userId;
  this.clubId = clubId;
  this.sessionCount = sessionCount;
  this.sessionPrice = sessionPrice;
  this.sessionTotal = sessionTotal;
};

module.exports = { Listing };