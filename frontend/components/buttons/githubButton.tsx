import { Icon } from "@iconify/react";

const GithubButton = () => {
    return (
        <a className="flex flex-row text-primary-darkOrange border-2 border-primary-darkOrange hover:border-primary-lightOrange hover:text-primary-lightOrange duration-300 rounded-lg items-center gap-4 p-2"
            href="https://github.com/open-source-at-illinois">
            <Icon icon="akar-icons:github-fill" className='text-xl' color="orange" />
            <div className='mr-2'>
                Explore our Github
            </div>
        </a>
    )
}

export default GithubButton;