import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();

router.post(('/search', jsonParser, async (req,res) => {
    try {
        let payload = req.body;

        let title = payload.title;

        const options = {
            method: 'GET',
            url: 'https://streaming-availability.p.rapidapi.com/shows/search/title',
            params: {
              country: 'au',
              title: title,
              output_language: 'en',
              show_type: 'movie',
              series_granularity: 'show'
            },
            headers: {
              'X-RapidAPI-Key': fs.readFileSync('key.txt').toString(),
              'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }
        }

        const response = await axios.request(options);
        res.status(200).send(response.data);
    }
    catch (error) {
        console.log(error);
        res.status(500).send()
    }


}))

api.use("/api/", router);
export const handler = serverless(api);