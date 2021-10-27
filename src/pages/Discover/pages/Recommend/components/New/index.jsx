import {Carousel} from "antd"
import "./style.less"

import { Fragment } from "react";
import { useSelector,useDispatch } from "react-redux";

import {setPlaylistAction} from "@/redux/actions/playbar"
import { getAlbumAction } from "@/redux/actions/album";
export default function RcmdNew () {
    const dispatch = useDispatch()
    const {newAlbums,albums} = useSelector(state => ({
        newAlbums: state.album.get("newList"),
        albums: state.album.get("albums")
    }))
    function playHandler(id) {
        return async () => {
            await dispatch(getAlbumAction(id))
            dispatch(setPlaylistAction(albums.get(id).tracks))
        }
    }
    return <section className="discover-rcmd-new">
        <header className="rcmd-new-hd rcmd-main-hd">
            <h2 className="sprite_02 main-hd-title">
                <a href="javascript:;">新碟上架</a>
            </h2>
            <a href="javascript:;" className="main-hd-more sprite_02">更多</a>
        </header>
        <Carousel className="rcmd-new-content" arrows dots={false}>
            <ul className="new-list1">
                {
                    newAlbums.slice(0,5).map(item => (
                        <li key={item.id}>
                            <a href="javascript:;" className="new-cover sprite_cover">
                                <img src={item.picUrl+"?param=100y100"} alt="" />
                                <button className="new-play sprite_icon" onClick={playHandler(item.id)}></button>
                            </a>
                            <a href="javascript:;" className="new-name">{item.name}</a>
                            <p>
                                <a href="javascript:;">{item.artist.name}</a>
                                {
                                    item.artists.length > 1 && item.artists.slice(1).map(artist => (
                                        <Fragment key={artist.id}>
                                            &nbsp;/&nbsp;
                                            <a href="javascript:;">{artist.name}</a>
                                        </Fragment>))
                                }
                            </p>
                            
                        </li>
                    ))
                }
            </ul>
            <ul className="new-list2">
                {
                    newAlbums.slice(5,10).map(item => (
                        <li key={item.id}>
                            <a href="javascript:;" className="new-cover sprite_cover">
                                <img src={item.picUrl+"?param=100y100"} alt="" />
                                <button className="new-play sprite_icon" onClick={playHandler(item.id)}></button>
                            </a>
                            <a href="javascript:;" className="new-name">{item.name}</a>
                            <p>
                                <a href="javascript:;">{item.artist.name}</a>
                                {
                                    item.artists.length > 1 && item.artists.slice(1).map(artist => (
                                        <Fragment key={artist.id}>
                                            &nbsp;/&nbsp;
                                            <a href="javascript:;">{artist.name}</a>
                                        </Fragment>))
                                }
                            </p>
                            
                        </li>
                    ))
                }
            </ul>
        </Carousel>
    </section>
}