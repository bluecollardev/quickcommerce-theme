import React, { Component } from 'react'

export default class SinglePost01 extends Component {
  render() {
    return (

      {/* Content should always be inside "article.single-post" */}
      <article className="single-post">
        <h2>Post Article Title</h2>
        <img src="img/blog/02.jpg" className="space-bottom" alt="Post" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione laboriosam, officiis nisi aspernatur reprehenderit eligendi velit molestias qui, maxime eveniet voluptate sapiente enim consequatur! Explicabo vero illo, rerum dolor in.</p>
        <blockquote>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
          <cite>James Cameron</cite>
        </blockquote>
        <p>Alias, quis, et? Dolorum, recusandae repudiandae saepe nisi aperiam eaque porro earum voluptatibus debitis excepturi at, neque, perferendis. Neque, velit eos alias?</p>
        <p>Quos quo quasi quae, officia harum aspernatur saepe neque eos, nobis maxime suscipit iure beatae voluptatibus illo placeat id tempore temporibus. Fugiat quos quis dignissimos hic cumque provident repellendus! Assumenda, itaque amet dolor autem quisquam illo voluptatem sed vitae tenetur repellat nulla temporibus!</p>
        <hr />
        <div className="blog-post-meta">
          <div className="column">
            <span>by </span>
            <a href="#">Rokaux</a>
            <span className="divider" />
            <a href="#">Jul 24</a>
            <span className="divider" />
            <span>in </span>
            <a href="#">Category name</a>
            <span className="divider" />
            <a href="#">#tagname</a>
          </div>
          <div className="column">
            <a href="#">
              <i className="material-icons favorite_border" />
              13
            </a>
          </div>
        </div>{/* .blog-post-meta */}
      </article>{/* .single-post */}
    )
  }
}