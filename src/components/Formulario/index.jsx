import styles from './Formulario.module.css'

const Formulario = ({getNome, getIdade, getEmail, getAltura, getPeso, getGenero, setBotao, hide, submitForm}) => {

    const eventSubmit = (e) => {
        e.preventDefault()
        
        setBotao(true)
    }
    
    return (
        <main className='container'>
            {!hide && (
                <>
                    <section className={styles.containerForm}>
                        <h2 className={styles.titulo}>Bem-vindo ao cuidado e acompanhamento do seu bem-estar físico.</h2>
                        <form onSubmit={eventSubmit} className={styles.form}>
                            <div className={styles.primeirasInfos}>
                                <label className={styles.label}>Nome:</label>
                                <input required className={styles.primeirasInfosNome} type="text" placeholder="Nome Sobrenome" onBlur={getNome} />
                                
                                <label className={styles.label}>Idade:</label>
                                <input required className={styles.primeirasInfosIdade} type="number" onBlur={getIdade} />
                            </div>

                            <div>
                                <label className={styles.label}>Email:</label>
                                <input className={styles.segundasInfosEmail} type="email" placeholder="exemplo@gmail.com (opcional)" onBlur={getEmail} />
                            </div>

                            <div className={styles.terceirasInfos}>
                                <label className={styles.label}>Altura:</label>
                                <input required className={styles.terceirasInfosAltura} type="number" step = '0.01' onBlur={getAltura} />

                                <label className={styles.label}>Peso:</label>
                                <input required className={styles.terceirasInfosPeso} type="number" onBlur={getPeso} />

                                <label className={styles.label}>Genêro:</label>
                                <input required className={styles.terceirasInfosGenero} type="text" placeholder="Homem ou Mulher" onBlur={getGenero} />
                            </div>

                            <div className={styles.containerButton}>
                                <button type="submit">Cadastra</button>
                            </div>
                        </form>
                    </section>
                </>
            )}
        </main>
    )

}

export default Formulario;