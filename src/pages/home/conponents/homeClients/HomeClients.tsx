import {Client, ClientsBlock, ClientsContainer, ClientsTitle, ClientsWrapper} from "./Clients-style.ts";
import Party from '../../assets/clients/partyN.png'
import Optic from '../../assets/clients/opticsN.png'
import Noomb from '../../assets/clients/noombN.png'
import Viksan from '../../assets/clients/viskantN.png'
import Nuahule from '../../assets/clients/nuahuleN1.png'
import Sodox from '../../assets/clients/sodoxN.png'


const clients = [
    {id: '1', img: Party, desc: 'partyN'},
    {id: '2', img: Optic, desc: 'opticsN'},
    {id: '3', img: Noomb, desc: 'noombN'},
    {id: '4', img: Viksan, desc: 'viskantN'},
    {id: '5', img: Nuahule, desc: 'nuahuleN'},
    {id: '6', img: Sodox, desc: 'sodoxN'},
]

export const HomeClients = () => {
    return (
        <ClientsWrapper>
            <ClientsContainer>
                <ClientsTitle>Наши клиенты</ClientsTitle>
                <ClientsBlock>
                    {clients.map((el) => (
                        <Client key={el.id}>
                            <img src={el.img} alt={el.desc}/>
                        </Client>
                    ))}
                </ClientsBlock>
            </ClientsContainer>
        </ClientsWrapper>
    );
};

