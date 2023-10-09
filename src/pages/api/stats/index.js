// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sheetsToJson = require('@dhanush-npm/google-sheets-to-json')


export default async function handler(req, res) {
    const data = await sheetsToJson(process.env.API_KEY,process.env.SHEET_ID,process.env.SHEET_NAME)
        .then((data)=>data)
        .catch((error)=>{
            console.log(error.message);
        });

    res.status(200).json(data)
}
