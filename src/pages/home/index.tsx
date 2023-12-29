import React from 'react';
import StartSection from "@/pages/home/sections/StartSection";
import PosterSection from "@/pages/home/sections/PosterSection";
import AnnouncementSection from "@/pages/home/sections/AnnouncementSection";


function Index() {
    return (
        <div>
            <StartSection />
            <PosterSection />
            <AnnouncementSection />
        </div>
    );
}

export default Index;