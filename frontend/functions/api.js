import express, { Router } from "express";
import serverless from "serverless-http";
import axios from "axios";
import bodyParser from "body-parser";

const api = express();

const router = Router();

const jsonParser = bodyParser.json();

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
              'X-RapidAPI-Key': process.env.API_KEY.toString(),
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