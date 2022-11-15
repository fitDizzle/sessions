function Message(id, fromUserId, toUserId, listingId, text) {
  this.id = id;
  this.fromUserId = fromUserId;
  this.toUserId = toUserId;
  this.listingId = listingId;
  this.text = text;
};

module.exports = { Message };