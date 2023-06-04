const { ConnectionStatus, ConnectionHistory } = require('./models');

exports.SetStatus = async function(clientId, status) {
    try {
        await ConnectionStatus.updateOne(
            {clientId}, 
            {$set: {isConnected: status}},
            {upsert: true}
        );
        let connHistoryRecord = new ConnectionHistory({clientId, status});
        await connHistoryRecord.save();
    } catch (exception) {
        console.log(exception);
        return false;
    }

    return true;
}

exports.GetStatus = async function(clientId) {
    try {
        let connectionStatus = await ConnectionStatus.findOne({clientId});
        return connectionStatus.toStatusObj();
    } catch(exception) {
        console.log(exception);
        return new ConnectionStatus({clientId}).toStatusObj();
    }
}