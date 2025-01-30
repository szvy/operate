export default async function handler(req, res) {
    const { site } = req.query;
  
    if (!site) {
      return res.status(400).json({ error: "Missing site parameter" });
    }
  
    try {
      const response = await fetch(site, { method: "HEAD" });
      res.json({ status: response.ok ? "UP" : "DOWN" });
    } catch (error) {
      res.json({ status: "DOWN" });
    }
  }
  