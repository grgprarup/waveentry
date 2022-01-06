function getAdminAuth() {
  const auth = Buffer.from("admin:admin").toString("base64");
  return "Basic " + auth;
}

module.exports = { getAdminAuth };
