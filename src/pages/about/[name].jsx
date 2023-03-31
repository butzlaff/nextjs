import About from ".";
import styles from '@/styles/Home.module.css'

// [getStaticProps, getServerSideProps, getStaticPaths]

export const getStaticPaths = async () => {
  return {
    paths : [
      {
      params: {
        name: 'emilio',
      }
      }, {
        params: {
        name: 'butzlaff',
      },
      }, {
      params: {
        name: 'xablau',
      },
      }, {
      params: {
        name: 'constantine',
      }, }
    ],
    fallback: false,
  }
}


export const getStaticProps = async (context) => {
  const name = context.params.name.toLowerCase();
  return {
    props : {
      name: name,
    }
  }
}

const Name = ( { name }) => {
  return (
    <div className={styles.description}>
      <p>{ name } </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quibusdam architecto voluptatum vel velit harum ipsam quisquam quis rerum consectetur fuga nobis quod consequatur excepturi hic veniam quo, obcaecati alias? </p>
    </div>
  )
}

export default Name;