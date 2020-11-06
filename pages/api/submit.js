// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {get_data} from "../../lib/data";
export default (req, res) => {
  console.log(req.query,req.method,req.body)
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
