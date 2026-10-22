import { Photos } from "../../Photos.js"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import classes from "./P1_sec6.module.scss"
const items = [
    {
        id: 1,
        image: Photos.s2,
        title: "“A massive scientific breakthrough.”"
    },
    {
        id: 2,
        image: Photos.s3,
        title: "“A pioneer in health and wellness.”"
    },
    {
        id: 3,
        image: Photos.s4,
        title: "“Miracle pills. The days of taking a cocktail of hit and miss vitamins are over.”"
    },
    {
        id: 4,
        image: Photos.s5,
        title: "“Your one stop solution to feeling energised and focused.”"
    }, {
        id: 5,
        image: Photos.s6,
        title: "“A revelation. Not just about looking better and feeling better. LYMA is about real health benefits.”"
    },
    {
        id: 6,
        image: Photos.s7,
        title: "“Experts are queuing up to praise LYMA.”"
    },
    {
        id: 7,
        image: Photos.s8,
        title: "“The A-list secret health hack.”"
    },
    {
        id: 8,
        image: Photos.s9,
        title: "“The celebrity super supplement.”"
    },
    {
        id: 9,
        image: Photos.s1,
        title: "“The new standard in supplements.”"
    }
];

export default function P1_sec6() {
    return (
        <>
            <section className={classes.P1_sec6}>
                <Swiper
                    slidesPerView={4.5}
                    centeredSlides={true}
                    spaceBetween={40}
                    freeMode={true}
                    initialSlide={4}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {items.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className={classes.card}>
                                <p className={classes.text}>{item.title}</p>
                                <div className={classes.imgWrapper}>
                                    <img src={item.image} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}