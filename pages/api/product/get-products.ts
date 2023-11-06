import { NextApiRequest, NextApiResponse } from "next";
import { connectbd } from "@/lib/dbConnect"
import { Product, ProductModel } from "@/models/index"

export default async function getProducts(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            await connectbd();
            const product:any = await Product.find();

            return res.status(200).json({
                status: true,
                product,
            })

        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}
