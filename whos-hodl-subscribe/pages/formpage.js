import style from '../styles/Plan.module.scss'
import Headerpage from '../componance/header.page'
import styles from '../styles/Home.module.css'

export default function Frompage() {
          return (
                    <div>
                              <div className={styles.container}>
                                        <Headerpage />
                              </div>
                                        <div className={style.plans2}>
                                                  <div className={style.planbox}>
                                                            <div className={style.planoptions}>
                                                                      <p className={style.mostpop}><p className={style.mostpoptext}>Registration Form</p></p>
                                                                      <div className={style.formbox}>
                                                                                <form className={style.row} action="/checkdata">
                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="nftAddress" >
                                                                                                                        NFT Address
                                                                                                              </label>
                                                                                                              <div>
                                                                                                                        <input type="text" id="nftAddress" name="nftAddress" placeholder="" required maxlength="45" />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="symbol">
                                                                                                                        Symbol
                                                                                                              </label>
                                                                                                              <div>
                                                                                                                        <input type="text" id="symbol" name="symbol" placeholder="" required maxlength="12" />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="ownerDiscordId" >
                                                                                                                        Owner Discord ID
                                                                                                              </label>
                                                                                                              <div>
                                                                                                                        <input type="number" id="ownerDiscordId" name="ownerDiscordId" placeholder="" required maxlength="45" min={0} />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="website" >
                                                                                                                        Website
                                                                                                              </label>
                                                                                                              <div>
                                                                                                                        <input type="text" id="website" name="website" placeholder="" required />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="discordGuildId" >
                                                                                                                        Discord Guild Id
                                                                                                              </label>
                                                                                                              <div>
                                                                                                                        <input type="number" id="discordGuildId" name="discordGuildId" placeholder="" required maxlength="45" min={0} />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div>
                                                                                                              <div className={style.column}>
                                                                                                                        <label for="facebook" >
                                                                                                                                  Facebook
                                                                                                                        </label>
                                                                                                                        <div>
                                                                                                                                  <input type="text" id="facebook" name="facebook" placeholder="" required />
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    </div>

                                                                                                    <div className={style.column}>
                                                                                                              <label for="projectName" >
                                                                                                                        Project Name
                                                                                                              </label>
                                                                                                              <div>
                                                                                                                        <input type="text" id="projectName" name="projectName" placeholder="" required maxlength="45" />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="twitter">
                                                                                                                        Twitter
                                                                                                              </label>
                                                                                                              <div>
                                                                                                                        <input type="text" id="twitter" name="twitter" placeholder="" />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="totalSupply">
                                                                                                                        Total Supply
                                                                                                              </label>
                                                                                                              <div>
                                                                                                                        <input type="number" min={0} id="totalSupply" name="totalSupply" placeholder="" required maxlength="45" />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="discordInviteLink">
                                                                                                                        Discord Invite Link
                                                                                                              </label>
                                                                                                              <div>
                                                                                                                        <input type="text" id="discordInviteLink" name="discordInviteLink" placeholder="" />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="roleName">
                                                                                                                        Role
                                                                                                              </label>
                                                                                                              <div>
                                                                                                                        <input type="text" id="roleName" name="roleName" placeholder="" required maxlength="45" />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <div className={style.column}>
                                                                                                              <label for="etherscan">
                                                                                                                        Etherscan
                                                                                                              </label>
                                                                                                              <div>
                                                                                                                        <input type="text" id="etherscan" name="etherscan" placeholder="" required maxlength="45" />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>
                                                                                          


                                                                                          <div className={style.planposition}>
                                                                                                    <label for="planId">
                                                                                                              Plan
                                                                                                    </label>
                                                                                                    <div>
                                                                                                              <select className={style.inputtext} id="planId" name="planId">
                                                                                                                        <option value="1">FREE</option>
                                                                                                                        <option value="2">NOOB</option>
                                                                                                                        <option value="3">PRO</option>
                                                                                                              </select>
                                                                                                    </div>
                                                                                          </div>
                                                                                          
                                                                                          <button className={style.button} type="submit" value="Submit" >Submit</button>
                                                                                </form>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>

                              
                    </div>
          )
}