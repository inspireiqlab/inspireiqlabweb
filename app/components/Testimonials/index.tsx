"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Anindita Roy",
        profession: 'Student',
        comment: 'C language always felt like my weak area since I only had a very basic understanding. After joining this course, I’ve improved a lot! Teacher explains everything clearly, from basics to advanced, and the practice assignments after every class make it easier to learn. Now I actually enjoy learning C and feel much more confident.',
        imgSrc: '/assets/testimonial/anindita.jpg',
    },
    {
        name: "Shreya Sardar",
        profession: 'Student',
        comment: 'The C programming course was very helpful for learning the basics of coding. The teacher was really nice and explained every topic clearly, which made it easier to understand things like loops, arrays, and functions. Sir also gave us some small projects and basic games to make learning more interesting. Some parts, like pointers, were a bit tricky at first, but the teacher’s way of teaching made them easier to follow. Overall, this course gave me good knowledge and confidence to learn more programming languages.',
        imgSrc: '/assets/mentor/user-f.png',
    },
    {
        name: "Cody Fisher",
        profession: 'Parents',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/assets/mentor/user.png',
    },
    {
        name: "Robert Fox",
        profession: 'Head master',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/assets/mentor/user.png',
    }
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
                <h3 className="mx-40 text-midnightblue text-4xl lg:text-55xl font-semibold mb-5">
                    Testimonials
                </h3>
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className={`bg-white m-4 p-5 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                                    <div className="absolute w-20 h-20 rounded-full overflow-clip ring-4 top-[-45px]">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={80} height={80} className="inline-block w-full object-contain" />
                                    </div>
                                    <h4 className='text-base font-normal text-darkgray my-8'>{items.comment}</h4>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
