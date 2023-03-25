import FetchExample from "./views/examples/Fetch/FetchExample"

function LiveExampleFetch() {
    return (
        <div>
            Fetch example
        </div>
    )
}

function LiveExampleSWR() {
    return (
        <div>
            SWR example
        </div>
    )
}


function App() {
    return (
        <div className="App">
        
            <aside>
                <nav>
                    <a href="" target="_blank">Structuring Services in your project</a>
                    <a href="#axios">Fetch</a>
                    <a href="#axios">SWR</a>
                </nav>
            </aside>

            <main>

                <section id="fetch">
                    <header>
                        <h2>Custom Fetch</h2>
                    </header>
                    
                    <FetchExample />

                    <div>
                        <p>The above example is...</p>
                    </div>
                </section>

                <section id="swr">
                    <header>
                        <h2></h2>
                    </header>
                    <LiveExampleSWR />
                </section>
            </main>

        </div>
    )
}

export default App
