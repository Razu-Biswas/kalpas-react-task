
import React, { useState, useEffect} from 'react';
import News from '../News/News';

const Home  = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const url = "https://api.first.org/data/v1/news";
        fetch(url)
        .then(res => res.json())
        // .then(data => setNews(data.news));
        .then(data => setNews(data.data));
        // .then(data => console.log(data.data));
    }, [])

    return (
        <div className="row">
            <div className="col-md-4">

            </div>
            <div className="col-md-8">
            {
                    news.map( news => <div
                     class="shadow-lg p-5 mb-5 bg-body rounded">
                         <h5>{news.title} </h5>
                     <br/>
                      <p>{news.summary}</p>
                     <br/>
                     <span>{news.published}</span>
                    </div>)
            }

            </div>
        </div>
    );
};

export default Home ;