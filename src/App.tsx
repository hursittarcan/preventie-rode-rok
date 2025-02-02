import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Project from "./components/contact/Project.tsx";

import CookiePolicy from "./components/legal/CookiePolicy.tsx";
import TermsAndConditions from "./components/legal/TermsAndConditions.tsx";
import PrivacyPolicy from "./components/legal/PrivacyPolicy.tsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Project />} />

                <Route path="/contact/project" element={<Project />} />

                <Route path="/algemenevoorwaarden" element={<TermsAndConditions />} />
                <Route path="/privacybeleid" element={<PrivacyPolicy />} />
                <Route path="/cookiebeleid" element={<CookiePolicy />} />

                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
