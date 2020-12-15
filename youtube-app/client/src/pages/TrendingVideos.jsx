import React, { Component } from 'react'
import ReactTable from "react-table-6";
import api from '../api'

import styled from 'styled-components'

import "react-table-6/react-table.css"

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

class UpdateMovie extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/movies/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteMovie extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the movie ${this.props.id} permanently?`,
            )
        ) {
            api.deleteMovieById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class Recommendations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { movies, isLoading } = this.state
        console.log('TCL: MoviesList -> render -> movies', movies)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Title',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Description',
                accessor: 'description',
                filterable: true,
            },
            {
                Header: 'Keywords',
                accessor: 'keywords',
                filterable: true,
            },
            {
                Header: 'Channel',
                accessor: 'channel',
                filterable: true,
            },
            {
                Header: 'Channel ID',
                accessor: 'channelid',
                filterable: true,
            },
            {
                Header: 'Likes',
                accessor: 'likes',
                filterable: true,
            },
            {
                Header: 'Dislikes',
                accessor: 'dislikes',
                filterable: true,
            },
            {
                Header: 'Views',
                accessor: 'views',
                filterable: true,
            },
            {
                Header: 'Share Link',
                accessor: 'sharelink',
                filterable: true,
            },
            {
                Header: 'Shares',
                accessor: 'shares',
                filterable: true,
            },
            {
                Header: 'Video Link',
                accessor: 'videolink',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                filterable: true,
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]

        let showTable = true
        if (!movies.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={movies}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default Recommendations