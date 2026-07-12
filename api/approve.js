export default function handler(req, res) {
  // On approuve direct le paiement
  res.status(200).json({ status: "approved" });
}
