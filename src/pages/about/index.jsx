import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header';
import Input from '@/components/inputAbout';
import Button from '@/components/button/button';
import { useRouter } from 'next/router';

const About = () => {

  const router = useRouter()

  const [name, setName] = useState('');

  const redirectPage = () => {
    router.push(`/about/${name.toLowerCase()}`)
  }

  const setValue = (value) => {
    setName(value);
  }

  return (
    <>
    <Header />
    <div className={styles.card}>
      <h1>Estou no About</h1>
      <Input setValue={ setValue } name={ name }/>
      <Button redirectPage={ redirectPage } />
    </div>
    </>
  )
}

export default About;