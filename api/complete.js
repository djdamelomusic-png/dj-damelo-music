export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { paymentId, txid } = req.body;
  const PI_API_KEY = process.env.PI_API_KEY;

  try {
    const response = await fetch(https://api.minepi.com/v2/payments/${paymentId}/complete, {
      method: 'POST',
      headers: {
        'Authorization': Key ${PI_API_KEY},
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ txid })
    });
if (!response.ok) throw new Error("Pi a refusé la validation");
    
    res.status(200).json({ status: "completed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
