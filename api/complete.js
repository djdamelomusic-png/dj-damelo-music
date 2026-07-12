export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { paymentId, txid } = req.body;
    console.log("Compléter paiement:", paymentId, txid);
    
    // Ici on dit "paiement reçu"
    return res.status(200).json({ status: "success" });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
