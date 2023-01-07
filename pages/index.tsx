import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { sendRequest } from '../components/shop.js'

export default function Home() {
  return (
    <div>
      <div className="center">
          <form onSubmit={  sendRequest }>
            <p>Tester</p>
            {/* <input type="submit" value="Tester" /> */}
            <button type="submit">Tester</button>
          </form>
      </div>
    </div>
  )
}
