export default async function handler(req, res) {
  const { paymentId, txid } = req.body;

  // Ici tu pourrais vérifier le paiement sur l'API Pi
  // Pour l'instant on fait simple
  console.log("Paiement complété:", paymentId, txid);
  
  res.status(200).json({ status: "success" });
}
