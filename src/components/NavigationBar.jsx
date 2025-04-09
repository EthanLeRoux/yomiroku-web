import '/src/assets/css/NavigationBar.css'

export default function NavigationBar(){

    return (
        <>
            <div className={'nav-container'}>
                <img className={'nav-item'}  alt={'logo'}/>
                <h1 className={'nav-item'}>logo</h1>
                <div className={'nav-item'}>
                    <img src={'/src/assets/images/hamburger.png'} alt={'hamburger-menu-icon'} />
                </div>
            </div>
        </>
    )
}