import { Data } from '../Data';

export class Site {

    data = new Data();

    CreateSite(Name:String){
        return this.data.ExecuteQuery(`INSERT INTO site(site_code,site_name) VALUES(UUID(),'${Name}')`);
    }

}