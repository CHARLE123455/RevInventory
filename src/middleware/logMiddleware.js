const Log = require('../models/Log');

const logMiddleware = async (req, res, next) => {
    
    const initialSend = res.send;

    
    res.send = async function (data) {
        try {
            
            let action = '';
            let details = {};
            const response = JSON.parse(data);

            if (req.path.includes('/create') && req.method === 'POST') {
                action = 'CREATE';
                details = {
                    itemId: response.id,
                    name: response.name,
                    price: response.price,
                    quantity: response.quantity,
                    imageUrl: response.imageUrl
                };
            } else if (req.path.includes('/update') && req.method === 'PUT') {
                action = 'UPDATE';
                details = {
                    itemId: parseInt(req.params.id),
                    quantity: req.body.quantity
                };
            } else if (req.path.includes('/sell') && req.method === 'POST') {
                action = 'SELL';
                details = {
                    itemId: parseInt(req.params.id),
                    quantitySold: req.body.quantitySold,
                    buyer: req.body.buyer,
                    timestamp: new Date()
                };
            }
            if (action) {
                await Log.create({
                    action,
                    details: JSON.stringify(details)
                });
            }

            initialSend.call(this, data);
        } catch (error) {
            console.error('Logging error:', error);
            initialSend.call(this, data);
        }
    };

    next();
};

// Middleware to filter logs by action
const getLogsByAction = async (req, res, next) => {
    try {
        const action = req.query.action;
        if (action) {
            const logs = await Log.findAll({
                where: { action: action.toUpperCase() }
            });
            res.locals.logs = logs;
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    logMiddleware,
    getLogsByAction
};