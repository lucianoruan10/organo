import './Rodape.css'

const Rodape = () => {

    return (
        <footer className='rodape'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com'>
                            <img src='/imagens/fb.png' alt='icone facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com'>
                            <img src='/imagens/tw.png' alt='icone twitter'/>
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com'>
                            <img src='/imagens/ig.png' alt='icone instagram'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='logo organo'/>
            </section>
            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
}

export default Rodape