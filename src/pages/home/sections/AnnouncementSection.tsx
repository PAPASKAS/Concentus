import React from 'react';
import Container from "@/components/Container";
import HeadingSection from "@/components/HeadingSection";
import AnnouncementItem from "@/components/AnnouncementItem";
import css from '@/styles/home.module.scss';


const announcements = [
    { datetime: new Date('2023-06-03 19:30'), children: '«ВЕК имени СИНАТРЫ0»' },
    { datetime: new Date('2023-06-03 19:30'), children: '«ВЕК имени СИНАТРЫ1»' },
    { datetime: new Date('2023-06-03 19:30'), children: '«ВЕК имени СИНАТРЫ2»' },
    { datetime: new Date('2023-06-03 19:30'), children: '«ВЕК имени СИНАТРЫ3»' },
    { datetime: new Date('2023-06-03 19:30'), children: '«ВЕК имени СИНАТРЫ4»' },
]
function AnnouncementSection() {
    return (
        <section className={ css.announcement_section }>
            <Container>
                <HeadingSection title="Краткие анонсы" href="/" />
                <div className={ css.announcement_section__items }>
                    { announcements.map((el) =>
                        <AnnouncementItem
                            key={el.children }
                            datetime={ el.datetime }>
                            { el.children }
                        </AnnouncementItem>
                    ) }
                </div>
            </Container>
        </section>
    );
}

export default AnnouncementSection;