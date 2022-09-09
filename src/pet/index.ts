import makeDb from "#root/db/index";
import makeDataModel from "#root/pet/dataModel";
import makeConnectionHandler from "#root/pet/petEndpoints";

const database = await makeDb();
const petsDataModel = makeDataModel({ database });
const connectionHandler = makeConnectionHandler({ dataModel: petsDataModel });

export default connectionHandler;
