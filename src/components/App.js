import React from "react";
import Footer from "./Footer";
import Header from "./Header";
function App(){
    return(
        <div>
            <Header/>
            <nav>
                <div>
                    <h1>Hello it's third times</h1>

                    <ul>
                        <li>Things 1</li>
                        <li>Things 1</li>
                        <li>Things 1</li>
                    </ul>
                </div>
            </nav>
            <main>
                <p>This is where most of content will go...</p>
            </main>
            <Footer/>
        </div>

    )
}
export default App