export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).json({ status: "approved" });
  }
  
  res.status(200).json({ status: "approved" });
}
