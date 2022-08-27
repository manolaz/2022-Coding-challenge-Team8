// const stateAPI = require('consumer.js');

var queue = 'events';
// let state ={};
let state = [];
var amqp = require('amqplib/callback_api');

// console.log("state = " + state);

module.exports = {
    // A unique ID for this API
    'id': 'my-api',
    // The port on which Express is to listen
    'port': 7050,
    // Whether or not to log incoming requests to the console (default: true)
    'log': true,
    'routes': {
        '/api/v1/state': {
            'get': (req, res, next) => {
                // data = { "type": "OfficerGoesOffline", "officerId": 1 };
                // state.push(data);
                amqp.connect('amqp://localhost:5672', function (error0, connection) {
                    if (error0) {
                        throw error0;
                    }
                    connection.createChannel(function (error1, channel) {
                        if (error1) {
                            throw error1;
                        }
                        var exchange = 'logs';
                        channel.assertExchange(exchange, 'fanout', {
                            durable: false
                        });
                        channel.assertQueue(queue, {
                            durable: false
                        });
                        channel.prefetch(1);
                        // console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
                        channel.consume(queue, function (msg) {
                            var secs = msg.content.toString().split('.').length - 1;
                            state.push(msg.content);
                            // // return msg.content;
                            channel.ack(msg);

                            setTimeout(function () {
                                // console.log(" [x] Done");
                                // state= msg.content;
                                state.push(msg.content);
                                // state.put(msg.content);
                                channel.ack(msg);

                                // return msg.content;

                            }, secs * 1000);
                        }, {
                            // manual acknowledgment mode,
                            // see ../confirms.html for details
                            noAck: false
                        });
                    });
                });

                res.send(state);
                return state;
            }
        }
    }
};