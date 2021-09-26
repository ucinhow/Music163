import "./style.less"

import { useSelector,useDispatch } from "react-redux"

import { setToplistCurIdAction } from "@/redux/actions/toplist"
export default function ToplistNav () {
    const dispatch = useDispatch()
    const {toplistList,id} = useSelector(state => ({
        toplistList: state.toplist.get("toplistList"),
        id: state.toplist.get("id")
    }))
    function navClickHandler (id) {
        return () => dispatch(setToplistCurIdAction(id))
    }
    return <div className="toplist-nav">
        <section className="toplist-group-cloudmusic toplist-group">
            <header>
                <h2>云音乐特色榜</h2>
            </header>
            <ul>
                {toplistList.slice(0,4).map(item => (
                    <li key={item.id}>
                        <button className={id===item.id ? "toplist-active" : ""} onClick={navClickHandler(item.id)}>
                            <img src={item.coverImgUrl+"?param=40y40"} alt="" />
                            <div className="toplist-title">
                                <h3>{item.name}</h3>
                                <div>{item.updateFrequency}</div>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
        <section className="toplist-group-global toplist-group">
            <header>
                <h2>全球媒体榜</h2>
            </header>
            <ul>
                {toplistList.slice(4).map(item => (
                    <li key={item.id}>
                        <button className={id===item.id ? "toplist-active" : ""} onClick={navClickHandler(item.id)}>
                            <img src={item.coverImgUrl+"?param=40y40"} alt="" />
                            <div className="toplist-title">
                                <h3>{item.name}</h3>
                                <div>{item.updateFrequency}</div>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    </div>
}
