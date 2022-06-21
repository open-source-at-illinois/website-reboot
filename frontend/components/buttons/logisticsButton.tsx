import Link from "next/link";
import { Icon } from '@iconify/react';

const LogisticsButton = () => {
    return (
        <Link href='/logistics'>
            <a className="bg-primary-lightBlue text-white hover:bg-primary-darkBlue duration-300 rounded-md p-2 m-1">
                <div className="flex flex-row items-center">
                Learn how we do things 
                <Icon icon="akar-icons:link-out" color="white" className="ml-2"/>
                </div>
            </a>
        </Link>
    )
}

export default LogisticsButton;