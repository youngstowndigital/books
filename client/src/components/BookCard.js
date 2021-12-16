import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book: { title, author, description, _id } }) => {
    return (
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${_id}`}>
                        { title }
                    </Link>
                </h2>
                <h3>{author}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BookCard;
