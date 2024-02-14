import './Tabs.css'
import { useState } from 'react'


const Tabs = ()=> {

    const [activeTab, setActivetab] = useState(0)
    const handleClickTab = (tabIndex) => {
        setActivetab(tabIndex)
    }

    return (
        <section>
            {/* botonera */}
            <div>
                <button onClick={()=> handleClickTab(0)}>Tab1</button>
                <button onClick={()=> handleClickTab(1)}>Tab2</button>
                <button onClick={()=> handleClickTab(2)}>Tab3</button>

            </div>
            {/* content */}
            <div>
                {activeTab===0 && <div>Contenido de pestaña 1</div>}
                {activeTab===1 && <div>Contenido de pestaña 2</div>}
                {activeTab===2 && <div>Contenido de pestaña 3</div>}

            </div>
        </section>
    )

}

export default Tabs