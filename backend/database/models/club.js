function Club(id, biz_name, biz_info, biz_phone, biz_phone_ext, e_address, e_city, e_state, e_postal, e_zip_full, e_country, web_url, web_meta_title, web_meta_desc, web_meta_keys) {
  this.id = id;
  this.biz_name = biz_name;
  this.biz_info = biz_info;
  this.biz_phone = biz_phone;
  this.biz_phone_ext = biz_phone_ext;
  this.e_address = e_address;
  this.e_city = e_city;
  this.e_state = e_state;
  this.e_postal = e_postal;
  this.e_zip_full = e_zip_full;
  this.e_country = e_country;
  this.web_url = web_url;
  this.web_meta_title = web_meta_title;
  this.web_meta_desc = web_meta_desc;
  this.web_meta_keys = web_meta_keys;
};

module.exports = { Club };