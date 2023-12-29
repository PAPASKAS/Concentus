import React from 'react';
import Container from '@/components/Container';
import Poster from '@/components/Poster';
import image from '@/images/slider__main-image.jpg';
import css from '@/styles/home.module.scss';
import HeadingSection from "@/components/HeadingSection";


const posters = [
    { datetime: new Date('2023-06-03 19:30'), image: image, altImage: "«ВЕК имени СИНАТРЫ»", title:  "«ВЕК имени СИНАТРЫ»", description: "Посвящение Фрэнку Синатре.", typeMusic: "Джаз", passingAge: 6 },
    { datetime: new Date('2023-06-03 19:30'), image: image, altImage: "«ВЕК имени СИНАТРЫ»", title:  "«ВЕК имени СИНАТРЫ»", description: "Посвящение Фрэнку Синатре.", typeMusic: "Джаз", passingAge: 6 },
    { datetime: new Date('2023-06-03 19:30'), image: image, altImage: "«ВЕК имени СИНАТРЫ»", title:  "«ВЕК имени СИНАТРЫ»", description: "Посвящение Фрэнку Синатре.", typeMusic: "Джаз", passingAge: 6 },
    { datetime: new Date('2023-06-03 19:30'), image: image, altImage: "«ВЕК имени СИНАТРЫ»", title:  "«ВЕК имени СИНАТРЫ»", description: "Посвящение Фрэнку Синатре.", typeMusic: "Джаз", passingAge: 6 },
]
function PosterSection() {
    return (
        <Container>
            <HeadingSection title="Афиша" href="/" />
            <div className={ css.poster_section__wrapper}>
                { posters.map((poster) =>
                     <Poster
                         key={ poster.title }
                         datetime={ poster.datetime }
                         image={ poster.image }
                         altImage={ poster.altImage }
                         title={ poster.title }
                         description={ poster.description }
                         typeMusic={ poster.description }
                         passingAge={ poster.passingAge }
                    />
                )}
            </div>

        </Container>
    );
}

export default PosterSection;