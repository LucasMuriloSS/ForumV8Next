
import Nav from "./navbar"
import styles from '../styles/post.module.css'

function Post(){

    return (

    <div >

        <Nav></Nav>

        <main class="container ">
            
            <div class="d-flex align-items-center p-3 my-3 text-white bg-warning rounded shadow-sm">
            
            
            <div class="lh-1">
                <h1 class="h6 mb-0 text-black lh-1 ">Elétrica</h1>
                
            </div>
            </div>

            <div class="article">
                <h1>Erro ao carregar a bateria</h1>
            </div>

            <article className = {styles.article} class="article shadow-sm" >
                <aside className = {styles.pessoa} class="pessoa">
                    <p>Lucas Murilo</p>
        
                    <figure className = {styles.figure}>
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className = {styles.foto_perfil} class ="foto_perfil" alt="avatar"></img>
                        <figcaption className = {styles.figurecaption} >Elétrica</figcaption>
                    </figure>
        
                    <div>
                    
                        <span>25/05/2020</span>
                    </div>
                    
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