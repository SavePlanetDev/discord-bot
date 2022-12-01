import style from '../styles/Plan.module.scss'


export default function Plan() {
          return (
                    <div>
                              

                              <div className={style.textcontanner}>
                                        <p className={style.p1}>Take your community to the top level</p>
                                        {/* <hr className={styles.line1}/> */}
                                        <p className={style.p11}>Verify Holder</p>
                                        {/* <hr className={styles.line2}/> */}
                                        <p className={style.p2}>Unlock the full potential of your server by getting unrestricted access to <br />
                                                  all WHOsHOLD's feautures and plugins.</p>
                                                  
                              </div>
                              <div className={style.plans}>
                                        <div className={style.planbox}>
                                                  <div className={style.planoptions}>
                                                            <p className={style.planpriceplan}>
                                                                      <strong>FREE PLAN</strong>
                                                            </p>
                                                            <div className={style.planholders}>
                                                                      100
                                                            </div>
                                                            <div className={style.planholders2}>
                                                                      holders
                                                            </div>
                                                            <hr className={style.hr}/>
                                                            <div className={style.boxplan}>
                                                            No Tracking<br/>
                                                            1 roles<br/>
                                                            Ticket Support
                                                            </div>
                                                            <ul className={style.plandetails}>
                                                                     
                                                            </ul>


                                                            <a className={style.button} href="/formpage">Subscribe</a>
                                                  </div>
                                        </div>

                                        <div className={style.planbox2}>
                                                  <div className={style.planoptions}>
                                                            <p className={style.mostpop}><p className={style.mostpoptext}>MOST POPULAR</p></p>
                                                            <p className={style.planpriceplannoob}>
                                                                      NOOB
                                                            </p>

                                                            <div className={style.planholders}>
                                                                      500
                                                            </div>
                                                            <div className={style.planholders2}>
                                                                      holders
                                                            </div>
                                                            <hr className={style.hr}/>
                                                            <div className={style.boxplan}>
                                                            Tracking (on Transfer)<br/>
                                                            1 roles<br/>
                                                            Ticket Support<br/>
                                                            Dashboard (Project Info)
                                                            </div>
                                                            <ul className={style.plandetails}>
                                                            </ul>

                                                            

                                                            <a className={style.button22} href="/formpage"><p className={style.textbuttom22}>Subscribe</p></a>
                                                  </div>
                                        </div>

                                        <div className={style.planbox}>
                                                  <div className={style.planoptions}>
                                                            <p className={style.planpriceplan}>
                                                                      PRO
                                                            </p>
                                                            <div className={style.planholders}>
                                                                      2000
                                                            </div>
                                                            <div className={style.planholders2}>
                                                                      holders
                                                            </div>
                                                            <hr className={style.hr}/>
                                                            <div className={style.boxplan}>
                                                            Tracking (on Transfer)<br/>
                                                            balance based 3 roles<br/>
                                                            Ticket Support<br/>
                                                            Dashboard (Project Info)
                                                            </div>
                                                            <ul className={style.plandetails}>
                                                            
                                                            </ul>


                                                            <a className={style.button} href="/formpage">Subscribe</a>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}