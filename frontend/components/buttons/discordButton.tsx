import { Icon } from "@iconify/react";

const DiscordButton = () => {
    return (
        <a className="flex flex-row text-white bg-primary-lightBlue hover:bg-primary-darkBlue duration-300 rounded-lg items-center gap-4 p-2"
            href="https://discord.gg/sKYtc9QhuP">
            <Icon icon="akar-icons:discord-fill" color="white" className='text-xl' />
            <div className='mr-2'>
                Join the Discord
            </div>
        </a>
    )
}

export default DiscordButton;