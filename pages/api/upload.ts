import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import * as fs from 'fs';
import FormData from "form-data";
import formidable from "formidable";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function imgUpload(req: NextApiRequest, res: NextApiResponse) {

    // const readFile = ( req: NextApiRequest, saveLocally?: boolean): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
    //     const options: formidable.Options = {};
    //     if (saveLocally) {
    //         options.uploadDir = path.join(process.cwd(), "/public/uploads");
    //         options.filename = (name, ext, path, form) => {
    //             return Date.now().toString() + "_" + path.originalFilename;
    //         };
    //     }

    //     options.maxFileSize = 4000 * 1024 * 1024;
    //     const form = formidable(options);
    //     return new Promise((resolve, reject) => {
    //         form.parse(req, (err, fields, files) => {
    //             if (err) reject(err);
    //             resolve({ fields, files });
    //         });
    //     });
    // };


    // } catch (error) {
    //     fs.mkdir(path.join(process.cwd() + "/public", "/images"));
    // }

    // res.json({ done: "ok" });

    const options: formidable.Options = {};

 



    if (req.method === "POST") {
        try {
            const { fields, files }: any = await formData;
            const image = `${Date.now()}_${files.image[0].originalFilename}`;

            // console.log('image', files.image);

            // // var formdata = new FormData();
            // // formdata.append("image", fs.createReadStream(files.image[0].filepath), image);

            fs.renameSync(files, `public/uploads/${Date.now()}_${files.image[0].originalFilename}`);

            // console.log('formdata', formdata)


            // fs.readdir(path.join(process.cwd() + "/public", "/images"));

            // await readFile(req, true);

            res.status(200).json({
                status: true,
                // message: result.message,
                // url: result.url,
            })

        } catch (err) {
            console.log(err);
            res.status(500).send("Wrong information");
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}


