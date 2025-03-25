export default function Main() {

    return (
        <main>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="pill" href="#html">HTML</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#css">CSS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#javascript">JavaScript</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#node.js">Node.js</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#express.js">Express</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#react.js">ReaxtJS</a>
                </li>
            </ul>


            <div className="tab-content">
                <div className="tab-pane container active" id="html">
                    HTML è il linguaggio di markup usato per creare la struttura delle pagine web, definendo elementi come testi, immagini e collegamenti.
                </div>

                <div className="tab-pane container fade" id="css">
                    CSS è il linguaggio utilizzato per stilizzare le pagine web, controllando colori, layout, font e animazioni per migliorare l aspetto visivo.
                </div>

                <div className="tab-pane container fade" id="javascript">
                    JavaScript è un linguaggio di programmazione che permette di rendere le pagine web interattive, gestendo eventi, animazioni e comunicazioni con il server.
                </div>

                <div className="tab-pane container fade" id="node.js">
                    Node.js è un ambiente di runtime JavaScript che permette di eseguire codice lato server, utilizzato per costruire applicazioni web veloci e scalabili.
                </div>

                <div className="tab-pane container fade" id="express.js">
                    Express.js è un framework per Node.js che semplifica la creazione di API e server web, fornendo strumenti per gestire richieste HTTP, middleware e routing.
                </div>

                <div className="tab-pane container fade" id="react.js">
                    React.js è una libreria JavaScript sviluppata da Meta (Facebook) per costruire interfacce utente dinamiche e componenti riutilizzabili in applicazioni web moderne.
                </div>
            </div>

        </main>
    )
}