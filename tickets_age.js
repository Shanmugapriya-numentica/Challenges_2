const UserInput = require('C:/Users/v-shanmugm/Music/New folder/js_challenge.json')

function getTicketsAge(UserInput) {

    const result = [];
    const ticketsArray = UserInput.tickets;
    const asOf = UserInput.meta.asOf;

    for (let i = 0; i < ticketsArray.length; i++) {
        const currentticket = ticketsArray[i];

        if ( currentticket.id === null ||  currentticket.id === undefined ||
             currentticket.created === null ||  currentticket.created === undefined) {
            console.error("Input Invalid!");
            return [];
        }

        if (currentticket.status.toLowerCase() === 'open') {
            const created = currentticket.created;


            let start = new Date(created);
            let end = new Date(asOf);

            if (start.getTime() < end.getTime()) {
                end = new Date(created);
                start = new Date(asOf);
            }
            const differenceInMs = start.getTime() - end.getTime();

            const differenceInHours = Math.round(differenceInMs / (1000 * 60 * 60));

            if (differenceInHours > 40) {
                result.push({
                    "ticketId": currentticket.id,
                    "ageHours": differenceInHours,
                    "status": "breach"
                })
            }
            else {
                result.push({
                    "ticketId": currentticket.id,
                    "ageHours": differenceInHours,

                })
            }

        }
    } return result

}
console.log(getTicketsAge(UserInput));

