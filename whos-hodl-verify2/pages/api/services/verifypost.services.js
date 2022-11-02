import axios from 'axios'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import { Discordid, Guildid } from './hookid.services';

export const  Verifypostservices = () => {
          const router = useRouter()
          const { discordId, guildId } = router.query
          const { address } = useAccount();
          axios.post(`http://localhost:3001/v1/holder/verify`,
        {
          "walletAddress": guildId,
          "discordId": discordId,
          "discordGuildId": address
          })
          .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
          return(<div>
                     <p>Discord Id: <Discordid/> </p>
                     <p>Guild Id: <Guildid/></p>
                     <p>Address: {address}</p>
                     </div>) 

    
  
};