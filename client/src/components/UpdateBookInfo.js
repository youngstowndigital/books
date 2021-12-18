import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UpdateBookInfo = ({ match: { params } }) => {
    const [formData, setFormData] = useState({
        title: '',
        isbn: '',
        author: '',
        description: '',
        published_at: '',
        publisher: ''
    });

    const { title, isbn, author, description, published_at, publisher } = formData;

    useEffect(() => {
        axios.get(`http://localhost:8082/api/books/${params.id}`)
            .then(res => setFormData({...res.data}))
            .catch(err => console.error('Failed to pull book'))
    }, []);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="UpdateBookInfo">
            <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <br />
                <Link to="/" className="btn btn-outline-warning float-left">
                    Show BooK List
                </Link>
                </div>
                <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Edit Book</h1>
                <p className="lead text-center">
                    Update Book's Info
                </p>
                </div>
            </div>

            <div className="col-md-8 m-auto">
            <form noValidate onSubmit={onSubmit}>
                <div className='form-group'>
                <label htmlFor="title">Title</label>
                <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={title}
                    onChange={onChange}
                />
                </div>
                <br />

                <div className='form-group'>
                <label htmlFor="isbn">ISBN</label>
                <input
                    type='text'
                    placeholder='ISBN'
                    name='isbn'
                    className='form-control'
                    value={isbn}
                    onChange={onChange}
                />
                </div>

                <div className='form-group'>
                <label htmlFor="author">Author</label>
                <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={author}
                    onChange={onChange}
                />
                </div>

                <div className='form-group'>
                <label htmlFor="description">Description</label>
                <input
                    type='text'
                    placeholder='Describe this book'
                    name='description'
                    className='form-control'
                    value={description}
                    onChange={onChange}
                />
                </div>

                <div className='form-group'>
                <label htmlFor="published_at">Published Date</label>
                <input
                    type='date'
                    placeholder='published_at'
                    name='published_at'
                    className='form-control'
                    value={published_at}
                    onChange={onChange}
                />
                </div>
                <div className='form-group'>
                <label htmlFor="publisher">Publisher</label>
                <input
                    type='text'
                    placeholder='Publisher of this Book'
                    name='publisher'
                    className='form-control'
                    value={publisher}
                    onChange={onChange}
                />
                </div>

                <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
                </form>
            </div>

            </div>
        </div>
    )
}

export default UpdateBookInfo;
