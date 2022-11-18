import { Header } from "../../component/header"
import { Bodys } from "../../component/bodys"
import { Footer } from "../../component/footer"

export function Registatuinsubsubsciptionplan() {

          return <>

                    <Header />
                    <Bodys />
                    <div class="background">

                              <div class="containerregister">
                                        <div class="panel2">
                                                  <form action="/checkdata">

                                                            <label for="nftAddress">NFT Address </label>
                                                            <input class="inputtext" type="text" id="nftAddress" name="nftAddress" placeholder="Your nft Address" required maxlength="45" />

                                                            <label for="ownerDiscordId">Owner Discord Id </label>
                                                            <input class="inputtext" type="number" min={0} id="ownerDiscordId" name="ownerDiscordId" placeholder="Your Owner Discord Id" required maxlength="45" />

                                                            <label for="discordGuildId">Discord Guild Id </label>
                                                            <input class="inputtext" type="number" min={0} id="discordGuildId" name="discordGuildId" placeholder="Your Discord Guild Id" required maxlength="45" />

                                                            <label for="ownerWalletAddress">Owner Wallet Address </label>
                                                            <input class="inputtext" type="text" id="ownerWalletAddress" name="ownerWalletAddress" placeholder="Your Owner Wallet Address" required maxlength="45" />

                                                            <label for="projectName">Project Name </label>
                                                            <input class="inputtext" type="text" id="projectName" name="projectName" placeholder="Your projectName" required maxlength="45" />

                                                            <label for="totalSupply">Total Supply </label>
                                                            <input class="inputtext" type="number" min={0} id="totalSupply" name="totalSupply" placeholder="Your totalSupply" required maxlength="45" />

                                                            <label for="symbol">symbol </label>
                                                            <input class="inputtext" type="text" id="symbol" name="symbol" placeholder="Your symbol." required maxlength="7" />

                                                            <label for="website">website </label>
                                                            <input class="inputtext" type="text" id="website" name="website" placeholder="Your website" />

                                                            <label for="facebook">facebook </label>
                                                            <input class="inputtext" type="text" id="facebook" name="facebook" placeholder="Your facebook" />

                                                            <label for="twitter">twitter </label>
                                                            <input class="inputtext" type="text" id="twitter" name="twitter" placeholder="Your twitter" />

                                                            <label for="discordInviteLink">discordInviteLink </label>
                                                            <input class="inputtext" type="text" id="discordInviteLink" name="discordInviteLink" placeholder="Your discordInviteLink" required maxlength="45" />

                                                            <label for="etherscan">etherscan </label>
                                                            <input class="inputtext" type="text" id="etherscan" name="etherscan" placeholder="Your etherscan" />

                                                            <label for="planId">planId</label>
                                                            <select class="inputtext" id="planId" name="planId">
                                                                      
                                                                      <option value="1">Noob</option>
                                                            </select>

                                                            <label for="roleName">roleName</label>
                                                            <input class="inputtext" type="text" id="roleName" name="roleName" placeholder="Your roleName" required maxlength="45" />




                                                            <button className="submit-button" type="submit" value="Submit">
                                                                      Submit
                                                            </button>



                                                  </form>

                                        </div>
                              </div>
                    </div>
                    <Footer />

          </>

}