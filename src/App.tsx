import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Showcase from "./Showcase.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import CoconoirFashion from "./components/cases/CoconoirFashion.tsx";
import QuickStart from "../src/components/QuickStart.tsx";
import Project from "./components/contact/Project.tsx";
import Quote from "./components/contact/Quote.tsx";
import Question from "./components/contact/Question.tsx";
import Partners from "./components/contact/Partners.tsx";

import TermsAndConditions from "./components/legal/TermsAndConditions.tsx";
import PrivacyPolicy from "./components/legal/PrivacyPolicy.tsx";
import CookiePolicy from "./components/legal/CookiePolicy.tsx";

import Bready2Go from "./components/cases/Bready2Go.tsx";
import FadeBarbershop from "./components/cases/FadeBarbershop.tsx";
import Doua from "./components/cases/Doua.tsx";
import WorstelclubHasselt from "./components/cases/WorstelclubHasselt.tsx";
import TechnologyInnovationAgecny from "./components/cases/TechnologyInnovationAgency.tsx";
import Ethereum from "./components/cases/Ethereum.tsx";
import NodeJs from "./components/cases/NodeJs.tsx";
import EssoMoonen from "./components/cases/EssoMoonen.tsx";
import HouseOfHairByMaria from "./components/cases/HouseOfHairByMaria.tsx";
import SoCleaned from "./components/cases/SoCleaned.tsx";
import PxlHealthcare from "./components/cases/PxlHealthcare.tsx";
import Seo from "./components/Seo.tsx";
import Login from "./components/Login.tsx";


function App() {
    return (
        <Router>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Project />} />

                <Route path="/cases" element={<Showcase />} />

                <Route path="/quickstart" element={<QuickStart />} />

                <Route path="/portal" element={<Login />} />

                <Route path="/cases/fadebarbershop" element={<FadeBarbershop />} />
                <Route path="/cases/coconoirfashion" element={<CoconoirFashion />} />
                <Route path="/cases/doua" element={<Doua />} />
                <Route path="/cases/bready2go" element={<Bready2Go />} />
                <Route path="/cases/worstelclubhasselt" element={<WorstelclubHasselt />} />
                <Route path="/cases/tia" element={<TechnologyInnovationAgecny />} />
                <Route path="/cases/ethereum" element={<Ethereum />} />
                <Route path="/cases/nodejs" element={<NodeJs />} />
                <Route path="/cases/moonen" element={<EssoMoonen />} />
                <Route path="/cases/houseofhair" element={<HouseOfHairByMaria />} />
                <Route path="/cases/socleaned" element={<SoCleaned />} />
                <Route path="/cases/pxlhealthcare" element={<PxlHealthcare />} />

                <Route path="/contact/project" element={<Project />} />
                <Route path="/contact/quote" element={<Quote />} />
                <Route path="/contact/question" element={<Question />} />
                {/*<Route path="/contact/jobs" element={<Jobs />} />*/}
                <Route path="/contact/partners" element={<Partners />} />
                {/*<Route path="/contact/faq" element={<Faq />} />*/}

                <Route path="/algemenevoorwaarden" element={<TermsAndConditions />} />
                <Route path="/privacybeleid" element={<PrivacyPolicy />} />
                <Route path="/cookiebeleid" element={<CookiePolicy />} />

                <Route path="/seo" element={<Seo />} />

                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
