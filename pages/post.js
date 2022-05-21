
import Nav from "./navbar"
import styles from '../styles/post.module.css'
import Image from 'next/image'

function Post(){

    return (

    <div >

        <Nav></Nav>

        <main className="container ">
            
            <div className="d-flex align-items-center p-3 my-3 text-white bg-warning rounded shadow-sm">
            
            
            <div className="lh-1">
                <h1 className="h6 mb-0 text-black lh-1 ">Elétrica</h1>
                
            </div>
            </div>

            <div className="article">
                <h1>Erro ao carregar a bateria</h1>
            </div>

            <article className = {styles.article}> {/* className="article shadow-sm" */}
                <aside className = {styles.pessoa} > {/* className="pessoa" */}
                    
        
                    <figure className = {styles.figure}>
                    <p>Lucas Murilo</p>
                    
                        <Image src="https://bootdey.com/img/Content/avatar/avatar7.png" width = "200" height= "200" className = {styles.foto_perfil}  alt="avatar"></Image> {/* className ="foto_perfil" */}
                        <figcaption className = {styles.figurecaption} >Elétrica</figcaption>
                        <div>
                    
                        <span >25/05/2020</span>
                    </div>
                        
                    </figure>
        
                    
                    
                </aside>
        
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, hic veniam. Voluptate a labore, eaque ipsam consequatur quos qui doloremque commodi esse provident quod maxime facilis dignissimos! Omnis, placeat beatae.</p>
                </div>
            </article>
            
	    </main>
        
    </div>
    )

}

export default Post