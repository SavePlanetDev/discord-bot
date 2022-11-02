import { Header } from "../component/header"
import { Bodys } from "../component/bodys"
import { Footer } from "../component/footer"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
          return (
                    
                              <div className={styles.container}>
                                        <Header />
                                        <main className={styles.main}>
                                                  <Bodys />
                                                  <div class="background">
                                                            <div class="container">
                                                                      <div class="panel pricing-table">
          
                                                                                <div class="pricing-plan">
                                                                                          <img src='https://img.icons8.com/color/452/discord-logo.png' alt="" class="pricing-img" />
                                                                                          <h2 class="pricing-header">NOOB</h2>
                                                                                          <ul class="pricing-features">
                                                                                                    <ul class="pricing-features-item">Verify</ul>
                                                                                                    <ul class="pricing-features-item">100 user</ul>
                                                                                                    <ul class="pricing-features-item">Auto Single-Role</ul>
                                                                                          </ul>
                                                                                          <span class="pricing-price">Free</span>
                                                                                          <Link href="/register" class="pricing-button">Free trial</Link>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
          
                                        </main>
          
                                        <Footer />
                              </div>
          )
          
}
