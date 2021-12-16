import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const CreateBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        isbn:'',
        author:'',
        description:'',
        published_date:'',
        publisher:''
    });

    const { title, isbn, author, description, published_date, publisher } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefaul();
    }

    return (
        <div className="CreateBook">
            <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <br />
                <Link to="/" className="btn btn-outline-warning float-left">
                    Show BooK List
                </Link>
                </div>
                <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Add Book</h1>
                <p className="lead text-center">
                    Create new book
                </p>

                <form noValidate onSubmit={onSubmit}>
                    <div className='form-group'>
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
                    <input
                        type='date'
                        placeholder='published_date'
                        name='published_date'
                        className='form-control'
                        value={published_date}
                        onChange={onChange}
                    />
                    </div>
                    <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Publisher of this Book'
                        name='publisher'
                        className='form-control'
                        value={publisher}
                        onChange={onChange}
                    />
                    </div>

                    <input
                        type="submit"
                        className="btn btn-outline-warning btn-block mt-4"
                    />
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default CreateBook;
