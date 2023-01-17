import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import CreateAccount from './createAccount';
import Login from './login';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>index</h1>
    </div>
  )
}
