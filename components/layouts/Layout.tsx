import Head from "next/head"
import { ReactNode,FC  } from "react"
import { NavBar } from "../ui/NavBar";

type Props = {
  title?: string;
  children?: ReactNode;
};


export const Layout: FC<Props> = ({ children, title = 'Pokemon app'  }) => {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="author" content="Yorest" />
      <meta name="description" content="Informacion sobre pokemon" />
      <meta name="keywords" content="pokemon, pokedex" />
    </Head>
    
      <NavBar/>

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>

    </>
  )
}
