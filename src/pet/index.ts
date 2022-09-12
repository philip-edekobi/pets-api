import makeDb from "../db/index";
import makeDataModel from "./dataModel";
import makeConnectionHandler from "./petEndpoints";

let database = makeDb();

const petsDataModel = makeDataModel({ database });
const connectionHandler = makeConnectionHandler({ dataModel: petsDataModel });

export default connectionHandler;
