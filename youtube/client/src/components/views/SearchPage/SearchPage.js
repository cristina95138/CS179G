import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';
import ReactTable from "react-table-6";
import styled from 'styled-components'

import "react-table-6/react-table.css"

const { Title } = Typography;
const { Meta } = Card;

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

function SearchPage() {

    const [Videos, setVideos] = useState([])
    const [input, setInput] = useState('');

    let keyword = {};

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    setVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
    }, [])


    const renderCards = Videos.map((video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);


            return <Col lg={6} md={8} xs={24}>
                <div style={{position: 'relative'}}>
                    <a href={`/video/${video._id}`}>
                        <img style={{width: '100%'}} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`}/>
                        <div className=" duration"
                             style={{
                                 bottom: 0, right: 0, position: 'absolute', margin: '4px',
                                 color: '#fff', backgroundColor: 'rgba(17, 17, 17, 0.8)', opacity: 0.8,
                                 padding: '2px 4px', borderRadius: '2px', letterSpacing: '0.5px', fontSize: '12px',
                                 fontWeight: '500', lineHeight: '12px'
                             }}>
                            <span>{minutes} : {seconds}</span>
                        </div>
                    </a>
                </div>
                <br/>
                <Meta
                    avatar={
                        <Avatar src={video.writer.image}/>
                    }
                    title={video.title}
                />
                <span>{video.writer.name} </span><br/>
                <span style={{marginLeft: '3rem'}}> {video.views}</span>
                - <span> {moment(video.createdAt).format("MMM Do YY")} </span><br/>
            </Col>

    })


    const SearchBar = ({keyword}) => {
        const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
        //window.alert(keyword)
        return (
            <input
                style={BarStyling}
                key="random1"
                value={keyword}
                placeholder={"Search Video"}
                onChange={(e) => setKeyword}
            />
        );
    }

    const setKeyword = (e) => {
        window.alert(e)
    }

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2} > Search </Title> <SearchBar input={input} />
            <hr />

            <Row gutter={16}>
                {renderCards}
            </Row>
        </div>
    )
}

export default SearchPage
