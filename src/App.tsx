import React, {useEffect} from 'react';
import './styles/App.css';
import {AnimatePresence} from "framer-motion";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage/HomePage";
import EventPage from "./pages/EventPage/EventPage";
import ExcursionPage from "./pages/ExcursionPage/ExcursionPage";
import ExhibitionPage from "./pages/ExhibitionPage/ExhibitionPage";
import ExpositionPage from "./pages/ExpositionPage/ExpositionPage";
import NewPage from "./pages/NewPage/NewPage";
import StorePage from "./pages/StorePage/StorePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function AnimationRouter() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const location = useLocation();
    return <AnimatePresence mode={'wait'}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'/event/:id'} element={<EventPage />} />
                <Route path={'/excursion/:id'} element={<ExcursionPage/>}/>
                <Route path={'/exhibition/:id'} element={<ExhibitionPage/>}/>
                <Route path={'/exposition/:id'} element={<ExpositionPage/>}/>
                <Route path={'/news/:id'} element={<NewPage/>}/>
                <Route path={'/store/:id'} element={<StorePage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </AnimatePresence>
}

function App() {
    return <BrowserRouter>
                <AnimationRouter/>
            </BrowserRouter>
}

export default App;
