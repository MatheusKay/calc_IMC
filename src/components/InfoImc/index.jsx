import styles from './InfoImc.module.css';
import imgCorpoM from './imagens/corpo_humano_m.png'
import imgCorpoF from './imagens/corpo_humano_f.png'
import imgCerto from './imagens/certo.png'

const InfoIMC = ({setNome, setIdade, setGenero, setAltura, setPeso, setImc, setEmail, hide, setBotao}) => {

    const clickVoltar = () => {
        setBotao(false)
    }

    return (

        <section className="container">
            {hide && (
                <div className={styles.containerTabela}>
                    <div className={styles.containerInfoImg}>
                        <div className={styles.infosPessoais}>
                            <p>Nome: <span>{setNome}</span></p> 
                            <p>Idade: <span>{setIdade} anos</span></p> 
                            <p>Genêro: <span>{setGenero}</span></p> 
                            <p>Altura: <span>{setAltura}m</span></p> 
                            <p>Peso: <span>{setPeso}kg</span></p> 
                            <p>IMC: <span>{setImc}%</span></p>
                            {setEmail == '' ? (
                                <p>Email: Não informado</p>
                            ) : (
                                <p>Email: <span>{setEmail}</span></p> 
                            )}
                        </div>
                        <div className={styles.imgCorpo}>
                            {setGenero === 'Homem' || setGenero === 'homem' || setGenero === 'Menino' || setGenero === 'menino' ? (
                                <img className={styles.imgCorpoH} src={imgCorpoM} alt="Corpo Humano Masculino" />
                            ) : (
                                <img className={styles.imgCorpoH} src={imgCorpoF} alt="Corpo Humano Feminino" />
                            )}
                        </div>
                    </div>
                    <div className={styles.containerTabelas}>
                        <table className={styles.tabelaImc}>
                            <thead>
                                <tr>
                                    <th className={styles.tabelaItemImc}>
                                        IMC
                                    </th>
                                    <th className={styles.tabelaItemEstImc}>
                                        Estado do IMC
                                    </th>
                                    <th className={styles.tabelaItemDescImc}>
                                        Descrição do IMC
                                    </th>
                                    <th className={styles.tabelaItemSeuEst}>
                                        Seu Estado
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Menos de 18,5
                                    </td>
                                    <td>
                                        Abaixo do peso
                                    </td>
                                    <td className={styles.linhaRef}>
                                        Peso abaixo do ideal, indicando possível falta de nutrientes essenciais para a saúde.
                                    </td>
                                    <td>
                                        {setImc < 18.5 && (
                                            <img className={styles.imgCerto} src={imgCerto} alt="Imagem de Certo" />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        18,5 a 24,9
                                    </td>
                                    <td>
                                        Peso saudável
                                    </td>
                                    <td className={styles.linhaRef}>
                                        Faixa de peso considerada saudável para a maioria das pessoas, associada a menor risco de problemas de saúde.
                                    </td>
                                    <td>
                                        {setImc > 18.5 && setImc < 24.9 ? (
                                            <img className={styles.imgCerto} src={imgCerto} alt="Imagem de Certo" />
                                        ) : (
                                            <img src="" alt="" />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        25,0 a 29,9
                                    </td>
                                    <td>
                                        Sobrepeso
                                    </td>
                                    <td className={styles.linhaRef}>
                                        Excesso de peso em relação à altura, aumentando o risco de doenças relacionadas ao peso.
                                    </td>
                                    <td>
                                        {setImc > 25.0 && setImc < 29.9 ? (
                                            <img className={styles.imgCerto} src={imgCerto} alt="Imagem de Certo" />
                                        ) : (
                                            <img src="" alt="" />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        30,0 a 34,9
                                    </td>
                                    <td>
                                        Obesidade Grau I
                                    </td>
                                    <td className={styles.linhaRef}>
                                        Obesidade leve, aumentando substancialmente o risco de doenças crônicas, como diabetes e hipertensão.
                                    </td>
                                    <td>
                                        {setImc > 30.0 && setImc < 34.9 ? (
                                            <img className={styles.imgCerto} src={imgCerto} alt="Imagem de Certo" />
                                        ) : (
                                            <img src="" alt="" />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        35,0 a 39,9
                                    </td>
                                    <td>
                                        Obesidade Grau II (severa)
                                    </td>
                                    <td className={styles.linhaRef}>
                                        Obesidade significativa, com maior risco de complicações de saúde e impacto na qualidade de vida.
                                    </td>
                                    <td>
                                        {setImc > 30.0 && setImc < 39.9 ? (
                                            <img className={styles.imgCerto} src={imgCerto} alt="Imagem de Certo" />
                                        ) : (
                                            <img src="" alt="" />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Mais de 40
                                    </td>
                                    <td>
                                        Obesidade Grau III (mórbida)
                                    </td>
                                    <td className={styles.linhaRef}>
                                        Obesidade extrema, com risco muito elevado de sérios problemas de saúde e necessidade de intervenção médica urgente.
                                    </td>
                                    <td>
                                        {setImc > 40 && (
                                            <img className={styles.imgCerto} src={imgCerto} alt="Imagem de Certo" />
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.containerButton}>
                        <button onClick={clickVoltar} type="button">Voltar</button>
                    </div>
                </div>
            )}
            
        </section>

    )

}

export default InfoIMC;