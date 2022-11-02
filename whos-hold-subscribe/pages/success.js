import styles from '../styles/Getbot.module.css'

export default function Success() {
          return <>
                    <aside className={styles.profilecard}>
                              <header className={styles.header}>

                                        <a target="_blank" href="#" className={styles.a}>
                                                  <img src="https://img.icons8.com/color/452/discord-logo.png" className="hoverZoomLink" />
                                        </a>


                                        <h1 className={styles.h1}>
                                                  NOOB
                                        </h1>


                                        <h2 className={styles.h2}>
                                                  Noob plan
                                        </h2>

                              </header>


                              <div className={styles.profilebio}>

                                        <p>
                                                  Have fun and enjoy with us.
                                        </p>
                                        <p>
                                                  Click on the picture to invite bot.
                                        </p>

                              </div>

                    </aside>
          </>
}