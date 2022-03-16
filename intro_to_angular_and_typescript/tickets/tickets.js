// Create class Ticket
var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
// Function to transform the provided list into separate tickets and after that sort them by provided criteria
function getTickets(tickets, sortBy) {
    var result = [];
    for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
        var currentTicket = tickets_1[_i];
        var ticketDetails = currentTicket.split('|');
        var ticket = new Ticket(ticketDetails[0], Number(ticketDetails[1]), ticketDetails[2]);
        result.push(ticket);
    }
    switch (sortBy) {
        case 'destination':
            result.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case 'price':
            result.sort(function (a, b) { return a.price - b.price; });
            break;
        case 'status':
            result.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
    }
    console.log(result);
}
getTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
getTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
