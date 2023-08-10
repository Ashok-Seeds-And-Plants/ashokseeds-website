export default function handler(req, res) {
  const body = req.body;

  res.status(200).json({ user: `${body.firstName} ${body.lastName}` });
}