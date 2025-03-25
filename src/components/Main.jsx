export default function Main() {

    return (
        <main>
            <div className="container mt-5">
                <ul className="nav nav-pills">
                    <li className="nav-item ">
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


                <div className="tab-content card mt-5">
                    <div className="tab-pane container active card-body" id="html">
                        <h3>HTML</h3>
                        HTML è il linguaggio di markup usato per creare la struttura delle pagine web, definendo elementi come testi, immagini e collegamenti.
                    </div>

                    <div className="tab-pane container fade card-body" id="css">
                        <h3>CSS</h3>

                        CSS è il linguaggio utilizzato per stilizzare le pagine web, controllando colori, layout, font e animazioni per migliorare l aspetto visivo.
                    </div>

                    <div className="tab-pane container fade card-body" id="javascript">
                        <h3>JavaScript</h3>

                        JavaScript è un linguaggio di programmazione che permette di rendere le pagine web interattive, gestendo eventi, animazioni e comunicazioni con il server.
                    </div>

                    <div className="tab-pane container fade card-body" id="node.js">
                        <h3>Node.js</h3>

                        Node.js è un ambiente di runtime JavaScript che permette di eseguire codice lato server, utilizzato per costruire applicazioni web veloci e scalabili.
                    </div>

                    <div className="tab-pane container fade card-body" id="express.js">
                        <h3>Express</h3>

                        Express.js è un framework per Node.js che semplifica la creazione di API e server web, fornendo strumenti per gestire richieste HTTP, middleware e routing.
                    </div>

                    <div className="tab-pane container fade card-body" id="react.js">
                        <h3>ReactJS</h3>

                        React.js è una libreria JavaScript sviluppata da Meta (Facebook) per costruire interfacce utente dinamiche e componenti riutilizzabili in applicazioni web moderne.
                    </div>
                </div>
            </div>


        </main>
    )
}