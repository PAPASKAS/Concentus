import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Wrapper from '@/components/Wrapper';
import MatchesNotFound from '@/pages/MatchesNotFound';
import Home from '@/pages/home'


function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Wrapper />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<MatchesNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
