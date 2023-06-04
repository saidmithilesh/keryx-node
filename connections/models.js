const mongoose = require('mongoose');
const connectionStatusSchema = new mongoose.Schema({
    clientId: { type: String, index: true, unique: true, required: true },
    isConnected: { type: Boolean, default: false }
}, { timestamps: true });

connectionStatusSchema.methods.toStatusObj = function (cb) {
    return {
        clientId: this.clientId,
        isConnected: this.isConnected,
        lastConnectionTime: this.updatedAt
    };
}

const connectionHistorySchema = new mongoose.Schema({
    clientId: { type: String, index: true, required: true },
    status: { type: Boolean },
    connectionDetails: { type: mongoose.Schema.Types.Mixed },
}, { timestamps: true });

exports.ConnectionStatus = mongoose.model('ConnectionStatus', connectionStatusSchema);
exports.ConnectionHistory = mongoose.model('ConnectionHistory', connectionHistorySchema);