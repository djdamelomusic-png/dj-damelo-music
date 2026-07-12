module.exports = async function handler(req, res) {
  const { paymentId, txid } = req.body;

  console.log("Paiement complété:", paymentId, txid);
  
  res.status(200).json({ status: "success" });
}
