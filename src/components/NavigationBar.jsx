import '/src/assets/css/NavigationBar.css'

export default function NavigationBar(){

    return (
        <>
            <div className={'nav-container'}>
                <img className={'nav-item'} src={'/src/assets/images/logo.png'}  width={'100px'} height={'100px'} alt={'logo'}/>
                <h1 className={'nav-item'}>yomiroku</h1>
                <div className={'nav-item-hm'}>
                    <img src={'/src/assets/images/menu.png'} width={'100px'} height={'100px'} alt={'hamburger-menu-icon'} />
                </div>
            </div>
        </>
    )
}