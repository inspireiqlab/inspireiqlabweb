import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

// - Home
// - About Us
// - Programs
// - Why InspireIQ
// - Our Vision
// - Contact Us

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/about-us', current: false },
    { name: 'Programs', href: '/programs', current: false },
    // { name: 'Why InspireIQ', href: '/why-inspireiq', current: false },
    { name: 'Our Vision', href: '/our-vision', current: false },
    { name: 'Contact Us', href: '/contact-us', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
    return (
        <Link href={href} passHref>
            <span
                onClick={onClick}
                className="px-3 py-4 text-lg font-normal"
            >
                {children}
            </span>
        </Link>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [currentLink, setCurrentLink] = useState('/');

    const handleLinkClick = (href: string) => {
        setCurrentLink(href);
    };

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <div className="relative flex h-12 md:h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <Image
                                    id="hello"
                                    className="block w-24 lg:hidden"
                                    src={'/assets/logo/logo.png'}
                                    alt="dsign-logo"
                                    width={96}
                                    height={0}
                                />
                                <Image
                                    className="hidden w-24 lg:block"
                                    src={'/assets/logo/logo.png'}
                                    alt="dsign-logo"
                                    width={96}
                                    height={0}
                                />
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:block m-auto">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <CustomLink
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => handleLinkClick(item.href)}
                                        >
                                            <span
                                                className={classNames(
                                                    item.href === currentLink ? 'underline-links' : 'text-slategray',
                                                    'px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100 flex text-center'
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </span>
                                        </CustomLink>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA Button Enroll Now */}
                        <button className="hidden lg:block text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet">
                            Pre-Enroll Now
                        </button>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>


                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
