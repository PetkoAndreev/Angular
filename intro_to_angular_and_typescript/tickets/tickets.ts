// Create class Ticket
class Ticket {
    destination: string;
    price: number;
    status: string;
    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

// Function to transform the provided list into separate tickets and after that sort them by provided criteria
function getTickets(tickets: string[], sortBy: string) {

    let result: Ticket[] = [];
    for (let currentTicket of tickets) {
        const ticketDetails: string[] = currentTicket.split('|');
        const ticket = new Ticket(ticketDetails[0], Number(ticketDetails[1]), ticketDetails[2]);
        result.push(ticket);
    }

    switch (sortBy) {

        case 'destination': result.sort((a: Ticket, b: Ticket) => a.destination.localeCompare(b.destination)); break;
        case 'price': result.sort((a: Ticket, b: Ticket) => a.price - b.price); break;
        case 'status': result.sort((a: Ticket, b: Ticket) => a.status.localeCompare(b.status)); break;
    }

    console.log(result);
}

getTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination'
);

getTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status'
);