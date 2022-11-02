import axios from 'axios'


export const Testpostapi = () => {



      axios
        .post(`http://localhost:3001/v1/holder/verify`,
        {
          "walletAddress": "0x337e2ca767823B7522F633a6955f6b239c68BF05",
          "discordId": "615901281873166350",
          "discordGuildId": "964899859113078845"
          })
          .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
        


    

   
  
};