import styles from './EventWidget.module.scss';
import React from 'react';
import {useRecoilValue} from "recoil";
import {events} from "../../../store/events/events";
import EventCard from "../EventCard/EventCard";
import {excursions} from "../../../store/excursions/excursions";
import {Link} from "react-router-dom";
import {exhibitions} from "../../../store/exhibitions/exhibitions";
import {expositions} from "../../../store/expositions/expositions";

const EventWidget = () => {
    const [sectionActive, setSectionActive] = React.useState<number>(0);
    const sections: { link: string; title: string; }[] = [
        {link: '/expositions', title: 'Выставки'},
        {link: '/excursions', title: 'Экскурсии'},
        {link: '/exhibitions', title: 'Экспозиции'},
        {link: '/events', title: 'Все события'},
    ];

    const expositionsData = useRecoilValue(expositions);
    const excursionsData = useRecoilValue(excursions);
    const eventsData = useRecoilValue(events);
    const exhibitionsData = useRecoilValue(exhibitions);


    let jsx = expositionsData.map((item, i) => <EventCard id={item.id}
                                                       link={`/exposition/${item.link}`}
                                                       date={item.date}
                                                       title={item.title}
                                                       image={item.image}
                                                       page={item.page}
                                                       position={item.position}
                                                       type={item.type}
                                                       key={i}/>)

    React.useEffect(() => {
        switch (sectionActive) {
            case 0:
                jsx = expositionsData.map((item, i) => <EventCard id={item.id}
                                                             link={`/exposition/${item.link}`}
                                                             date={item.date}
                                                             title={item.title}
                                                             image={item.image}
                                                             page={item.page}
                                                             position={item.position}
                                                             type={item.type}
                                                             key={i}/>)
                break;
            case 1:
                jsx = excursionsData.map((item, i) => <EventCard id={item.id}
                                                             link={`/exposition/${item.link}`}
                                                             date={item.date}
                                                             title={item.title}
                                                             image={item.image}
                                                             page={item.page}
                                                             position={item.position}
                                                             type={item.type}
                                                             key={i}/>)
                break;
            case 2:
                jsx = eventsData.map((item, i) => <EventCard id={item.id}
                                                             link={`/exposition/${item.link}`}
                                                             date={item.date}
                                                             title={item.title}
                                                             image={item.image}
                                                             page={item.page}
                                                             position={item.position}
                                                             type={item.type}
                                                             key={i}/>)
                break;
            case 3:
                jsx = eventsData.map((item, i) => <EventCard id={item.id}
                                                             link={`/exposition/${item.link}`}
                                                             date={item.date}
                                                             title={item.title}
                                                             image={item.image}
                                                             page={item.page}
                                                             position={item.position}
                                                             type={item.type}
                                                             key={i}/>)
                break;
            default:
                jsx = eventsData.map((item, i) => <EventCard id={item.id}
                                                             link={`/event/${item.link}`}
                                                             date={item.date}
                                                             title={item.title}
                                                             image={item.image}
                                                             page={item.page}
                                                             position={item.position}
                                                             type={item.type}
                                                             key={i}/>)
                break;
        }
    }, [sectionActive]);

    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <div className={styles.sectionGroups}>{sections.map((section, i) => <h1
                className={styles.sectionTitle}
                style={{color: sectionActive === i ? 'black' : ''}}
                onClick={() => setSectionActive(i)}
                key={i}>{section.title}</h1>)}</div>
            <Link to={sections[sectionActive].link}>{`Все ${sections[sectionActive].title}`}</Link>
        </div>
        <div className={styles.body}>
            {

            }
        </div>
    </div>
};

export default EventWidget;