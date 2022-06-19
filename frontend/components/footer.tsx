import Image from 'next/image'
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className='flex flex-col bg-gray-100 p-5'>
            <div className="flex flex-col text-center md:flex-row md:text-left justify-center gap-10 bottom-0 md:h-[30vh] text-primary-darkBlue pt-5">
                <div className='flex items-center justify-center my-5 mx-5'>
                    <Image src='/OSAI tranparent 1.png' alt='Illinois Open-Source Logo' width={200} height={200} />
                </div>
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="flex flex-col">
                        <h1 className='text-lg text-black'>Links</h1>
                        <hr className='mt-1 mb-2' />
                        <ul>
                            <li>
                                <a href="https://discord.gg/sKYtc9QhuP">Discord</a>
                            </li>
                            <li>
                                <a href="https://github.com/open-source-at-illinois">Github</a>
                            </li>
                            <li>
                                <a href="/calendar">Calendar</a>
                            </li>
                            <li>
                                <a href="https://illinois.campuslabs.com/engage/organization/open-source-at-illinois">Campus Labs</a>
                            </li>
                            <li>
                                <a href="https://open-source-at-illinois.github.io/constitution/">Constitution</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1 className='text-lg text-black'>Projects</h1>
                        <hr className='mt-1 mb-2' />
                        <ul>
                            <li>
                                <a href="https://cherry.opensourceatillinois.com/">Cherry</a>
                            </li>
                            <li>
                                <a href="https://github.com/open-source-at-illinois/osai-bot">Sudo</a>
                            </li>
                            <li>
                                <a href="https://github.com/open-source-at-illinois/website-reboot/">Website</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1 className='text-lg text-black'>Contact</h1>
                        <hr className='mt-1 mb-2' />
                        <ul>
                            <li>
                                {/* Obfuscated email to prevent spam harvesting */}
                                <a href="mailto:&#111;&#112;&#101;&#110;&#115;&#111;&#117;&#114;&#099;&#101;&#105;&#108;&#108;&#105;&#110;&#111;&#105;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                                    opensourceillinois (at) gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="mailto:&#111;&#115;&#097;&#105;&#045;&#101;&#120;&#101;&#099;&#064;&#108;&#105;&#115;&#116;&#115;&#046;&#105;&#108;&#108;&#105;&#110;&#111;&#105;&#115;&#046;&#101;&#100;&#117;">
                                    osai-exec (at) lists.illinois.edu
                                </a>
                            </li>
                            <li>
                                or reach out via Discord!
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-sm text-center'>
                Copyright 2022 Open-Source @ Illinois
            </div>
        </footer>
    )
}

export default Footer;