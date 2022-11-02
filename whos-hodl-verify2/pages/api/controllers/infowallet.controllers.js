const {
          walletAddress,
          balance,
} = require = ('../services/holder.service')




/**
 *

 * @param {string} walletAddress
 * @param {string} balance

 * @returns
 */

const newHolder = catchAsync(async (req, res) => {
          const { walletAddress, balance } =
                    req.body;
          const result = await createNewHolder(

                    walletAddress,
                    balance,
                    
          ).catch((e) =>
                    res.status(403).json({
                              result: "OK",
                              message: e.message,
                    })
          );
          res.status(201).json({
                    result: "OK",
                    data: result,
          });
});
const updateBalance = catchAsync(async (req, res) => {
          const { discordId, nftAddress } = req.params;
          const { balance } = req.body;
          await updateHolderBalance(discordId, nftAddress, balance).catch((e) =>
            res.status(403).json({ result: "Error", message: e.message })
          );
          res.status(200).json({
            result: "OK",
          });
        });

module.exports = {
          newHolder,
          updateBalance,
};
