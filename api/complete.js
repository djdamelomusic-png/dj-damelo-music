export default function handler(req, res) {
  // On confirme que le paiement est fini
  res.status(200).json({ status: "completed" });
}
