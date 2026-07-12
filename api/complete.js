export default async function handler(req, res) {
  const { paymentId, txid } = req.body;
  console.log("Compléter paiement:", paymentId, txid);
  
  // Ici on dira "paiement reçu"
  res.status(200).json({ status: "success" });
}
