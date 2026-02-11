import { Routes, Route } from 'react-router-dom';
import MedievalMissionsDashboard from "./routes/Login.tsx";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MedievalMissionsDashboard />} />
            {/*
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            */}
        </Routes>
    );
}

export default AppRouter;