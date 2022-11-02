import { useRouter } from 'next/router'
// export const Hookiddiscordandguilid = () => {

//   const router = useRouter()
//   const { discordId, guildId } = router.query

//   return <>
//   <p>Discord Id: {discordId } </p>
//   <p>Guild Id: {guildId}</p>
//   </>
  
  


// }

export const Discordid = () => {
          const router = useRouter()
          const { discordId } = router.query
        return discordId
        };

export const Guildid = () => {
          const router = useRouter()
          const { guildId } = router.query
          return guildId
        
        };

