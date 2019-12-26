import * as express from 'express';
import { Site } from '../../Service/Site/site';
let routes = express.Router();

let service = new Site();

routes.post('/Insert', async (req:any,res:any) => {
    let Name = req.body.SiteName;

    res.send(await service.AddSite(Name));
});

export { routes }