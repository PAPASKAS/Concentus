import React from 'react';
import Container from "@/components/Container";
import css from '@/styles/home.module.scss';
import ThumbSlider from "@/components/ThumbSlider";
import image from '@/images/Rectangle 39.jpg';
import image1 from '@/images/slider__main-image.jpg';


const ThumbSliders = [
    {
        image: image1,
        altImage: "Опера VS Оперетта",
        title: "Опера VS Оперетта"
    },
    {
        image,
        altImage: "Антонио Вивальди. Времена года",
        title: "Антонио Вивальди. Времена года"
    }
]
function StartSection() {
    const [ mainImage, setMainImage ] = React.useState<string>(ThumbSliders[0].image);

    return (
        <Container>
            <section className={ css.start_section }>
                <div className={ css.start_section__main_img }>
                    <img src={ mainImage } alt="Main for start page" />
                </div>
                <div className={ css.start_section__scroll_block }>
                    { ThumbSliders.map((slider) => {
                        return (
                            <ThumbSlider
                                onClick={ () => setMainImage(slider.image) }
                                key={ slider.title }
                                image={ slider.image }
                                altImage={ slider.altImage }
                                title={ slider.title }
                            />
                        )
                    })}
                </div>
            </section>
        </Container>
    );
}

export default StartSection;