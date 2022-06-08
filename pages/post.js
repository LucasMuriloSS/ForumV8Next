
import Image from 'next/image'
import Nav from "../components/navbar"
import styles from '../styles/post.module.css'

const Post = () => {

    return (
        <>
            <Nav />
            <main className="container">
                <div className="d-flex align-items-center p-3 my-3 text-white bg-warning rounded shadow-sm">
                    <div className="lh-1">
                        <h1 className="h6 mb-0 text-black lh-1">Elétrica</h1>
                    </div>
                </div>
                <div className="article">
                    <h1>Erro ao carregar a bateria</h1>
                </div>
                <article className={styles.article}>
                    <aside className={styles.pessoa} >
                        <div className={styles.perfil}>
                            <p className={styles.teste}>Lucas Murilo</p>
                            <div className={styles.Imagem}>
                                <Image src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                    layout="responsive" width={200} height={200}
                                    className={styles.foto_perfil}
                                    alt="avatar"></Image>
                            </div>
                            <div className={styles.figurecaption} >Elétrica</div>
                        </div>
                    </aside>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, hic veniam. Voluptate a labore, eaque ipsam consequatur quos qui doloremque commodi esse provident quod maxime facilis dignissimos! Omnis, placeat beatae.</p>
                    </div>
                </article>

                <div className="d-flex align-items-center p-3 my-3 text-white bg-Light rounded shadow-sm">
                    <div className="lh-1">

                        <h1 className="h6 mb-0 text-black lh-1">Comentários</h1>

                    </div>
                </div>

                <article className={styles.article}>
                    <aside className={styles.pessoa} >
                        <div className={styles.perfil}>
                            <p className={styles.teste}>Igor</p>
                            <div className={styles.Imagem}>
                                <Image src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                    layout="responsive" width={200} height={200}
                                    className={styles.foto_perfil}
                                    alt="avatar"></Image>
                            </div>
                            <div className={styles.figurecaption} >Elétrica</div>
                        </div>
                    </aside>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, hic veniam. Voluptate a labore, eaque ipsam consequatur quos qui doloremque commodi esse provident quod maxime facilis dignissimos! Omnis, placeat beatae.</p>
                    </div>
                </article>
                <div className="d-flex align-items-center p-3 my-3 text-white bg-Light rounded shadow-sm">
                    <div className="lh-1">
                        <h1 className="h6 mb-0 text-black lh-1"></h1>
                    </div>
                </div>
                <article className={styles.article}>
                    <aside className={styles.pessoa} >
                        <div className={styles.perfil}>
                            <p className={styles.teste}>Mauro</p>
                            <div className={styles.Imagem}>
                                <Image src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                    layout="responsive" width={200} height={200}
                                    className={styles.foto_perfil}
                                    alt="avatar"></Image>
                            </div>
                            <div className={styles.figurecaption} >Elétrica</div>
                        </div>
                    </aside>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, hic veniam. Voluptate a labore, eaque ipsam consequatur quos qui doloremque commodi esse provident quod maxime facilis dignissimos! Omnis, placeat beatae.</p>
                    </div>
                </article>
            </main>
        </>
    )

}

export default Post