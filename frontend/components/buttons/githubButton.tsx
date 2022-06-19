import { Icon } from "@iconify/react";

const GithubButton = () => {
    return (
        <button className="flex flex-row text-primary-darkOrange border-2 border-primary-darkOrange hover:border-primary-lightOrange duration-300 rounded-lg items-center gap-4 p-2">
            <Icon icon="akar-icons:discord-fill" className='text-xl' color="orange" />
            <div className='mr-2'>
                Explore our Github
            </div>
        </button>
    )
}

export default GithubButton;