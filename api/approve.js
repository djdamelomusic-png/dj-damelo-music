export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { paymentId } = req.body;
  const PI_API_KEY = process.env.PI_API_KEY; // on va le mettre dans Vercel

  try {
    const response = await fetch(https://api.minepi.com/v2/payments/${paymentId}/approve, {
      method: 'POST',
      headers: {
        'Authorization': Key ${PI_API_KEY},
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) throw new Error("Pi a refusé l'approbation");
    
    res.status(200).json({ status: "approved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
