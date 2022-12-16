import axios from "axios";
import { bot } from "./api";
const verifyHolder = async (discordId, guildId, address) => {
  try {
    const response = await axios.post(`${bot}/holder/verify`, {
      walletAddress: address,
      discordId: discordId,
      discordGuildId: guildId,
    });
    return {
      result: true,
      data: response.data.data,
    };
  } catch (e) {
    const walletaddress = JSON.stringify(address);
    const discordid = JSON.stringify(discordId);
    return {
      result: false,
      walletaddress,
      discordId,
    };
  }
};

export { verifyHolder };
