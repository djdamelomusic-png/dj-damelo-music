export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { paymentId } = req.body;
    console.log("Approuver paiement:", paymentId);
    
    // On approuve direct
    return res.status(200).json({ success: true });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
