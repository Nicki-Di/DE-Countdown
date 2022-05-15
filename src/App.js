import {Index} from './components/Counter';
import rocketSvg from './assets/rocket.svg';
import './App.css';

const App = () => {
    return (
        <main dir = {"rtl"}>
            <div className = "container">
                <h1>آماده بهره‌برداری در </h1>

                <Index/>

                <p>مرکز نوآوری و کسب‌وکارهای دیجیتال دنیای اقتصاد</p>

            </div>

            <img src = {rocketSvg} alt = "" width = {500}/>
        </main>
    );
};

export default App;
