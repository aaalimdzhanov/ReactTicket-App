export default class TicketService{
    _apiBase = 'http://localhost:8082/ticket';
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}` , `receved ${res.status}`)
        }
        return await res.json();
    }

    async getAllTicket(){
        const res = await this.getResource(`/all`);
        return res.result;
    }
    getTicketById(id){
        return this.getResource(`/getTicketById/${id}`)
    }
    getNumberOfTicketsByUserIdAndType(id,type){
        return this.getResource(`/getNumberOfIncByUserId?id=${id}&type=${type}`);
    }
    getAllBooks(){
        return 'Hello';
    }
}

// const ticketService = new TicketService();
// ticketService.getAllTicket().then((ticket)=>{
//     ticket.forEach((t)=>{
//         console.log(t.id);
//     })
// });