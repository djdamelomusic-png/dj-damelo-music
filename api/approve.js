export default async function handler(req, res) {
  const { paymentId } = req.body;
  console.log("Approuver paiement:", paymentId);
  
  // Pour l'instant on approuve tout
  res.status(200).json({ success: true });
}
