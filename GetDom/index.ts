import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {GetData} from "./tools";

const httpTrigger:AzureFunction = async function(con:Context, req:HttpRequest):Promise<void>
{
    con.log("Request received!");
    var url:string = req.query.url;
    if (url == null)
    {
        con.res = {"status":400, "body":"Parameter 'url' not provided."}
    }
    else
    {
        con.log("URL: " + url);

        //Did they supply a wait time?
        var wait_time_ms:number = 5000;
        if (req.query.waittime != null)
        {
            con.log("Wait time provided: " + req.query.waittime);
            wait_time_ms = Number(req.query.waittime);
        }
        else
        {
            con.log("Wait time not provided. Defaulting to " + wait_time_ms.toString());
        }

        con.log("Getting data...");
        var content:string = await GetData(url, wait_time_ms);
        con.log("Content received! Length: " + content.length.toString());

        //Return
        con.log("Returning.");
        con.res = {"status":200,"body":content};
    }
}

export default httpTrigger;