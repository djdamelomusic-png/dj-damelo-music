module.exports = async function handler(req, res) {
  const { paymentId } = req.body;
  console.log("Paiement à approuver:", paymentId);
  
  res.status(200).json({ status: "approved" });
}
