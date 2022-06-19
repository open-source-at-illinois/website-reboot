import { Icon } from "@iconify/react";

const DiscordButton = () => {
    return (
        <button className="flex flex-row text-white bg-primary-lightBlue hover:bg-primary-darkBlue duration-300 rounded-lg items-center gap-4 p-2">
            <Icon icon="akar-icons:discord-fill" color="white" className='text-xl' />
            <div className='mr-2'>
                Join the Discord
            </div>
        </button>
    )
}

export default DiscordButton;