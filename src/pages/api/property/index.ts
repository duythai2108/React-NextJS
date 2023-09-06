import properties from "@data/properties.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let filteredData = properties;
  res.status(200).json(filteredData);
}
