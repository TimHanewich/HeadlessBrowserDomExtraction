import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {GetData} from "./tools";

// const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
//     context.log('HTTP trigger function processed a request.');
//     const name = (req.query.name || (req.body && req.body.name));
//     const responseMessage = name
//         ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//         : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };

// };

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
    }
}

export default httpTrigger;